import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { userDao } from "./dao/user.dao.js";
import dotenv from "dotenv";
dotenv.config();

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:    process.env.JWT_SECRET,
};

passport.use(
    "jwt",
    new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
        const user = await userDao.getById(jwt_payload._id);
        if (!user) return done(null, false);
        return done(null, user);
        } catch (err) {
        return done(err, false);
        }
    })
);

export default passport;
