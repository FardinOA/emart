import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/main/header";
import Footer from "@/components/main/footer";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased relative",
                    fontSans.variable
                )}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
