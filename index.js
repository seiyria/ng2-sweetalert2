
import { Directive, ElementRef, EventEmitter } from 'angular2/core';
import ace from 'brace';

@Directive({
  selector: '[ace-editor]',
  inputs: ['text'],
  outputs: ['textChanged']
})
export class AceEditorDirective {
  static get parameters() {
    return [[ElementRef]];
  }

  set text(value) {
    if(value === this.oldVal) return;
    this.editor.setValue(value);
    this.editor.clearSelection();
    this.editor.focus();
  }

  constructor(elementRef) {
    this.textChanged = new EventEmitter();

    const el = elementRef.nativeElement;
    el.classList.add('editor');

    this.editor = ace.edit(el);

    this.editor.on('change', () => {
      const newVal = this.editor.getValue();
      if(newVal === this.oldVal) return;
      if(typeof this.oldVal !== 'undefined') {
        this.textChanged.next(newVal);
      }
      this.oldVal = newVal;
    });
  }
}
