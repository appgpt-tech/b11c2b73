// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"User":{"name":"user","fields":{"Userid":"Userid","Email":"Email","Name":"Name","Id":"Id"}},"Card":{"name":"card","fields":{"Cardid":"Cardid","Cardname":"Cardname","Serial":"Serial","Price":"Price","Serialxref":"Serialxref","Id":"Id"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    