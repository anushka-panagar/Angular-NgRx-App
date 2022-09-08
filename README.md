# Angular NgRx Application

This project display a simple list of products that can be viewed in detail on click events using http services
(through **HttpClient**) and **@ngrx/store and @ngrx/effects** libraries.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Get the Code
```
git clone https://github.com/anushka-panagar/angular_ngrx_app.git
cd angular_ngrx_app
npm i
```

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Technology use

Angular CLI, NgRx Store, Angular Material - Indigo Pink Theme, Sass for styling , Bootstrap

# Functionalities

## Products List
1. The product list is retrieved from random api generator url - https://random-data-api.com/api/coffee/random_coffee
2. Pagination is implemented by Mat-Pagination found inside Angular Material Framework.

## How to view a product detail
1. To view product detail, click on the product row and it would display its details.
2. An **“ngrx effect”** class is implemented (ProductEffects) by module and will be triggered when we dispatch actions with the store.

## Structure
- Each module have a folder **store** where will be saved the **actions** (products.actions.ts), **effects** (products.effects.ts) and **reducers** (products.reducers.ts).
- In the module class (products.module.ts) are imported the reducers to be called by each feature using the class **StoreModule** and also the **EffectsModule**.
