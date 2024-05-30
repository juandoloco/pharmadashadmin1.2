const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pharmadb_lbjg', 'davipharmauser', 'K8U4wWiBUMWl1YhRJJ1OLG4CRDHucTjy', {
  host: 'dpg-ckuhmr237rbc738ccnq0-a.oregon-postgres.render.com',
  dialect: 'postgres',
  port: 5432,
  logging: console.log // Añadir logging para depuración
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
