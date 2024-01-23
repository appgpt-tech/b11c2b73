// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"Children":{"name":"Children","fields":{"Childid":"Childid","Name":"Name","Id":"Id"}},"Lessons":{"name":"Lessons","fields":{"Lessonid":"Lessonid","Topic":"Topic","Costperlesson":"Costperlesson","Id":"Id"}},"Attendance":{"name":"Attendance","fields":{"Id":"Id","Childid":"Childid","Lessonid":"Lessonid","Dateoflesson":"Dateoflesson"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    