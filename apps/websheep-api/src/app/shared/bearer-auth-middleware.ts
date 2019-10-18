import { Passport } from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { farmers } from '../../lib/farmers';

const passport = new Passport();

passport.use(
  new BearerStrategy((token, done) => {
    const farmer = farmers.getByToken({ token });

    farmer ? done(null, farmer) : done(null, false);
  })
);

export const bearerAuthMiddleware = passport.authenticate('bearer', {
  session: false
});
