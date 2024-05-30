const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { sequelize } = require('./models');
const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();
        console.log('Database synchronized.');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1); // Exit the process with failure
    }
}

startServer();
