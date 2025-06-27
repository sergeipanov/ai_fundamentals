interface FlipCardProps {
  front: string
  back: string
  frontColor: string
  backColor: string
}

export function FlipCard({ front, back, frontColor, backColor }: FlipCardProps) {
  return (
    <div className="flip-card w-full">
      <div className="flip-card-inner">
        <div className={`flip-card-front ${frontColor} text-white font-semibold text-lg`}>
          <p>{front}</p>
        </div>
        <div className={`flip-card-back ${backColor} text-white font-medium`}>
          <p className="text-sm leading-relaxed">{back}</p>
        </div>
      </div>
    </div>
  )
}
