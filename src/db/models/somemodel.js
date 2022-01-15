'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class someModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      someModel.belongsTo(models.Comment, {
        foreignKey: 'commentId',
      });
    }
  }
  someModel.init(
    {
      info: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'someModel',
    }
  );
  return someModel;
};
