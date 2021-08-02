/* eslint-disable @next/next/no-img-element */
import Date from '@/components/date'

const PostFooter = ({ postAuthor, postDate }) => {
  return (
    <div className="mt-6 flex items-center">
      <div className="flex-shrink-0">
        <span className="sr-only">{postAuthor.name}</span>
        <img
          className="h-10 w-10 rounded-full"
          src={postAuthor.picture.url}
          alt=""
        />
      </div>
      <div className="ml-3">
        <p className="text-sm font-display font-medium text-gray-900 dark:text-gray-100">
          {postAuthor.name}
        </p>
        <div className="flex space-x-1 font-display text-xs text-gray-500 dark:text-gray-300">
          <Date dateString={postDate} />
        </div>
      </div>
    </div>
  )
}

export default PostFooter
