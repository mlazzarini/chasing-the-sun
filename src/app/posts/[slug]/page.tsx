import { allPosts } from 'contentlayer/generated'
import MainWrapper from '@/components/MainWrapper'
import type { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from '@/components/Image'

const mdxComponents: MDXComponents = {
  ImageComponent: ({ src, alt }) => <Image src={src} alt={alt} />,
}

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <MainWrapper title={post.title}>
      <MDXContent components={mdxComponents} />
    </MainWrapper>
  )
}

export default PostLayout
