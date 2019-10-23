import * as jwt from 'jsonwebtoken';
import { Passport } from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { callbackify } from 'util';
import { farmersService } from '../shared/farmer/farmers.service';

const passport = new Passport();

passport.use(
  new BearerStrategy(
    callbackify(async token => {
      const claims = jwt.decode(token, process.env.JWT_SECRET);
      if (claims == null) {
        return null;
      }
      return farmersService.getFarmer({ farmerId: claims.sub });
    })
  )
);

export const jwtAuthMiddleware = passport.authenticate('bearer', {
  session: false
});
