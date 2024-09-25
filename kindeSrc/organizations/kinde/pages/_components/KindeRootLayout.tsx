import { useKinde } from "@kinde/infrastructure";
import { DarkThemeStyleBlock } from "./DarkThemeStyleBlock";
import { BrandStyleBlock } from "./BrandStyleBlock";

export const KindeRootLayout = ({ children }) => {
  const { translations, session, tbd } = useKinde();
  return (
    <html
      lang={session.lang}
      rtl={session.isRightToLeft}
      className="kui-no-js"
      style="font-family: Inter, sans-serif;"
    >
      <head>
        <script nonce={tbd.nonce}>
          document.documentElement.classList.remove('kui-no-js');
        </script>
        <meta charset="utf-8" />
        <style nonce={tbd.nonce}>
            @font-face {
                font-family: Inter;
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url('{tbd.assets_path}/Inter-Regular.woff2') format('woff2');
            }
            @font-face {
                font-family: Inter;
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url('{tbd.assets_path}/Inter-Medium.woff2') format('woff2');
            }
        </style>
        <title>{translations.pageTitle}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="robots" content="noindex" />

        <BrandStyleBlock />
        <DarkThemeStyleBlock />

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
        <div class="l-base-layout" id="root" data-roast-root="/admin">
        {children}</div>
      </body>
    </html>
  );
};
