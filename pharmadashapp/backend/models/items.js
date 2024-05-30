module.exports = (sequelize, DataTypes) => {
    const Items = sequelize.define('items', {
      id_items: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: DataTypes.STRING,
      precio: DataTypes.BIGINT,
      cantidad: DataTypes.BIGINT
    }, {
      timestamps: false,
    });
  
    return Items;
  };
  