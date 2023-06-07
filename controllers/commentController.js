const { Comment } = require("../models");

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
    try {
        const { id } = req.params;
        const comment = await Comment.findById(id);
        if (!comment) throw Error("Bike Object ID Not Found");
        res.json(comment);
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

const createComment = async (req, res) => {
    try {
        const newComment = await new Comment(req.body);
        await newComment.save();
        return res.json({ newComment });
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedComment = await Comment.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (updatedComment) {
            return res.json({ updatedComment });
        }
        return res.send("Oops.  No bike Found. You made Mark sad. :'(");
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedComment = await Comment.findByIdAndDelete(id);
        if (deletedComment) {
            return res.json({ deletedComment });
        }
        return res.send("Oops. No Bike found. You made Mark sad. :'(");
    } catch (e) {
        console.log(e);
        res.send("Oops. That didn't work. You made Mark sad. :'(");
    }
};

module.exports = {
    createComment,
    getComments,
    getCommentById,
    updateComment,
    deleteComment,
};
