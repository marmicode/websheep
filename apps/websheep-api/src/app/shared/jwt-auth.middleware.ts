import * as jwt from 'jsonwebtoken';
import { Passport } from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { callbackify } from 'util';
import { farmersService } from '../shared/farmer/farmers.service';

const passport = new Passport();

passport.use(
  new BearerStrategy(
    callbackify(async token => {
      try {
        const { sub } = jwt.verify(token, process.env.JWT_SECRET);

        return farmersService.getFarmer({ farmerId: sub });
      } catch (e) {
        if (e.name !== 'JsonWebTokenError') {
          throw e;
        }

        return false;
      }
    })
  )
);

export const jwtAuthMiddleware = passport.authenticate('bearer', {
  session: false
});
