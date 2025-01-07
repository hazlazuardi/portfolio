import Image from "next/image";
import A from "./components/A";
import thatBench from '../../../public/kopken/images/that-bench.jpg'
import TableOfContent from "./components/TableOfContents";
import FigmaEmbed from "./components/FigmaEmbed";

import journalPapers from '../../../public/kopken/images/journal-papers.png'
import taskFlows1 from '../../../public/kopken/images/task-flows-1.png'
import taskFlows2 from '../../../public/kopken/images/task-flows-2.png'
import taskFlows3 from '../../../public/kopken/images/task-flows-3.png'
import designingProbe from '../../../public/kopken/images/designing-probe.png'
import thumbnailAdProbe from '../../../public/kopken/images/thumbnail-ad-probe.png'
import thumbnailAdDio from '../../../public/kopken/images/thumbnail-ad-dio.png'
import thumbnailDio from '../../../public/kopken/images/thumbnail-dio.png'
import developingPrototype from '../../../public/kopken/images/developing-prototype.png'
import workshopKopKen from '../../../public/kopken/images/workshop-kopken.png'
import oldModeToggle from '../../../public/kopken/images/old-mode-toggle.png'
import newModeToggle from '../../../public/kopken/images/new-mode-toggle.png'
import taskFlows4 from '../../../public/kopken/images/task-flows-4.png'
import taskFlows5 from '../../../public/kopken/images/task-flows-5.png'


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
    className,
}: {
    title: string;
    subtitle?: string;
    className?: string;
}) => (
    <div className={`${className}`}>
        <p className="font-semibold text-slate-500 dark:text-slate-400">{subtitle}</p>
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
    className
}: {
    icon?: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    className?: string
}) => {
    const contentAlignment =
        title && description ? 'items-start' : 'items-center';

    return (
        <li
            className={`${className} ${icon ? `flex gap-4 ${contentAlignment}` : 'list-disc pl-2 ml-6'}`}
        >
            {icon && <span className="text-lg">{icon}</span>}
            <div
                className={`flex flex-col ${title && description ? 'gap-1' : ''}`}
            >
                {title && (
                    <p className="font-semibold text-kopken-primary-500 dark:text-kopken-primary-400">
                        {title}
                    </p>
                )}
                {description && <>{description}</>}
            </div>
        </li>
    );
};

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

const Bold = ({
    children,
    className = ""
}: {
    children: React.ReactNode
    className?: string;
}) => (
    <b className={`${className} text-kopken-primary-500 dark:text-kopken-primary-400 font-semibold`}>
        {children}
    </b>
)

const Code = ({
    children,
    className = ""
}: {
    children: React.ReactNode;
    className?: string;
}) => (
    <code
        className={`${className} bg-gray-200 dark:bg-gray-700 px-1 rounded inline-block`}
    >
        {children}
    </code>
);

