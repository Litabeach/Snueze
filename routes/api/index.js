const router = require("express").Router();
const journalRoutes = require("./journal");
const surveyRoutes = require("./survey");
const path = require("path");

// Survey routes
router.use("/survey", surveyRoutes);

// Journal routes
router.use("/journal", journalRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });


module.exports = router;
