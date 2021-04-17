import express from 'express';
import routes from './routes';
import cors from 'cors';

require('../sequelize');

const app = express();
app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
  
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
  next();  
})
app.use(routes);

//porta do back
app.listen(3333, () => {
    console.log('Backend Started')
})