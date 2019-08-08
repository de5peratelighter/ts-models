import axios, { AxiosResponse } from 'axios'
import { Eventing } from './Eventing';

export class Collection<T, D> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(
    public rootUrl: string,
    public deserialize: (json: D) => T
  ) {
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl)
      .then((response: AxiosResponse) => {
        console.log(response.data, this.rootUrl)
        response.data.forEach((value: D) => {
          this.models.push(this.deserialize(value));
        });

        this.trigger('change')
      })
  }
}