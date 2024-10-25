import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/haeder";
import Footer from "@/components/ui/footer";
import { GoogleOAuthProvider } from '@react-oauth/google';


export const metadata: Metadata = {
  title: "Laaraa AI",
  description: "Create Your Trip with Power Of AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleOAuthProvider clientId="486155021291-g9t0cvhli936puhr3ofh5tho47snfdtl.apps.googleusercontent.com">
    <html lang="en">
      <body
      className="flex flex-col items-center"
      >
        <div className="w-[85%] flex flex-col">
        <Header />
        {children}
        <Footer />
        </div>

      </body>
    </html>
    </GoogleOAuthProvider>
  );
}
