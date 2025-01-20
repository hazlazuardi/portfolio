
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
          <div className="w-full mx-auto flex flex-col sm:flex-row bg-white hover:bg-kopken-primary-50 border border-slate-100 rounded-3xl overflow-hidden drop-shadow-lg group">
            {/* Image Section */}
            <div
              className="relative w-full sm:flex-1 sm:h-auto aspect-video overflow-hidden"
            >
              <Image
                src={KopKenThumbnail}
                alt="KopKen Thumbnail"
                className="transition-transform duration-300 ease-in-out scale-150 group-hover:scale-110"
                style={{
                  objectFit: "cover",
                  objectPosition: "left top",
                  width: "100%",
                  height: "100%",
                  transformOrigin: "left top", // Ensures scaling happens from the center
                }}
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col gap-4 p-6 max-w-2xl sm:max-w-sm lg:max-w-lg sm:flex-shrink-0  transition-all ease-in-out bg-transparent">
              <h2 className="text-3xl text-black font-semibold">
                KopKen — Fostering Conversation Through Nostalgia
              </h2>
              <p className="text-black mb-4">
                An iOS app that uses context-aware technology to help people capture, relive, and share memories with others and fostering nostalgic conversations among friends and family.
              </p>
              <Link href="/kopken" className="bg-kopken-primary-500 transition-all ease-in-out w-fit px-6 py-3 rounded-3xl mt-auto text-white">
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
