const express = require("express");
const cors = require("cors");

const { PORT, MONGO_URI } = require("./utils/config");
const mongoose = require("mongoose");

const propertyRoutes = require("./routes/propertyRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("test connection");
});
app.use(propertyRoutes);

mongoose.set("strictPopulate", false);

mongoose.connect(MONGO_URI).then(() => console.log("Database connected... 🔗"));

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
