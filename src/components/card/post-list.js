import Link from 'next/link'
import Date from '@/components/date'
import PostExcerpt from '@/components/card/post-excerpt'
import PostLabel from '@/components/card/post-label'
import PostTitle from '@/components/card/post-title'

const PostList = ({ data }) => {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <PostLabel data={data.category} />
        <span className="pt-1 text-sm text-gray-400">
          <Date dateString={data.date} />
        </span>
      </div>
      <div className="md:flex-grow">
        <Link as={`/blog/${data.slug}`} href="/blog/[slug]">
          <a className="flex flex-col items-start flex-1 group">
            <PostTitle data={data.title} />
            <PostExcerpt data={data.excerpt} />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default PostList
