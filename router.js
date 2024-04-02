const express= require("express");
const { createApi, showApi } = require("../Controllers/controller");

const router = express.Router();

router.post("/create",createApi)
router.get("/show",showApi)

module.exports= router;