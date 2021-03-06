const router = require("express").Router();
const surveyController = require("../../controllers/surveyController");
const auth = require("../../utils/auth")

// Matches with "/api/survey"
router.route("/")
  .get(surveyController.findAll)
  .post(surveyController.create);

// Matches with "/api/survey/:id"
router
  .route("/user")
  .get(surveyController.findById);

module.exports = router;