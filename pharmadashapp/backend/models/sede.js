module.exports = (sequelize, DataTypes) => {
    const Sede = sequelize.define('sede', {
      id_sede: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      nombre_sede: DataTypes.STRING,
      direccion: DataTypes.STRING,
      telefono: DataTypes.BIGINT
    }, {
      timestamps: false,
    });
  
    return Sede;
  };
  