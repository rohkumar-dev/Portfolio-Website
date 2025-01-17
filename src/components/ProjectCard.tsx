"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@/once-ui/components";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "16px", borderBottom: "1px solid #e0e0e0" }}>
      <Column fillWidth gap="m">
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          images={images.map((image) => ({
            src: image,
            alt: title,
          }))}
        />
        <Flex
          style={{
            flexDirection: "column",
            width: "100%",
            padding: "12px 16px 24px 16px",
            gap: "24px",
          }}
        >
          {title && (
            <Flex style={{ flex: 5 }}>
              <Heading as="h2" wrap="balance" variant="heading-strong-xl">
                {title}
              </Heading>
            </Flex>
          )}
          {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
            <Column style={{ flex: 7, gap: "16px" }}>
              {avatars?.length > 0 && (
                <AvatarGroup avatars={avatars} size="m" reverse />
              )}
              {description?.trim() && (
                <Text
                  wrap="balance"
                  variant="body-default-s"
                  onBackground="neutral-weak"
                >
                  {description}
                </Text>
              )}
              <Flex style={{ gap: "24px", flexWrap: "wrap" }}>
                {content?.trim() && (
                  <SmartLink
                    suffixIcon="arrowRight"
                    style={{ margin: "0", width: "fit-content" }}
                    href={href}
                  >
                    <Text variant="body-default-s">Read More</Text>
                  </SmartLink>
                )}
                {link && (
                  <SmartLink
                    suffixIcon="arrowUpRightFromSquare"
                    style={{ margin: "0", width: "fit-content" }}
                    href={link}
                  >
                    <Text variant="body-default-s">View project</Text>
                  </SmartLink>
                )}
              </Flex>
            </Column>
          )}
        </Flex>
      </Column>
    </div>
  );
};