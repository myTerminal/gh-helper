/* global module */

const RESPONSE_TYPES = {
    txt: 'text/plain',
    html: 'text/html'
};

const REQUESTED_FORMATS = {
    text: 'text/plain',
    html: 'text/html'
};

const determineResponseType = requestPath => RESPONSE_TYPES[requestPath.split('.').reverse()[0]] || RESPONSE_TYPES.txt;

module.exports.RESPONSE_TYPES = RESPONSE_TYPES;
module.exports.REQUESTED_FORMATS = REQUESTED_FORMATS;
module.exports.determineResponseType = determineResponseType;
