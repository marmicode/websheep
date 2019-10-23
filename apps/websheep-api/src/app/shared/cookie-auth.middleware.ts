import { Passport } from 'passport';
import { Strategy as CookieStrategy } from 'passport-cookie';
import { farmersService } from './farmer/farmers.service';

const passport = new Passport();

passport.use(
  new CookieStrategy(function(token, done) {
    const farmer = farmersService.getByToken({ token });

    farmer ? done(null, farmer) : done(null, false);
  })
);

export const cookieAuthMiddleware = passport.authenticate('cookie', {
  session: false
});
