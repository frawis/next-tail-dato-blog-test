import Link from 'next/link'

const PostLabel = ({ data }) => {
  return (
    <Link as={`/blog/category/${data.slug}`} href="/blog/category/[slug]">
      <a className="inline-block">
        <span
          className={`${data.color} font-display inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium`}
        >
          {data.name}
        </span>
      </a>
    </Link>
  )
}

export default PostLabel
