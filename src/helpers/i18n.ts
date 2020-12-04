import { Language, Translation } from "../types";

export const useLocalized = (language?: Language) => {
  return { t: localized(language || "en"), c: cleaned };
};

export const cleaned = (s: string) => {
  return s?.replace(/ *\([^)]*\) */g, "") || "";
};

export const localized = (language: Language) => (
  translation?: Translation
) => {
  if (!translation) {
    return "";
  }

  return translation[language] || translation.en;
};
