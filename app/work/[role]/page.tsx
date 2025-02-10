import { ROLES } from "@julian-at/app/work/components/roles";
import { Prose } from "@julian-at/components/prose";
import { Section } from "@julian-at/components/section";
import { HeroSection } from "@julian-at/components/sections/hero";
import { env } from "@julian-at/lib/env";
import { cn } from "@julian-at/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";

type RoleProps = {
  params: Promise<{
    role: string;
  }>;
};

export const generateMetadata = async ({ params }: RoleProps) => {
  const { role: paramRole } = await params;

  const role = ROLES.find((r) => r.slug === paramRole);

  if (!role) {
    return {};
  }

  return {
    title: role.title,
    description: role.description,
  };
};

const Role = async ({ params }: RoleProps) => {
  const { role: paramRole } = await params;

  const role = ROLES.find((r) => r.slug === paramRole);

  if (!role) {
    return notFound();
  }

  return (
    <>
      <HeroSection
        image={
          role.image || role.url ? (
            <Image
              src={
                role.image ||
                `https://img.logo.dev/${new URL(role.url).hostname}?token=${env.NEXT_PUBLIC_LOGO_DEV_TOKEN}`
              }
              width={48}
              height={48}
              alt={role.title}
              className={cn(
                'block h-12 w-12 object-contain',
                role.invert && 'dark:invert'
              )}
            />
          ) : (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-border">
              <span className="text-muted-foreground text-xl">
                {role.company.charAt(0)}
              </span>
            </div>
          )
        }
        title={`${role.role} at ${role.title}`}
      >
        <p className="mx-auto max-w-4xl sm:text-center">
          <Balancer>{role.description}</Balancer>
        </p>
        <div
          className={cn(
            "flex flex-wrap gap-2 text-muted-foreground text-sm",
            "sm:items-center sm:justify-center sm:gap-4"
          )}
        >
          <p>{role.type}</p>
          <p>&bull;</p>
          <p>
            {role.startYear} &mdash; {role.endYear ?? "Present"}
          </p>
          <p>&bull;</p>
          <p>{role.location}</p>
          {role.url && (
            <>
              <p>&bull;</p>
              <a href={role.url} target="_blank" rel="noreferrer noopener">
                {new URL(role.url).hostname}
              </a>
            </>
          )}
        </div>
      </HeroSection>
      <Section className={cn("px-4 py-8", "sm:px-8 sm:py-16")}>
        <Prose className="mx-auto max-w-3xl">
          {role.content.map((block, index) => (
            <p key={index}>{block.content}</p>
          ))}
        </Prose>
      </Section>
    </>
  );
};

export default Role;
