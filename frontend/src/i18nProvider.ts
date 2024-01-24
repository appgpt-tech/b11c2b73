// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"Student":{"name":"student","fields":{"Id":"Id","Name":"Name","Surname":"Surname","Email":"Email"}},"Activity":{"name":"activity","fields":{"Id":"Id","Description":"Description","Nameoftutor":"Nameoftutor","Costperlesson":"Costperlesson"}},"Attendance":{"name":"attendance","fields":{"Id":"Id","Date":"Date","Time":"Time","Studentid":"Studentid","Activityid":"Activityid"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    