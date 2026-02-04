export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 rounded-full border-4 border-slate-200 dark:border-slate-700" />
        {/* Spinning ring */}
        <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-transparent border-t-primary-500 animate-spin" />
      </div>
    </div>
  )
}
