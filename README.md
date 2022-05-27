# Team Calender APP
[DEMO](https://team-calender.herokuapp.com)

![desktop](./screenshots/desktop.png)
![iphone_7_plus_landscape](./screenshots/iphone_7_plus_landscape.png)
![iPhone_7_plus_portrait](./screenshots/iPhone_7_plus_portrait.png)
![ipad_portrait](./screenshots/ipad_portrait.png)

## Introduction
The aim of this application is to support team members working in different timezones accross the globe to propably setup meetings in respective local time zones.

## Scripts
1. `start` this script will run the angular app inside node server. This script is only done for production deployment to heroku server
2. `start:proxy` this script can be used to run angular app in dev mode. Backend services must be running in a separate process on `http://localhost:3000/api`
3. `start:mock` This angular project uses JSON-Server libaray to mock backend APIs. This script will launch only the JSON-Server. JSON-Server configurations are under the path `./src/mocks/`
4. `start:proxy:mock:server` This script will launch the angular application with JSON-Server in development mode. This will allow UI developer to work without running the actual backend APIs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
