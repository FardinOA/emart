import { Inter as FontSans, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/main/header";
import Footer from "@/components/main/footer";
import BottomNav from "@/components/main/bottomNav";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
    variable: "--font-poppins",
});
export const metadata = {
    title: "E-Mart",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-poppins antialiased relative  ",
                    poppins.variable
                )}
            >
                <Toaster duration={3000} />
                <Header />
                {children}
                <Footer />
                <BottomNav />
            </body>
        </html>
    );
}
