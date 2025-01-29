import { type ReactNode } from "react";

export default function Button({
  theme = "general",
  children,
  ...rest
}: {
  theme?: "general" | "general-200" | "accent" | "light";
  children: ReactNode;
} & JSX.IntrinsicElements["button"]) {
  const colorClasses =
    theme === "general"
      ? "bg-general text-ondark"
      : theme === "accent"
      ? "bg-accent text-ondark"
      : theme === "general-200"
      ? "bg-general-200 text-onlight"
      : "bg-background text-onlight";
  return (
    <button
      {...rest}
      type="button"
      className={`rounded-lg px-4 py-2 text-xl font-semibold shadow-xl ${colorClasses}`}
    >
      {children}
    </button>
  );
}
