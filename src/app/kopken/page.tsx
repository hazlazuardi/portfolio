import Image from "next/image";
import A from "./components/A";
import thatBench from '../../../public/kopken/images/that-bench.jpg'
import TableOfContent from "./components/TableOfContents";

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
    id,
    children,
    className = "",
}: {
    id?: string
    children: React.ReactNode;
    className?: string;
}) => (
    <section id={id}
        className={`${className} max-w-xl w-full mx-auto flex flex-col gap-6 px-8 py-6`}
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

const List = ({
    children,
    title
}: {
    children: React.ReactNode;
    title: React.ReactNode
}) => (
    <div className="flex flex-col gap-4">
        <>{title}</>
        <ul className="flex flex-col gap-5 list-outside pl-2">
            {children}
        </ul>
    </div>
)


const ListItem = ({
    icon,
    title,
    description,
}: {
    icon?: string
    title: React.ReactNode;
    description: React.ReactNode;
}) => {
    return (
        <li className={`flex items-start ${icon ? "gap-4" : "list-disc pl-6"}`}>
            {icon && <span className="text-lg">{icon}</span>}
            <div className="flex flex-col gap-1">
                <p className="font-semibold text-kopken-primary-500 dark:text-kopken-primary-400">{title}</p>
                <p>{description}</p>
            </ div>
        </li>
    )
}

const Callout = ({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string
}) => (
    <div className={`${className} w-auto mx-auto bg-kopken-primary-100 dark:bg-kopken-primary-950 text-black dark:text-slate-100 py-4 px-6 rounded-2xl`}>
        {children}
    </div>
)

const FigmaEmbed = ({
    src,
    caption,
}: {
    src: string;
    caption: string;
}) => (
    <figure className="mx-auto max-w-6xl w-full px-4 lg:px-8 my-6">
        {/* Use aspect-ratio for height consistency */}
        <iframe
            className="w-full aspect-[4/3] border border-gray-200 rounded-lg"
            src={src}
            allowFullScreen
        ></iframe>
        <figcaption className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            {caption}
        </figcaption>
    </figure>
);

const Bold = ({
    children,
    className = ""
}: {
    children: React.ReactNode
    className?: string;
}) => (
    <b className={`${className} text-kopken-primary-500 font-semibold`}>
        {children}
    </b>
)

const titles = [
    'UI',
    'Overview',
    'Where it All Begin',
    'Domain Exploration',
    'User Research',
    "Key Insights",
    "Target Audience",
    ""
]

export default function KopKenPage() {
    return (
        <main className="flex flex-col gap-6 scroll-smooth">

            <TableOfContent titles={titles} />

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
            <section id="UI" className=" bg-kopken-primary-100 dark:bg-kopken-primary-950 w-screen items-center flex flex-col pt-5 pb-10">
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
            <SectionWrapper id='Overview'>
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
                <Callout>
                    <List
                        title={
                            <p><b>Key Highlights:</b></p>
                        }
                    >
                        <ListItem
                            icon="📝"
                            title="Extracted 17+ insights"
                            description=" by reviewing 10 journal articles and conducted competitor research."
                        />
                        <ListItem
                            icon="📸"
                            title="Generated 11 actionable design opportunities"
                            description=" by synthesising 18+ cultural probe artefacts."
                        />
                        <ListItem
                            icon="📱"
                            title="Developed 2 functional prototypes"
                            description=" in React Native by utilising multi-peer connectivity and geolocation for 4 key use cases."
                        />
                        <ListItem
                            icon="💯"
                            title="Achieved a High-Distinction grade"
                            description=" while leading a cross-functional team of four."
                        />
                    </List>
                </Callout>
            </SectionWrapper>


            {/* That Bench */}
            <section>
                <div className="max-h-[70vh] overflow-hidden place-content-end">
                    <Image
                        src={thatBench}
                        alt="nostalgic bench"
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                </div>
            </section>



            {/* Where it all begin */}
            <SectionWrapper id="Where it All Begin">
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
            <SectionWrapper id="Domain Exploration">
                <HeadingBlock
                    subtitle="Domain Exploration"
                    title="Exploring Nostalgia Through Technology"
                />
                <div>
                    <p className="max-w-lg w-full mx-auto mb-2">
                        I came across research showing that up to
                    </p>
                    <Callout>
                        <div className="max-w-lg flex gap-6 items-center">
                            <p className="text-[2.4rem] min-[380px]:text-[3rem] min-[450px]:text-[4rem] text-kopken-primary-500 dark:text-kopken-primary-400 leading-[1] ">75%</p>
                            <p><span className="font-semibold">of conversations </span>revolve around nostalgia.*</p>
                        </div>
                    </Callout>

                </div>
                <p>
                    Technology, like Apple Photos’ On This Day widget, make nostalgic memories accessible than ever.
                </p>
                <p>
                    However, they often lack context, surfacing memories at unrelated or inappropriate times.

                </p>
                <p>
                    This limits their emotional impact and the opportunity to spark meaningful conversations.
                </p>
                <div>
                    <p className="w-full mx-auto mb-2">
                        This led me to a key question:
                    </p>

                    <Callout>
                        <p className="italic max-w-lg">
                            <span className="font-semibold text-kopken-primary-500 dark:text-kopken-primary-400">How might we </span>
                            develop context-aware technology that uses reminiscing and nostalgia to stimulate shared conversations among friends or family?
                        </p>
                    </Callout>
                </div>

                <p className="text-caption w-full mx-auto">*(Baron & Bluck, 2009)</p>

            </SectionWrapper>



            {/* User Research */}
            <SectionWrapper id="User Research">
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
                <p>The probe consisted of two parts:</p>
                <Callout className="w-full">
                    <ListItem
                        icon="🗂️"
                        title="Shared iCloud Album"
                        description="I asked participants to upload photos/videos represented moments of nostalgia during their day."
                    />
                </Callout>
                <Callout>
                    <ListItem
                        icon="📝"
                        title="Shared iCloud Notes"
                        description="I prepared prompts to reflect on their routines, triggers, and how they share nostalgic memories."
                    />
                </Callout>
                <p>
                    Although the sample size was small and participants needed reminders, the probe yielded
                    <span className="font-semibold text-kopken-primary-500"> rich qualitative insights </span>
                    into how people reflect on and share memories.
                </p>
            </SectionWrapper>


            {/* User Research Images */}
            <section className="pb-12 flex flex-col gap-12">
                <FigmaEmbed
                    src="https://embed.figma.com/board/oqawMrhE5MWuPuihutCUbJ/DECO3500?node-id=1323-6007&embed-host=share"
                    caption="Crafting a Cultural Probe: A Diary Study Approach"
                />
                <FigmaEmbed
                    src="https://embed.figma.com/board/oqawMrhE5MWuPuihutCUbJ/DECO3500?node-id=1159-6966&embed-host=share"
                    caption="Mapping Cultural Probe Insights to Research Questions"
                />
            </section>



            {/* Key Findings */}
            <SectionWrapper id="Key Insights">
                <HeadingBlock
                    subtitle="Key Insights"
                    title={"The Paradox of Nostalgia"}
                />
                <p>
                    Nostalgia feels <Bold>deeply personal</Bold> yet thrives in <Bold>shared experiences. </Bold>
                </p>
                <p>
                    It arises <Bold>spontaneously </Bold>but is strengthened by <Bold>recurring rituals.</Bold>
                </p>

                <Callout className="w-full max-w-2xl">
                    <List
                        title={<p>Memories take <b className="font-semibold">three forms:</b></p>}
                    >
                        <ListItem
                            icon="🏃"
                            title="Routines"
                            description="Everyday moments like walking on similar paths."
                        />
                        <ListItem
                            icon="💯"
                            title="Milestones"
                            description="Significant life events like weddings or family gatherings."
                        />
                        <ListItem
                            icon="💥"
                            title="Incidental Memories"
                            description="Spontaneous, unforgettable moments, like joking about a weird pamphlet."
                        />
                    </List>
                </Callout>

                <Callout className="w-full max-w-2xl">
                    <List
                        title={
                            <p>These memories are <b className="font-semibold">triggered by:</b></p>
                        }
                    >
                        <ListItem
                            icon="📍"
                            title="Locations"
                            description="Familiar places like train stations or cafés."
                        />
                        <ListItem
                            icon="👀"
                            title="Sensory Cues"
                            description="The smell of kebabs or observing students at the library."
                        />
                        <ListItem
                            icon="🖼️"
                            title="Artefacts"
                            description="Photos and digital albums."
                        />
                    </List>
                </Callout>

                <Callout className="w-full max-w-2xl">
                    <List
                        title={
                            <p>Nostalgia then  <b className="font-semibold">manifests in two ways:</b></p>
                        }
                    >
                        <ListItem
                            icon="🔒"
                            title="Private Reflection"
                            description="Solitary walk or personal thoughts."
                        />
                        <ListItem
                            icon="🤝"
                            title="Collaborative Storytelling"
                            description="Social gatherings or digital platforms."
                        />
                    </List>
                </Callout>

            </SectionWrapper>


            {/* Target Audiences */}
            <SectionWrapper id="Target Audience">
                <HeadingBlock
                    subtitle="Target Audience"
                    title="Who We're Designing For"
                />
                <Callout className="max-w-lg w-full">
                    <p className="mb-2 font-playpen text-2xl">
                        <Bold className="bg-clip-text text-transparent bg-gradient-to-r from-kopken-primary-500 to-[#D5666C] dark:bg-gradient-to-r dark:from-kopken-primary-400 dark:to-[#D5666C]">
                            The Reflective Wanderer
                        </Bold>
                    </p>
                    <p>Prefers <Bold className="dark:text-kopken-primary-400">private reminiscing </Bold>triggered by locations or sensory cues.</p>
                    <br />
                    <p>Needs tools for <Bold className="dark:text-kopken-primary-400">self-reflection</Bold> and <Bold className="dark:text-kopken-primary-400">contextual memory prompts.</Bold></p>
                </Callout>
                <Callout className="max-w-lg w-full">
                    <p className="mb-2 font-philosopher text-[1.56em]">
                        <Bold className="bg-clip-text text-transparent bg-gradient-to-r from-kopken-primary-500 to-[#D5666C] dark:bg-gradient-to-r dark:from-kopken-primary-400 dark:to-[#D5666C]">
                            The Collaborative Storyteller
                        </Bold>
                    </p>
                    <p>Thrives on <Bold className="dark:text-kopken-primary-400">shared nostalgia </Bold>during social gatherings or online interactions.</p>
                    <br />
                    <p>Needs <Bold className="dark:text-kopken-primary-400">collaborative tools</Bold> for sharing and <Bold className="dark:text-kopken-primary-400">building timelines.</Bold></p>
                </Callout>
                <Callout className="max-w-lg w-full">
                    <p className="mb-2 font-montserrat text-[1.6rem]">
                        <Bold className="bg-clip-text text-transparent bg-gradient-to-r from-kopken-primary-500 to-[#D5666C] dark:bg-gradient-to-r dark:from-kopken-primary-400 dark:to-[#D5666C]">
                            The Milestone Keeper
                        </Bold>
                    </p>
                    <p>Values preserving <Bold className="dark:text-kopken-primary-400">significant life events</Bold> like weddings or milestones.</p>


                    <br />
                    <p>Needs tools to <Bold className="dark:text-kopken-primary-400">organise memories</Bold> and <Bold className="dark:text-kopken-primary-400">connect them over time.</Bold></p>
                </Callout>

            </SectionWrapper>

        </ main >
    );

}