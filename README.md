# Task

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Code Structure

All the tasks can be found in one app. Every tasks has it's own component.
  1. `Smiley` is in the folder `smiley` and uses the template and style-file
  2. `Typescript Basics` is in the folder `basics`. Every Subtask has its iown component. the styling for all of them is in `basics.scss`
     2.1 The calculation task in the `calc-area` folder and contains a template with input-fields, the button and the output. The source file contains the calc function.
     2.2 The interface and Object task is in the folder `interface-task` and contains a template to show the Objects, a source file that contains the definition. The interface is in the `Datatypes` file.
     2.3 The Generic task is in the folder `generics` and contains a template to show the original and the reversed array and the source file that contains the function.
  4. `The Angular App` is the intire app and the tasks were done with the components `user-list` and `user-data-dialog`, with the Service `UserService`, the file `Datatypes` and all of the `app`-files

## Navigation

To navigate in the running app use the toolpar at the top

  1. `Smiley` navigates you to the first task `the smiley `
  2. `Typescript Basics` navigates you to the second task with its three subtasks
  3. `App` navigates you to the third task the `angular app`


