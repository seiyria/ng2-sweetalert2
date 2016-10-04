
import sweetalert from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import assign from 'lodash.assign';

export class SweetAlertService {
  constructor() {}

  swal() {
    return sweetalert(...arguments);
  }

  prompt(options) {
    const baseOptions = {
      showCancelButton: true,
      confirmButtonText: 'Submit',
      input: 'text'
    };
    return sweetalert(assign(baseOptions, options));
  }

  confirm(options) {
    const baseOptions = {
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      type: 'warning'
    };
    return sweetalert(assign(baseOptions, options));
  }

  alert(options) {
    const baseOptions = {
      confirmButtonText: 'OK',
      type: 'info'
    };
    return sweetalert(assign(baseOptions, options));
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
