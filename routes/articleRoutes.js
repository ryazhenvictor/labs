const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.get("/",articleController.getArticles);
router.post("/create",articleController.createArticle);


router.get("/about", articleController.getAbout);
router.get("/privacyPolicy", articleController.getPrivacyPolicy);



router.get("/:id",articleController.getArticle);
// router.get("/areicles/:id",articleController.getArticle);

module.exports = router;
