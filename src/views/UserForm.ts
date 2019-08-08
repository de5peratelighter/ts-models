import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'mouseenter:h1': this.onHeaderHover,
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick
    }
  }

  onHeaderHover = (): void => {
    console.log('hover')
  }
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
    console.log('clicked ')
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  }

  template(): string {
    return `
      <div> 
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input/>
        <button class="set-name">Change name</button>
        <button class="set-age">Set random age</div>
      </div> 
    `;
  }

}