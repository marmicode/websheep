import { Passport } from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { farmersService } from './farmer/farmers.service';

const passport = new Passport();

passport.use(
  new BearerStrategy((token, done) => {
    const farmer = farmersService.getByToken({ token });

    farmer ? done(null, farmer) : done(null, false);
  })
);

export const bearerAuthMiddleware = passport.authenticate('bearer', {
  session: false
});
