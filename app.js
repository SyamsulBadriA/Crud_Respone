const express = require("express");
let jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const PORT = 4000;

const photoController = require("./controller/photoController");
const UserController = require("./controller/user");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/login", UserController.userLogin);
app.post("/user", UserController.createUser);

app.get("/photos", photoController.getAllPhotos);
app.get("/photos/:id", photoController.getIdPhotos);
app.post("/photos", photoController.createPhotos);
app.put("/photos/:id", photoController.updatePhotos);
app.delete("/photos/:id", photoController.deletePhotoId);
app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
