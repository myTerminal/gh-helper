/* global module require */

const express = require('express');
const axios = require('axios');

const {
    REQUESTED_FORMATS,
    determineResponseType,
    getProcessedData
} = require('./lib.js');
const { basePath, aliases, superAliases } = require('./config.json');

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
	    let requestPath,
		responseFormat,
		responseType;

	    const match = superAliases[path];

	    if (match) {
		requestPath = match.url;
		responseFormat = match.type;
	    } else {
		requestPath = aliases[path] || path;
		responseFormat = query.t;
	    }
	    responseType = REQUESTED_FORMATS[responseFormat];

            axios
                .get(`https://raw.githubusercontent.com/${basePath}${requestPath}`)
                .then(
                    ({ data }) => {
                        res.contentType(responseType || determineResponseType(requestPath));
                        res.send(getProcessedData(data, responseFormat));
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
