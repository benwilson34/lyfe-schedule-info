import { APP_URL, DEMO_URL } from "~/urls";

export default function Nav() {
  return (
    <div className="nav w-full sticky top-0 z-30 flex flex-row justify-between items-center gap-4 py-4 px-8 bg-general-500 text-ondark">
      <div className="font-bold text-2xl">
        <a href="/" className="no-underline text-ondark">
          Lyfe<span className="font-light">Schedule</span>
        </a>
      </div>

      <div className="flex flex-row gap-4">
        <a className="text-ondark no-underline" href="/docs">
          Docs
        </a>

        <span>•</span>

        <a className="text-ondark no-underline" href={DEMO_URL}>
          Try the Demo
        </a>

        <span>•</span>

        <a className="text-ondark no-underline" href={APP_URL}>
          Sign In
        </a>
      </div>
    </div>
  );
}
