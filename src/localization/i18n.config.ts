import React, { useEffect, useState } from "react";

import es from "./es";
import en from "./en";
import fr from "./fr";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

i18n.use(initReactI18next).init({
	resources: {
		es: {
			translation: es,
		},
		en: {
			translation: en,
		},
		fr: {
			translation: fr,
		},
	},
	lng: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
	},
});
