import Link from "next/link";

export default function EmailLink({ email, children }: { email: string; children: React.ReactNode }) {
    const subject = encodeURIComponent("Project Proposal — {  Your Name  }");
    const body = encodeURIComponent("[  Pre-filled body  ] Hi Haz, let's build {  something cool  }.");

    return (
        <Link
            href={`mailto:${email}?subject=${subject}&body=${body}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 font-semibold transition-all ease-in-out duration-150"
        >
            {children}
        </Link>
    );
}
