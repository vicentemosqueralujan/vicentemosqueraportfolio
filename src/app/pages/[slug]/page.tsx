import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig, content } from "@/config";
import { defaultLocale } from "@/i18n/translations";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageDetailClient from "./PageDetailClient";

export function generateStaticParams() {
  return content[defaultLocale].pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = content[defaultLocale].pages.find((p) => p.slug === slug);
  if (!page) return {};
  return { title: `${page.title} — ${siteConfig.name}`, description: page.subtitle };
}

export default async function PageDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = content[defaultLocale].pages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 pb-16 bg-[#f9f9fb] dark:bg-[#111113]">
        <PageDetailClient slug={slug} />
      </main>
      <Footer />
    </>
  );
}
