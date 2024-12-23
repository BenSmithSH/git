import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecordInventoryComponent } from "./components/record-inventory/record-inventory.component";

@Component({
  selector: 'invIntel-root',
  imports: [RouterOutlet, RecordInventoryComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <invIntel-record-inventory></invIntel-record-inventory>
    <router-outlet />
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'inventoryIntel';
}
