import "@/app/kopken/globals.css";

export default function KopKenLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <h1 className="text-heading">KopKen</h1>
                </header>
                <main>{children}</main>
                <footer>
                    <p className="text-caption">© KopKen 2024</p>
                </footer>
            </body>
        </html>
    );
}
