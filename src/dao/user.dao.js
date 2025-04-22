// src/dao/user.dao.js
import User from "../models/user.js";
import MongoDao from "./MongoDao.js";

class UserDao extends MongoDao {
    constructor(model) {
        super(model);
    }
}

export const userDao = new UserDao(User);