# MatChipOptionSelected

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.0.

This is an example repository to illustrate a bug in Material chip option. When the selected property changes, there is a case where the selected CSS classes are not applied. 

## App behavior
On this app, we have a list of selectable teams and the possibility to filter them by gender (male or female). By default the 1st team is selected. On this app, we also want the selected team to be changed to the first matching the current filter if the currently selected team does not match the filter.

I have also set the disabled attribute with the same property as selected to show that this one works properly. 

## How to reprpoduce
 - When changing the gender filter (unselect male) without changing the selected team, the selected CSS classes are applied to the selected team (team 1 female).
 - When changing the selected team by clicking on an option the selected CSS classes are applied.
 - When changing the selected team by clicking on an option (click on a male team for example) then changing the gender filter (unselect male) the selected CSS classes are not applied. You can see that the selected property of the option is true and the disabled CCS classes are applied

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
