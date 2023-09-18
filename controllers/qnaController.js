const QNA = require("../models/qnas");

exports.getQNA = async (req, res) => {
  try {
    const index = parseInt(req.query.index, 10); // get index from query
    
    if (typeof index !== "number" || index < 0) {
      return res.status(400).json({ message: "Invalid index provided." });
    }

    // find index % 5 of qna data because there are only 5 data
    const adjustedIndex = index % 5;

    const qnaData = await QNA.findOne().skip(adjustedIndex).limit(1);

    if (!qnaData) {
      return res.status(404).json({ message: "Data not found." });
    }

    return res.status(200).json(qnaData);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error.", error: error.message });
  }
};
