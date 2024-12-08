require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3000;
const googleApiKey = process.env.GOOGLE_API_KEY;
const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
