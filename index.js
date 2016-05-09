
import sweetalert from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { window } from '@angular/platform-browser/src/facade/browser';

import assign from 'lodash.assign';

export class SweetAlertService {
  constructor() {}

  swal() {
    return window.swal(...arguments);
  }

  prompt(options) {
    const baseOptions = {
      showCancelButton: true,
      confirmButtonText: 'Submit',
      input: 'text'
    };
    return window.swal(assign(baseOptions, options));
  }

  confirm(options) {
    const baseOptions = {
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      type: 'warning'
    };
    return window.swal(assign(baseOptions, options));
  }

  alert(options) {
    const baseOptions = {
      confirmButtonText: 'OK',
      type: 'info'
    };
    return window.swal(assign(baseOptions, options));
  }

  question(options) {
    return this.alert(assign({ type: 'question' }, options));
  }

  success(options) {
    return this.alert(assign({ type: 'success' }, options));
  }

  error(options) {
    return this.alert(assign({ type: 'error' }, options));
  }

  warn(options) {
    return this.alert(assign({ type: 'warn' }, options));
  }

  info(options) {
    return this.alert(assign({ type: 'info' }, options));
  }
}
