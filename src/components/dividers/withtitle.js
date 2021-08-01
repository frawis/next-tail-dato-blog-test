export default function DividerWithTitle({ text }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300 dark:border-gray-200" />
      </div>
      <div className="relative flex justify-start">
        <span className="pr-3 bg-white text-lg font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-200">
          {text}
        </span>
      </div>
    </div>
  )
}
