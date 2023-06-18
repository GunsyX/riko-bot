const express = require('express');
const https = require('https');
const path = require('path');
const app = express();
const { readFileSync } = require('fs');

const sslServer = https.createServer(
    {
        key: readFileSync(path.join(__dirname, 'certs', 'key.pem')),
        cert: readFileSync(path.join(__dirname, 'certs', 'cert.pem')),
    },
    app
)
sslServer.listen(3443, () => {
    console.log('Secure Server is listening on port 3443');
});
