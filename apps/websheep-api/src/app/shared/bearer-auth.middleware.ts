import { Passport } from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { callbackify } from 'util';
import { farmersService } from './farmer/farmers.service';

const passport = new Passport();

passport.use(
  new BearerStrategy(
    callbackify(async token => farmersService.getByToken({ token }))
  )
);

export const bearerAuthMiddleware = passport.authenticate('bearer', {
  session: false
});
