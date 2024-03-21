/* global module */

const RESPONSE_TYPES = {
    txt: 'text/plain',
    html: 'text/html'
};

const REQUESTED_FORMATS = {
    text: 'text/plain',
    html: 'text/html',
    list: 'text/html'
};

const TRANSFORMS = {
    list: data => {
        const getListElement = item => `
<li><a href="https://search.brave.com/search?q=${item}" target="_blank">${item}</a></li>`;

        return `<ol>${data.split('\n').filter(i => i).map(getListElement).join('')}</ol>`;
    }
};

const determineResponseType = requestPath => RESPONSE_TYPES[requestPath.split('.').reverse()[0]] || RESPONSE_TYPES.txt;

const getProcessedData = (data, requestedFormat) => {
    const transform = TRANSFORMS[requestedFormat];

    return transform ? transform(data) : data;
};

module.exports.REQUESTED_FORMATS = REQUESTED_FORMATS;
module.exports.determineResponseType = determineResponseType;
module.exports.getProcessedData = getProcessedData;
