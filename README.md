# gh-helper

[![Build Status](https://travis-ci.org/myTerminal/gh-helper.svg?branch=master)](https://travis-ci.org/myTerminal/gh-helper)
[![Code Climate](https://codeclimate.com/github/myTerminal/gh-helper.png)](https://codeclimate.com/github/myTerminal/gh-helper)
[![js-myterminal-style](https://img.shields.io/badge/code%20style-myterminal-blue.svg)](https://www.npmjs.com/package/eslint-config/myterminal)
[![Coverage Status](https://img.shields.io/coveralls/myTerminal/gh-helper.svg)](https://coveralls.io/r/myTerminal/gh-helper?branch=master)  
[![License](https://img.shields.io/github/license/myTerminal/gh-helper.svg)](https://opensource.org/licenses/MIT)  

A web helper for fetching raw GitHub content

## Problem

URLs to retrieve raw data from a file hosted under a GitHub repository can get unreasonably long. This project aims to shorten such URLs for easy sharing.

## How to Configure

Configuration for *gh-pages* only contains two keys at this point:

    {
      "basePath": "myTerminal",
      "aliases": {
        "/setup": "/dotfiles/master/.setup/bootstrap"
      }
    }

`basePath` stands for a GitHub username or organization (eg: [https://github.com/myTerminal]()).

`aliases` can contain keys that can help further shorten URLs, so given the above configuration,

    /dotfiles/master/.setup/bootstrap

would become

    /setup

## How to Use

Clone the repository inside a directory, and simply run `npm start`.

The structure of the project has been designed to work with [team-fluxion/web-host](https://github.com/team-fluxion/web-host), but it can also be run independently.

With the example configuration, a URL as short as

    https://[domain].[tld]/setup

could be turned into

    https://raw.githubusercontent.com/myTerminal/dotfiles/master/.setup/bootstrap

### Content types

The response type of the data being returned is determined from the file extension in the URL if one is present.

Currently, the system identifies the following file extensions:

1. `.txt` for plain text files
2. `.html` for web pages

So, a URL that looks like `https://[domain].[tld]/[path]/../[file].html` would be retrieved as a web page with content type "text/html", while something like `https://[domain].[tld]/[path]/../[file].html` would be retrieved as a plain text.

Response types can also be specified explicitly, and that can used to override the identified content type if there is one.

So, though a URL that looks like `https://[domain].[tld]/[path]/../[file].html` would otherwise be treated as a web page, appending a `?t=text` would get it as plain text.

    https://[domain].[tld]/[path]/../[file].html?t=text

The above is how an overridden content type would look like.
