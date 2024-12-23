import Image from "next/image";
import A from "./components/A";


const images = [
    'ghost-mode.png',
    'private-mode.png',
    'social-mode.png',
    'social-mode-expand.png',
    'take-photo.png',
    'detail-photo.png',
    'recreate-photo.png',
    'timeline-photo.png',
    'settings.png',

]

export default function KopKenPage() {
    return (
        <div className="max-w-lg flex flex-col gap-6 pb-10">

            {/* Hero */}
            <section className=" h-screen flex flex-col justify-end py-12 px-8">
                <p className="font-semibold tracking-wider">UX Case Study</p>
                <h1 className="text-heading">
                    <span className="font-semibold">KopKen － </span>
                    Designing Context-Aware Nostalgia Experiences</h1>
            </section>
            <section className="flex flex-col gap-3 px-8">
                <div>
                    <p className="font-semibold tracking-wider">Role</p>
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


            {/* UIs */}
            <section className="flex flex-col items-center gap-4">
                <div className="flex flex-wrap gap-y-10 gap-x-1 justify-around py-6">
                    {images.map((src, i) => (
                        <div key={i}
                            className="relative w-1/4 mx-auto"
                        >
                            <Image
                                src={`/kopken/ui/${src}`}
                                alt="KopKen UIs"
                                layout="responsive"
                                width={402}
                                height={874}
                            />
                        </div>
                    ))}
                </div>
                <p>Try Interactive Prototype in Figma 👇🏻</p>
                <A
                    href={"https://www.figma.com/proto/wXnQmGa9nOdxQ6N2vmEkiJ/KopKen?node-id=191-90&p=f&viewport=1311%2C-1510%2C0.26&t=n6BUSnqEVlgVe0cU-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=669%3A2737&show-proto-sidebar=0"}
                    variant="button"
                    isNewTab
                    label="Open in Figma"
                />
            </section>


            {/*  */}
        </div>

    );
}
