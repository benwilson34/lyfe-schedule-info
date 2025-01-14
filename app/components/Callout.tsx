import type { ReactNode } from "react";
import { AlertTriangle, Info } from "react-feather";

type CalloutType = "warning" | "info";

export default function Callout({
  type = "info",
  children,
}: {
  type?: CalloutType;
  children: ReactNode;
}) {
  const Icon = type === "info" ? Info : AlertTriangle;

  return (
    <div className="callout flex flex-col xs:flex-row gap-4 items-center w-full border border-primary rounded-xl px-4 py-4 xs:py-2 mb-4">
      <div className="h-12 w-12 shrink-0">
        <Icon strokeWidth="1px" className="h-full w-full" />
      </div>

      <div className="grow">{children}</div>
    </div>
  );
}
