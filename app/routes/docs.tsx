import { Outlet } from "@remix-run/react";
import Footer from "~/components/Footer";
import Nav from "~/components/Nav";
import Page from "~/components/Page";

export default function DocsLayout() {
  return (
    <Page theme="light" className="">
      <Nav />

      <div className="fixed top-16 flex flex-col w-48 p-4">
        <a href="/docs/getting-started">Getting Started</a>

        <a href="/docs/recommendations">Recommendations</a>

        <a href="/docs/tasks">Tasks</a>

        <a href="/docs/views">Views</a>

        {/* <a href="/docs/settings">Settings</a> */}
      </div>

      {/* <div className=""> */}
      <div className="w-full overflow-x-hidden pl-48">
        <div className="flex flex-col items-center">
          <div className="max-w-3xl px-4">
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
