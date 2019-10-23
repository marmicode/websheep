import { Passport } from 'passport';
import { Strategy as CookieStrategy } from 'passport-cookie';
import { callbackify } from 'util';
import { farmersService } from './farmer/farmers.service';

const passport = new Passport();

passport.use(
  new CookieStrategy(
    callbackify(async token => farmersService.getByToken({ token }))
  )
);

export const cookieAuthMiddleware = passport.authenticate('cookie', {
  session: false
});
