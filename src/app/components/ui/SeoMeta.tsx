"use client";
import Head from "next/head";
import { SeoMetaProps } from "@/app/constants/types";

export default function SeoMeta({ title, description }: SeoMetaProps) {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
    </Head>
  );
}
