const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});