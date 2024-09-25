import { useKinde } from "@kinde/infrastructure";

const getLightBlock = ({ branding }) => {
  return `
		:root {
		  --business-primary-button-background-color: ${
        branding.primaryButtonBackgroundColor
      };
		  --business-primary-button-color: ${branding.primaryButtonColor};
		  --business-button-border-radius: ${branding.buttonBorderRadius / 16}rem;
		  --business-card-border-radius: ${branding.cardBorderRadius / 16}rem;
		  --business-input-border-radius: ${branding.inputBorderRadius / 16}rem;
		  --business-link-color: ${branding.linkColor};
		  --business-body-background-color: ${branding.bodyBackgroundColor};
		  --token-color-layout-auth-type-credit-base: #636363;
		  --token-color-layout-auth-type-credit-link: #0f0f0f;
		  --token-color-layout-auth-background-card: #fff;
		}`;
};

const getDarkBlock = ({ branding }) => {
  return `
		:root {
			--business-primary-button-background-color: ${
        branding.primaryButtonBackgroundColorDark
      };
			--business-primary-button-color: ${branding.primaryButtonColorDark};
			--business-button-border-radius: ${branding.buttonBorderRadius / 16}rem;
			--business-card-border-radius: ${branding.cardBorderRadius / 16}rem;
			--business-input-border-radius: ${branding.inputBorderRadius / 16}rem;
			--business-link-color: ${branding.linkColorDark};
			--business-body-background-color: ${branding.bodyBackgroundColorDark};
			--token-color-layout-auth-type-credit-link: #fff;
			--token-color-layout-auth-type-credit-base: #fff;
			--token-color-layout-auth-background-card: #0f0f0f;
		}`;
};

export const BrandStyleBlock = () => {
  const { business, organization, tbd } = useKinde();

  const branding = Object.assign({}, organization.branding, business.branding);
  const themeCode = branding.themeCode || "light";

  return (
    <style nonce={tbd.nonce}>
      {["user_preference", "light"].includes(themeCode)
        ? getLightBlock({ branding })
        : null}

      {themeCode === "dark" ? getDarkBlock({ branding }) : null}

      {themeCode === "user_preference"
        ? `@media (prefers-color-scheme: dark) {${getDarkBlock({ branding })}}`
        : null}
    </style>
  );
};
