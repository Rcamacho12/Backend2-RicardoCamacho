// src/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name:  { type: String, required: true },
    email:      { type: String, required: true, unique: true },
    age:        { type: Number, required: true },
    password:   { type: String, required: true }, // guardamos hash
    cart:       { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
    role:       { type: String, default: "user" }
});

export default mongoose.model("User", userSchema);
