
// type Props = {}

import UniquePersonalStatementSection from "./section/UniquePersonalStatementSection";
import KopKenThumbnail from "../../public/kopkenThumbnail.png"
import Image from "next/image";
import Link from "next/link";



export default function HomePage() {
  return (
    <main className="mb-16">

      {/* Hero */}
      <section className="max-w-7xl mx-auto md:px-12 h-screen flex flex-col mb-6">
        <h1 className="max-w-4xl px-6 text-4xl leading-normal mt-auto mb-24">
          <p>
            Haz is a
            <b> designer </b>
            and <b> developer </b>
            who bring ideas to life, efficaciously.
          </p>
          <p>
            Currently based in
            <b> Australia.</b>
          </p>
        </h1>
      </section>

      {/* VP */}
      <UniquePersonalStatementSection />


      {/* Selected Work */}
      <section className="w-screen bg-white py-24 ">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 px-6 md:px-12 ">
          <h1 className="text-4xl font-semibold text-center text-black">Selected Work</h1>


          {/* Cards */}

          {/* Card */}
          <div className="w-full mx-auto flex flex-col sm:flex-row bg-white border border-slate-100 rounded-3xl overflow-hidden drop-shadow-lg">
            {/* Image Section */}
            <div
              className="relative w-full sm:flex-1 sm:h-auto aspect-video"
            >
              <Image
                src={KopKenThumbnail}
                alt="KopKen Thumbnail"
                fill
                quality={100}
                style={{
                  objectFit: "cover",
                  objectPosition: "left top",
                }}
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col gap-4 p-6 max-w-xl sm:max-w-md lg:max-w-md sm:flex-shrink-0">
              <h2 className="text-lg text-black font-semibold">
                KopKen — Fostering Conversation Through Nostalgia
              </h2>
              <p className="text-black mb-4">
                An iOS app that uses context-aware technology to help people capture, relive, and share memories with others and fostering nostalgic conversations among friends and family.
              </p>
              <Link href="/kopken" className="bg-slate-700 hover:bg-slate-600 transition-all ease-in-out w-fit px-6 py-3 rounded-3xl mt-auto text-white">
                Read Case Study
              </Link>
            </div>

          </div>

        </div>
      </section>
    </ main >
  )
}


// export const metadata = {
//   redirect: {
//     destination: "/",
//     permanent: false,
//   },
// };
