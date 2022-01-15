const express = require('express');
const { CommentController } = require('./controllers');

const app = express();

app.use(express.json());

// получить все задачи
app.get('/comments', CommentController.getAllComments);
// получить задачу по id
app.get('/comments/:commentId', CommentController.getComment);
// создать задачу
app.post('/comments', CommentController.createComment);
// обновить задачу
app.patch('/comments/:commentId', CommentController.updateComment);
// удалить задачу
app.delete('/comments/:commentId', CommentController.deleteComment);

module.exports = app;
