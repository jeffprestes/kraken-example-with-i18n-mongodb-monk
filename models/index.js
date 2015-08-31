'use strict';

var dust = require('dustjs-linkedin');

module.exports = function AbcModel  (request) {

    //Global
    var context = dust.makeBase();

    context.push({
          friend: {
          name: 'Dusty'
        },
        appName: 'TestKraken',
        appVersion: '1.0'
    });

    var locale = request.cookies && request.cookies.locale;
    var isLocaleUS = false;
    var isLocaleES = false;
    var isLocaleDE = false;

    if (locale === 'de-DE')   {
      isLocaleDE = true;
    }

    if (locale === 'en-US')   {
      isLocaleUS = true;
    }

    if (locale === 'es-ES')   {
      isLocaleES = true;
    }

    return {
        name: 'Jeff',
        isDE: isLocaleDE,
        isES: isLocaleES,
        isUS: isLocaleUS,
        amigo: {
          name: 'Ze das Coves'
        },
        languages: [
            {
                name: 'HTML'
            },
            {
                name: 'CSS'
            },
            {
                name: 'JavaScript'
            },
            {
                name: 'Dust'
            }
        ]
    };
};
