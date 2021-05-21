const router = require("express").Router();
const surveyController = require("../../controllers/surveyController");
const auth = require("../../utils/auth")

// Matches with "/api/survey"
router.route("/")
  .get(auth, surveyController.findAll)
  .post(auth, surveyController.create);

// Matches with "/api/survey/:id"
router
  .route("/:id")
  .get(auth, surveyController.findById);

module.exports = router;