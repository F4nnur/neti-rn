import { Localization } from './LangAdapter';
import { LangType } from './LangType';
import LangLocalRepository from './LangLocalRepozitory';
export default class LangService {
  langLocal: LangLocalRepository;
  constructor() {
    this.langLocal = new LangLocalRepository();
  }
  changeLang = async (lang: LangType) => {
    await this.langLocal.set(lang);
    if (lang) {
      await Localization.changeLanguage(lang); // метод “из коробки” i18next
    }
  };
  getLang = async () => {
    return await this.langLocal.get();
  };
}
