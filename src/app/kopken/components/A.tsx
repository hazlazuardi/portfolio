import React from 'react'

type Props = {
    variant: "button" | "text",
    href: string,
    isNewTab: boolean,
    label: string
}

export default function A({ variant, href, isNewTab, label }: Props) {
    const styles = {
        "button": "inline-flex items-center px-4 py-2 bg-kopken-primary hover:bg-kopken-primary-400 rounded-3xl",
        "text": ""
    }

    return (
        <a
            className={styles[variant]}
            href={href}
            target={isNewTab ? "_blank" : ""}
            rel="noreferrer"
        >
            {label}
        </a>
    )

}
