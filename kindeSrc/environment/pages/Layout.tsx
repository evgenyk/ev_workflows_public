import { RootLayout } from "./_components/RootLayout";
import { KindeCredit } from "./_components/KindeCredit";
import { AuthCard } from "./_components/AuthCard";
import React from "react";
/*
This layout will be applied unless it is overriden specifically by a page or by
an organization
*/

export const Layout = () => {
  const { session } = useKinde();
  return (
    <RootLayout>
        <div className="c-auth-widget">{/* {{ KINDE_WIDGET }} */}</div>
    </RootLayout>
  );
};

