import { Injectable } from '@angular/core';
import { Presenter } from './championships-details-tabs.presenter';
import { ViewModel } from './filtered-listbox/filtered-listbox';
import { TeamState } from './team.state';


@Injectable()
export class UpdateTabsFiltersUsecase {
  readonly #teamState = new TeamState();

  #filters: ViewModel['filters'] = [
    { value: 'female' as const, label: 'Women', isChecked: true },
    { value: 'male' as const, label: 'Man', isChecked: true },
  ];

  #teams = this.#teamState.teams;

  execute(
    updatedFilter: { isChecked: boolean; filterValue: string } | null,
    selectedTeamId: string | null,
    presenter: Presenter,
  ) {
    this.#filters = this.#updateTeamsFilters(updatedFilter);
    const filteredTeams = this.#getFilteredTeams();
    const stateTeamId = selectedTeamId ?? this.#teamState.currentTeamId();

    const isCurrentTeamStillAvailable = filteredTeams.find(({ id }) => id === stateTeamId);
    const currentTeamId = isCurrentTeamStillAvailable ? stateTeamId : filteredTeams[0]?.id;
    if (currentTeamId && !isCurrentTeamStillAvailable) {
      this.#teamState.setCurrentTeamId(currentTeamId);
    }

    const changes = { filteredTeams, currentTeamId, filters: this.#filters };
    presenter.present(changes);
  }

  #updateTeamsFilters(updatedFilter: { isChecked: boolean; filterValue: string } | null) {
    if (updatedFilter === null) {
      const stateTeamId = this.#teamState.currentTeamId();
      const filteredTeams = this.#getFilteredTeams();
      const isCurrentTeamAvailable = filteredTeams.find(({ id }) => id === stateTeamId);
      if (!isCurrentTeamAvailable) {
        const currentTeam = this.#teamState.currentTeam;

        return [...this.#filters.map((teamFilter) => {
          if (teamFilter.value === currentTeam?.gender) {
            teamFilter.isChecked = true;
          }
          return teamFilter;
        })];
      }
    }

    return updatedFilter === null
      ? [...this.#filters]
      : [...this.#filters.map((teamFilter) => {
        if (teamFilter.value === updatedFilter.filterValue) {
          teamFilter.isChecked = updatedFilter.isChecked;
        }
        return teamFilter;
      })];
  }

  #getFilteredTeams() {
    const selectedFilters = this.#filters
      .filter((teamFilter) => teamFilter.isChecked)
      .map(({ value }) => value);


    return this.#teams().filter((team) => {
      const hasNoFilters = selectedFilters.length === 0;
      return (
        hasNoFilters ||
        selectedFilters.length === 0 ||
        selectedFilters.includes(team.gender) ||
        selectedFilters.includes(team.gender)
      );
    });
  }
}
