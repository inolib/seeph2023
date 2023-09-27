const replacementsByLocale = (locale: string) => {
  switch (locale) {
    case "fr-FR": {
      return {
        " :": " :",
        " ;": " ;",
        " ?": " ?",
        " !": " !",
        "a'": "a’",
        "b'": "b’",
        "c'": "c’",
        "d'": "d’",
        "e'": "e’",
        "f'": "f’",
        "g'": "g’",
        "h'": "h’",
        "i'": "i’",
        "j'": "j’",
        "k'": "k’",
        "l'": "l’",
        "m'": "m’",
        "n'": "n’",
        "o'": "o’",
        "p'": "p’",
        "q'": "q’",
        "r'": "r’",
        "s'": "s’",
        "t'": "t’",
        "u'": "u’",
        "v'": "v’",
        "w'": "w’",
        "x'": "x’",
        "y'": "y’",
        "z'": "z’",
      };
    }
  }
};

export const formatForLocale = (string: string, locale: string) => {
  const replacements = replacementsByLocale(locale);

  if (replacements === undefined) {
    throw new Error(""); // TODO: error message
  }

  for (const [key, value] of Object.entries(replacements)) {
    string = string.replaceAll(key, value);
  }

  return string;
};
