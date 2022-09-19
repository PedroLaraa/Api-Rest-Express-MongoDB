import mongoose from "mongoose";

mongoose.connect("mongodb+srv://pedroLara:JGhWB8lA31XxwE14@alurabackendcourse.bgu9rcq.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;
