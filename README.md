krakenjs + i18n + monk
===========

####Project Example of Localization with **[Kraken](http://krakenjs.com/)** (Makara) + **[monk](https://www.npmjs.com/package/monk)** to access [MongoDB](http://mongodb.org).<br />

You will need to have MongoDB previously installed and running in your computer. If you don't have it, please follow the instructions on [MongoDB website](http://docs.mongodb.org/manual/installation/) and later return to this guide.

To run it, you must:

1. Starts your Mongodb instance in your localhost (mongod). The project will look for an instance at: *localhost:27017/test* 
2. Inside of project folder run: `npm run build && npm run test && npm start`

After application starts visit http://localhost:8000/ and select the locale. To visit the list of users go to http://localhost:8000/users.

To change the language you must call http://localhost:8000/users/setlocale/<language>-<country>, for example http://localhost:8000/setlocale/en-US

For more information, visit:


*	**KrakenJS** - [http://krakenjs.com/](http://krakenjs.com/)
*	**monk** - [https://www.npmjs.com/package/monk](https://www.npmjs.com/package/monk)
*	**Localization** - [http://krakenjs.com/index.html#localization](http://krakenjs.com/index.html#localization)

It's an Open Source project for educational purposes. Feel free to fork, improve it and send pull requests :D

*Jeff Prestes*


