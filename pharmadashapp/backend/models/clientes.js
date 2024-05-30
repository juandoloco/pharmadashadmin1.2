module.exports = (sequelize, DataTypes) => {
    const Clientes = sequelize.define('clientes', {
      id_clientes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cedula: DataTypes.STRING,
      apellidos: DataTypes.STRING,
      nombre: DataTypes.STRING,
      telefono: DataTypes.STRING,
      direccion: DataTypes.STRING
    }, {
      timestamps: false,
    });
  
    return Clientes;
  };
  