import Image from "next/image";
import A from "./components/A";
import thatBench from '../../../public/kopken/images/that-bench.jpg'

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

const SectionWrapper = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <section
        className={`${className} max-w-lg w-full mx-auto flex flex-col gap-6 px-8 py-6`}
    >
        {children}
    </section>
);

const HeadingBlock = ({
    title,
    subtitle,
}: {
    title: string;
    subtitle?: string;
}) => (
    <div>
        <p className="font-semibold text-slate-400 dark:text-slate-500">{subtitle}</p>
        <p className="text-heading font-bold">{title}</p>
    </div>
);

const ListItem = ({
    icon,
    title,
    description,
}: {
    icon: "journal" | "camera" | "phone" | "grade";
    title: string;
    description: string;
}) => {

    const icons = {
        journal: 'list-["📑"] pl-3',
        camera: 'list-["📸"] pl-3',
        phone: 'list-["📱"] pl-3',
        grade: 'list-["💯"] pl-3'
    }

    return (
        <li className={icons[icon]}>
            <span className="font-semibold text-kopken-primary-500">{title}</span>
            {description}
        </li>
    )
}

const Callout = ({
    children
}: {
    children: React.ReactNode
}) => (
    <div className="w-auto mx-auto bg-kopken-primary-100 dark:bg-kopken-primary-950 text-black dark:text-slate-100 py-4 rounded-2xl">
        {children}
    </div>
)

