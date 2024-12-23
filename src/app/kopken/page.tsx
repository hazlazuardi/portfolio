import Image from "next/image";
import A from "./components/A";

const images = [
    "ghost-mode.png",
    "private-mode.png",
    "social-mode.png",
    "social-mode-expand.png",
    "take-photo.png",
    "detail-photo.png",
    "recreate-photo.png",
    "timeline-photo.png",
    "settings.png",
];

export default function KopKenPage() {
    return (
        <div className="flex flex-col gap-6">
            {/* Hero Section */}
            <section className="max-w-lg mx-auto h-screen flex flex-col justify-end py-12 px-8">
                <p className="font-bold tracking-wider text-slate-600">UX Case Study</p>
                <h1 className="text-heading font-semibold">
                    <span className="font-bold text-kopken-primary-500">KopKen </span>
                    － Designing Context-Aware Nostalgia Experiences
                </h1>
            </section>

            {/* Info Section */}
            <section className="max-w-lg mx-auto flex flex-col gap-3 px-8">
                <div>
                    <p className="font-bold tracking-wider">Role</p>
                    <p>Team Leader</p>
                    <p>UX Designer</p>
                    <p>Software Developer</p>
                </div>
                <div>
                    <p className="font-semibold tracking-wider">Course</p>
                    <p>Social and Mobile Computing (DECO3500) at The University of Queensland</p>
                </div>
                <div>
                    <p className="font-semibold tracking-wider">Tools and Technology</p>
                    <p>React Native and Figma</p>
                </div>
                <div>
                    <p className="font-semibold tracking-wider">Timeline</p>
                    <p>July 2023 - Present</p>
                </div>
            </section>

            {/* UI Section */}
            <section className=" bg-slate-100 w-screen items-center flex flex-col pt-5 pb-10">
                <div className="max-w-2xl flex flex-col items-center gap-4">
                    <div className="flex flex-wrap gap-y-10 gap-x-1 justify-around py-4">
                        {images.map((src, i) => (
                            <div key={i} className="relative w-1/4 mx-auto">
                                <Image
                                    src={`/kopken/ui/${src}`}
                                    alt="KopKen UIs"
                                    width={402}
                                    height={874}
                                />
                            </div>
                        ))}
                    </div>
                    <p>Try Interactive Prototype in Figma 👇🏻</p>
                    <A
                        href={
                            "https://www.figma.com/proto/wXnQmGa9nOdxQ6N2vmEkiJ/KopKen?node-id=191-90&p=f&viewport=1311%2C-1510%2C0.26&t=n6BUSnqEVlgVe0cU-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=669%3A2737&show-proto-sidebar=0"
                        }
                        variant="button"
                        isNewTab
                        label="Open in Figma"
                    />
                </div>
            </section>

            {/* Overview */}
            <section className="max-w-lg mx-auto flex flex-col gap-6 px-8">
                <div>
                    <p className="font-semibold text-slate-600">Overview</p>
                    <p className="text-heading font-bold">What is KopKen?</p>
                </div>
                <p>
                    KopKen is an iOS app that works like a smart memory box,
                    helping you relive and share memories based on your location
                    and the people nearby.

                </p>
                <p>It surfaces photos tied to your
                    surroundings and companions, sparking nostalgic conversations
                    about shared moments. Everything is stored offline, ensuring
                    privacy while making reminiscing natural, contextual, and
                    personal.
                </p>
                <div>
                    <p className="font-semibold mb-4">Key Highlights:</p>
                    <div className="ml-4 flex flex-col gap-2">
                        <ul className="flex flex-col gap-3 list-outside pl-6">
                            <li className="list-['📑'] pl-3">
                                <span className="font-semibold text-kopken-primary-500">Extracted 17+ insights </span>
                                by reviewing 10 journal articles and conducted competitor research.
                            </li>
                            <li className="list-['📸'] pl-3">
                                <span className="font-semibold text-kopken-primary-500">Generated 11 actionable design opportunities </span>
                                by synthesising 18+ cultural probe artefacts.
                            </li>
                            <li className="list-['📱'] pl-3">
                                <span className="font-semibold text-kopken-primary-500">Developed 2 functional prototypes </span>
                                in React Native by utilising multi-peer connectivity and geolocation
                                for 4 key use cases.
                            </li>
                            <li className="list-['💯'] pl-3">
                                <span className="font-semibold text-kopken-primary-500">Achieved a High-Distinction grade </span>
                                while leading a
                                cross-functional team of four.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </ div>
    );
}
