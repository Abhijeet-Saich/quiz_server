const express = require('express');
const categoriesRouter = express.Router();

const quizzes = require("../data/quizzes");

categoriesRouter.route("/")
    .get((req, res) => {
        res.json(quizzes)
    })

module.exports = categoriesRouter;