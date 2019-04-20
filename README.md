# Gnothi
*Authors : Marin BOUTHEMY and Nicolas TOUSSAINT*

This project aims to implement a blockchain application to create and visualize it. You can add participants and assets and define permissions for each type of user (admin or no). The application executes request to a server which is linked with the Hyperledger Fabric locally.

## Requirements
The library has some requirements :
 - Angular 6
 - JavaScript
 - Hyperledger Composer & Fabric

## Files structure
The application contains a lot of components.

First the components :
 - header -> define the header of the page
 - sidenav -> define the sidenav of the page
 - signin -> first login page, define the status (i.e admin or no)
 - asset-list -> component for the gestion of the assets, contains a component for the form and another for a detailed view
 - participant-list -> same but for participants
 - user/transaction -> execute a transaction when log as a user
 - user/new-firm -> add a new firm as a user
 
 
Then the services:
- AssetsService -> service for the asset requests to the server
- ParticipantService -> same but with participants
- MessageService -> use for transmission of boolean (isAdmin, isNotification...)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
