import type { Metadata } from "next";
import { siteConfig, content } from "@/config";
import { defaultLocale } from "@/i18n/translations";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PagesIndexClient from "./PagesIndexClient";

export const metadata: Metadata = {
  title: `Pages — ${siteConfig.name}`,
  description: content[defaultLocale].engineeringPages.description,
};

export default function PagesIndex() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-16 bg-[#f9f9fb] dark:bg-[#111113]">
        <PagesIndexClient />
      </main>
      <Footer />
    </>
  );
}
