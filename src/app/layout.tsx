import { Manrope } from "next/font/google";
import { QueryProvider } from "@/components/providers/QueryProvider";
import Header from "@/components/globals/Header";
import Footer from "@/components/globals/Footer";
import AuthProvider from "@/components/providers/AuthProvider";
import "@/app/globals.css";

const font = Manrope({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params?: { slug?: string[] };
}) {
  return (
    <html lang="fr">
      <body className={font.className}>
        <AuthProvider>
          <QueryProvider>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}