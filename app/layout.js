import "./globals.css";
import Navbar from "./components/Navbar";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata = {
  title: "Qyuro",
  description: "The AI chatbot that doesn’t guess.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
