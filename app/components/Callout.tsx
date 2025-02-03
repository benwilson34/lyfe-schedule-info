import type { ReactNode } from "react";
import { AlertTriangle, Info, Loader } from "react-feather";

type CalloutType = "warning" | "info" | "todo";

export default function Callout({
  type = "info",
  children,
}: {
  type?: CalloutType;
  children: ReactNode;
}) {
  function getIcon(type: CalloutType) {
    switch (type) {
      case "info":
        return Info;
      case "warning":
        return AlertTriangle;
      case "todo":
        return Loader;
      default:
        throw new Error(`No icon found for type: ${type}`);
    }
  }

  const Icon = getIcon(type);

  return (
    <div className="callout flex flex-col xs:flex-row gap-4 items-center w-full border border-general rounded-xl px-4 py-4 xs:py-2 mb-4">
      <div className="h-12 w-12 shrink-0">
        <Icon strokeWidth="1px" className="h-full w-full" />
      </div>

      <div className="grow">{children}</div>
    </div>
  );
}
