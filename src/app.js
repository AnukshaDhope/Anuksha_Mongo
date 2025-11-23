const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/cdac2025")
  .then(() => console.log("Connected!"));

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  name: String,
  email: String,
  password: Number,
});
const MyModel = mongoose.model("users", BlogPost);

const express = require("express");
const app = express();

app.use(express.urlencoded());
app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/users", async (req, res) => {
  //res.render("users.ejs");
  try {
    const result = await MyModel.find();
    res.render("users.ejs", {
      data: result,
    });
  } catch (err) {
    res.send("Error" + err);
  }
});

app.post("/registeraction", async (req, res) => {
  try {
    let record = new MyModel(req.body);
    await record.save();
    res.redirect("/users");
  } catch (err) {
    res.send("Error" + err);
  }
});

app.listen(3000);
