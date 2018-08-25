import { observable, action } from 'mobx';

export class ApiKeyStore {
  constructor() {
    const key = localStorage.getItem('apiKey');
    if (!!key) {
      this.setKey(key);
      this.ready = true;
    }
  }

  @observable
  public key: string = "";

  @observable
  public ready: boolean = false;

  @action
  public setKey(value: string) {
    this.key = value;
  }
  
  @action
  public save() {
    this.ready = !!this.key;
    localStorage.setItem('apiKey', this.key);
  }
}

export const apiKeyStore = new ApiKeyStore();
