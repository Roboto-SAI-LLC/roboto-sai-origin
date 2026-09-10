import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { LangProvider } from "@/lib/i18n";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { APP_NAME, APP_SHORT_NAME, SITE_URL } from "@/lib/site";
import appCss from "../styles.css?url";

const DESCRIPTION =
  "Onomastic methodology from Roboto SAI: the 1274 Vila-real network, the Villarreal name, three clocks, Gur Aryeh, and the Temple on the Plana.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#f3eee4" },
      { name: "author", content: "Roboto SAI research with a Copilot" },
      { name: "robots", content: "index, follow" },
      { name: "application-name", content: APP_SHORT_NAME },
      { name: "apple-mobile-web-app-title", content: APP_SHORT_NAME },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,560;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Frank+Ruhl+Libre:ital,wght@0,400;0,500;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400;1,8..60,600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "prefetch", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/icon-192.png" },
      { rel: "prefetch", href: "/__grok/icon-180.png" },
      { rel: "alternate", type: "text/plain", href: "/llms.txt", title: "Plain-text research brief" },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg font-serif">
        <PreviewHostBridge />
        <AuthProvider>
          <LangProvider>
            <Outlet />
          </LangProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
