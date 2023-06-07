const { Comment } = require("../models");
const someCRUD = require("../controllers/someCRUD");

const getComments = async (req, res) => {
    let comments;
    if (req.query.sort === "asc") {
        comments = await Comment.find({}).sort({
            updatedAt: 1,
        });
    } else if (req.query.sort === "desc") {
        comments = await Comment.find({}).sort({
            updatedAt: -1,
        });
    } else {
        comments = await Comment.find({});
    }
    res.json(comments);
};

const getCommentById = async (req, res) => {
    someCRUD.getObjectById(req, res, Comment);
};

const createComment = async (req, res) => {
    someCRUD.createObject(req, res, Comment);
};

const updateComment = async (req, res) => {
    someCRUD.updateObjectByID(req, res, Comment);
};

const deleteComment = async (req, res) => {
    someCRUD.deleteObjectByID(req, res, Comment);
};

module.exports = {
    createComment,
    getComments,
    getCommentById,
    updateComment,
    deleteComment,
};
