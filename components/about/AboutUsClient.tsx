"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import AboutUsTabs from "@/components/AboutUsTabs";
import PartnerLogos from "@/components/PartnerLogos";

const featureCards = [
  {
    title: "What this is",
    body:
      "A community-facing home for neighborhood micro-pantries and the people who support them.",
  },
  {
    title: "Why it matters",
    body:
      "Local support helps reduce food waste and strengthen care between neighbors.",
  },
  {
    title: "How it works",
    body:
      "Clear information helps people find pantries, donate well, and stay connected.",
  },
];

const values = [
  "Dignity and respect for every neighbor.",
  "Community-led care and collaboration.",
  "Clear, welcoming information for everyone.",
  "Practical support that meets everyday needs.",
  "Learning and listening as the work grows.",
];

const faqs = [
  {
    question: "Are micro-pantries open to everyone?",
    answer:
      "Most are open to the public and rely on community care to stay stocked.",
  },
  {
    question: "Can I donate if I do not run a pantry?",
    answer:
      "Yes. Anyone can contribute shelf-stable items or share helpful resources.",
  },
  {
    question: "Is this tool the only source of guidance?",
    answer: "No. Local organizers may have specific guidelines that come first.",
  },
  {
    question: "Will the information change over time?",
    answer: "Yes. This space is designed to grow with the community.",
  },
];

type AboutUsClientProps = {
  initialTab?: "about" | "action";
};

export default function AboutUsClient({ initialTab }: AboutUsClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const urlTab = tabParam === "action" ? "action" : "about";
  const [activeTab, setActiveTab] = useState<"about" | "action">(
    initialTab ?? urlTab
  );

  const handleTabChange = (tab: "about" | "action") => {
    setActiveTab(tab);
    router.push(`/about-us?tab=${tab}`, { scroll: false });
  };

  useEffect(() => {
    setActiveTab(urlTab);
  }, [urlTab]);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-8">
      <section className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            {activeTab === "about" ? (
              <>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  About us
                </p>
                <h1 className="mt-2 text-3xl font-semibold text-zinc-900">
                  About Us
                </h1>
                <p className="mt-2 text-lg font-semibold text-emerald-800">
                  Mapping kindness! Fighting food insecurity through
                  neighborhood micro-pantries
                </p>
                <p className="mt-3 max-w-2xl text-base text-zinc-700">
                  Our goal is to reduce food waste and fight food insecurity
                  through neighborhood micro-pantries. This online tool empowers
                  communities with information and data about micro-pantries and
                  food donations.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    aria-disabled="true"
                    className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm"
                    href="#"
                  >
                    Explore the map of neighborhood micro-pantries (Coming soon)
                  </a>
                  <Link
                    className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50"
                    href="/food-donation-guide"
                  >
                    Food Donation Guide
                  </Link>
                </div>
              </>
            ) : (
              <>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  Take action
                </p>
                <h1 className="mt-2 text-3xl font-semibold text-zinc-900">
                  Take Action!
                </h1>
                <p className="mt-3 max-w-2xl text-base text-zinc-700">
                  Small, thoughtful actions help keep neighborhood micro-pantries
                  welcoming and well supported.
                </p>
              </>
            )}
            <AboutUsTabs active={activeTab} onChange={handleTabChange} />
          </div>
          <div className="relative hidden h-48 items-center justify-center md:flex">
            <div className="absolute right-10 top-0 h-28 w-28 rounded-full bg-emerald-100" />
            <div className="absolute bottom-0 left-8 h-20 w-20 rounded-full bg-emerald-200/70" />
            <div className="relative h-40 w-56 rounded-2xl border border-emerald-100 bg-white shadow-sm">
              <div className="absolute left-4 top-4 h-3 w-24 rounded-full bg-emerald-100" />
              <div className="absolute left-4 top-10 h-3 w-16 rounded-full bg-emerald-100" />
              <div className="absolute left-4 top-16 h-3 w-28 rounded-full bg-emerald-100" />
              <div className="absolute bottom-4 right-4 h-10 w-10 rounded-xl bg-emerald-200/70" />
            </div>
          </div>
        </div>
      </section>

      {activeTab === "about" ? (
        <>
          <section className="mt-10 grid gap-4 md:grid-cols-3">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
              >
                <h2 className="text-base font-semibold text-zinc-900">
                  {card.title}
                </h2>
                <p className="mt-2">{card.body}</p>
              </div>
            ))}
          </section>

          <section className="mt-10 max-w-3xl">
            <h2 className="text-xl font-semibold text-zinc-900">
              What are neighborhood micro-pantries?
            </h2>
            <p className="mt-3 text-base text-zinc-700">
              Neighborhood micro-pantries are small, community-supported spaces
              where people can leave or take food and essentials. They are built
              on trust, care, and the idea that neighbors can support one
              another directly.
            </p>
          </section>

          <section className="mt-8 max-w-3xl">
            <h2 className="text-xl font-semibold text-zinc-900">
              What does this tool do?
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-zinc-700">
              <li>Find the nearest micro-pantry to you.</li>
              <li>Post a donation and snap a picture of what you donated.</li>
              <li>
                Ask for help / add items you would like to see in a micro-pantry.
              </li>
              <li>
                Share kindness: leave a kind message to the micro-pantry board.
              </li>
              <li>
                Learn how individual micro-pantries are used through live
                features.
              </li>
            </ul>
          </section>

          <section className="mt-8 max-w-3xl">
            <h2 className="text-xl font-semibold text-zinc-900">Who we are?</h2>
            <p className="mt-3 text-base text-zinc-700">
              We are a UW research team collaborating with community partners to
              learn how micro-pantries can be better supported and sustained.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-zinc-900">Our values</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-zinc-700">
              {values.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-zinc-900">
              Logos / Partners
            </h2>
            <p className="mt-2 text-sm text-zinc-600">
              Partner placeholders shown while logos are gathered.
            </p>
            <div className="mt-4">
              <PartnerLogos />
            </div>
          </section>

          <section className="mt-10 max-w-3xl">
            <h2 className="text-xl font-semibold text-zinc-900">FAQ</h2>
            <div className="mt-4 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-zinc-900">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-sm text-zinc-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="mt-8 max-w-3xl">
            <h2 className="text-xl font-semibold text-zinc-900">
              How can you help?
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-zinc-700">
              <li>Explore: Explore the map and the micro-pantries near you.</li>
              <li>
                Donate: Look up our guidelines for donors and consider donating.
              </li>
              <li>
                Map: Help us keep the map updated (tools coming soon).
              </li>
              <li>Share: Tell neighbors about local micro-pantries.</li>
            </ul>
          </section>
        </>
      )}
    </main>
  );
}
