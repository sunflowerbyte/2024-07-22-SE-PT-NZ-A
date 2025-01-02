const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Like extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Like.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
},
  {
    sequelize: sequelizeInstance,
    modelName: "likes", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Like;
