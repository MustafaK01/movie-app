## Development server
If you want to run the project you should install json-server(it used for a fake api). After installed it, you can use the json-server --watch db.json command for start the fake api.
(db.json file is located in movieApp folder. If the db.json file is located in another folder, you can use the command like this -> json-server --watch path/of/db.json). After that you can 
use `ng serve` command. If you didn't run the json-server firstly it will give you an error or you will not be able to see any data about the data contained in db.json.
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
