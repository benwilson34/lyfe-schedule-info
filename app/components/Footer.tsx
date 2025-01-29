export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-10 text-center italic text-xs">
      <div className="border-general-200 w-full mb-4"></div>© {currentYear}{" "}
      LyfeSchedule
      {/* This is needed to properly space after the footer when the page overflows */}
      <div className="mt-4"></div>
    </div>
  );
}
