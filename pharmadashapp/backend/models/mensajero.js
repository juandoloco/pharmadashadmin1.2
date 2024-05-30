module.exports = (sequelize, DataTypes) => {
    const Mensajero = sequelize.define('mensajero', {
      id_mensajero: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      nombre_mensajero: DataTypes.STRING,
      apellido_mensajero: DataTypes.STRING,
      telefono_mensajero: DataTypes.STRING,
      id_sede: DataTypes.BIGINT
    }, {
      timestamps: false,
    });
  
    return Mensajero;
  };
  