const { DataTypes } = require('sequelize');
module.exports = (sequelize) => { 
  sequelize.define('TempDog', { 

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  }, 
  );
};