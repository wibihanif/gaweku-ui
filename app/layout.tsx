import "./globals.css";
import { Inter } from "next/font/google";
import { ProvidersReactQuery } from "./providersReactQuery";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Hydration } from "./components/Hydration/Hydration";
import { Metadata } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaweku To Do List",
  description: "Gaweku To Do List",
  icons: {
    icon: [
      {
        // media: "(prefers-color-scheme: light)",
        url: "/images/gaweku-logo.png",
        href: "/images/gaweku-logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Gaweku To Do List</title>
        <link rel="icon" href="/images/gaweku-logo.png" />
      </head>
      <body className={`${inter.className} `}>
        <ProvidersReactQuery>
          <Hydration>{children}</Hydration>
          <ToastContainer />
        </ProvidersReactQuery>
      </body>
    </html>
  );
}
