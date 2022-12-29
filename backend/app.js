const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const logger = require("morgan");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

//*middleware
app.use(express.json());
app.use(cors());
// app.use('/', (req, res, next) => {
//   res.send("Welcome to hell!");
// })

app.use(logger("combined"));
app.use("/books", router);

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://ecvii:ecvii@cluster0.ojtgg5c.mongodb.net/bookstore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
