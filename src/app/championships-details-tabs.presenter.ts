import { Injectable } from '@angular/core';
import { ViewModel } from './filtered-listbox/filtered-listbox';


export interface Team {
  id: string;
  ageCategory: string;
  name: string;
  gender: string;
}


export interface ChampionshipsDetailsTabsViewModel {
  teamsOptions: { id: string; label: string; selected: boolean }[];
  teamsFilters: {
    age: { value: string; label: string; isChecked: boolean }[];
    gender: { value: string; label: string; isChecked: boolean }[];
  };
  currentTeamId: string | null;
}

@Injectable()
export class Presenter {
  #viewModel!: { set: (viewModel: ViewModel) => void };

  setViewModel(viewModel: { set: (viewModel: ViewModel) => void }) {
    this.#viewModel = viewModel;
  }

  present(changes: {
    filteredTeams: Team[];
    filters: ViewModel['filters'];
    currentTeamId: string;
  }): void {
    const { filteredTeams, filters } = changes;
    const currentTeamId = changes.currentTeamId;
    const options = filteredTeams.map((team) => ({
      id: team.id,
      label: `${team.name} (${team.gender})`,
      selected: team.id === currentTeamId,
    }));

    this.#viewModel.set({ options, filters, currentTeamId });
  }
}
