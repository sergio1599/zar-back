import express, { Application } from 'express';
import 'dotenv/config';
import  './database/connectDatabase'
import { product } from './routes';




/* require ('./database/connectDatabase') */

const app: Application = express();

app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/product', product)


/* app.get('/ping', (_req, res) => {
    console.log('funcionaaaa');
    res.send('pong');

}); */

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});