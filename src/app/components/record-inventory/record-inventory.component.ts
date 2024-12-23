import { Component } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button'
@Component({
  selector: 'invIntel-record-inventory',
  imports: [ButtonModule],
  template: `
    <p>
      record-inventory works!
    </p>
    <div>
      <p-button label="check"/>
    </div>
  `,
  styles: ``
})
export class RecordInventoryComponent {

}
