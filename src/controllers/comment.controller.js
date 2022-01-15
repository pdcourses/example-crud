const { all } = require('express/lib/application');
const { Comment } = require('../db/models');

module.exports.createComment = async (req, res, next) => {
  const { body } = req;
  const newComment = await Comment.create(body);
  res.status(201).send(newComment);
};

module.exports.getAllComments = async (req, res, next) => {
  const allComments = await Comment.findAll();
  res.send(allComments);
};

module.exports.getComment = async (req, res, next) => {
  const {
    params: { commentId },
  } = req;
  const findComment = await Comment.findByPk(commentId);
  if (findComment) {
    return res.send(findComment);
  }
  res.status(404).send({
    message: `Comment with number $commentId} not found`,
  });
};

module.exports.updateComment = async (req, res, next) => {
  const {
    params: { commentId },
    body,
  } = req;
  const findComment = await Comment.findByPk(commentId);
  if (findComment) {
    const updComment = await findComment.update(body);
    return res.send(updComment);
  }
  res.status(404).send({
    message: `Comment with number $commentId} not found`,
  });
};

module.exports.deleteComment = async (req, res, next) => {
  const {
    params: { commentId },
    body,
  } = req;
  const findComment = await Comment.findByPk(commentId);
  if (findComment) {
    const delComment = await findComment.destroy(commentId);
    return res.status(204).send();
  }
  res.status(404).send({
    message: `Comment with number $commentId} not found`,
  });
};
