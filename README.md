# gh-helper

[![Build Status](https://travis-ci.org/myTerminal/gh-helper.svg?branch=master)](https://travis-ci.org/myTerminal/gh-helper)
[![Code Climate](https://codeclimate.com/github/myTerminal/gh-helper.png)](https://codeclimate.com/github/myTerminal/gh-helper)
[![js-myterminal-style](https://img.shields.io/badge/code%20style-myterminal-blue.svg)](https://www.npmjs.com/package/eslint-config/myterminal)
[![Coverage Status](https://img.shields.io/coveralls/myTerminal/gh-helper.svg)](https://coveralls.io/r/myTerminal/gh-helper?branch=master)  
[![License](https://img.shields.io/github/license/myTerminal/gh-helper.svg)](https://opensource.org/licenses/MIT)  

A web helper for fetching raw GitHub content as plain text

## Problem

URLs to retrieve text from a file hosted under a GitHub repository can get unreasonably long. This project aims to shorten such URLs for shorter commands.

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

## Example

With the example configuration, a URL as short as

    https://[domain].[tld]/setup

could be turned into

    https://raw.githubusercontent.com/myTerminal/dotfiles/master/.setup/bootstrap
