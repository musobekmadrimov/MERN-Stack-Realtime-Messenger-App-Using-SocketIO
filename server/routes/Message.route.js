const {
  addMessage, getAllMessage, 
} = require("../controllers/MessagesController");

const router = require("express").Router();

router.post("/add-message", addMessage);
router.post("/get-all-messages", getAllMessage);

module.exports = router;
