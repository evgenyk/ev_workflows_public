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

	html .l-auth-layout-card {
		color: #dbdbdb;
	}

	html .l-auth-layout-card .kui-custom-select__select,
	html .l-auth-layout-card .kui-label,
	html .l-auth-layout-card .kui-control-label,
	html .l-auth-layout-card .kui-heading {
		color: #f6f6f6;
	}

	html .kui-custom-select-flag-mask .kui-custom-select__select {
		color: transparent;
	}

	html .l-auth-layout-card option {
		color: #2b2b2b;
	}

	html .l-auth-layout-card .kui-custom-select,
	html .l-auth-layout-card .kui-input-field__input {
		background-color: transparent;
		border-color: #636363;
		color: #f6f6f6;
	}

	html .l-auth-layout-card .kui-form-field-inline__input[type="checkbox"]:hover,
	html .l-auth-layout-card .kui-form-field-inline__input[type="checkbox"]:checked {
		border-color: #ababab;
	}

	html .l-auth-layout-card .kui-custom-select-flag-mask .kui-custom-select {
		border: 1px solid #636363;
	}

	html .l-auth-layout-card .kui-input-field__inner-add-on-end {
		border-color: #636363;
		color: #636363;
	}

	html .l-auth-layout-card .kui-input-field__add-on-end-button:focus-visible,
	html .l-auth-layout-card .kui-input-field__add-on-end-button:hover,
	html .l-auth-layout-card .kui-input-field__add-on-end-button:active {
		background-color: #222;
		color: #ababab;
	}

	html .l-auth-layout-card .kui-form-field-error-msg {
		color: #e13d3d;
	}

	html .l-auth-layout-card .c-social-enterprise-sign-ins__or {
		color: #ababab;
	}

	/* social button */
	html .l-auth-layout-card .kui-button--secondary {
		background-color: #2b2b2b;
		color: #f6f6f6;
	}

	html .l-auth-layout-card .kui-button--secondary.is-loading,
	html .l-auth-layout-card .kui-button--secondary:active,
	html .l-auth-layout-card .kui-button--secondary:hover {
		background-color: #383838;
	}

	html .l-auth-layout-card .kui-button--secondary .kui-spinner {
		--color-spinner-cover: #383838;
	}

	/* cancel button */
	html .l-auth-layout-card .kui-button--uncontained {
		color: #f6f6f6;
	}

	html .l-auth-layout-card .kui-button--uncontained.is-loading,
	html .l-auth-layout-card .kui-button--uncontained:active,
	html .l-auth-layout-card .kui-button--uncontained:hover {
		background-color: #2b2b2b;
	}

	html .l-auth-layout-card .kui-button--uncontained .kui-spinner {
		--color-spinner-cover: #383838;
	}`;
};

export const DarkThemeStyleBlock = () => {
  const { business, organization, tbd } = useKinde();

  const branding = Object.assign({}, organization.branding, business.branding);
  const themeCode = branding.themeCode || "light";

  if (themeCode === "light") return null;

  return (
    <style nonce={tbd.nonce}>
      {themeCode === "dark" ? getDarkBlock() : null}

      {themeCode === "user_preference"
        ? `@media (prefers-color-scheme: dark) {${getDarkBlock()}}`
        : null}
    </style>
  );
};
