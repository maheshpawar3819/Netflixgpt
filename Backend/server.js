require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute=require("./routes/auth-route")

//handling cors
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,PATCH,DELETE,HEAD",
  credentials: true,
};

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/auth",authRoute);

const port=process.env.PORT || 5000
app.listen(port,() => {
    console.log(`Server is listning on port ${port}`);
})
