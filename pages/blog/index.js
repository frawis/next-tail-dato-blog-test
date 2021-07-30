import Head from 'next/head'
import { request } from '@/lib/datocms'
import { Image } from 'react-datocms'

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allPosts(first: $limit) {
    id
    title
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

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 3 },
  })

  return {
    props: { data },
  }
}

const BlogIndex = ({ data }) => {
  return (
    <>
      <Head>
        <title>Latest News | BlackNickr</title>
      </Head>
      <div>
        <div>
          {data.allPosts.map((blogPost) => (
            <article key={blogPost.id}>
              <div className="h-32 w-32">
                <Image data={blogPost.coverImage.responsiveImage} />
              </div>
              <div>{blogPost.title}</div>
            </article>
          ))}{' '}
        </div>
        <div>{JSON.stringify(data, null, 2)}</div>
      </div>
    </>
  )
}

export default BlogIndex
