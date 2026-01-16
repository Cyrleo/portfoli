import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
    Meta,
    Schema,
    AvatarGroup,
    Button,
    Column,
    Flex,
    Heading,
    Media,
    Text,
    SmartLink,
    Row,
    Avatar,
    Line,
} from "@once-ui-system/core";
import { baseURL, about, person, certificates } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";
import { Certificates } from "@/components/certificates/Certificates";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const posts = getPosts(["src", "app", "certificates", "certs"]);
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
    const routeParams = await params;
    const slugPath = Array.isArray(routeParams.slug)
        ? routeParams.slug.join("/")
        : routeParams.slug || "";

    const posts = getPosts(["src", "app", "certificates", "certs"]);
    let post = posts.find((post) => post.slug === slugPath);

    if (!post) return {};

    return Meta.generate({
        title: post.metadata.title,
        description: post.metadata.summary,
        baseURL: baseURL,
        image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
        path: `${certificates.path}/${post.slug}`,
    });
}

export default async function Certificate({
    params,
}: {
    params: Promise<{ slug: string | string[] }>;
}) {
    const routeParams = await params;
    const slugPath = Array.isArray(routeParams.slug)
        ? routeParams.slug.join("/")
        : routeParams.slug || "";

    let post = getPosts(["src", "app", "certificates", "certs"]).find((post) => post.slug === slugPath);

    if (!post) {
        notFound();
    }

    return (
        <Column as="section" maxWidth="m" horizontal="center" gap="l">
            <Schema
                as="blogPosting"
                baseURL={baseURL}
                path={`${certificates.path}/${post.slug}`}
                title={post.metadata.title}
                description={post.metadata.summary}
                datePublished={post.metadata.publishedAt}
                dateModified={post.metadata.publishedAt}
                image={
                    post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
                }
                author={{
                    name: person.name,
                    url: `${baseURL}${about.path}`,
                    image: `${baseURL}${person.avatar}`,
                }}
            />
            <Column maxWidth="s" gap="16" horizontal="center" align="center">
                <SmartLink href="/certificates">
                    <Text variant="label-strong-m">Certificates</Text>
                </SmartLink>
                <Text variant="body-default-xs" onBackground="neutral-weak" marginBottom="12">
                    {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
                </Text>
                <Heading wrap="balance" variant="heading-strong-xl" align="center">
                    {post.metadata.title}
                </Heading>
                <Text wrap="balance" variant="body-default-l" onBackground="neutral-weak" align="center">
                    {post.metadata.summary}
                </Text>
            </Column>
            {post.metadata.images && post.metadata.images.length > 0 && (
                <Column fillWidth horizontal="center" paddingX="l">
                    <Media
                        radius="l"
                        border="neutral-alpha-medium"
                        objectFit="cover"
                        style={{ aspectRatio: "16 / 9" }}
                        fillWidth
                        priority
                        src={post.metadata.images[0]}
                        alt={post.metadata.title}
                    />
                </Column>
            )}
            <Column as="article" maxWidth="xs" fillWidth gap="m">
                <CustomMDX source={post.content} />
            </Column>
            <Line maxWidth="s" fillWidth border="neutral-alpha-medium" marginY="40" />
            <Column maxWidth="s" fillWidth gap="m">
                <Heading variant="heading-strong-l">Related Certificates</Heading>
                <Certificates range={[1, 2]} exclude={[post.slug]} />
            </Column>
            <ScrollToHash />
        </Column>
    );
}
