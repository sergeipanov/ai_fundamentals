"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProgressBar } from "@/components/progress-bar"
import { QuizQuestion } from "@/components/quiz-question"
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Module4() {
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState<boolean[]>(new Array(6).fill(false))
  const [sectionProgress, setSectionProgress] = useState<{ [key: number]: boolean }>({})

  // Add developer mode
  const [devMode, setDevMode] = useState(false)

  const totalSections = 6
  const router = useRouter()

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
      title: "AI's Role in Your World",
      icon: "🌍",
      color: "from-coral-100 to-amber-100",
    },
    {
      title: "Key Concepts of AI in Organizations",
      icon: "🏢",
      color: "from-amber-100 to-soft-blue-100",
    },
    {
      title: "Scenario-Based Decision-Making Activity",
      icon: "🎯",
      color: "from-soft-blue-100 to-coral-100",
    },
    {
      title: "Discussion Prompt - Reflect on AI's Impact",
      icon: "💭",
      color: "from-coral-100 to-amber-100",
    },
    {
      title: "Quiz - Test Your Organizational AI Knowledge",
      icon: "🧠",
      color: "from-amber-100 to-soft-blue-100",
    },
    {
      title: "Wrap-Up and Fun Challenge",
      icon: "🏆",
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
        return <Section6 onComplete={() => markSectionComplete(5)} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-amber-50 to-soft-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🏢 Module 4: AI in Your Organization</h1>
          <p className="text-lg text-gray-600 font-medium">
            Step into the world of AI tailored to your organization! This module explores how AI fits into your industry
            or company, uncovering opportunities, challenges, and ways to team up with AI experts. Get ready for an
            engaging and insightful adventure!
          </p>
        </div>

        {/* Developer Mode Panel */}
        {devMode && (
          <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-yellow-800 mb-3">🛠️ Developer Mode</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <button
                onClick={() => setCompletedSections(new Array(6).fill(true))}
                className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
              >
                Complete All Sections
              </button>
              <button
                onClick={() => setCompletedSections(new Array(6).fill(false))}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
              >
                Reset All Sections
              </button>
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSection(index)}
                  className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                >
                  Go to Section {index + 1}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Developer Mode Toggle */}
        <div className="text-center mb-4">
          <button onClick={() => setDevMode(!devMode)} className="text-xs text-gray-500 hover:text-gray-700 underline">
            {devMode ? "Hide" : "Show"} Developer Mode
          </button>
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
              title="Section 1: AI's Role in Your World"
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
              title="Section 2: Key Concepts of AI in Organizations"
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
              title="Section 3: Scenario-Based Decision-Making"
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
              title="Section 4: Discussion Prompt"
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
              title="Section 5: Organizational AI Knowledge Quiz"
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
            disabled={(!completedSections[currentSection] && !devMode) || currentSection === totalSections - 1}
            style={{
              backgroundColor: completedSections[currentSection] || devMode ? "#ed7c47" : "#e5e7eb",
              color: completedSections[currentSection] || devMode ? "white" : "#6b7280",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: completedSections[currentSection] || devMode ? "pointer" : "not-allowed",
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
          <strong>AI isn't just a buzzword—it's shaping your workplace!</strong> Whether you're in healthcare, retail,
          or finance, AI can streamline tasks, predict trends, or enhance customer experiences. Understanding its role
          helps you contribute to your organization's success.
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
        <h3 className="font-bold text-lg text-blue-800 mb-3">🚀 Fun Fact</h3>
        <p className="text-gray-700 leading-relaxed">
          Companies using AI effectively can see productivity boosts of up to 30% in some industries!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-coral-50 p-6 rounded-lg border-2 border-coral-200">
          <h3 className="font-bold text-lg text-coral-800 mb-3">🏥 Healthcare</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• AI diagnoses diseases from medical images</li>
            <li>• Predictive analytics for patient care</li>
            <li>• Automated appointment scheduling</li>
            <li>• Drug discovery acceleration</li>
          </ul>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
          <h3 className="font-bold text-lg text-amber-800 mb-3">🛒 Retail</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Personalized product recommendations</li>
            <li>• Inventory management optimization</li>
            <li>• Dynamic pricing strategies</li>
            <li>• Customer service chatbots</li>
          </ul>
        </div>

        <div className="bg-soft-blue-50 p-6 rounded-lg border-2 border-soft-blue-200">
          <h3 className="font-bold text-lg text-soft-blue-800 mb-3">💰 Finance</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Fraud detection and prevention</li>
            <li>• Algorithmic trading systems</li>
            <li>• Credit risk assessment</li>
            <li>• Automated financial reporting</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-lg text-green-800 mb-3">🏭 Manufacturing</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Predictive maintenance systems</li>
            <li>• Quality control automation</li>
            <li>• Supply chain optimization</li>
            <li>• Production planning AI</li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
        <h3 className="font-bold text-lg text-purple-800 mb-3">🎯 Your Industry Impact</h3>
        <p className="text-gray-700 leading-relaxed">
          No matter your field, AI can enhance efficiency, reduce costs, and create new opportunities. The key is
          identifying where AI fits naturally into your existing workflows and processes.
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
          {isCompleted ? "✅ Section Complete!" : "🌍 I See AI's Potential!"}
        </button>

        {isCompleted && (
          <p className="mt-3 text-green-600 font-medium">
            Excellent! Now let's dive into the key concepts of organizational AI!
          </p>
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
          Let's explore the essential concepts that drive AI success in organizations! Understanding these will help you
          navigate AI initiatives in your workplace. 🏢
        </p>
      </div>

      <div className="grid md:grid-cols-1 gap-6 mb-6">
        <div className="bg-coral-50 p-6 rounded-lg border-2 border-coral-200">
          <h3 className="font-bold text-lg text-coral-800 mb-3">🚀 Opportunities for AI Adoption</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            AI can automate repetitive tasks (e.g., data entry), provide insights (e.g., sales forecasts), or improve
            customer service (e.g., chatbots). Imagine the possibilities in your role!
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-coral-400">
            <p className="text-sm text-gray-600">
              <strong>Examples:</strong> Automated report generation, predictive analytics for planning, intelligent
              document processing, personalized customer interactions
            </p>
          </div>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
          <h3 className="font-bold text-lg text-amber-800 mb-3">⚠️ Challenges</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Issues like data privacy, cost, or resistance to change can slow AI adoption. Overcoming these requires
            planning and teamwork.
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-amber-400">
            <p className="text-sm text-gray-600">
              <strong>Common challenges:</strong> High implementation costs, data quality issues, employee training
              needs, integration with existing systems, regulatory compliance
            </p>
          </div>
        </div>

        <div className="bg-soft-blue-50 p-6 rounded-lg border-2 border-soft-blue-200">
          <h3 className="font-bold text-lg text-soft-blue-800 mb-3">🤝 Collaborating with AI Teams</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Partnering with tech experts ensures AI aligns with your goals—think of it as a bridge between ideas and
            action.
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-soft-blue-400">
            <p className="text-sm text-gray-600">
              <strong>Collaboration tips:</strong> Clearly communicate business needs, provide domain expertise, test AI
              solutions, give feedback on results, champion adoption
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
        <h4 className="font-bold text-yellow-800 mb-2">🤔 Quick Reflection</h4>
        <p className="text-yellow-700">
          What's one task in your job that AI could enhance?
          <br />
          <span className="text-sm italic">
            (Think about repetitive tasks, data analysis, or customer interactions!)
          </span>
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
          {isCompleted ? "✅ Section Complete!" : "🏢 I Understand Organizational AI!"}
        </button>

        {isCompleted && (
          <p className="mt-3 text-green-600 font-medium">Perfect! Ready to tackle a real-world scenario?</p>
        )}
      </div>
    </div>
  )
}

function Section3({ onComplete }: { onComplete: () => void }) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const options = [
    {
      id: "A",
      text: "Approve the AI's recommendation and order 500 units.",
      correct: false,
      explanation: "This ignores the market change and could lead to excess inventory.",
    },
    {
      id: "B",
      text: "Adjust the order to 250 units and monitor competitor impact.",
      correct: true,
      explanation: "This balances AI insights with market awareness, showing smart adaptability.",
    },
    {
      id: "C",
      text: "Reject the AI suggestion and rely on manual checks.",
      correct: false,
      explanation: "This completely dismisses valuable AI data without considering its benefits.",
    },
  ]

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
  }

  const checkAnswer = () => {
    setShowAnswer(true)
    const selectedOptionData = options.find((opt) => opt.id === selectedOption)
    if (selectedOptionData?.correct) {
      setIsCompleted(true)
      onComplete()
    }
  }

  const resetActivity = () => {
    setSelectedOption(null)
    setShowAnswer(false)
    setIsCompleted(false)
  }

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700">
          Let's put your skills to the test with a fun scenario! Your company is considering AI to improve inventory
          management in a retail setting. 🎯
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-300 mb-6">
        <h3 className="font-bold text-lg text-gray-800 mb-3">📋 Scenario</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The AI suggests reordering 500 units of a popular product based on past sales data. However, a new competitor
          just launched a similar item, and customers are shifting preferences. Your team must decide:
        </p>
      </div>

      {!showAnswer && (
        <div className="space-y-4">
          <h4 className="font-bold text-lg text-gray-800 mb-4">Choose the best option:</h4>
          <div className="space-y-3">
            {options.map((option) => (
              <label
                key={option.id}
                className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedOption === option.id
                    ? "border-coral-400 bg-coral-50"
                    : "border-gray-200 hover:border-coral-200 hover:bg-coral-25"
                }`}
              >
                <input
                  type="radio"
                  name="scenario-option"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={() => handleOptionSelect(option.id)}
                  className="mr-3 mt-1 text-coral-500"
                />
                <div>
                  <span className="font-bold text-coral-800">{option.id})</span>
                  <span className="ml-2 font-medium text-gray-800">{option.text}</span>
                </div>
              </label>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={checkAnswer}
              disabled={!selectedOption}
              style={{
                backgroundColor: selectedOption ? "#ed7c47" : "#e5e7eb",
                color: selectedOption ? "white" : "#6b7280",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: selectedOption ? "pointer" : "not-allowed",
              }}
            >
              🎯 Check My Decision
            </button>
          </div>
        </div>
      )}

      {showAnswer && (
        <div className="space-y-4">
          <div
            className={`p-6 rounded-lg border-2 ${
              isCompleted ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
            }`}
          >
            <h3 className={`font-bold text-lg mb-3 ${isCompleted ? "text-green-800" : "text-red-800"}`}>
              {isCompleted ? "🎉 Correct Answer!" : "❌ Not Quite Right"}
            </h3>
            <p className="font-medium mb-3">
              <strong>Correct Answer: B) Adjust the order to 250 units and monitor competitor impact.</strong>
            </p>
            <p className={isCompleted ? "text-green-600" : "text-red-600"}>
              Adjusting to 250 units balances AI insights with market changes, showing adaptability.
            </p>
          </div>

          <div
            className={`p-4 rounded-lg border ${
              isCompleted ? "bg-blue-50 border-blue-200" : "bg-yellow-50 border-yellow-200"
            }`}
          >
            <h4 className={`font-bold mb-2 ${isCompleted ? "text-blue-800" : "text-yellow-800"}`}>💡 Feedback</h4>
            <p className={isCompleted ? "text-blue-700" : "text-yellow-700"}>
              {isCompleted
                ? "Nice choice! Collaborating with AI means using its data while staying flexible to real-world shifts. You understand how to balance AI insights with human judgment!"
                : "Good thinking! The key is balancing AI recommendations with current market conditions. AI provides valuable data, but human insight about market changes is equally important. Try again to select the best option!"}
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
                }}
              >
                🔄 Try Again
              </button>
            )}
            {isCompleted && (
              <p className="text-green-600 font-medium">
                Excellent decision-making! Ready to reflect on AI's impact in your organization?
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function Section4({ onComplete }: { onComplete: () => void }) {
  const [processImprovement, setProcessImprovement] = useState("")
  const [challenges, setChallenges] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  const handleComplete = () => {
    setIsCompleted(true)
    onComplete()
  }

  const processExamples = [
    "Scheduling and calendar management",
    "Report generation and data analysis",
    "Customer inquiry handling",
    "Inventory tracking and ordering",
    "Quality control and testing",
    "Document processing and filing",
  ]

  const challengeExamples = [
    "Employee training and adoption",
    "Data privacy and security concerns",
    "Integration with existing systems",
    "Cost and budget constraints",
    "Resistance to change",
    "Maintaining human oversight",
  ]

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700 mb-4">
          Time to think big! Consider how AI could transform your organization and share your thoughts. 💭
        </p>
        <p className="text-sm text-gray-600">
          <strong>Engagement Tip:</strong> Jot down your ideas and discuss with a colleague or in a team meeting for
          extra fun!
        </p>
      </div>

      <div className="space-y-6">
        <Card className="border-2 border-coral-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-coral-800">🔧 Process Improvement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              How might AI improve a specific process in your department (e.g., scheduling, reporting)?
            </p>
            <textarea
              value={processImprovement}
              onChange={(e) => setProcessImprovement(e.target.value)}
              placeholder="Describe how AI could enhance a process in your department..."
              className="w-full p-3 border-2 border-coral-200 rounded-lg focus:border-coral-400 focus:outline-none h-24 mb-4"
            />
            <div>
              <p className="text-sm text-coral-600 mb-2">Need inspiration? Try one of these processes:</p>
              <div className="flex flex-wrap gap-2">
                {processExamples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setProcessImprovement(example)}
                    className="px-3 py-1 bg-coral-200 text-coral-800 rounded-full text-sm hover:bg-coral-300 transition-colors"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-amber-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-amber-800">⚠️ Challenges & Solutions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              What challenges might arise, and how could you address them with your team?
            </p>
            <textarea
              value={challenges}
              onChange={(e) => setChallenges(e.target.value)}
              placeholder="Identify potential challenges and your solutions..."
              className="w-full p-3 border-2 border-amber-200 rounded-lg focus:border-amber-400 focus:outline-none h-24 mb-4"
            />
            <div>
              <p className="text-sm text-amber-600 mb-2">Common challenges to consider:</p>
              <div className="flex flex-wrap gap-2">
                {challengeExamples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setChallenges(example)}
                    className="px-3 py-1 bg-amber-200 text-amber-800 rounded-full text-sm hover:bg-amber-300 transition-colors"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center space-y-4">
        <button
          onClick={handleComplete}
          disabled={isCompleted}
          style={{
            backgroundColor: isCompleted ? "#10b981" : "#ed7c47",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: isCompleted ? "default" : "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            if (!isCompleted) {
              e.target.style.backgroundColor = "#de5a2c"
            }
          }}
          onMouseLeave={(e) => {
            if (!isCompleted) {
              e.target.style.backgroundColor = "#ed7c47"
            }
          }}
        >
          {isCompleted ? "✅ Section Complete!" : "💭 Complete My Reflection"}
        </button>

        {processImprovement && challenges && (
          <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
            <p className="text-yellow-800 font-medium">
              🎉 Great reflection! Your ideas about improving <strong>{processImprovement}</strong> and addressing{" "}
              <strong>{challenges}</strong> could spark real changes in your organization!
            </p>
          </div>
        )}

        {isCompleted && (
          <p className="text-green-600 font-medium">
            Excellent brainstorming! Your reflections could spark real changes. Ready for the knowledge quiz?
          </p>
        )}
      </div>
    </div>
  )
}

function Section5({ onComplete }: { onComplete: () => void }) {
  const [completedQuestions, setCompletedQuestions] = useState<boolean[]>([false, false, false])
  const [sectionComplete, setSectionComplete] = useState(false)

  const quizQuestions = [
    {
      id: "q1",
      question: "What's a key opportunity for AI in organizations?",
      options: ["Eliminating all human jobs", "Automating repetitive tasks", "Ignoring customer feedback"],
      correctAnswer: 1,
      explanation:
        "AI's key opportunity is automating repetitive tasks, which frees up humans to focus on creative, strategic, and relationship-building work that adds more value.",
    },
    {
      id: "q2",
      question: "Which is a common AI adoption challenge?",
      options: ["Too much data privacy", "High implementation costs", "Perfect accuracy"],
      correctAnswer: 1,
      explanation:
        "High implementation costs are a major challenge for AI adoption, including technology infrastructure, training, and ongoing maintenance expenses.",
    },
    {
      id: "q3",
      question: "Why collaborate with AI teams?",
      options: ["To avoid using AI", "To align AI with organizational goals", "To ignore technical details"],
      correctAnswer: 1,
      explanation:
        "Collaborating with AI teams ensures that AI solutions align with business objectives and address real organizational needs effectively.",
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
          Challenge yourself with this engaging quiz! Test your understanding of AI in organizational contexts. 🧠
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
            🎉 Excellent effort! Review any missed answers to deepen your understanding. You're ready for the final
            challenge!
          </p>
        </div>
      )}
    </div>
  )
}

function Section6({ onComplete }: { onComplete: () => void }) {
  const [badgeName, setBadgeName] = useState("")
  const [selectedBadge, setSelectedBadge] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  const handleComplete = () => {
    setIsCompleted(true)
    onComplete()
  }

  const badgeSuggestions = [
    "Innovation Champions",
    "AI Pioneers",
    "Future Forward Team",
    "Digital Transformation Squad",
    "Smart Solutions Crew",
    "Tech Trailblazers",
    "AI Ambassadors",
    "Change Catalysts",
  ]

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700 mb-4">
          <strong>You've explored AI's potential in your organization!</strong> 🎉 From seizing opportunities to
          tackling challenges, you're now ready to collaborate and innovate.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-lg text-green-800 mb-3">🏆 What You've Mastered</h3>
          <ul className="space-y-2 text-green-700">
            <li>✓ AI's role across different industries</li>
            <li>✓ Opportunities for AI adoption</li>
            <li>✓ Common challenges and solutions</li>
            <li>✓ Collaboration with AI teams</li>
            <li>✓ Strategic decision-making with AI</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
          <h3 className="font-bold text-lg text-blue-800 mb-3">🎯 Next Steps</h3>
          <ul className="space-y-2 text-blue-700">
            <li>➡️ Proceed to Module 5: The Future of AI</li>
            <li>🤝 Start conversations with AI teams</li>
            <li>💡 Propose AI solutions for your department</li>
            <li>📊 Identify processes for AI enhancement</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-2 border-purple-200 mb-6">
        <h3 className="font-bold text-lg text-purple-800 mb-4">🏅 Fun Challenge: Design an "AI Dream Team" Badge!</h3>
        <p className="text-purple-700 mb-4">
          Create a badge name for your department (e.g., "Innovation Champions") and share it with your colleagues!
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-800 mb-2">Your AI Dream Team Badge:</label>
            <input
              type="text"
              value={badgeName}
              onChange={(e) => setBadgeName(e.target.value)}
              placeholder="e.g., Innovation Champions, AI Pioneers..."
              className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none"
            />
          </div>

          <div>
            <p className="text-sm text-purple-600 mb-2">Need inspiration? Try one of these badge names:</p>
            <div className="flex flex-wrap gap-2">
              {badgeSuggestions.map((badge, index) => (
                <button
                  key={index}
                  onClick={() => setBadgeName(badge)}
                  className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm hover:bg-purple-300 transition-colors"
                >
                  {badge}
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
          {isCompleted ? "🎓 Module Complete!" : "🏆 Complete Module 4"}
        </Button>

        {badgeName && (
          <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
            <p className="text-yellow-800 font-medium">
              🎉 Congratulations, <strong>{badgeName}</strong>! Your team is ready to lead AI innovation! 🏅
            </p>
          </div>
        )}

        {isCompleted && (
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => {
                alert("Module 5 coming soon!")
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
              ➡️ Go to Module 5
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
