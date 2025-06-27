"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProgressBar } from "@/components/progress-bar"
import { QuizQuestion } from "@/components/quiz-question"
import { Footer } from "@/components/footer"
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Module2() {
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState<boolean[]>(new Array(6).fill(false))
  const [sectionProgress, setSectionProgress] = useState<{ [key: number]: boolean }>({})
  const router = useRouter()

  const totalSections = 6

  const markSectionComplete = (sectionIndex: number) => {
    const newCompleted = [...completedSections]
    newCompleted[sectionIndex] = true
    setCompletedSections(newCompleted)
    setSectionProgress((prev) => ({ ...prev, [sectionIndex]: true }))
  }

  const goToNextSection = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1)
    }
  }

  const goToPreviousSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  const canProceed = completedSections[currentSection]
  const completedCount = completedSections.filter(Boolean).length

  // Section content data
  const sections = [
    {
      title: "Why AI Safety Matters",
      icon: "🛡️",
      color: "from-coral-100 to-amber-100",
    },
    {
      title: "Key Concepts of AI Safety",
      icon: "🔐",
      color: "from-amber-100 to-soft-blue-100",
    },
    {
      title: "Scenario-Based Activity - Spot the Sensitive Data",
      icon: "🕵️",
      color: "from-soft-blue-100 to-coral-100",
    },
    {
      title: "Interactive Checklist - Safe AI Practices",
      icon: "✅",
      color: "from-coral-100 to-amber-100",
    },
    {
      title: "Quiz - Test Your AI Safety Skills",
      icon: "🧠",
      color: "from-amber-100 to-soft-blue-100",
    },
    {
      title: "Wrap-Up and Fun Challenge",
      icon: "🦸",
      color: "from-soft-blue-100 to-coral-100",
    },
  ]

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 0:
        return <Section1 onComplete={() => markSectionComplete(0)} />
      case 1:
        return <Section2 onComplete={() => markSectionComplete(1)} />
      case 2:
        return <Section3 onComplete={() => markSectionComplete(2)} />
      case 3:
        return <Section4 onComplete={() => markSectionComplete(3)} />
      case 4:
        return <Section5 onComplete={() => markSectionComplete(4)} />
      case 5:
        return <Section6 onComplete={() => markSectionComplete(5)} router={router} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-amber-50 to-soft-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🛡️ Module 2: AI Safety and Ethical Use</h1>
          <p className="text-lg text-gray-600 font-medium">
            Get ready to explore the exciting world of AI safety and ethics! This module will equip you with the
            knowledge to use AI responsibly in the workplace, protecting sensitive data and ensuring fairness. Let's
            dive into a fun and informative journey!
          </p>
        </div>

        {/* Progress Bar */}
        <ProgressBar progress={completedCount} total={totalSections} />

        {/* Section Navigation - 6 dots */}
        <div className="flex justify-center items-center mb-6">
          <div className="flex gap-3 px-4">
            {/* Dot 1 */}
            <div
              className={`w-4 h-4 rounded-full transition-colors duration-300 border ${
                0 === currentSection
                  ? "bg-orange-500 border-orange-600"
                  : completedSections[0]
                    ? "bg-green-500 border-green-600"
                    : "bg-gray-300 border-gray-400"
              }`}
              title="Section 1: Why AI Safety Matters"
            />
            {/* Dot 2 */}
            <div
              className={`w-4 h-4 rounded-full transition-colors duration-300 border ${
                1 === currentSection
                  ? "bg-orange-500 border-orange-600"
                  : completedSections[1]
                    ? "bg-green-500 border-green-600"
                    : "bg-gray-300 border-gray-400"
              }`}
              title="Section 2: Key Concepts of AI Safety"
            />
            {/* Dot 3 */}
            <div
              className={`w-4 h-4 rounded-full transition-colors duration-300 border ${
                2 === currentSection
                  ? "bg-orange-500 border-orange-600"
                  : completedSections[2]
                    ? "bg-green-500 border-green-600"
                    : "bg-gray-300 border-gray-400"
              }`}
              title="Section 3: Spot the Sensitive Data"
            />
            {/* Dot 4 */}
            <div
              className={`w-4 h-4 rounded-full transition-colors duration-300 border ${
                3 === currentSection
                  ? "bg-orange-500 border-orange-600"
                  : completedSections[3]
                    ? "bg-green-500 border-green-600"
                    : "bg-gray-300 border-gray-400"
              }`}
              title="Section 4: Safe AI Practices Checklist"
            />
            {/* Dot 5 */}
            <div
              className={`w-4 h-4 rounded-full transition-colors duration-300 border ${
                4 === currentSection
                  ? "bg-orange-500 border-orange-600"
                  : completedSections[4]
                    ? "bg-green-500 border-green-600"
                    : "bg-gray-300 border-gray-400"
              }`}
              title="Section 5: AI Safety Skills Quiz"
            />
            {/* Dot 6 */}
            <div
              className={`w-4 h-4 rounded-full transition-colors duration-300 border ${
                5 === currentSection
                  ? "bg-orange-500 border-orange-600"
                  : completedSections[5]
                    ? "bg-green-500 border-green-600"
                    : "bg-gray-300 border-gray-400"
              }`}
              title="Section 6: Wrap-Up and Fun Challenge"
            />
          </div>
        </div>

        {/* Current Section */}
        <Card className="mb-8 border-2 border-coral-200 shadow-lg min-h-[600px]">
          <CardHeader className={`bg-gradient-to-r ${sections[currentSection].color}`}>
            <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="text-3xl mr-3">{sections[currentSection].icon}</span>
              Section {currentSection + 1}: {sections[currentSection].title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">{renderCurrentSection()}</CardContent>
        </Card>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center">
          <Button
            onClick={goToPreviousSection}
            disabled={currentSection === 0}
            variant="outline"
            className="flex items-center gap-2 bg-transparent"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous Section
          </Button>

          <div className="text-center">
            {completedSections[currentSection] ? (
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <CheckCircle className="w-5 h-5" />
                Section Complete! Ready to continue.
              </div>
            ) : (
              <div className="text-gray-500 text-sm">Complete this section to continue</div>
            )}
          </div>

          <button
            onClick={goToNextSection}
            disabled={!completedSections[currentSection] || currentSection === totalSections - 1}
            style={{
              backgroundColor: completedSections[currentSection] ? "#ed7c47" : "#e5e7eb",
              color: completedSections[currentSection] ? "white" : "#6b7280",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: completedSections[currentSection] ? "pointer" : "not-allowed",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Next Section
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

// Individual Section Components
function Section1({ onComplete }: { onComplete: () => void }) {
  const [isCompleted, setIsCompleted] = useState(false)

  const handleComplete = () => {
    setIsCompleted(true)
    onComplete()
  }

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          <strong>AI is a powerful tool, but with great power comes great responsibility!</strong> Keeping AI safe means
          protecting trade secrets (like company strategies) and personally identifiable information (PII) such as
          names, addresses, or social security numbers. It also involves avoiding bias and using AI ethically to build
          trust in your organization.
        </p>
      </div>

      <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400 mb-6">
        <h3 className="font-bold text-lg text-red-800 mb-3">⚠️ Cautionary Tale</h3>
        <p className="text-gray-700 leading-relaxed">
          In the past, an AI system trained on flawed data inadvertently recommended higher loan rates for certain
          groups, highlighting the real-world consequences of bias. This underscores the importance of accurate and fair
          data practices!
        </p>
      </div>

      <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400 mb-6">
        <h3 className="font-bold text-lg text-amber-800 mb-3">🔑 Key Takeaway</h3>
        <p className="text-gray-700 leading-relaxed">
          AI safety isn't just about technology—it's about protecting people, data, and maintaining trust. Every
          decision you make with AI impacts real people and real businesses.
        </p>
      </div>

      <div className="text-center">
        <button
          onClick={handleComplete}
          style={{
            backgroundColor: isCompleted ? "#10b981" : "#ed7c47",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = isCompleted ? "#059669" : "#de5a2c"
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = isCompleted ? "#10b981" : "#ed7c47"
          }}
        >
          {isCompleted ? "✅ Section Complete!" : "🛡️ I Understand AI Safety"}
        </button>

        {isCompleted && (
          <p className="mt-3 text-green-600 font-medium">Great! Now click "Next Section" below to continue.</p>
        )}
      </div>
    </div>
  )
}

function Section2({ onComplete }: { onComplete: () => void }) {
  const [isCompleted, setIsCompleted] = useState(false)

  const handleComplete = () => {
    setIsCompleted(true)
    onComplete()
  }

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700">
          Let's explore the three pillars of AI safety that will keep you and your organization protected! 🏛️
        </p>
      </div>

      <div className="grid md:grid-cols-1 gap-6 mb-6">
        <div className="bg-coral-50 p-6 rounded-lg border-2 border-coral-200">
          <h3 className="font-bold text-lg text-coral-800 mb-3">🔒 Protecting Trade Secrets and PII</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Never share confidential company info or personal data with AI systems unless absolutely secure. Think of it
            like locking your diary—only trusted hands should hold the key!
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-coral-400">
            <p className="text-sm text-gray-600">
              <strong>Examples of sensitive data:</strong> Customer names, addresses, SSNs, company strategies,
              financial data, employee records
            </p>
          </div>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
          <h3 className="font-bold text-lg text-amber-800 mb-3">⚖️ Avoiding Bias in AI</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Bias can creep into AI if the training data isn't diverse. For example, an AI hiring tool might favor
            certain resumes if past data was skewed. We'll learn how to spot and fix this!
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-amber-400">
            <p className="text-sm text-gray-600">
              <strong>Common bias sources:</strong> Historical data, limited demographics, cultural assumptions,
              incomplete datasets
            </p>
          </div>
        </div>

        <div className="bg-soft-blue-50 p-6 rounded-lg border-2 border-soft-blue-200">
          <h3 className="font-bold text-lg text-soft-blue-800 mb-3">🤝 Ethical AI Deployment</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Using AI fairly means considering its impact on people, like ensuring it doesn't exclude anyone or make
            unfair decisions.
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-soft-blue-400">
            <p className="text-sm text-gray-600">
              <strong>Ethical considerations:</strong> Fairness, transparency, accountability, human oversight,
              inclusive design
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
        <h4 className="font-bold text-yellow-800 mb-2">🤔 Quick Challenge</h4>
        <p className="text-yellow-700">
          Imagine an AI chatbot leaks a customer's phone number. What could go wrong?
          <br />
          <span className="text-sm italic">(Hint: Privacy breach!)</span>
        </p>
      </div>

      <div className="text-center">
        <button
          onClick={handleComplete}
          style={{
            backgroundColor: isCompleted ? "#10b981" : "#ed7c47",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = isCompleted ? "#059669" : "#de5a2c"
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = isCompleted ? "#10b981" : "#ed7c47"
          }}
        >
          {isCompleted ? "✅ Section Complete!" : "🔐 I Know the Key Concepts"}
        </button>

        {isCompleted && (
          <p className="mt-3 text-green-600 font-medium">
            Excellent! Ready for some detective work in the next section!
          </p>
        )}
      </div>
    </div>
  )
}

function Section3({ onComplete }: { onComplete: () => void }) {
  const [selectedData, setSelectedData] = useState<string[]>([])
  const [showAnswers, setShowAnswers] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const sensitiveDataItems = [
    { id: "john-doe", text: "John Doe", type: "Name (PII)" },
    { id: "address", text: "123 Maple St", type: "Address (PII)" },
    { id: "ssn", text: "123-45-6789", type: "SSN (PII)" },
    { id: "strategy", text: "new product launch strategy", type: "Trade Secret" },
  ]

  const toggleDataSelection = (itemId: string) => {
    setSelectedData((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const checkAnswers = () => {
    setShowAnswers(true)
    const allCorrect = sensitiveDataItems.every((item) => selectedData.includes(item.id))
    if (allCorrect) {
      setIsCompleted(true)
      onComplete()
    }
  }

  const resetActivity = () => {
    setSelectedData([])
    setShowAnswers(false)
    setIsCompleted(false)
  }

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700">
          Let's play detective! 🕵️ Below is a sample email an AI might process. Can you identify the sensitive data that
          should be protected?
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-300 mb-6">
        <h3 className="font-bold text-lg text-gray-800 mb-3">📧 Email Sample</h3>
        <div className="bg-white p-4 rounded border font-mono text-sm leading-relaxed">
          <p>
            "Hi Team, please process{" "}
            <span
              className={`cursor-pointer px-1 rounded ${
                selectedData.includes("john-doe") ? "bg-red-200 border-2 border-red-400" : "hover:bg-yellow-100"
              }`}
              onClick={() => toggleDataSelection("john-doe")}
            >
              John Doe's
            </span>{" "}
            request. His address is{" "}
            <span
              className={`cursor-pointer px-1 rounded ${
                selectedData.includes("address") ? "bg-red-200 border-2 border-red-400" : "hover:bg-yellow-100"
              }`}
              onClick={() => toggleDataSelection("address")}
            >
              123 Maple St
            </span>
            , and his SSN is{" "}
            <span
              className={`cursor-pointer px-1 rounded ${
                selectedData.includes("ssn") ? "bg-red-200 border-2 border-red-400" : "hover:bg-yellow-100"
              }`}
              onClick={() => toggleDataSelection("ssn")}
            >
              123-45-6789
            </span>
            . Our{" "}
            <span
              className={`cursor-pointer px-1 rounded ${
                selectedData.includes("strategy") ? "bg-red-200 border-2 border-red-400" : "hover:bg-yellow-100"
              }`}
              onClick={() => toggleDataSelection("strategy")}
            >
              new product launch strategy
            </span>{" "}
            is top-secret!"
          </p>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Instructions:</strong> Click on text that you think contains sensitive data!
        </p>
      </div>

      {selectedData.length > 0 && (
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-2">🎯 Your Selections:</h4>
          <div className="flex flex-wrap gap-2">
            {selectedData.map((id) => {
              const item = sensitiveDataItems.find((item) => item.id === id)
              return (
                <span key={id} className="bg-blue-200 px-2 py-1 rounded text-sm">
                  {item?.text}
                </span>
              )
            })}
          </div>
        </div>
      )}

      {!showAnswers ? (
        <div className="text-center">
          <button
            onClick={checkAnswers}
            disabled={selectedData.length === 0}
            style={{
              backgroundColor: selectedData.length > 0 ? "#ed7c47" : "#e5e7eb",
              color: selectedData.length > 0 ? "white" : "#6b7280",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: selectedData.length > 0 ? "pointer" : "not-allowed",
            }}
          >
            🔍 Check My Detective Work
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="font-bold text-lg text-green-800 mb-3">🎉 Answer Key</h3>
            <div className="space-y-2">
              {sensitiveDataItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-2 bg-white rounded border">
                  <span className="font-medium">{item.text}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">({item.type})</span>
                    {selectedData.includes(item.id) ? (
                      <span className="text-green-600">✓</span>
                    ) : (
                      <span className="text-red-600">✗</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">💡 Feedback</h4>
            <p className="text-amber-700">
              {isCompleted
                ? "Great job! You identified all the sensitive data. Sharing this with an unsecured AI could lead to identity theft or competitive leaks. Always double-check data before input!"
                : "Good effort! Review the missed items above. Remember: names, addresses, SSNs are PII, and business strategies are trade secrets."}
            </p>
          </div>

          <div className="text-center">
            {!isCompleted && (
              <button
                onClick={resetActivity}
                style={{
                  backgroundColor: "#f59e0b",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                  marginRight: "8px",
                }}
              >
                🔄 Try Again
              </button>
            )}
            {isCompleted && (
              <p className="text-green-600 font-medium">Perfect detective work! Ready for the next section!</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function Section4({ onComplete }: { onComplete: () => void }) {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false, false])
  const [showResults, setShowResults] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const checklistItems = [
    "Avoid entering personal names or addresses into unverified AI tools",
    "Check if the AI system is certified for data security",
    "Review AI outputs for biased language or decisions",
    "Report any unethical AI use to your supervisor",
  ]

  const toggleCheck = (index: number) => {
    const newChecked = [...checkedItems]
    newChecked[index] = !newChecked[index]
    setCheckedItems(newChecked)
  }

  const submitChecklist = () => {
    setShowResults(true)
    const allChecked = checkedItems.every(Boolean)
    if (allChecked) {
      setIsCompleted(true)
      onComplete()
    }
  }

  const resetChecklist = () => {
    setCheckedItems([false, false, false, false])
    setShowResults(false)
    setIsCompleted(false)
  }

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700">
          Time for a fun checklist game! ✅ Check off each step you'd take to use AI safely. Test yourself, then see the
          answers below.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Engagement Tip:</strong> Pretend you're a superhero guarding data—check each box to "deflect" danger!
          🦸‍♀️
        </p>
      </div>

      <Card className="border-2 border-soft-blue-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-soft-blue-800">🛡️ Safe AI Practices Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {checklistItems.map((item, index) => (
              <label
                key={index}
                className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  checkedItems[index]
                    ? "border-green-400 bg-green-50"
                    : "border-gray-200 hover:border-soft-blue-200 hover:bg-soft-blue-25"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checkedItems[index]}
                  onChange={() => toggleCheck(index)}
                  className="mr-3 mt-1 text-soft-blue-500 scale-125"
                  disabled={showResults}
                />
                <span className="font-medium text-gray-800">{item}</span>
              </label>
            ))}
          </div>
        </CardContent>
      </Card>

      {!showResults ? (
        <div className="text-center">
          <button
            onClick={submitChecklist}
            style={{
              backgroundColor: "#ed7c47",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "16px",
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
            🦸‍♀️ Activate Safety Powers!
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div
            className={`p-6 rounded-lg border-2 ${
              isCompleted ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-200"
            }`}
          >
            <h3 className={`font-bold text-lg mb-3 ${isCompleted ? "text-green-800" : "text-yellow-800"}`}>
              {isCompleted ? "🎉 Perfect Safety Hero!" : "⚠️ Safety Training Needed"}
            </h3>
            <p className={`${isCompleted ? "text-green-700" : "text-yellow-700"}`}>
              {isCompleted
                ? "All boxes should be checked! Mastering these steps ensures AI works for you without risking privacy or fairness. You're now a certified AI Safety Superhero! 🦸‍♀️"
                : "All boxes should be checked for complete AI safety! Review the unchecked items and try again to earn your superhero status."}
            </p>
          </div>

          <div className="text-center">
            {!isCompleted && (
              <button
                onClick={resetChecklist}
                style={{
                  backgroundColor: "#f59e0b",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                🔄 Try Again
              </button>
            )}
            {isCompleted && (
              <p className="text-green-600 font-medium">Superhero status achieved! Ready for the quiz challenge!</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function Section5({ onComplete }: { onComplete: () => void }) {
  const [completedQuestions, setCompletedQuestions] = useState<boolean[]>([false, false, false])
  const [sectionComplete, setSectionComplete] = useState(false)

  const quizQuestions = [
    {
      id: "q1",
      question: "What should you never share with an unsecured AI?",
      options: ["Public company news", "Trade secrets and PII", "General team updates"],
      correctAnswer: 1,
      explanation:
        "Trade secrets and PII (Personally Identifiable Information) should never be shared with unsecured AI systems as this could lead to data breaches, identity theft, or competitive disadvantage.",
    },
    {
      id: "q2",
      question: "How can bias enter an AI system?",
      options: ["From diverse, balanced data", "From skewed or unrepresentative data", "From regular software updates"],
      correctAnswer: 1,
      explanation:
        "Bias enters AI systems through skewed or unrepresentative training data. If the data used to train the AI doesn't represent all groups fairly, the AI will make biased decisions.",
    },
    {
      id: "q3",
      question: "What's a key ethical consideration in AI use?",
      options: ["Making it run faster", "Ensuring fairness and inclusivity", "Ignoring user feedback"],
      correctAnswer: 1,
      explanation:
        "Ensuring fairness and inclusivity is crucial for ethical AI use. AI systems should treat all users fairly and not discriminate against any group of people.",
    },
  ]

  const handleQuestionComplete = (questionIndex: number, correct: boolean) => {
    const newCompleted = [...completedQuestions]
    newCompleted[questionIndex] = true
    setCompletedQuestions(newCompleted)

    if (newCompleted.every(Boolean)) {
      setSectionComplete(true)
      onComplete()
    }
  }

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700">
          Put your knowledge to the test with this quick, engaging quiz! 🧠 Show off your AI safety skills!
        </p>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Instructions:</strong> Answer all {quizQuestions.length} questions to complete this section.
        </p>
      </div>

      <div className="space-y-6">
        {quizQuestions.map((question, index) => (
          <div key={question.id}>
            <QuizQuestion
              questionId={question.id}
              question={`${index + 1}. ${question.question}`}
              options={question.options}
              correctAnswer={question.correctAnswer}
              explanation={question.explanation}
              onAnswer={(correct) => handleQuestionComplete(index, correct)}
            />
          </div>
        ))}
      </div>

      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-800 font-medium">
          Progress: {completedQuestions.filter(Boolean).length} of {quizQuestions.length} questions answered
        </p>
      </div>

      {sectionComplete && (
        <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
          <p className="text-green-800 font-medium">
            🎉 Awesome work! Review any missed answers to strengthen your AI safety skills. You're ready for the final
            challenge!
          </p>
        </div>
      )}
    </div>
  )
}

function Section6({ onComplete, router }: { onComplete: () => void; router: any }) {
  const [superheroName, setSuperheroName] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  const handleComplete = () => {
    setIsCompleted(true)
    onComplete()
  }

  const superheroSuggestions = [
    "Data Guardian",
    "Privacy Protector",
    "Bias Buster",
    "Ethics Enforcer",
    "Security Sentinel",
    "Fairness Fighter",
    "Safety Shield",
    "Trust Defender",
  ]

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          <strong>You've mastered the basics of AI safety and ethics!</strong> 🎉 Protecting trade secrets, avoiding
          bias, and using AI ethically are now in your toolkit.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-lg text-green-800 mb-3">🏆 What You've Mastered</h3>
          <ul className="space-y-2 text-green-700">
            <li>✓ Protecting trade secrets and PII</li>
            <li>✓ Identifying and avoiding AI bias</li>
            <li>✓ Ethical AI deployment principles</li>
            <li>✓ Safe AI practices checklist</li>
            <li>✓ Real-world scenario application</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
          <h3 className="font-bold text-lg text-blue-800 mb-3">🎯 Next Steps</h3>
          <ul className="space-y-2 text-blue-700">
            <li>➡️ Proceed to Module 3: AI in Everyday Tools</li>
            <li>🛡️ Apply safety practices in your daily work</li>
            <li>👥 Share AI safety knowledge with your team</li>
            <li>🔍 Stay vigilant for bias and ethical issues</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-2 border-purple-200 mb-6">
        <h3 className="font-bold text-lg text-purple-800 mb-4">
          🦸‍♀️ Fun Challenge: Create Your AI Safety Superhero Name!
        </h3>
        <p className="text-purple-700 mb-4">
          Every AI safety expert needs a superhero identity! Create your own "AI Safety Superhero" name and share it
          with your team!
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-800 mb-2">Your Superhero Name:</label>
            <input
              type="text"
              value={superheroName}
              onChange={(e) => setSuperheroName(e.target.value)}
              placeholder="e.g., Data Guardian, Privacy Protector..."
              className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none"
            />
          </div>

          <div>
            <p className="text-sm text-purple-600 mb-2">Need inspiration? Try one of these:</p>
            <div className="flex flex-wrap gap-2">
              {superheroSuggestions.map((name, index) => (
                <button
                  key={index}
                  onClick={() => setSuperheroName(name)}
                  className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm hover:bg-purple-300 transition-colors"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4">
        <Button
          onClick={handleComplete}
          disabled={isCompleted}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 text-lg"
        >
          {isCompleted ? "🎓 Module Complete!" : "🦸‍♀️ Complete Module 2"}
        </Button>

        {superheroName && (
          <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
            <p className="text-yellow-800 font-medium">
              🎉 Welcome, <strong>{superheroName}</strong>! Your mission: Keep AI safe and ethical! 🦸‍♀️
            </p>
          </div>
        )}

        {isCompleted && (
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => {
                router.push("/module3")
              }}
              style={{
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                fontSize: "16px",
                fontWeight: "500",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#2563eb"
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#3b82f6"
              }}
            >
              ➡️ Go to Module 3
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
