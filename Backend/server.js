require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

//handling cors
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,PATCH,DELETE,HEAD",
  credentials: true,
};

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port=process.env.PORT || 5000
app.listen(port,() => {
    console.log(`Server is listning on port ${port}`);
})
