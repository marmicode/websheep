import * as jwt from 'jsonwebtoken';
import { Passport } from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { callbackify } from 'util';
import { farmersService } from '../shared/farmer/farmers.service';

const passport = new Passport();

passport.use(
  new BearerStrategy(
    callbackify(async token => {
      const userId = jwt.decode(token).sub;
      return farmersService.getFarmer({ farmerId: userId });
    })
  )
);

export const jwtAuthMiddleware = passport.authenticate('bearer', {
  session: false
});
