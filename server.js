const express = require('express');

const app = express();
const port = 2999;

app.get('/logout', (req, res) => setTimeout(() => res.redirect('/'), 2000));
app.get('/Shibboleth-SP', (req, res) => setTimeout(() => res.redirect('/Shibboleth-IDP'), 1000));
app.get('/Shibboleth-IDP', (req, res) => setTimeout(() => res.redirect('/'), 1000));
app.use('/public', express.static('public'));
app.get('/*', (req, res) => res.sendFile('public/index.html', { root: __dirname }));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
