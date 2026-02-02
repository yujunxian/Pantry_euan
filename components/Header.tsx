import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div className="text-lg font-semibold">Pantry Map</div>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <span>My Pantry</span>
          <Link href="/food-donation-guide">Pantry Donation Guide</Link>
          <Link href="/about-us">About Us</Link>
          <span>Join Us</span>
        </nav>
      </div>
    </header>
  );
}
