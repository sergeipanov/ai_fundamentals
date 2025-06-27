"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SortingItem {
  id: string
  text: string
  category: "AI" | "Non-AI"
}

interface SortingActivityProps {
  items: SortingItem[]
  onComplete: (score: number) => void
}

export function SortingActivity({ items, onComplete }: SortingActivityProps) {
  const [aiItems, setAiItems] = useState<SortingItem[]>([])
  const [nonAiItems, setNonAiItems] = useState<SortingItem[]>([])
  const [availableItems, setAvailableItems] = useState<SortingItem[]>(items)
  const [showResults, setShowResults] = useState(false)

  const moveToCategory = (item: SortingItem, category: "AI" | "Non-AI") => {
    setAvailableItems((prev) => prev.filter((i) => i.id !== item.id))

    if (category === "AI") {
      setAiItems((prev) => [...prev, item])
    } else {
      setNonAiItems((prev) => [...prev, item])
    }
  }

  const removeFromCategory = (item: SortingItem, category: "AI" | "Non-AI") => {
    if (category === "AI") {
      setAiItems((prev) => prev.filter((i) => i.id !== item.id))
    } else {
      setNonAiItems((prev) => prev.filter((i) => i.id !== item.id))
    }
    setAvailableItems((prev) => [...prev, item])
  }

  const checkAnswers = () => {
    const aiCorrect = aiItems.filter((item) => item.category === "AI").length
    const nonAiCorrect = nonAiItems.filter((item) => item.category === "Non-AI").length
    const totalCorrect = aiCorrect + nonAiCorrect
    const score = Math.round((totalCorrect / items.length) * 100)

    setShowResults(true)
    onComplete(score)
  }

  const reset = () => {
    setAiItems([])
    setNonAiItems([])
    setAvailableItems(items)
    setShowResults(false)
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-amber-200">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold text-gray-800">📦 Items to Sort</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3 min-h-[80px] p-4 bg-amber-50 rounded-lg">
            {availableItems.length === 0 ? (
              <p className="text-gray-500 text-center w-full">All items have been sorted! 🎉</p>
            ) : (
              availableItems.map((item) => (
                <div key={item.id} className="flex flex-col gap-2">
                  <div className="bg-white p-3 rounded-lg border-2 border-gray-200 shadow-sm">
                    <p className="font-medium text-gray-800 text-sm mb-2">{item.text}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => moveToCategory(item, "AI")}
                        style={{
                          backgroundColor: "#ed7c47",
                          color: "white",
                          border: "none",
                          padding: "6px 12px",
                          borderRadius: "6px",
                          fontSize: "12px",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#de5a2c"
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "#ed7c47"
                        }}
                      >
                        → AI
                      </button>
                      <button
                        onClick={() => moveToCategory(item, "Non-AI")}
                        style={{
                          backgroundColor: "#3b82f6",
                          color: "white",
                          border: "none",
                          padding: "6px 12px",
                          borderRadius: "6px",
                          fontSize: "12px",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#2563eb"
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "#3b82f6"
                        }}
                      >
                        → Non-AI
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-2 border-coral-300">
          <CardHeader>
            <CardTitle className="text-center text-lg font-bold text-coral-700">🤖 AI Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 min-h-[120px] p-4 bg-coral-50 rounded-lg">
              {aiItems.length === 0 ? (
                <p className="text-coral-600 text-center text-sm">Drop AI items here</p>
              ) : (
                aiItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-white p-3 rounded border shadow-sm"
                  >
                    <span className="text-sm font-medium text-gray-800">{item.text}</span>
                    <button
                      onClick={() => removeFromCategory(item, "AI")}
                      style={{
                        backgroundColor: "#f3f4f6",
                        color: "#6b7280",
                        border: "1px solid #d1d5db",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#e5e7eb"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#f3f4f6"
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-soft-blue-300">
          <CardHeader>
            <CardTitle className="text-center text-lg font-bold text-soft-blue-700">👤 Non-AI Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 min-h-[120px] p-4 bg-soft-blue-50 rounded-lg">
              {nonAiItems.length === 0 ? (
                <p className="text-soft-blue-600 text-center text-sm">Drop Non-AI items here</p>
              ) : (
                nonAiItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-white p-3 rounded border shadow-sm"
                  >
                    <span className="text-sm font-medium text-gray-800">{item.text}</span>
                    <button
                      onClick={() => removeFromCategory(item, "Non-AI")}
                      style={{
                        backgroundColor: "#f3f4f6",
                        color: "#6b7280",
                        border: "1px solid #d1d5db",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#e5e7eb"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#f3f4f6"
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center space-y-4">
        {!showResults ? (
          <button
            onClick={checkAnswers}
            disabled={availableItems.length > 0}
            style={{
              backgroundColor: availableItems.length === 0 ? "#f59e0b" : "#e5e7eb",
              color: availableItems.length === 0 ? "white" : "#6b7280",
              border: "none",
              padding: "12px 32px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: availableItems.length === 0 ? "pointer" : "not-allowed",
            }}
            onMouseEnter={(e) => {
              if (availableItems.length === 0) {
                e.target.style.backgroundColor = "#d97706"
              }
            }}
            onMouseLeave={(e) => {
              if (availableItems.length === 0) {
                e.target.style.backgroundColor = "#f59e0b"
              }
            }}
          >
            Check My Answers
          </button>
        ) : (
          <div className="space-y-4">
            <div className="p-6 bg-green-100 border-2 border-green-300 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4">Results</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">AI Items:</p>
                  <div className="flex flex-wrap gap-2">
                    {aiItems.map((item) => (
                      <span
                        key={item.id}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          item.category === "AI" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                        }`}
                      >
                        {item.text} {item.category === "AI" ? "✓" : "✗"}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Non-AI Items:</p>
                  <div className="flex flex-wrap gap-2">
                    {nonAiItems.map((item) => (
                      <span
                        key={item.id}
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          item.category === "Non-AI" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                        }`}
                      >
                        {item.text} {item.category === "Non-AI" ? "✓" : "✗"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={reset}
              style={{
                backgroundColor: "#f59e0b",
                color: "white",
                border: "1px solid #d97706",
                padding: "8px 16px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#d97706"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#f59e0b"
              }}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
