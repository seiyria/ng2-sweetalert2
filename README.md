# ng2-ace
A basic ace editor directive for angular 2.

# Sample Usage

```js
import { Component } from 'angular2/core';

import { AceEditorDirective } from 'ng2-ace';

@Component({
  selector: 'creator',
  inputs: ['project'],
  directives: [AceEditorDirective],
  template: `
  <div ace-editor id="editor" [text]="text" (textChanged)="onChange($event)" style="display:block; height: 80vh; width:100%"></div>
  `
})
export class CreatorComponent {
  constructor() {
    this.text = 'test';
    this.onChange = (data) => {
      console.log(data);
    }
  }
}
```
Important pieces to note in the HTML template: `[ace-editor]` attribute, `[text]` input, `(textChanged)` output. As per Ace, you must also make it a `display: block;` and give it a width, height, and id.

# TODO

Support themes and languages as an input.
