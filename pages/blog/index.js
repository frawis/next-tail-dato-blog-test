import Head from 'next/head'
import { request } from '@/lib/datocms'
import { Image, StructuredText, renderMetaTags } from 'react-datocms'

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
    content {
        value
    }
    coverImage {
        responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
    }
}`

export async function getStaticProps(context) {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 3 },
    preview: context.preview
  })

  return {
    props: { data },
  }
}

const BlogIndex = ({ data }) => {
  return (
    <>
      <Head>
        {renderMetaTags(data.blog.seo.concat(data.site.favicon))}
        
      </Head>
      <div>
        <div>
          {data.allPosts.map((blogPost) => (
            <article key={blogPost.id}>
              <div className="h-32 w-32">
                <Image data={blogPost.coverImage.responsiveImage} />
              </div>
              <div>{blogPost.title}</div>
              <div>{blogPost.excerpt}</div>
              <div className="prose prose-green">
                <StructuredText data={blogPost.content} />
              </div>
            </article>
          ))}{' '}
        </div>
        <div>{JSON.stringify(data, null, 2)}</div>
      </div>
    </>
  )
}

export default BlogIndex
