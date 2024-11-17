const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.get("/articles",articleController.getArticles);
router.post("/articles/create",articleController.createArticle);


router.get("/about", articleController.getAbout);
router.get("/privacyPolicy", articleController.getPrivacyPolicy);



// router.get("/:id",articleController.getArticle);
router.get("/articles/:id",articleController.getArticle);

module.exports = router;
