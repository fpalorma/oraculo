import './globals.css'
import { cinzel, nunito } from './ui/fonts';

export const metadata = {
  title: "Oráculo",
  description: "Oráculo del tarot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ `${nunito.className}`}>
      <body>
        <div className="absolute inset-0 -z-10 min-h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
