import { observable } from 'mobx';

export class PinsStore {
  @observable
  public pins: any[] = [{}];
}

export const pinsStore = new PinsStore();
