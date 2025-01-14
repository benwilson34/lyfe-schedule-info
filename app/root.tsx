import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import "./highlight-js-monokai-sublime.css";
import asciiArtLogoString from "./ascii-art-logo.txt?raw";
import React from "react";

// TODO remove these fonts?
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-10 text-center italic text-xs">
      <div className="border-b border-raised w-full mb-4"></div>
      No rights reserved {currentYear}
      {/* This is needed to properly space after the footer when the page overflows */}
      <div className="mt-4"></div>
    </div>
  );
}

export default function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState<boolean>(false);
  const toggleIsMobileNavOpen = () =>
    setIsMobileNavOpen((isCurrentlyOpen) => !isCurrentlyOpen);

  function renderDesktopNav() {
    return (
      <div
        id="desktop-nav"
        className="hidden md:flex md:h-full flex-col justify-center mx-4"
      >
        <div className="h-fit grow-0 border-primary border rounded-xl p-2 -rotate-2">
          <div className="w-full flex flex-row justify-center">
            <pre className="ascii-art mt-0 mb-4">{asciiArtLogoString}</pre>
          </div>

          <h1 className="heading-link text-nowrap text-4xl mt-4 mb-1 mx-1">
            <a href="/">ben&apos;z house</a>
          </h1>

          <p className="text-center leading-none">
            full-stack web dev
            <br />
            and more
          </p>

          <div className="flex flex-row">
            <pre className="my-0">{"~> "}</pre>
            <a href="/projects">projects</a>
          </div>

          <div className="flex flex-row">
            <pre className="my-0">{"~> "}</pre>
            <a
              href="../WilsonBenjamin_Resume_2024-10-21_WebAppFocus.pdf"
              download="WilsonBenjamin_Resume_2024-10-21.pdf"
            >
              résumé
            </a>
            <span className="bg-primary h-fit ml-2 px-2 text-background rounded-lg font-semibold">
              hire me!!
            </span>
          </div>

          <div className="flex flex-row">
            <pre className="my-0">{"~> "}</pre>
            <a
              href="https://www.linkedin.com/in/benwilson34/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
          </div>

          <div className="flex flex-row">
            <pre className="my-0">{"~> "}</pre>
            <a
              href="https://github.com/benwilson34"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </div>
        </div>
      </div>
    );
  }

  function renderMobileNav() {
    return (
      <>
        <div
          id="mobile-nav"
          className="w-full flex md:hidden flex-col px-4 h-14 bg-background z-50 fixed"
        >
          <div className="grow flex flex-row items-center justify-between">
            <h1 className="text-nowrap text-left text-2xl mt-0 -rotate-3 relative top-1">
              <a href="/" className="no-underline text-primary">
                ben&apos;z house
              </a>
            </h1>

            <button
              className={`nav-icon ${isMobileNavOpen ? "nav-icon--open" : ""}`}
              onClick={toggleIsMobileNavOpen}
            >
              <span></span>
            </button>
          </div>

          <div className="border-b border-raised"></div>
        </div>

        {/* TODO maybe there's a way to not duplicate this */}
        <div
          className={`nav-menu w-full flex md:hidden flex-row justify-center pt-14 z-40 bg-background animate ${
            isMobileNavOpen ? "open" : ""
          }`}
        >
          <div className="w-fit h-fit flex flex-col items-center rounded-xl p-2 text-3xl gap-6">
            <div className="w-full flex flex-row justify-center">
              <pre className="ascii-art">{asciiArtLogoString}</pre>
            </div>

            {/* <h1 className="text-nowrap text-4xl mt-4 mb-1 mx-1">
        <Link reloadDocument to="/" className="no-underline">
          ben&apos;z house
        </Link>
      </h1>

      <p className="text-center leading-none">
        full-stack web dev
        <br />
        and more
      </p> */}

            <div className="flex flex-row">
              {/* <pre className="mb-0">{"~> "}</pre> */}
              <a href="/projects">projects</a>
            </div>

            <div className="flex flex-row relative">
              {/* <pre className="mb-0">{"~> "}</pre> */}
              <a
                href="../WilsonBenjamin_Resume_2024-10-21_WebAppFocus.pdf"
                download="WilsonBenjamin_Resume_2024-10-21.pdf"
              >
                résumé
              </a>
              <span className="absolute left-full -top-2 bg-primary h-fit ml-2 px-2 py-2 text-xl text-background rounded-lg font-semibold -rotate-6 leading-none">
                hire me!!
              </span>
            </div>

            <div className="flex flex-row">
              {/* <pre className="mb-0">{"~> "}</pre> */}
              <a
                href="https://www.linkedin.com/in/benwilson34/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
            </div>

            <div className="flex flex-row">
              {/* <pre className="mb-0">{"~> "}</pre> */}
              <a
                href="https://github.com/benwilson34"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col md:flex-row w-full h-screen max-h-screen bg-background text-primary tracking-wider">
      {renderDesktopNav()}

      {renderMobileNav()}

      <div className="grow overflow-y-auto styled-scrollbars">
        <div className="flex flex-row justify-center min-h-full mt-14 md:mt-0">
          <div className="flex flex-col justify-between overflow-x-hidden">
            <div className="mdx-content px-4 pt-2 max-w-2xl">
              <div className="hidden md:block border-t border-raised mt-8"></div>

              <Outlet />
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
