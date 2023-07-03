import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "Blog with NextJs",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header className="mb-8">
          <div className="container mx-auto">
            <div className="py-6 flex items-center justify-between">
              <div>
                <Link href="/" className="font-bold text-lg text-indigo-700">
                  Blog Next
                </Link>
              </div>

              <div className="flex gap-8">
                <Link href="/">Home</Link>
                <Link href="/blogs">Blogs</Link>
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="container mx-auto">{children}</div>
        </main>

        <footer className="mt-auto">
          <div className="container mx-auto border-t border-neutral-200 mt-20">
            <div className="py-10 flex items-center justify-between">
              <div>
                <Link href="/" className="font-semibold text-lg">
                  Blog Next
                </Link>
              </div>

              <div className="flex gap-8">
                <Link href="/">Home</Link>
                <Link href="/blogs">Blogs</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
