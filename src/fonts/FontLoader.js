// FontLoader.js

import React, { useEffect } from "react";
import WebFont from "webfontloader";

const FontLoader = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto:300,400,500,700", "Nunito:400,700"], // Przykładowe czcionki Google Fonts
      },
    });
  }, []);

  return <></>; // Komponent nie renderuje niczego, ponieważ służy tylko do załadowania czcionek.
};

export default FontLoader;
