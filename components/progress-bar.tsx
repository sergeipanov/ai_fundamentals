interface ProgressBarProps {
  progress: number
  total: number
}

export function ProgressBar({ progress, total }: ProgressBarProps) {
  const percentage = (progress / total) * 100

  return (
    <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
      <div
        className="bg-gradient-to-r from-coral-400 to-amber-400 h-3 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
      <p className="text-sm text-gray-600 mt-2 font-medium">
        Progress: {progress} of {total} sections completed
      </p>
    </div>
  )
}
