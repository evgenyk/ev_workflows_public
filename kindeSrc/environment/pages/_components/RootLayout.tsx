import { useKinde } from "@kinde/infrastructure";
import { Header } from "./Header";
import { Footer } from "./Footer";
import React from "react";

export const RootLayout = ({ children }) => {
  const { translations, session } = useKinde();
  return (
    <html lang={session.lang} className="bg-black">
      <head>
        <meta charset="utf-8" />
        <title>{translations.pageTitle} | Discover Best Buys </title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="noindex" />

        {/*
                    KINDE_HEAD adds
                    * CSRF meta tag
                    * Kinde required CSS
                    * Kinde required JS
                    * added as part of Kinde head

                */}

        {/* {{KINDE_HEAD}} */}
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
