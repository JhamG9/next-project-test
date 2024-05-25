import Navbar from "../components/Navbar";
import {
  Roboto
} from 'next/font/google'
export const metadata = {
  title: "JhamG9 - HomePage",
  description: "Esta es la pagina principal de mi Tienda",
  keywords: "tienda, online, ecommerce",
};
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