const titles = [
    'UI',
    'Overview',
    'Where it All Begin',
    'Domain Exploration',
    'User Research',
    "Key Insights",
    "Target Audience",
    "Design Implications and Opportunities",
    "Prototype 1",
    "Prototype 2",
    "What's Next for KopKen?",
    "Reflection"
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
                    priority={true}
                    quality={100}
                />
                <p className="font-semibold text-slate-500 dark:text-slate-400 mt-4">UX Case Study</p>
                <h1 className="text-heading font-semibold">
                    <span className="font-bold text-kopken-primary-500">KopKen </span>
                    － Designing Context-Aware Nostalgia Experiences
                </h1>
            </SectionWrapper>

            {/* Info Section */}
            <SectionWrapper>
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
            <section id="UI" className=" bg-kopken-primary-100 dark:bg-kopken-primary-950 w-screen items-center flex flex-col pt-6 pb-10">
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
                    <Bold> 3 participants</Bold> (an international student,
                    a career mother, and a memory preserver) over
                    <Bold> a one-week period.</Bold>
                </p>
                <List
                    title={
                        <p>The probe consisted of two parts:</p>
                    }
                >
                    <ListItem
                        icon="🗂️"
                        title="Shared iCloud Album"
                        description="I asked participants to upload photos/videos represented moments of nostalgia during their day."
                        className="w-auto mx-auto bg-kopken-primary-100 dark:bg-kopken-primary-950 text-black dark:text-slate-100 py-4 px-6 rounded-2xl"
                    />
                    <ListItem
                        icon="📝"
                        title="Shared iCloud Notes"
                        description="I prepared prompts to reflect on their routines, triggers, and how they share nostalgic memories."
                        className="w-auto mx-auto bg-kopken-primary-100 dark:bg-kopken-primary-950 text-black dark:text-slate-100 py-4 px-6 rounded-2xl"
                    />
                </List>
                <p>
                    Although the sample size was small and participants needed reminders, the probe yielded
                    <Bold> rich qualitative insights </Bold>
                    into how people reflect on and share memories.
                </p>
            </SectionWrapper>


            {/* User Research Images */}
            <section className="py-6 flex flex-col gap-12">
                <figure className="px-4 lg:px-8 mx-auto max-w-screen-lg overflow-hidden place-content-start">
                    <Image
                        src={designingProbe}
                        alt="Crafting a cultural probe: a diary study approach"
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                    <figcaption className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                        Crafting a cultural probe: a diary study approach
                    </figcaption>
                </figure>
                {/* <FigmaEmbed
                    src="https://embed.figma.com/board/oqawMrhE5MWuPuihutCUbJ/DECO3500?node-id=1323-6007&embed-host=share"
                    caption="Crafting a Cultural Probe: A Diary Study Approach"
                /> */}
                <FigmaEmbed
                    src="https://embed.figma.com/board/oqawMrhE5MWuPuihutCUbJ/DECO3500?node-id=1159-6966&embed-host=share"
                    caption="Mapping Cultural Probe Insights to Research Questions"
                    thumbnail={thumbnailAdProbe}
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
                    <p className="mb-2 font-playpen text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-kopken-primary-500 to-[#D5666C] dark:bg-gradient-to-r dark:from-kopken-primary-400 dark:to-[#D5666C]">
                        The Reflective Wanderer
                    </p>
                    <p>Prefers <Bold>private reminiscing </Bold>triggered by locations or sensory cues.</p>
                    <br />
                    <p>Needs tools for <Bold>self-reflection</Bold> and <Bold>contextual memory prompts.</Bold></p>
                </Callout>
                <Callout className="max-w-lg w-full">
                    <p className="mb-2 font-philosopher text-[1.8rem] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-kopken-primary-500 to-[#D5666C] dark:bg-gradient-to-r dark:from-kopken-primary-400 dark:to-[#D5666C]">
                        The Collaborative Storyteller
                    </p>
                    <p>Thrives on <Bold>shared nostalgia </Bold>during social gatherings or online interactions.</p>
                    <br />
                    <p>Needs <Bold>collaborative tools</Bold> for sharing and <Bold>building timelines.</Bold></p>
                </Callout>
                <Callout className="max-w-lg w-full">
                    <p className="mb-2 font-montserrat text-[1.7rem] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-kopken-primary-500 to-[#D5666C] dark:bg-gradient-to-r dark:from-kopken-primary-400 dark:to-[#D5666C]">
                        The Milestone Keeper
                    </p>
                    <p>Values preserving <Bold>significant life events</Bold> like weddings or milestones.</p>


                    <br />
                    <p>Needs tools to <Bold>organise memories</Bold> and <Bold>connect them over time.</Bold></p>
                </Callout>

            </SectionWrapper>


            {/* Design Implications and Opportunities */}
            <SectionWrapper id="Design Implications and Opportunities">
                <HeadingBlock
                    subtitle="Design Implications and Opportunities"
                    title="Challenges in Designing for Nostalgia"
                />
                <p>
                    Based on literature and probe findings, I synthesised
                    <Bold> 17+ design implications </Bold>
                    and used
                    <Bold> Affinity Diagram </Bold>
                    to shape key
                    themes:
                </p>
                <div className="flex flex-wrap gap-4">
                    {[
                        'Context-Awareness',
                        'Accumulation of Meaning',
                        'Privacy and Content Control',
                        'Memory and Mobility',
                        'Form of Artefacts',
                    ].map(theme => (
                        <div key={theme} className="px-4 py-2 bg-kopken-primary-100 dark:bg-kopken-primary-950 rounded-full w-auto">
                            <p className="text-sm text-kopken-primary-500 dark:text-kopken-primary-200" >{theme}</p>
                        </div>
                    ))}
                </div>
                <List title={
                    <p>From there, I focused on several <b className="font-semibold">design opportunities:</b></p>
                }>
                    <ListItem icon="O1"
                        title='Link Memories to People, Places, or Events'
                        description='e.g. birthday photos linked to dates and mutuals, shown on future birthdays.'
                    />
                    <ListItem icon="O2"
                        title='Integrate Movement and Mobility to Preserve Memories'
                        description='e.g. photos from a road trip resurface when driving along the same highway.'
                    />
                    <ListItem icon="O3"
                        title='Use Artefacts as Conversation Starters'
                        description='e.g. a nostalgic photo prompts laughter during a family gathering.'
                    />
                    <ListItem icon="O4"
                        title='Recognise Contrasts in Memories Over Time'
                        description='e.g. artefacts from previous birthdays appear in a timeline, showing changes over the years.'
                    />
                    <ListItem icon="O5"
                        title='Provide Users Control Over Artefacts'
                        description='e.g. exclude artefacts from being visible during specific social contexts.'
                    />
                </List>
            </SectionWrapper>

            {/* Journal Papers, Design Implications, and Opportunities */}
            <section className="flex flex-col py-6 gap-12">
                <figure className="px-8 mx-auto max-w-screen-lg max-h-[70vh] overflow-hidden place-content-start">
                    <Image
                        src={journalPapers}
                        alt="reviewed journal papers"
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                    <figcaption className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                        Reviewed Journal Papers.
                    </figcaption>
                </figure>
                <FigmaEmbed
                    src="https://embed.figma.com/board/oqawMrhE5MWuPuihutCUbJ/DECO3500?node-id=1545-5990&embed-host=share"
                    caption="Design Implications from Reviewed Journals."
                    thumbnail={thumbnailDio}
                />
                <FigmaEmbed
                    src="https://embed.figma.com/board/oqawMrhE5MWuPuihutCUbJ/DECO3500?node-id=1093-5027&embed-host=share"
                    caption="Grouping Insights from Literature into Themes."
                    thumbnail={thumbnailAdDio}
                />

            </section>

            {/* Prototype 1 Objectives */}
            <SectionWrapper id="Prototype 1">
                <HeadingBlock
                    subtitle="Prototype 1 Objectives"
                    title="Focusing on Social Reminiscing and Privacy"
                />
                <List
                    title={
                        <p>Prototype 1 <b>explores:</b></p>
                    }>
                    <ListItem
                        icon="🫂"
                        title="Reminisce with a mutual in one location."
                        description="e.g. when visiting a café with friends, see photos of previous hangouts at that location with the same mutuals."
                    />
                    <ListItem
                        icon="👻"
                        title="Hide the user's presence from others"
                        description="e.g. turn on Ghost Mode during solo walks in the park, preventing others from seeing your presence and artefacts."
                    />

                </List>
                <List
                    title={
                        <p><b className="font-semibold">Features developed:</b></p>
                    }>
                    <ListItem
                        icon="🫂"
                        title="Display artefacts based on location and social context."
                        description="Photos tied to mutuals and shared places surface contextually."
                    />
                    <ListItem
                        icon="👻"
                        title="Ghost mode for privacy."
                        description="Control visibility while exploring shared memories privately."
                    />

                </List>
                <List
                    title={
                        <p><b className="font-semibold">Design opportunities addressed:</b></p>
                    }>
                    <ListItem
                        icon="O1"
                        title="Link memories to people, places, or events."
                    />
                    <ListItem
                        icon="O2"
                        title="Integrate movement and mobility to preserve memories."
                    />
                    <ListItem
                        icon="O3"
                        title="Use artefacts as conversation starters."
                    />
                </List>
                <List
                    title={
                        <p><b className="font-semibold">Hypotheses tested:</b></p>
                    }>
                    <ListItem
                        icon="H1"
                        title="Features act as conversation starters and foster positive social interactions."
                        className="w-auto mx-auto bg-kopken-primary-100 dark:bg-kopken-primary-950 text-black dark:text-slate-100 py-4 px-6 rounded-2xl"
                    />
                    <ListItem
                        icon="H2"
                        title="Ghost mode ensures privacy and safety for private reminiscing."
                        className="w-auto mx-auto bg-kopken-primary-100 dark:bg-kopken-primary-950 text-black dark:text-slate-100 py-4 px-6 rounded-2xl"
                    />
                </List>
            </SectionWrapper>

            {/* Prototype 1 Task Flows */}
            <SectionWrapper id="Prototype 1 Task Flows">
                <HeadingBlock
                    subtitle="Prototype 1 Task Flows"
                    title="Navigating Key Features in Prototype 1"
                    className="max-w-lg"
                />
                {/* <FigmaEmbed
                    src="https://embed.figma.com/board/oqawMrhE5MWuPuihutCUbJ/DECO3500?node-id=1644-5989&embed-host=share"
                    caption="Three main task flows to test."
                /> */}
                <figure className="mx-auto max-w-screen-lg max-h-[70vh] overflow-hidden place-content-start">
                    <Image
                        src={taskFlows1}
                        alt="Task flow 1: reminisce with mutuals in one location."
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        className="rounded-md"
                    />
                    <figcaption className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                        Task flow 1: reminisce with mutuals in one location.
                    </figcaption>
                </figure>
                <figure className="mx-auto max-w-screen-lg max-h-[70vh] overflow-hidden place-content-start">
                    <Image
                        src={taskFlows2}
                        alt="Task flow 2: toggling Ghost mode on for private reminiscing."
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        className="rounded-md"
                    />
                    <figcaption className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                        Task flow 2: toggling Ghost mode on for private reminiscing.
                    </figcaption>
                </figure>
                <figure className="mx-auto max-w-screen-lg max-h-[70vh] overflow-hidden place-content-start">
                    <Image
                        src={taskFlows3}
                        alt="Task flow 3: creating an artefact with nearby mutuals."
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        className="rounded-md"
                    />
                    <figcaption className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                        Task flow 3: creating an artefact with nearby mutuals.
                    </figcaption>
                </figure>
            </SectionWrapper>


            {/* Developing Prototype */}
            <section>
                <div className="max-h-[70vh] overflow-hidden place-content-end">
                    <Image
                        src={developingPrototype}
                        alt="Developing prototype using React Native."
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                        quality={100}
                    />
                </div>
            </section>


            {/* Prototype 1 Development */}
            <SectionWrapper id="Prototype 1 Development">
                <HeadingBlock
                    subtitle="Prototype 1 Development"
                    title="From Concept to Code"
                />
                <p>
                    I built Prototype 1 using <Bold>React Native </Bold>within a week, taking on the role of the sole developer in our team.
                </p>
                <Callout>
                    <List
                        title={
                            <p> I ensured the prototype meets these key
                                <b className="font-semibold"> experience requirements:</b></p>
                        }>
                        <ListItem
                            icon="📍"
                            title="Location Awareness"
                            description="Detect user’s current location for contextually relevant artefacts."
                        />
                        <ListItem
                            icon="🤝"
                            title="Social Context Awareness"
                            description="Identify mutuals nearby to spark shared reminiscing."
                        />
                        <ListItem
                            icon="🔒"
                            title="Privacy Controls"
                            description="Allow users to hide visibility, enabling private reflection."
                        />
                        <ListItem
                            icon="🖼️"
                            title="Contextual Artefacts"
                            description="Display artefacts filtered by location and mutuals, enhancing relevance."
                        />
                    </List>
                </Callout>
                <Callout>
                    <List
                        title={
                            <p><b className="font-semibold">How it Works:</b></p>
                        }>
                        <ListItem
                            icon="📍"
                            title="Get user's coordinate using GPS"
                            description={
                                <p>
                                    via <Code>react-native-community/geolocation</Code>
                                </p>
                            }
                        />
                        <ListItem
                            icon="🛜"
                            title="Detect mutuals nearby using WiFi and Bluetooth"
                            description={
                                <p>
                                    via <Code>react-native-multipeer-connectivity</Code>
                                </p>
                            }
                        />
                        <ListItem
                            icon="💾"
                            title="Store artefacts with location coordinates, mutual IDs, and timestamps"
                            description={
                                <p>
                                    using <Code>react-native-mmkv</Code>
                                </p>
                            }
                        />
                    </List>
                </Callout>
            </SectionWrapper>


            {/* Workshop Prototype */}
            <section>
                <div className="max-h-[95vh] overflow-hidden place-content-center">
                    <Image
                        src={workshopKopKen}
                        alt="Developing prototype using React Native."
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                        quality={100}
                    />
                </div>
            </section>

            {/* Prototype 1 Insights */}
            <SectionWrapper id="Prototype 1 Insights">
                <HeadingBlock
                    subtitle="Prototype 1 Insights"
                    title="What We Learned from User Testing"
                />
                <p>
                    Prototype 1 <Bold>successfully validated </Bold>both hypotheses across both use cases:
                </p>
                <Callout>
                    <List title={
                        <b className="font-semibold">Reminiscing Together (UC1)</b>
                    }>
                        <ListItem
                            icon="✅"
                            title="Conversation sparked"
                            description="Artefacts brought shared memories to life, leading to fun and meaningful chats with mutuals."
                        />
                        <ListItem
                            icon="✅"
                            title="Users loved connecting"
                            description="The prototype made reconnecting with friends through shared experiences simple and enjoyable."
                        />
                        <ListItem
                            icon="🎯"
                            title="Needs clarity"
                            description="Users struggled to see how artefacts, locations, and social context connected, suggesting clearer visuals or cues are needed."
                        />
                    </List>
                </Callout>
                <Callout>
                    <List
                        title={
                            <b className="font-semibold">Ghost Mode for Privacy (UC2)</b>
                        }
                    >
                        <ListItem
                            icon="✅"
                            title="Users felt safer"
                            description="Ghost mode gave users privacy while staying curious about nearby friends."
                        />
                        <ListItem
                            icon="✅"
                            title="Flexibility was key"
                            description="The toggles let users choose between privacy and social interaction with ease."
                        />
                        <ListItem
                            icon="🎯"
                            title="Needs simplification"
                            description="Toggles were a bit confusing at first, pointing to a need for clearer design and labels."
                        />
                    </List>
                </Callout>
            </SectionWrapper>


            {/* Refinements 1 */}
            <SectionWrapper id="Refinements 1">
                <HeadingBlock
                    subtitle="Refinement 1"
                    title="Simplified Reminiscing Modes"
                />

                {/* Images */}
                <div className="flex flex-col gap-16 py-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        {/* Image Section */}
                        <div className="w-full px-10 md:w-8/12 md:px-0 max-h-[95vh] overflow-hidden">
                            <Image
                                src={oldModeToggle}
                                alt="Developing prototype using React Native."
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                quality={100}
                            />
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-4/12 text-center md:text-left">
                            <b className="font-semibold text-red-700 dark:text-red-400">Problem</b>
                            <p>
                                Redundant toggles caused confusion, making the test case difficult to complete.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        {/* Image Section */}
                        <div className="w-full px-10 md:w-8/12 md:px-0 max-h-[95vh] overflow-hidden">
                            <Image
                                src={newModeToggle}
                                alt="Developing prototype using React Native."
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                quality={100}
                            />
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-4/12 text-center md:text-left">
                            <b className="font-semibold text-green-600 dark:text-green-400">Solution</b>
                            <p>
                                A new simplified toggle now facilitates three distinct use cases.
                            </p>
                        </div>
                    </div>
                </div>
                <Callout className="w-full">
                    <List
                        title={
                            <b className="font-semibold">Three modes of Reminiscing:</b>
                        }
                    >
                        <ListItem
                            icon="🔒"
                            title="Private"
                            description="You and mutuals are invisible to each other."
                        />
                        <ListItem
                            icon="👻"
                            title="Ghost"
                            description={
                                <>
                                    <p>You can see others, but they cannot see you.</p>
                                    <p>(from UC2)</p>
                                </>
                            }
                        />
                        <ListItem
                            icon="💬"
                            title="Social"
                            description="You and mutuals are visible to each other."
                        />
                    </List>
                </Callout>
                <Callout>
                    <p>
                        <Bold>New Hypothesis:</Bold>
                    </p>
                    <p>
                        Simplifying the toggle reduces friction and accommodates diverse user needs for reminiscing.</p>
                </Callout>
            </SectionWrapper>


            {/* Prototype 2 Objectives */}
            <SectionWrapper id="Prototype 2">
                <HeadingBlock
                    subtitle="Prototype 2 Objectives"
                    title="Deepening Connections Through Artefacts"
                />
                <p>
                    Building on the foundation of Prototype 1,
                    Prototype 2 explores how artefacts can foster deeper
                    connections by allowing users to compare past and present
                    moments while offering more control over their memories.
                </p>
                <List
                    title={
                        <p>Prototype 2 <b>explores:</b></p>
                    }>
                    <ListItem
                        icon="📸"
                        title="Recreate photo artefacts at a location or with mutuals"
                        description="e.g. standing at the same spot years later, recreating a group photo with friends."
                    />
                    <ListItem
                        icon="🗑️"
                        title="Remove artefacts"
                        description="e.g. easily delete old memories that no longer feel relevant"
                    />

                </List>
                <List
                    title={
                        <p><b className="font-semibold">Features developed:</b></p>
                    }>
                    <ListItem
                        icon="📸"
                        title="Recreate a photo artefact to relive and compare past and present moments"
                        description="Overlay a past photo to align with today’s reality and see how things have changed."
                    />
                    <ListItem
                        icon="👻"
                        title="Remove individual artefacts or clear everything at once"
                        description="Provide a simple way to organise and maintain artefacts as needed."
                    />

                </List>
                <List
                    title={
                        <p><b className="font-semibold">Design opportunities addressed:</b></p>
                    }>
                    <ListItem
                        icon="O4"
                        title="Recognise contrasts in memories over time."
                    />
                    <ListItem
                        icon="O5"
                        title=" Provide control over artefacts to adapt to different situations."
                    />
                </List>
                <List
                    title={
                        <p><b className="font-semibold">Hypotheses tested:</b></p>
                    }>
                    <ListItem
                        icon="H3"
                        title="Recreating artefacts will help highlight contrasts and foster a sense of meaning."
                        className="w-auto mx-auto bg-kopken-primary-100 dark:bg-kopken-primary-950 text-black dark:text-slate-100 py-4 px-6 rounded-2xl"
                    />
                    <ListItem
                        icon="H4"
                        title="Providing control over artefacts ensures a safe and comfortable experience."
                        className="w-auto mx-auto bg-kopken-primary-100 dark:bg-kopken-primary-950 text-black dark:text-slate-100 py-4 px-6 rounded-2xl"
                    />
                </List>
            </SectionWrapper>


            {/* Prototype 2 Task Flows */}
            <SectionWrapper id="Prototype 2 Task Flows">
                <HeadingBlock
                    subtitle="Prototype 2 Task Flows"
                    title="Exploring New Features"
                    className="max-w-lg"
                />
                {/* <FigmaEmbed
                    src="https://embed.figma.com/board/oqawMrhE5MWuPuihutCUbJ/DECO3500?node-id=1644-5989&embed-host=share"
                    caption="Three main task flows to test."
                /> */}
                <figure className="mx-auto max-w-screen-lg max-h-[70vh] overflow-hidden place-content-start">
                    <Image
                        src={taskFlows4}
                        alt="Recreate an Artefact: Allows users to relive a moment by overlaying and capturing a new photo at the same location."
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        className="rounded-md"
                    />
                    <figcaption className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                        Recreate an Artefact feature allows users to relive a moment by overlaying and capturing a new photo at the same location.
                    </figcaption>
                </figure>
                <figure className="mx-auto max-w-screen-lg max-h-[70vh] overflow-hidden place-content-start">
                    <Image
                        src={taskFlows5}
                        alt="Delete an Artefact feature simplifies management of memories by enabling removal of outdated or unwanted artefacts."
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        className="rounded-md"
                    />
                    <figcaption className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                        Delete an Artefact feature simplifies management of memories by enabling removal of outdated or unwanted artefacts.
                    </figcaption>
                </figure>
            </SectionWrapper>


            {/* Prototype 2 Development */}
            <SectionWrapper id="Prototype 2 Development">
                <HeadingBlock
                    subtitle="Prototype 2 Development"
                    title="Expanding Functionality"
                />
                <p>
                    Building upon Prototype 1, we explored additional design opportunities.
                </p>
                <Callout>
                    <List
                        title={
                            <p> I ensured the prototype meets these key
                                <b className="font-semibold"> experience requirements:</b></p>
                        }>
                        <ListItem
                            icon="📸"
                            title="Recreate Artefacts"
                            description="Allow users to select and recreate a photo artefact."
                        />
                        <ListItem
                            icon="⚙️"
                            title="Artefact Control"
                            description="Provide the ability to delete individual artefacts or erase all."
                        />
                    </List>
                </Callout>
                <Callout>
                    <List
                        title={
                            <p><b className="font-semibold">How it Works:</b></p>
                        }>
                        <ListItem
                            icon="📸"
                            title="Take then recreate a photo"
                            description={
                                <p>
                                    Overlays the original photo on the viewfinder for precise alignment, powered by <Code>react-native-vision-camera</Code>
                                </p>
                            }
                        />
                        <ListItem
                            icon="🗑️"
                            title="Delete artefact"
                            description={
                                <p>
                                    Removes artefacts by ID or clears the collection from storage, using <Code>react-native-mmkv</Code>
                                </p>
                            }
                        />
                    </List>
                </Callout>
            </SectionWrapper>


            {/* What's Next for KopKen */}
            <SectionWrapper id="What's Next for KopKen?">
                <HeadingBlock
                    subtitle="What’s Next for KopKen?"
                    title="Iterating on Insights and Expanding the Scope"
                />
                <p>
                    <Bold>We showcased Prototype 2</Bold> during our workshop.
                    Developed in parallel with Prototype 1, it laid the
                    groundwork for new opportunities but hasn’t yet
                    addressed earlier insights.
                </p>
                <Callout>
                    <List
                        title={
                            <p> Moving forward, we have several
                                <b className="font-semibold"> opportunities to explore:</b></p>
                        }>
                        <ListItem
                            icon="O6"
                            title="Allow the exchange of artefacts that complement each other"
                        />
                        <ListItem
                            icon="O7"
                            title="Enable users to simultaneously engage with physical movement and memory preservation"
                        />
                    </List>
                </Callout>
                <p>
                    The next iteration (Prototype 3) will build on these opportunities while addressing
                    key issues discovered in user testing.
                </p>
            </SectionWrapper>



            {/* What's Next for KopKen */}
            <SectionWrapper id="Reflection" className="pb-60">
                <HeadingBlock
                    subtitle="Reflection"
                    title="What I Learned"
                />
                <p>
                    I learned something important about nostalgia — it&apos;s both personal and social.
                    When you visit familiar places or experience certain things, they can bring back
                    memories. But what&apos;s really special is sharing these memories with others.
                    This insight changed how I think about creating social features — it&apos;s important
                    to consider not just the memory itself, but when and how people share it.
                </p>
                <p>
                    While leading a team of four people, I learned valuable lessons about teamwork and
                    staying focused. We had a lot of ideas but limited time, so I had to carefully
                    choose which features to work on. I picked the ones that matched our team&apos;s skills
                    and would have the biggest positive impact.
                </p>
                <p>
                    We reviewed existing research and gathered user feedback to guide our design decisions.
                    This approach helped us create features that actually met users&apos; needs. Throughout the
                    project, I built functional prototypes using React Native, including features that could
                    display artefacts based on location and social context. This challenged me to grow beyond
                    basic app development skills.
                </p>
                <p>
                    Looking back, this course was a fun journey that taught me everything from understanding social
                    and mobile design to building cool features that people actually appreciate.
                </p>
            </SectionWrapper>
        </ main >
    );

}