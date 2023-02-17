
const express = require('express')
const router = express.Router()
const MovieController = require("../controller/movie");


router.get("/", MovieController.readAllMovies);

router.get("/:id", MovieController.readMovie);

router.post("/watch", MovieController.watchMovie);

router.get("/recent/:id", MovieController.recentMovies);


module.exports = router