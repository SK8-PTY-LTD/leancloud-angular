# Angular Express Seed

Start an awesome app with AngularJS on the front, LeanCloud Cloud Code on the back(Express + Node). This project is an
application skeleton for a typical [AngularJS](http://angularjs.org/) web app for those who want
to use [LeanCloud Cloud Code](https://www.leancloud.cn/doc/cloud_code) to serve their app.

The seed contains angular libraries, LeanCloud libraries and a bunch of scripts all preconfigured for
instant web development gratification. Just clone the repo (or download the zip/tarball) and
you're ready to develop your application.

The seed app shows how to wire together Angular client-side components with Express on the server.
It also illustrates writing angular partials/views with the ejs templating library.

_Note: Although ejs supports interpolation, you should be doing that mostly on the client. Mixing
server and browser templating will convolute your app. Instead, use ejs as a syntactic sugar for
HTML, and let AngularJS take care of interpolation on the browser side._

## How to use leancloud-angular-seed

Clone the leancloud-angular-seed repository, run `npm install` to grab the dependencies, and start hacking!

### Running the app

Runs like a typical LeanCloud app:

    avoscloud

## Directory Layout
    
    cloud/
        app.js          --> app config
        main.js         --> cloud function and stuff
        public/             --> all of the files to be used in on the client side
            css/              --> css files
            img/              --> image files
            js/               --> javascript files
                app.js          -->Angular app.js. IMPORTANT! Set the applicaiton id and key here!
                controllers.js  --> application controllers
                directives.js   --> custom angular directives
                filters.js      --> custom angular filters
                services.js     --> custom angular services
                    lib/            --> angular and 3rd party JavaScript libraries
                    angular/
                        angular.min.js          --> V1.3.9
                        angular-route.min.js    --> V1.3.9
    config/
        global.json     --> IMPORTANT! Change the applicaiton id and key before deploying the app!
    package.json        --> for npm


## Example App

A simple [website](https://shelf.avosapps.com/Maple/) based on this seed.


## Contact

For more information on AngularJS please check out http://angularjs.org/
For more on LeanCloud, https://www.leancloud.cn
For other questions, please contact SK8 PTY LTD, https://www.sk8.asia

## License
MIT
