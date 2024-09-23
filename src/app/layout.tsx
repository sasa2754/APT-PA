// Importes externos
import localFont from "next/font/local";
import { Karla } from "next/font/google";


// Importes internos
import "./globals.css";
import { Menu } from "@/components/menu";
import { Footer } from "@/components/footer";


const karla = Karla({
  weight: ["200", "400", "800"],
  style: ["normal"],
  variable: "--karla",
  subsets: ["latin"]
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.variable} antialiased`}>
        <Menu
          op1="Index"
          op2="Config"
          op3="Loja"
          op4="Mais"
        />

        {children}

        <Footer 
          // pag="Dragãozinho"
          contact={5541995213923}
        />
      </body>
    </html>
  );
}
