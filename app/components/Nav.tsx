import { useState } from "react";
import { APP_URL, DEMO_URL } from "~/urls";

export default function Nav({ subNav = null }: { subNav?: React.ReactNode }) {
  const [isMobileNavMenuOpen, setIsMobileNavMenuOpen] = useState(false);

  function toggleMobileNavMenu() {
    setIsMobileNavMenuOpen((isMobileNavMenuOpen) => !isMobileNavMenuOpen);
  }

  function renderNavOptions() {
    return (
      <>
        <a className="text-ondark no-underline" href="/docs">
          Docs
        </a>

        <span className="max-md:hidden">•</span>

        <a className="text-ondark no-underline" href={DEMO_URL}>
          Try the Demo
        </a>

        <span className="max-md:hidden">•</span>

        <a className="text-ondark no-underline" href={APP_URL}>
          Sign In
        </a>
      </>
    );
  }

  return (
    <div className="nav w-full sticky top-0 z-30 flex flex-col items-center bg-general-500 text-ondark">
      <div className="w-full flex flex-row justify-between items-center gap-4 py-4 px-8">
        <div className="font-bold text-2xl">
          <a href="/" className="no-underline text-ondark">
            Lyfe<span className="font-light">Schedule</span>
          </a>
        </div>

        <div className="flex flex-row gap-4 max-md:hidden">
          {renderNavOptions()}
        </div>

        <div className="md:hidden">
          <button
            className={`nav-icon ${
              isMobileNavMenuOpen ? "nav-icon--open" : ""
            }`}
            onClick={toggleMobileNavMenu}
          >
            <span></span>
          </button>

          <div
            className={`nav-menu w-full flex flex-row justify-center text-center -z-10 mt-14 bg-general animate ${
              isMobileNavMenuOpen ? "open" : ""
            }`}
          >
            <div className="w-fit h-fit flex flex-col items-center rounded-xl p-8 text-3xl gap-6">
              {renderNavOptions()}
            </div>
          </div>
        </div>
      </div>

      <div>{subNav}</div>
    </div>
  );
}
