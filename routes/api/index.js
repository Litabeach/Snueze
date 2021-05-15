const router = require("express").Router();
const journalRoutes = require("./journal");
const surveyRoutes = require("./survey");

// Journal and Survey routes
router.use("/journal", journalRoutes);
router.use("/survey", surveyRoutes);
module.exports = router;
