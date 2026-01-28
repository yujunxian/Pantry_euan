"use client";

type AboutUsTabsProps = {
  active: "about" | "action";
  onChange: (tab: "about" | "action") => void;
};

export default function AboutUsTabs({ active, onChange }: AboutUsTabsProps) {
  return (
    <nav
      className="mt-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white p-1 text-sm shadow-sm"
      aria-label="About us sections"
    >
      <button
        type="button"
        className={
          active === "about"
            ? "cursor-pointer rounded-full bg-zinc-100 px-3 py-1 font-medium text-zinc-900"
            : "cursor-pointer rounded-full px-3 py-1 text-zinc-700 hover:text-zinc-900"
        }
        onClick={() => onChange("about")}
      >
        About Us
      </button>
      <button
        type="button"
        className={
          active === "action"
            ? "cursor-pointer rounded-full bg-zinc-100 px-3 py-1 font-medium text-zinc-900"
            : "cursor-pointer rounded-full px-3 py-1 text-zinc-700 hover:text-zinc-900"
        }
        onClick={() => onChange("action")}
      >
        Take Action
      </button>
    </nav>
  );
}
