module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('usuario', {
      id_usuario: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      usuario: DataTypes.STRING,
      contrasenia: DataTypes.STRING,
      id_rol: DataTypes.INTEGER
    }, {
      timestamps: false,
    });
  
    return Usuario;
  };
  