const partners = [
  "Urban Freight Lab",
  "Public Health Department",
  "Paul Allen School",
  "Ridwell",
  "University District Food Bank",
  "Cascade Bike Club",
  "Pedaling Relief Project",
];

export default function PartnerLogos() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {partners.map((partner) => (
        <div
          key={partner}
          className="flex min-h-[96px] items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-center text-xs font-medium uppercase tracking-wide text-zinc-500 shadow-sm"
        >
          {partner}
        </div>
      ))}
    </div>
  );
}
