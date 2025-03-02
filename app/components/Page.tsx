import { ReactNode } from "react";

export default function Page({
  theme = "general",
  className = "",
  children,
}: {
  theme?: "general" | "light";
  className?: string;
  children: ReactNode;
}) {
  const colorClasses =
    theme === "general"
      ? "bg-general text-ondark"
      : "bg-background text-onlight";

  return (
    <div
      className={`w-screen max-w-screen h-screen max-h-screen overflow-y-auto overflow-x-hidden styled-scrollbars ${colorClasses} ${className}`}
    >
      {children}
    </div>
  );
}
