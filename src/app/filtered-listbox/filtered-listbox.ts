import { Component, inject, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { Presenter } from '../championships-details-tabs.presenter';
import { UpdateTabsFiltersUsecase } from '../update-tabs-filters';

export interface ViewModel {
  options: { id: string; label: string; selected: boolean }[];
  filters: { value: string; label: string; isChecked: boolean }[];
  currentTeamId: string | null;
}

@Component({
  selector: 'app-filtered-listbox',
  imports: [MatChipsModule,
    MatCheckboxModule,],
  providers: [Presenter, UpdateTabsFiltersUsecase],
  templateUrl: './filtered-listbox.html',
  styleUrl: './filtered-listbox.scss'
})
export class FilteredListbox {
  readonly #presenter = inject(Presenter);
  readonly #updateTabsFiltersUsecase = inject(UpdateTabsFiltersUsecase);

  readonly viewModel = signal<ViewModel | null>(null);

  constructor() {
    this.#presenter.setViewModel(this.viewModel);
    this.#updateTabsFiltersUsecase.execute(null, null, this.#presenter);
  }


  teamsFiltersChanged(isChecked: boolean, filterValue: string) {
    this.#updateTabsFiltersUsecase.execute(
      { isChecked, filterValue },
      null,
      this.#presenter,
    );


  }

  onSelectedTeamChange(event: MatChipListboxChange) {
    if (event.value) {
      this.#updateTabsFiltersUsecase.execute(null, event.value, this.#presenter);
    }
  }
}
