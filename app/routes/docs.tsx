import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { Outlet } from "@remix-run/react";
import { useState } from "react";
import { ChevronDown } from "react-feather";
import Footer from "~/components/Footer";
import Nav from "~/components/Nav";
import Page from "~/components/Page";

const linkList = (
  <>
    <a href="/docs/getting-started">Getting Started</a>

    <a href="/docs/recommendations">Recommendations</a>

    <a href="/docs/tasks">Tasks</a>

    <a href="/docs/views">Views</a>

    {/* <a href="/docs/settings">Settings</a> */}
  </>
);

function WideScreenDocsNav() {
  return (
    <div className="max-md:hidden fixed top-16 flex flex-col w-48 p-4">
      {linkList}
    </div>
  );
}

function NarrowScreenDocsNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className="md:hidden w-full flex flex-row justify-center mb-2">
        <button
          id="docs-nav__page-button"
          onClick={() => setIsOpen(true)}
          className="flex flex-row items-center border border-ondark rounded-md ml-4 pr-2 pl-1"
        >
          <div className="h-6 w-6 shrink-0">
            <ChevronDown strokeWidth="2px" className="h-full w-full" />
          </div>
          <span className="">Change Page</span>
        </button>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="md:hidden relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/50" />

        <div className="fixed inset-0 flex w-screen items-start justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-4 rounded-xl">
            <DialogTitle className="font-bold mt-0">Docs Pages</DialogTitle>

            <div className="flex flex-col">{linkList}</div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default function DocsLayout() {
  const [isDocsNavOpen, setIsDocsNavOpen] = useState(false);

  return (
    <Page theme="light" className="">
      <Nav
        subNav={
          <NarrowScreenDocsNav
            isOpen={isDocsNavOpen}
            setIsOpen={setIsDocsNavOpen}
          />
        }
      />

      {/* <DocsNav isOpen={isDocsNavOpen} setIsOpen={setIsDocsNavOpen} /> */}

      <WideScreenDocsNav />

      {/* <div className=""> */}
      <div className="w-full max-w-full md:overflow-x-hidden md:pl-48">
        <div className="flex flex-col items-center">
          <div className="md:max-w-3xl px-4 ">
            <Outlet />
          </div>

          <Footer />
        </div>

        {/* <div className="pl-48">
          </div> */}
      </div>

      {/* </div> */}
    </Page>
  );
}
