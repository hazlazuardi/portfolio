import "../globals.css";


export default function KopKenLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='font-kopken'>
      <header>
        <h1 className="text-heading">KopKen</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p className="text-caption">© KopKen 2024</p>
      </footer>
    </div>
  );
}
