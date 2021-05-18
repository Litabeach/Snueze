const router = require("express").Router();
const journalRoutes = require("./journal");
const surveyRoutes = require("./survey");

// Survey routes
router.use("/survey", surveyRoutes);

// Journal routes
router.use("/journal", journalRoutes);



module.exports = router;
