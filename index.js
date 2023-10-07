/* global module require */

const express = require('express');
const axios = require('axios');

const { basePath, aliases } = require('./config.json');

module.exports = url => {
    const app = express();

    app.listen(
        url,
        () => {
            console.log('GitHub proxy started on', url);
        }
    );

    app.get(
        '*',
        ({ path }, res) => {
            const requestPath = aliases[path] || path;

            axios
                .get(`https://raw.githubusercontent.com/${basePath}${requestPath}`)
                .then(
                    ({ data }) => {
                        res.contentType('text/plain');
                        res.send(data);
                    }
                )
                .catch(
                    () => {
                        res.contentType('text/plain');
                        res.send('ERROR!');
                    }
                );
        }
    );
};
