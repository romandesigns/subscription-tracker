import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Subscription Tracker');
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});