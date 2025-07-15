import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilteredListbox } from './filtered-listbox/filtered-listbox';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FilteredListbox],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mat-chip-option-selected');
}
