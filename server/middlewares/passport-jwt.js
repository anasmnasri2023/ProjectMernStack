const usersModel = require("../models/users");
var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.PRIVATE_KEY;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, async function (jwt_payload, done) {
      try {
        const user = await usersModel.findOne({ _id: jwt_payload.id });

        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    })
  );
};
