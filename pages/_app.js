import { Mali } from "next/font/google";
import "../styles/globals.css";

const mali = Mali({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mali",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${mali.variable} font-sans min-h-screen`}>
      <Component {...pageProps} />
    </div>
  );
}
