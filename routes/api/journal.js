const router = require("express").Router();
const journalController = require("../../controllers/journalController");
const auth = require("../../utils/auth")

// Matches with "/api/journal"
router.route("/")
  .get(auth, journalController.findById)
  .post(auth, journalController.create);

// Matches with "/api/journal/:id"
router
  .route("/user:id")
  .get(auth, journalController.findById)
  .put(auth, journalController.update)
  .delete(auth, journalController.remove);

  
module.exports = router;
