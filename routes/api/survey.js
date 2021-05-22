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

// router.get("/surveys", (req, res) => {
//   const authHeader = req.headers.cookie;
//   if (authHeader) {
//       const token = authHeader.split('=')[1];
//       jwt.verify(token, process.env.JWT_SECRET, (err, { surveys }) => {
//           if (err) {
//               return res.sendStatus(403);
//           }
//           res.json(surveys);
//       });
//   } else {
//       res.sendStatus(401);
//   }
// })

module.exports = router;