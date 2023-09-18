const express = require("express");
const router = express.Router();
const qnaController = require("../controllers/qnaController");

router.get("/get_qna", qnaController.getQNA);

module.exports = router;
