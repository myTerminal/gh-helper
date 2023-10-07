/* global module require */

const express = require('express');
const axios = require('axios');

const { RESPONSE_TYPES, REQUESTED_FORMATS, determineResponseType } = require('./lib.js');
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
        ({ path, query }, res) => {
            const requestPath = aliases[path] || path;
            const responseType = REQUESTED_FORMATS[query.t];

            axios
                .get(`https://raw.githubusercontent.com/${basePath}${requestPath}`)
                .then(
                    ({ data }) => {
                        res.contentType(responseType || determineResponseType(requestPath));
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