export default function KopKenPage() {
    return (
        <div className="flex flex-col gap-6">
            {/* Hero Section */}
            <SectionWrapper className="h-screen justify-end !gap-0 pb-16">
                <Image
                    src={'/logo.png'}
                    width={100}
                    height={100}
                    alt="KopKen Logo"
                    quality={100}
                />
                <p className="font-semibold text-slate-400 dark:text-slate-500 mt-4">UX Case Study</p>
                <h1 className="text-heading font-semibold">
                    <span className="font-bold text-kopken-primary-500">KopKen </span>
                    － Designing Context-Aware Nostalgia Experiences
                </h1>
            </SectionWrapper>

            {/* Info Section */}
            <SectionWrapper className="pb-10">
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
            </SectionWrapper>

            {/* UI Section */}
            <section className=" bg-kopken-primary-100 dark:bg-kopken-primary-950 w-screen items-center flex flex-col pt-5 pb-10">
                <div className="max-w-3xl flex flex-col items-center gap-4">
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
                        label="Try Demo"
                    />
                </div>
            </section>

            {/* Overview Section */}
            <SectionWrapper>
                <HeadingBlock title="What Is KopKen?" subtitle="Overview" />
                <p>
                    KopKen is an iOS app that works like a smart memory box, helping you
                    relive and share memories based on your location and the people
                    nearby.
                </p>
                <p>
                    It surfaces photos tied to your surroundings and companions, sparking
                    nostalgic conversations about shared moments.
                </p>
                <p>
                    Everything is stored
                    offline, ensuring privacy while making reminiscing natural, contextual,
                    and personal.
                </p>

                {/* Highlights */}
                <div>
                    <p className="font-semibold mb-4">Key Highlights:</p>
                    <ul className="flex flex-col gap-3 list-outside pl-6">
                        <ListItem
                            icon="journal"
                            title="Extracted 17+ insights"
                            description=" by reviewing 10 journal articles and conducted competitor research."
                        />
                        <ListItem
                            icon="camera"
                            title="Generated 11 actionable design opportunities"
                            description=" by synthesising 18+ cultural probe artefacts."
                        />
                        <ListItem
                            icon="phone"
                            title="Developed 2 functional prototypes"
                            description=" in React Native by utilising multi-peer connectivity and geolocation for 4 key use cases."
                        />
                        <ListItem
                            icon="grade"
                            title="Achieved a High-Distinction grade"
                            description=" while leading a cross-functional team of four."
                        />
                    </ul>
                </div>
            </SectionWrapper>


            {/* That Bench */}
            {/* <section className="w-screen">
                <Image
                    src={'/kopken/images/that-bench.jpg'}
                    // width={100}
                    // height={100}
                    alt="nostalgic bench"
                    quality={100}
                    objectFit='contain'
                    objectPosition='center'
                // fill
                />
            </section> */}



            {/* Where it all begin */}
            <SectionWrapper>
                <HeadingBlock
                    title="Have You Ever Revisited a Place and Felt a Rush of Nostalgia?"
                    subtitle="Where It All Begin"
                />
                <p>
                    The bench where you laughed with friends, the café where you worked on late-night assignments—these places hold your memories.
                </p>
                <p>
                    But how often do we revisit them meaningfully?
                </p>
                <p>
                    Inspired by these experiences, I explored this domain for my Social and Mobile Computing (DECO3500) course at the University of Queensland.
                </p>
            </SectionWrapper>


            {/* Domain Exploration */}
            <SectionWrapper>
                <HeadingBlock
                    subtitle="Domain Exploration"
                    title="Exploring Nostalgia Through Technology"
                />
                <div>
                    <p className="max-w-lg w-full mx-auto mb-2">
                        I came across research showing that up to
                    </p>
                    <Callout>
                        <div className="max-w-lg flex gap-6 px-8 items-center">
                            <p className="text-[2.4rem] min-[380px]:text-[3rem] min-[450px]:text-[4rem] text-kopken-primary-500 dark:text-kopken-primary-400 leading-[1] ">75%</p>
                            <p><span className="font-semibold">of conversations </span>revolve around nostalgia.*</p>
                        </div>
                    </Callout>

                </div>
                <p className="w-full mx-auto">
                    Technology, like Apple Photos’ On This Day widget, make nostalgic memories accessible than ever.
                </p>
                <p className="w-full mx-auto">
                    However, they often lack context, surfacing memories at unrelated or inappropriate times. This limits their emotional impact and the opportunity to spark meaningful conversations.
                </p>
                <div>
                    <p className="w-full mx-auto mb-2">
                        This led me to a key question:
                    </p>

                    <Callout>
                        <p className="italic max-w-lg px-8">
                            <span className="font-semibold text-kopken-primary-500 dark:text-kopken-primary-400">How might we </span>
                            develop context-aware technology that uses reminiscing and nostalgia to stimulate shared conversations among friends or family?
                        </p>
                    </Callout>
                </div>

                <p className="text-caption w-full mx-auto">*(Baron & Bluck, 2009)</p>

            </SectionWrapper>



            {/* User Research */}
            <SectionWrapper>
                <HeadingBlock
                    subtitle="User Research"
                    title="Uncovering User Needs Through a Cultural Probe"
                />
                <p>
                    I conducted a cultural probe with
                    <span className="text-kopken-primary-500 font-semibold"> 3 participants</span> (an international student,
                    a career mother, and a memory preserver) over
                    <span className="text-kopken-primary-500 font-semibold"> a one-week period.</span>
                </p>
                <div className="flex flex-col gap-3">
                    <p className="-mb-1">
                        The probe consisted of two parts:
                    </p>
                    <Callout>
                        <div className="max-w-lg flex flex-col gap-1 px-8">
                            <p className="text-kopken-primary-500 dark:text-kopken-primary-400 font-semibold" >Shared iCloud Album</p>
                            <p>I asked participants to upload photos/videos represented moments of nostalgia during their day.</p>
                        </div>
                    </Callout>
                    <Callout>
                        <div className="max-w-lg flex flex-col gap-1 px-8">
                            <p className="text-kopken-primary-500 dark:text-kopken-primary-400 font-semibold" >
                                Shared iCloud Notes
                            </p>
                            <p>
                                I prepared prompts to reflect on their routines, triggers, and how they share nostalgic memories.
                            </p>
                        </div>
                    </Callout>
                </div>
                <p>
                    Although the sample size was small and participants needed reminders, the probe yielded
                    <span className="font-semibold text-kopken-primary-500"> rich qualitative insights </span>
                    into how people reflect on and share memories.
                </p>
            </SectionWrapper>


            {/* User Research Images */}


        </ div >
    );
}
