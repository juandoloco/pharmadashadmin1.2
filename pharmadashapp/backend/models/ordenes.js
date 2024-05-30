module.exports = (sequelize, DataTypes) => {
    const Ordenes = sequelize.define('ordenes', {
      id_ordenes: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      id_clientes: DataTypes.BIGINT,
      id_item: DataTypes.BIGINT,
      id_sede: DataTypes.BIGINT,
      estado: DataTypes.SMALLINT,
      fecha_creacion: DataTypes.DATE
    }, {
      timestamps: false,
    });
  
    return Ordenes;
  };
  