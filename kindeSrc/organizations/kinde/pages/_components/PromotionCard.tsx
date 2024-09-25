export const PromotionCard = () => {
  return (
    <aside className="l-auth-layout-promotion-card-container">
      <article className="l-auth-layout-promotion-card">
        <div className="l-auth-layout-promotion-card__title">
          <h2 className="kui-heading kui-util-type-headline-2">
            Join 40,000 software teams building on Kinde
          </h2>
        </div>
        <div className="l-auth-layout-promotion-card__feature">
          <h3 className="kui-heading kui-util-type-headline-4">
            Secure your application in minutes
          </h3>
          <p className="l-auth-layout-promotion-card__feature-description kui-util-type-body-2">
            With SDKs for every major framework and language, integrate Kinde in
            minutes and add social logins, MFA, enterprise SSO and more.
          </p>
        </div>
        <div className="l-auth-layout-promotion-card__feature">
          <h3 className="kui-heading kui-util-type-headline-4">
            More than authentication
          </h3>
          <p className="l-auth-layout-promotion-card__feature-description kui-util-type-body-2">
            Manage your users, your feature releases, and your
            machine-to-machine connections, all from the Kinde dashboard.
          </p>
        </div>
        <div className="l-auth-layout-promotion-card__feature">
          <h3 className="kui-heading kui-util-type-headline-4">
            Start building, free
          </h3>
          <p className="l-auth-layout-promotion-card__feature-description kui-util-type-body-2">
            With Kinde’s free tier you can access MFA and other important auth
            features for free up to 10,500 MAU, forever. No credit card
            required.
          </p>
        </div>
        <figure className="l-auth-layout-promotion-card__quote-container">
          <div className="l-auth-layout-promotion-card__quote-avatar">
            <picture>
              <source
                srcset="/images/optimized/promotional_card/alex_gabites_2x.avif"
                type="image/avif"
              />
              <source
                srcset="/images/optimized/promotional_card/alex_gabites_2x.webp"
                type="image/webp"
              />
              <img
                className="kui-image kui-image--has-square-corners"
                src="/images/optimized/promotional_card/alex_gabites_2x.jpg"
                alt
                height="90"
                width="90"
              />
            </picture>
          </div>
          <blockquote className="kui-util-type-headline-4 l-auth-layout-promotion-card__quote">
            <p>
              “Painless to understand and set up&hellip; an absolute blessing.”
            </p>
          </blockquote>
          <figcaption className="l-auth-layout-promotion-card__quote-details kui-util-type-body-2">
            <span>Alex Gabites</span> <span>Uncommon Purpose</span>
          </figcaption>
        </figure>
      </article>
    </aside>
  );
};
