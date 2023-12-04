import { LangStore } from '../modules/lang/LangStore';
import { createContext } from 'react';

class store {
  langStore;

  constructor() {
    this.langStore = new LangStore();
  }
}

export const rootStore = new store();
export const storesContext = createContext(rootStore);
