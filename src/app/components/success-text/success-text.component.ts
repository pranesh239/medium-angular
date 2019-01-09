import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-text',
  template: `
   <div class="bg-success text-white p-3 rounded">
      <ng-content></ng-content>
   </div>
  `,
  styleUrls: ['./success-text.component.scss']
})
export class SuccessTextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
