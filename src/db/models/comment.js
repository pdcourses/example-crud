'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.hasMany(models.someModel, {
        foreignKey: 'commentId',
      });
    }
  }
  Comment.init(
    {
      author: {
        type: DataTypes.STRING,
        allowNull: null,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: null,
      },
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};
