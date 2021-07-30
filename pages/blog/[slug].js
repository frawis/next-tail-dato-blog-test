import Head from 'next/head'
import {
  Image,
  renderMetaTags,
  StructuredText,
  useQuerySubscription,
} from 'react-datocms'
import { CameraIcon } from '@heroicons/react/solid'
import { request } from '@/lib/datocms'
import { metaTagsFragment, responsiveImageFragment } from '@/lib/fragments'

import Container from '@/components/container'

export async function getStaticPaths() {
  const data = await request({ query: `{ allPosts {slug} }` })

  return {
    paths: data.allPosts.map((blog) => `/blog/${blog.slug}`),
    fallback: false,
  }
}

export async function getStaticProps({ params, preview = false }) {
  const graphqlRequest = {
    query: `
          query PostBySlug($slug: String) {
            site: _site {
              favicon: faviconMetaTags {
                ...metaTagsFragment
              }
            }
            post(filter: {slug: {eq: $slug}}) {
              seo: _seoMetaTags {
                ...metaTagsFragment
              }
              title
              slug
              content {
                value
                
              }
              date
              ogImage: coverImage{
                url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
              }
              coverImage {
                author
                responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1184, h: 1376 }) {
                  ...responsiveImageFragment
                }
              }
              author {
                name
                picture {
                  url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
                }
              }
              category {
                name
              }
            }
            morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
              title
              slug
              excerpt
              date
              coverImage {
                responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                  ...responsiveImageFragment
                }
              }
              author {
                name
                picture {
                  url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
                }
              }
            }
          }
          ${responsiveImageFragment}
          ${metaTagsFragment}
        `,
    preview,
    variables: {
      slug: params.slug,
    },
  }

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_CMS_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  }
}

const BlogPost = ({ subscription, preview }) => {
  const {
    data: { site, post, morePosts },
  } = useQuerySubscription(subscription)

  const metaTags = post.seo.concat(site.favicon)

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="font-display text-base text-green-600 font-bold tracking-wide uppercase">
                {post.category.name}
              </h2>
              <h1 className="mt-2 text-3xl leading-8 font-display font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {post.title}
              </h1>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                />
              </svg>
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <Image
                      className="rounded-lg shadow-lg object-cover object-center"
                      data={post.coverImage.responsiveImage}
                    />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <CameraIcon
                      className="flex-none w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2">by {post.coverImage.author}</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">{post.excerpt}</p>
              </div>
              <div className="mt-5 prose prose-green text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <StructuredText data={post.content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPost
