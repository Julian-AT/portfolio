import React from "react";
import { Prose } from "@julian-at/components/prose";
import { Section } from "@julian-at/components/section";
import { env } from "@julian-at/lib/env";
import { cn } from "@julian-at/lib/utils";
import { ViewAnimation } from "@julian-at/providers/view-animation";
import Image from "next/image";
import Link from "next/link";

interface Certificate {
  title: string;
  description: string;
  date: string;
  image: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    title: "Personal Certificate",
    description: "Personal Certificate",
    date: "2025-01-01",
    image: "/images/certificates/personal.png",
  },
];

const PersonalCertificate = () => {
  return (
    <Section className="grid sm:grid-cols-2">
      {CERTIFICATES.map((certificate, index) => (
        <ViewAnimation
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          delay={index % 2 ? 0.2 : 0}
          className={cn(
            index % 2 === 0 ? "sm:border-r" : "",
            index < CERTIFICATES.length - 2 ? "border-b" : ""
          )}
          key={index}
        >
          <Link
            href={`/work/${certificate.title}`}
            className={cn(
              "flex flex-col items-start gap-6 px-4 py-8 transition-colors hover:bg-background",
              "sm:flex-row sm:px-8"
            )}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center">
              {certificate.image ? (
                <Image
                  src={certificate.image}
                  width={48}
                  height={48}
                  alt={certificate.title}
                  className={cn("block h-12 w-12 object-contain")}
                />
              ) : (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-border">
                  <span className="text-muted-foreground text-xl">
                    {certificate.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-xl tracking-tight">
                <span className="block leading-tight">{certificate.title}</span>
                <span className="block text-muted-foreground">
                  {certificate.description}
                </span>
              </h2>
              <Prose className="prose-sm">
                <p>{certificate.description}</p>
              </Prose>
              <p className="text-muted-foreground text-sm">
                {certificate.date}
              </p>
            </div>
          </Link>
        </ViewAnimation>
      ))}
      {CERTIFICATES.length % 2 ? (
        <div className="hidden border-t bg-dashed sm:block" />
      ) : (
        <div />
      )}
    </Section>
  );
};

export default PersonalCertificate;
