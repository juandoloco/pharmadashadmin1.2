module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define('roles', {
      id_rol: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      nombre_rol: DataTypes.STRING,
      descripcion: DataTypes.STRING
    }, {
      timestamps: false,
    });
  
    return Roles;
  };
  