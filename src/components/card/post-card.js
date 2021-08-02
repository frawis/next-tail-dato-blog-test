import Link from 'next/link'
import PostTitle from './post-title'
import PostExcerpt from './post-excerpt'
import PostLabel from './post-label'
import PostFooter from './post-footer'

const PostCard = ({ data }) => {
  return (
    <article className="flex flex-col items-start">
      <div>
        <PostLabel data={data.category} />
      </div>
      <Link as={`/blog/${data.slug}`} href="/blog/[slug]">
        <a className="flex flex-col items-start mt-4 flex-1 group">
          <PostTitle data={data.title} />
          <PostExcerpt data={data.excerpt} />
        </a>
      </Link>
      <PostFooter postAuthor={data.author} postDate={data.date} />
    </article>
  )
}

export default PostCard
