import React from "react";
import { RootLayout } from "./_components/RootLayout";
import { useKinde } from "@kinde/infrastructure";
/*
This layout will be applied to sign up pages only
*/

const customTranslationMap = {
  en: {
    reasons: "10 reasons to use Kinde",
  },
  es: {
    reasons: "10 razones para usar Kinde",
  },
};

export const Layout = () => {
  const { session } = useKinde();
  return (
    <RootLayout>
      <div className="c-auth-widget">{/* {{ KINDE_WIDGET }} */}</div>

      <aside>
        <h2>{customTranslationMap[session.lang].reasons}</h2>
      </aside>
    </RootLayout>
  );
};
