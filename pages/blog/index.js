import Head from 'next/head'
import Link from 'next/link'
import { request } from '@/lib/datocms'
import { renderMetaTags } from 'react-datocms'
import Container from '@/components/container'
import Date from '@/components/date'

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
    site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
      }
      blog {
        seo: _seoMetaTags {
          attributes
          content
          tag
        }
      }
  allPosts(first: $limit) {
    id
    title
    excerpt
    slug
    category {
      name
      slug
      color
    }
    author {
      name
      slug
      picture {
        url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
      }
    }
    _publishedAt
    _createdAt
    date
  }
}`

export async function getStaticProps(context) {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 3 },
    preview: context.preview,
  })

  return {
    props: { data },
  }
}

const BlogIndex = ({ data }) => {
  return (
    <>
      <Head>{renderMetaTags(data.blog.seo.concat(data.site.favicon))}</Head>
      <div>
        <Container>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {data.allPosts.map((blogPost) => (
              <article key={blogPost.id} className="flex flex-col">
                <div>
                  <Link
                    as={`/blog/category/${blogPost.category.slug}`}
                    href="/blog/category/[slug]"
                  >
                    <a className="inline-block">
                      <span
                        className={`${blogPost.category.color} font-display inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium`}
                      >
                        {blogPost.category.name}
                      </span>
                    </a>
                  </Link>
                </div>
                <Link as={`/blog/${blogPost.slug}`} href="/blog/[slug]">
                  <a className="block mt-4 flex-1 group">
                    <p className="text-xl font-display font-extrabold text-gray-900 group-hover:text-green-600 dark:text-gray-100 dark:group-hover:text-green-500">
                      {blogPost.title}
                    </p>
                    <p className="mt-3 text-base text-gray-600 group-hover:text-gray-800 dark:text-gray-300 dark:group-hover:text-gray-100">
                      {blogPost.excerpt}
                    </p>
                  </a>
                  </Link>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={blogPost.author.slug}>
                        <span className="sr-only">{blogPost.author.name}</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src={blogPost.author.picture.url}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-display font-medium text-gray-900 hover:text-green-600 dark:text-gray-100 dark:hover:text-green-500">
                        <a href={blogPost.author.slug}>{blogPost.author.name}</a>
                      </p>
                      <div className="flex space-x-1 font-display text-xs text-gray-500 dark:text-gray-300">
                        <Date dateString={blogPost.date} />
                      </div>
                    </div>
                  </div>
                
              </article>
            ))}
          </div>
        </Container>
      </div>
    </>
  )
}

export default BlogIndex
