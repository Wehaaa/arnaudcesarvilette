import Link from "next/link";
import ContactDialog from "./ContactDialog";

const Footer = () => {
  return (
    <footer className="bg-slate-50 p-6 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex w-full justify-between items-center">
          <div className="text-md font-bold">
            Arnaud César Vilette
          </div>
          <nav className="flex gap-4 text-sm text-gray-600">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="#">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;