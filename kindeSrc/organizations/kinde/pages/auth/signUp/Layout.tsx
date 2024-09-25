import { KindeRootLayout } from "./_components/KindeRootLayout";
import { KindeCredit } from "./_components/KindeCredit";
import { AuthCard } from "./_components/AuthCard";
import { PromotionCard } from "../../_components/PromotionCard";
/*
This layout will be applied unless it is overriden specifically by a page or by
an organization
*/

export const Layout = () => {
  return (
    <KindeRootLayout>
      <div className="has-custom-bg-color l-auth-layout-container l-auth-layout-container--alignment-center">
        <div className="has-white-bg l-auth-layout">
          <div className="l-auth-layout__inner">
            <main className="l-auth-layout__main" id="main-content">
              <AuthCard>{/* {{ KINDE_WIDGET }} */}</AuthCard>
              <PromotionCard />
              <KindeCredit />
            </main>
          </div>
        </div>
      </div>
    </KindeRootLayout>
  );
};
