krakenjs + i18n + monk
===========

####Project Example of Localization with **[Kraken](http://krakenjs.com/)** (Makara) + **[monk](https://www.npmjs.com/package/monk)** to access [MongoDB](http://mongodb.org).<br />

You will need to have MongoDB previously installed and running in your computer. If you don't have it, please follow the instructions on [MongoDB website](http://docs.mongodb.org/manual/installation/) and later return to this guide.

To run it, you must:

1. Starts your Mongodb instance in your localhost (mongod). The project will look for an instance at: *localhost:27017/test*
2. Inside of project folder run: `npm run build && npm run test && npm start`

After application starts visit http://localhost:8000/ and select the locale. To visit the list of users go to http://localhost:8000/users.

You also can change the locale calling: *http://localhost:8000/users/setlocale/language-country*, for example http://localhost:8000/setlocale/en-US. It will set a cookie in your browser and reload the content with new locale.

If you want to add an additional language or country, add a new folder at *locales* with the country code following the ISO specification [https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). It should represent the country and within it you must define the language. Inside, you must have a property file for each dust template file at your public/template folder.

About Monk, access models/users.js for an example. You must not forget to configure it and MongoDB access at index.js including Monk at Middleware callbacks. Pay attention that Monk uses promises and if you will not code the database operations within your controller you must get the data or execute the operations from model via promises. 


For other and further information, visit:


*	**KrakenJS** - [http://krakenjs.com/](http://krakenjs.com/)
*	**monk** - [https://www.npmjs.com/package/monk](https://www.npmjs.com/package/monk)
*	**Localization** - [http://krakenjs.com/index.html#localization](http://krakenjs.com/index.html#localization)

It's an Open Source project for educational purposes. Feel free to fork, improve it and send pull requests :D

*Jeff Prestes*
