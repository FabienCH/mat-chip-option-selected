import { Injectable, signal, WritableSignal } from '@angular/core';
import { Team } from './championships-details-tabs.presenter';

@Injectable({ providedIn: 'root' })
export class TeamState {
  readonly #teams: WritableSignal<Team[]> = signal([
    {
      id: '3bfdb425-cc05-480f-a495-9741eda526cf',
      name: 'Team 1',
      ageCategory: 'young',
      gender: 'male',
    },
    {
      id: '3bfdb425-cc05-480f-a495-9741eda526ce',
      name: 'Team 2',
      ageCategory: 'adult',
      gender: 'male',
    },
    {
      id: '0aa27806-4078-44df-ab73-654d93df8eeb',
      name: 'Team 3',
      ageCategory: 'adult',
      gender: 'male',
    },
    {
      id: 'a3dd4442-dac3-4c19-b4ba-caab1f0633a4',
      name: 'Team 1',
      ageCategory: 'adult',
      gender: 'female',
    },
  ]);
  readonly #currentTeamId: WritableSignal<string> = signal('');

  get teams() {
    return this.#teams.asReadonly();
  }

  get currentTeamId() {
    return this.#currentTeamId.asReadonly();
  }

  get currentTeam() {
    const currentTeamId = this.#currentTeamId();
    return this.#teams().find((team) => team.id === currentTeamId);
  }

  setCurrentTeamId(teamId: string): void {
    this.#currentTeamId.set(teamId);
  }
}
