const ArticleModel = require("../models/articleModel");


exports.getArticles = (req, res) => {
    const articles = ArticleModel.getAllArticles();
    res.render("articleListView", { articles });
};

exports.getArticle = (req, res) => {
    const articles = ArticleModel.getAllArticles();
    const id = req.params["id"];
    const article = articles.find((x) => x.id == id);
    res.render("articleView", { article });
};

exports.createArticle = (req, res) => {
    const newArticle = { id: Date.now(),  title: req.body.title, content: req.body.content };
    ArticleModel.addArticle(newArticle);
    res.redirect("/articles/");
};

exports.getAbout = (req, res) => {
    res.render("about");
};

exports.getPrivacyPolicy = (req, res) => {
    res.render("privacyPolicy");
};
