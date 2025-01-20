"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Icons } from "@/components/Icons";

const audienceValues = [
  'Anyone',
  'Recruiters',
  'Startups'] as const;
type Audience = typeof audienceValues[number]

const copywriting: Record<Audience, {
  headline: string,
  subheadline: string
}> = {
  'Recruiters': {
    headline: "Graduate Designer & Developer with Work Experience",
    subheadline: "UX Design and Computer Science graduate with Agile internship experience at Indonesia's largest telecom company. Seeking Frontend Developer or UX Designer roles in Australia."
  },
  'Anyone': {
    headline: "Crafting Digital Products that Work",
    subheadline: "I love building beautiful things that make everyday life a little bit easier."
  },
  'Startups': {
    headline: "Building MVPs Quickly and Thoughtfully",
    subheadline: "I take ideas and turn them into working products. Whether it’s designing, coding, or deploying, I work fast and stay focused on what matters most."
  }
}


export default function UniquePersonalStatementSection() {

  // Use these since it's Client Component
  const searchParams = useSearchParams()
  const router = useRouter()

  // Get current audience from params, error handling too
  const defaultAudience = audienceValues.includes(searchParams.get('audience') as Audience) ?
    (searchParams.get('audience') as Audience) : "Recruiters"

  const [audience, setAudience] = useState<Audience>(defaultAudience)
  console.log(audience)


  // Sync URL params to the current state
  useEffect(() => {

    const params = new URLSearchParams(window.location.search)
    const currentAudience = params.get('audience')

    if (currentAudience !== audience) {
      params.set('audience', audience)
      router.replace(`?${params.toString()}`, { scroll: false })
    }
  }, [audience, router])

  return (
    <section className="w-screen bg-white">
      <div className="max-w-7xl mx-auto py-24 flex flex-col lg:flex-row md:px-12">
        {/* Copywriting */}
        <div className="max-w-7xl flex flex-col gap-6 py-6 px-6">
          <div className="flex flex-wrap gap-4">
            {audienceValues.map(a => (
              <button className={`hover:opacity-100 text-black ${a != audience ? "opacity-50" : "opacity-100"}`} key={a} onClick={() => setAudience(a)}>
                For {a}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="max-w-3xl text-4xl font-semibold leading-normal text-black">
              {copywriting[audience].headline}
            </h1>
            <p className="max-w-3xl opacity-75 text-xl leading-normal text-black">
              {copywriting[audience].subheadline}
            </p>
          </div>
        </div>

        {/* Images */}
        {audience === 'Recruiters' &&
          <div className="max-w-4xl mx-auto flex flex-wrap gap-12 pt-8">
            <Icons.Telkom
              className="w-32 mx-auto drop-shadow-lg rotate-6"
            />
            <Icons.UI
              className="w-32 mx-auto drop-shadow-lg -rotate-6"
            />
            <Icons.UQ
              className="w-32 mx-auto drop-shadow-lg rotate-6"
            />
          </div>
        }
        {audience === 'Startups' &&
          <div className="max-w-4xl mx-auto flex flex-wrap gap-16 pt-8">
            <Icons.KopKen
              className="w-32 mx-auto drop-shadow-lg rotate-6"
            />
            <Icons.Rehat
              className="w-32 mx-auto drop-shadow-lg -rotate-3"
            />
          </div>
        }

      </ div>

    </section>
  );
}
