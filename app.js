import express from 'express';
import {PORT} from './config/env.js';

const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Tracker');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

export default app;