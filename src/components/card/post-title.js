const PostTitle = ({ data }) => {
  return (
    <div className="flex-1 text-xl font-display font-extrabold text-gray-900 group-hover:text-green-600 dark:text-gray-100 dark:group-hover:text-green-500">
      {data}
    </div>
  )
}

export default PostTitle
