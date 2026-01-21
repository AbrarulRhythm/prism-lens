import { Inknut_Antiqua } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header/Header";

const inknutAntiqua = Inknut_Antiqua({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata = {
  title: "PrismLens - Photography & Portfolio Next JS Template - Abrarul Rhtyhm",
  description: "Photography & Portfolio Next JS Template Kit Preview - Abrarul Rhythm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inknutAntiqua.className} antialiased`}>

        <div className="main-wrapper">

          {/* Header */}
          <Header></Header>
          {/* Header End */}

          {/* ========== :: Mian Start :: ========== */}
          <main className="site-main">
            {children}
          </main>
          {/* ========== :: Mian End :: ========== */}

          {/* Footer */}
          {/* Footer End */}

        </div>

      </body>
    </html>
  );
}
