import { useKinde } from "@kinde/infrastructure";

export const AuthCard = ({ children }) => {
  const { translations, business } = useKinde();
  return (
    <article className="l-auth-layout-card">
      <header className="l-auth-layout-card__header">
        <div className="l-auth-layout-card__branding">
          <div className="l-auth-layout-card__logo">
            <img src={business.logo} alt="Kinde logo" />
          </div>
        </div>
        <h1 className="kui-heading kui-util-type-headline-3">
          {translations.pageHeading}
        </h1>
        <div className="l-auth-layout-card__subtitle">
          <p>{translations.pageDescription}</p>
        </div>
      </header>
      <div className="l-auth-layout-card__content">{children}</div>
    </article>
  );
};
