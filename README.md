# ng2-sweetalert2
A service wrapping sweetalert2 for angular 2.

# Install
`npm i -s ng2-sweetalert2`

# Usage

First, make sure you have a CSS loader set up for webpack, like so:
```
{
  test: /\.css/,
  loader: 'style!css'
},
```

Next, inject `SweetAlertService` into a component:
```js
import { SweetAlertService } from 'ng2-sweetalert2';

@Component({
  providers: [SweetAlertService]
})
export class MyComponent {

  static get parameters() {
    return [[SweetAlertService]];
  }

  constructor(swal) {
    this.swalService = swal;
  }
```

# API
See [limonte/sweetalert2](https://github.com/limonte/sweetalert2) for examples.

Function  | Arguments | Description
--------  | --------- | -----------
swal      | any       | Create a generic swal with any arguments.
prompt    | object    | Create a swal that prompts user with a basic text entry field.
confirm   | object    | Create a swal that confirms a user action.
alert     | object    | Create a swal that alerts a user of something that happened.
question  | object    | Wrapper for `alert` that sets type to `question`.
success   | object    | Wrapper for `alert` that sets type to `success`.
error     | object    | Wrapper for `alert` that sets type to `error`.
warn      | object    | Wrapper for `alert` that sets type to `warn`.
info      | object    | Wrapper for `alert` that sets type to `info`.
