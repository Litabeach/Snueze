const router = require("express").Router();
const journalController = require("../../controllers/journalController");
const auth = require("../../utils/auth")

// Matches with "/api/journal"
router.route("/")
  .get(auth, journalController.findAll)
  .post(auth, journalController.create);

// Matches with "/api/journal/:id"
router
  .route("/user")
  .get(auth, journalController.findById)
  .put(auth, journalController.update)
  .delete(auth, journalController.remove);

router.get("/journals", (req, res) => {
  const authHeader = req.headers.cookie;
  if (authHeader) {
      const token = authHeader.split('=')[1];
      jwt.verify(token, process.env.JWT_SECRET, (err, { journals }) => {
          if (err) {
              return res.sendStatus(403);
          }
          res.json(journals);
      });
  } else {
      res.sendStatus(401);
  }
})
  
module.exports = router;
