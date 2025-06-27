"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface QuizQuestionProps {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  onAnswer: (correct: boolean) => void
  questionId?: string // Add unique identifier for each question
}

export function QuizQuestion({
  question,
  options,
  correctAnswer,
  explanation,
  onAnswer,
  questionId = "quiz",
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowResult(true)
      onAnswer(selectedAnswer === correctAnswer)
    }
  }

  const handleReset = () => {
    setSelectedAnswer(null)
    setShowResult(false)
  }

  return (
    <Card className="mb-6 border-2 border-soft-blue-200">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{question}</h3>

        <div className="space-y-3 mb-4">
          {options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                selectedAnswer === index
                  ? "border-coral-400 bg-coral-50"
                  : "border-gray-200 hover:border-coral-200 hover:bg-coral-25"
              }`}
            >
              <input
                type="radio"
                name={`${questionId}-option`} // Use unique name for each question
                value={index}
                checked={selectedAnswer === index}
                onChange={() => setSelectedAnswer(index)}
                className="mr-3 text-coral-500"
                disabled={showResult}
              />
              <span className="font-medium">{option}</span>
            </label>
          ))}
        </div>

        {!showResult ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            style={{
              backgroundColor: selectedAnswer !== null ? "#ed7c47" : "#e5e7eb",
              color: selectedAnswer !== null ? "white" : "#6b7280",
              border: "none",
              padding: "8px 24px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: selectedAnswer !== null ? "pointer" : "not-allowed",
            }}
          >
            Submit Answer
          </Button>
        ) : (
          <div className="space-y-4">
            <div
              className={`p-4 rounded-lg ${
                selectedAnswer === correctAnswer
                  ? "bg-green-100 border-2 border-green-300"
                  : "bg-red-100 border-2 border-red-300"
              }`}
            >
              <p className="font-bold text-lg">
                {selectedAnswer === correctAnswer ? "🎉 Correct!" : "❌ Not quite right"}
              </p>
              <p className="mt-2 text-gray-700">{explanation}</p>
            </div>
            <Button
              onClick={handleReset}
              variant="outline"
              className="border-coral-400 text-coral-600 hover:bg-coral-50"
            >
              Try Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
