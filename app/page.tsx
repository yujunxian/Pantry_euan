export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-lg font-semibold">Pantry Map</div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <span>My Pantry</span>
            <span>Food Donation Guide</span>
            <span>About Us</span>
            <span>Join Us</span>
          </nav>
        </div>
      </header>
      <main className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-8 md:grid-cols-[280px_1fr]">
        <section className="h-[520px] rounded-lg bg-zinc-200" />
        <section className="h-[520px] rounded-lg bg-zinc-200" />
      </main>
    </div>
  );
}
