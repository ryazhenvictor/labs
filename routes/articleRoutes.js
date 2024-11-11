const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.get("/",articleController.getArticles);
router.get("/:id",articleController.getArticle);
router.post("/create",articleController.createArticle);

// for static pages
router.get("/about", articleController.getAbout);
router.get("/privacyPolicy", articleController.getPrivacyPolicy);

module.exports = router;
