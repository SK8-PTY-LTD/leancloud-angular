# Angular Express Seed

Start an awesome app with AngularJS on the front, LeanCloud Cloud Code on the back(Express + Node). This project is an
application skeleton for a typical [AngularJS](http://angularjs.org/) web app for those who want
to use [LeanCloud Cloud Engine](https://leancloud.cn/docs/leanengine_guide-node.html) to serve their app.

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

### Usage

Runs like a typical LeanCloud app:

    avoscloud

## Directory Layout
    
    
    app.js          --> app config
    cloud.js        --> cloud function and stuff
    public/         --> all of the files to be used in on the client side
        css/              --> css files
        img/              --> image files
        js/               --> javascript files
            app.js          -->Angular app.js. IMPORTANT! Set the applicaiton id and key here!
            controllers.js  --> application controllers
            directives.js   --> custom angular directives
            filters.js      --> custom angular filters
            services.js     --> custom angular services
        lib/              --> angular and 3rd party JavaScript libraries
            angular/
                    angular.min.js          --> V1.3.9
                    angular-route.min.js    --> V1.3.9
    routes/			--> for Express.js config and routing
    	api.js 			  --> custom middleware API
    	index.js          --> Main routing configs
    package.json    --> for npm


## History

01/09/15 Updated project to adapt [LeanCloud Cloud Engine](https://leancloud.cn/docs/leanengine_guide-node.html)
01/04/15 Project Initialized

## Contact

For more information on AngularJS please check out http://angularjs.org/
For more on LeanCloud, https://www.leancloud.cn
For other questions, please contact [SK8 Tech](http://sk8techs.com), http://sk8techs.com

## License
MIT
