// src/utils/bcrypt.js
import bcrypt from "bcrypt";

export const hashPassword = (pwd) => bcrypt.hashSync(pwd, 10);
export const comparePassword = (plain, hash) => bcrypt.compareSync(plain, hash);


