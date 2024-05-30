module.exports = (sequelize, DataTypes) => {
    const Clientes = sequelize.define('clientes', {
      id_clientes: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      cedula: DataTypes.BIGINT,
      apellidos: DataTypes.STRING,
      nombre: DataTypes.STRING,
      telefono: DataTypes.BIGINT,
      direccion: DataTypes.STRING
    }, {
      timestamps: false,
    });
  
    return Clientes;
  };
  