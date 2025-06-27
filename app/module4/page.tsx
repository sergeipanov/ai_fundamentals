"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProgressBar } from "@/components/progress-bar"
import { QuizQuestion } from "@/components/quiz-question"
import { Footer } from "@/components/footer"
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
      title: "Wrap-Up and Action Plan",
      icon: "📋",
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
            Discover how AI transforms organizations and your role in this exciting journey! This module explores AI's
            impact on teams, processes, and collaboration. Get ready for engaging scenarios and actionable insights!
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
              title="Section 6: Wrap-Up and Action Plan"
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
          <strong>AI is reshaping how organizations operate!</strong> From automating routine tasks to enhancing
          decision-making, AI helps teams work smarter, not harder. Understanding AI's role in your organization
          positions you as a valuable contributor to digital transformation.
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
        <h3 className="font-bold text-lg text-blue-800 mb-3">🚀 The Big Picture</h3>
        <p className="text-gray-700 leading-relaxed">
          Organizations use AI to improve efficiency, reduce costs, and create better customer experiences. Your role is
          to understand, adapt, and collaborate with AI systems to drive success.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-coral-50 p-6 rounded-lg border-2 border-coral-200">
          <h3 className="font-bold text-lg text-coral-800 mb-3">💼 Business Operations</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Automated report generation</li>
            <li>• Intelligent scheduling systems</li>
            <li>• Predictive maintenance alerts</li>
            <li>• Smart inventory management</li>
          </ul>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
          <h3 className="font-bold text-lg text-amber-800 mb-3">👥 Human Resources</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Resume screening and matching</li>
            <li>• Employee performance insights</li>
            <li>• Training recommendation systems</li>
            <li>• Workplace sentiment analysis</li>
          </ul>
        </div>

        <div className="bg-soft-blue-50 p-6 rounded-lg border-2 border-soft-blue-200">
          <h3 className="font-bold text-lg text-soft-blue-800 mb-3">🛒 Customer Experience</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• 24/7 chatbot support</li>
            <li>• Personalized product recommendations</li>
            <li>• Fraud detection systems</li>
            <li>• Customer behavior analytics</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-lg text-green-800 mb-3">📊 Data & Analytics</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Market trend predictions</li>
            <li>• Risk assessment models</li>
            <li>• Performance dashboards</li>
            <li>• Automated data cleaning</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
        <h4 className="font-bold text-yellow-800 mb-2">💡 Your Role</h4>
        <p className="text-yellow-700">
          You don't need to build AI systems, but understanding how they work helps you collaborate effectively and
          identify opportunities for improvement in your daily work.
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
          {isCompleted ? "✅ Section Complete!" : "🌍 I See AI's Impact!"}
        </button>

        {isCompleted && (
          <p className="mt-3 text-green-600 font-medium">
            Excellent! Now let's explore the key concepts that drive AI in organizations!
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
          Let's explore the fundamental concepts that make AI successful in organizational settings! Understanding these
          will help you contribute meaningfully to AI initiatives. 🏢
        </p>
      </div>

      <div className="grid md:grid-cols-1 gap-6 mb-6">
        <div className="bg-coral-50 p-6 rounded-lg border-2 border-coral-200">
          <h3 className="font-bold text-lg text-coral-800 mb-3">🤖 Automation vs. Augmentation</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            <strong>Automation:</strong> AI replaces human tasks (e.g., sorting emails). <strong>Augmentation:</strong>{" "}
            AI enhances human capabilities (e.g., suggesting responses). Most successful AI implementations focus on
            augmentation.
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-coral-400">
            <p className="text-sm text-gray-600">
              <strong>Example:</strong> A doctor uses AI to analyze X-rays faster, but still makes the final diagnosis.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
          <h3 className="font-bold text-lg text-amber-800 mb-3">📈 Scalability and Efficiency</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            AI excels at handling large volumes of data and repetitive tasks, freeing humans to focus on creative,
            strategic, and relationship-building work.
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-amber-400">
            <p className="text-sm text-gray-600">
              <strong>Example:</strong> AI processes thousands of customer inquiries while humans handle complex
              complaints.
            </p>
          </div>
        </div>

        <div className="bg-soft-blue-50 p-6 rounded-lg border-2 border-soft-blue-200">
          <h3 className="font-bold text-lg text-soft-blue-800 mb-3">🔄 Continuous Learning</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            AI systems improve over time by learning from new data and feedback, making them more valuable as they're
            used.
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-soft-blue-400">
            <p className="text-sm text-gray-600">
              <strong>Example:</strong> A recommendation system gets better at suggesting products as it learns customer
              preferences.
            </p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-lg text-green-800 mb-3">🎯 Data-Driven Decision Making</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            AI analyzes patterns in data to provide insights that inform better business decisions, reducing guesswork
            and improving outcomes.
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-green-400">
            <p className="text-sm text-gray-600">
              <strong>Example:</strong> AI analyzes sales data to predict which products will be popular next season.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-purple-100 p-4 rounded-lg border-2 border-purple-300">
        <h4 className="font-bold text-purple-800 mb-2">🤔 Reflection Question</h4>
        <p className="text-purple-700">
          Think about your current role: Where could AI augment (not replace) your work to make you more effective?
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
          {isCompleted ? "✅ Section Complete!" : "🏢 I Understand AI in Organizations!"}
        </button>

        {isCompleted && (
          <p className="mt-3 text-green-600 font-medium">Perfect! Ready to apply this knowledge to real scenarios?</p>
        )}
      </div>
    </div>
  )
}

function Section3({ onComplete }: { onComplete: () => void }) {
  const [selectedDecisions, setSelectedDecisions] = useState<{ [key: string]: string }>({})
  const [showResults, setShowResults] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const scenarios = [
    {
      id: "customer-service",
      title: "Customer Service Overload",
      description:
        "Your customer service team is overwhelmed with 500+ daily inquiries, 70% of which are basic questions like 'How do I reset my password?' Response times are slow, and customer satisfaction is declining.",
      options: [
        { id: "hire-more", text: "Hire more customer service representatives", correct: false },
        { id: "chatbot", text: "Implement an AI chatbot for common questions", correct: true },
        { id: "ignore", text: "Ignore the problem and hope it improves", correct: false },
      ],
      explanation:
        "An AI chatbot can handle 70% of basic inquiries instantly, freeing human agents to focus on complex issues that require empathy and problem-solving skills.",
    },
    {
      id: "data-analysis",
      title: "Monthly Report Bottleneck",
      description:
        "Your team spends 2 days each month manually compiling sales data from multiple sources into reports. This delays decision-making and frustrates stakeholders waiting for insights.",
      options: [
        { id: "work-overtime", text: "Ask team to work overtime to finish faster", correct: false },
        { id: "ai-automation", text: "Use AI to automate data compilation and report generation", correct: true },
        { id: "reduce-reports", text: "Reduce the frequency of reports to quarterly", correct: false },
      ],
      explanation:
        "AI can automatically gather, clean, and analyze data from multiple sources, generating reports in minutes instead of days, allowing for faster decision-making.",
    },
    {
      id: "hiring-process",
      title: "Recruitment Challenge",
      description:
        "HR receives 200+ resumes per job posting but struggles to identify qualified candidates quickly. The manual screening process takes weeks, causing good candidates to accept other offers.",
      options: [
        { id: "speed-read", text: "Train HR to read resumes faster", correct: false },
        { id: "ai-screening", text: "Use AI to pre-screen resumes and rank candidates", correct: true },
        { id: "fewer-postings", text: "Post fewer job openings to reduce workload", correct: false },
      ],
      explanation:
        "AI can quickly analyze resumes against job requirements, ranking candidates by fit and highlighting key qualifications, speeding up the initial screening process.",
    },
  ]

  const handleDecisionChange = (scenarioId: string, optionId: string) => {
    setSelectedDecisions((prev) => ({ ...prev, [scenarioId]: optionId }))
  }

  const checkResults = () => {
    setShowResults(true)
    const allCorrect = scenarios.every((scenario) => {
      const selectedOption = selectedDecisions[scenario.id]
      return scenario.options.find((opt) => opt.id === selectedOption)?.correct
    })

    if (allCorrect) {
      setIsCompleted(true)
      onComplete()
    }
  }

  const resetActivity = () => {
    setSelectedDecisions({})
    setShowResults(false)
    setIsCompleted(false)
  }

  const allScenariosAnswered = scenarios.every((scenario) => selectedDecisions[scenario.id])

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700">
          Time to put your knowledge into action! Read each workplace scenario and choose the best AI-powered solution.
          Think like a strategic problem-solver! 🎯
        </p>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Instructions:</strong> Select the best decision for each scenario, then check your results.
        </p>
      </div>

      {!showResults && (
        <div className="space-y-6">
          {scenarios.map((scenario, index) => (
            <Card key={scenario.id} className="border-2 border-soft-blue-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-soft-blue-800">
                  Scenario {index + 1}: {scenario.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 leading-relaxed">{scenario.description}</p>
                <div className="space-y-3">
                  <p className="font-medium text-gray-800">What would you recommend?</p>
                  {scenario.options.map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-start p-3 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedDecisions[scenario.id] === option.id
                          ? "border-soft-blue-400 bg-soft-blue-50"
                          : "border-gray-200 hover:border-soft-blue-200 hover:bg-soft-blue-25"
                      }`}
                    >
                      <input
                        type="radio"
                        name={scenario.id}
                        value={option.id}
                        checked={selectedDecisions[scenario.id] === option.id}
                        onChange={() => handleDecisionChange(scenario.id, option.id)}
                        className="mr-3 mt-1 text-soft-blue-500"
                      />
                      <span className="font-medium text-gray-800">{option.text}</span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="text-center">
            <button
              onClick={checkResults}
              disabled={!allScenariosAnswered}
              style={{
                backgroundColor: allScenariosAnswered ? "#ed7c47" : "#e5e7eb",
                color: allScenariosAnswered ? "white" : "#6b7280",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: allScenariosAnswered ? "pointer" : "not-allowed",
              }}
            >
              🎯 Check My Strategic Decisions
            </button>
          </div>
        </div>
      )}

      {showResults && (
        <div className="space-y-4">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="font-bold text-lg text-green-800 mb-3">📊 Results & Explanations</h3>
            <div className="space-y-4">
              {scenarios.map((scenario, index) => {
                const selectedOption = scenario.options.find((opt) => opt.id === selectedDecisions[scenario.id])
                const isCorrect = selectedOption?.correct

                return (
                  <div key={scenario.id} className="bg-white p-4 rounded-lg border">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">
                        Scenario {index + 1}: {scenario.title}
                      </h4>
                      {isCorrect ? (
                        <span className="text-green-600 font-bold">✓ Correct</span>
                      ) : (
                        <span className="text-red-600 font-bold">✗ Incorrect</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Your choice:</strong> {selectedOption?.text}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Explanation:</strong> {scenario.explanation}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">💡 Feedback</h4>
            <p className="text-blue-700">
              {isCompleted
                ? "Outstanding strategic thinking! You understand how AI can solve real organizational challenges by augmenting human capabilities and improving efficiency."
                : "Good effort! The key is to look for solutions where AI handles repetitive tasks while humans focus on complex, creative work. Review the explanations to strengthen your strategic AI thinking."}
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
                Excellent strategic thinking! Ready to reflect on AI's broader impact?
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function Section4({ onComplete }: { onComplete: () => void }) {
  const [reflections, setReflections] = useState({
    positive: "",
    challenge: "",
    opportunity: "",
  })
  const [isCompleted, setIsCompleted] = useState(false)

  const handleReflectionChange = (key: string, value: string) => {
    setReflections((prev) => ({ ...prev, [key]: value }))
  }

  const handleComplete = () => {
    setIsCompleted(true)
    onComplete()
  }

  const allFieldsFilled = Object.values(reflections).every((value) => value.trim().length > 0)

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700 mb-4">
          Time for some thoughtful reflection! Consider AI's impact on your organization and share your insights. This
          helps solidify your understanding and prepares you for meaningful AI conversations. 💭
        </p>
        <p className="text-sm text-gray-600">
          <strong>Engagement Tip:</strong> Think about specific examples from your workplace or industry!
        </p>
      </div>

      <div className="space-y-6">
        <Card className="border-2 border-green-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-green-800 flex items-center">
              <span className="text-2xl mr-3">✨</span>
              Positive Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-3">
              What's one positive way AI could impact your organization or department?
            </p>
            <textarea
              value={reflections.positive}
              onChange={(e) => handleReflectionChange("positive", e.target.value)}
              placeholder="e.g., AI could automate our monthly reporting, giving us more time for strategic analysis..."
              className="w-full p-3 border-2 border-green-200 rounded-lg focus:border-green-400 focus:outline-none h-24 resize-none"
            />
          </CardContent>
        </Card>

        <Card className="border-2 border-amber-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-amber-800 flex items-center">
              <span className="text-2xl mr-3">⚠️</span>
              Potential Challenge
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-3">
              What challenge or concern might your organization face when implementing AI?
            </p>
            <textarea
              value={reflections.challenge}
              onChange={(e) => handleReflectionChange("challenge", e.target.value)}
              placeholder="e.g., Team members might worry about job security or need training on new AI tools..."
              className="w-full p-3 border-2 border-amber-200 rounded-lg focus:border-amber-400 focus:outline-none h-24 resize-none"
            />
          </CardContent>
        </Card>

        <Card className="border-2 border-soft-blue-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-soft-blue-800 flex items-center">
              <span className="text-2xl mr-3">🚀</span>
              Future Opportunity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-3">
              What exciting opportunity could AI create for your role or career growth?
            </p>
            <textarea
              value={reflections.opportunity}
              onChange={(e) => handleReflectionChange("opportunity", e.target.value)}
              placeholder="e.g., I could become the AI champion in my team, helping colleagues adapt to new tools..."
              className="w-full p-3 border-2 border-soft-blue-200 rounded-lg focus:border-soft-blue-400 focus:outline-none h-24 resize-none"
            />
          </CardContent>
        </Card>
      </div>

      {allFieldsFilled && (
        <div className="bg-purple-100 p-4 rounded-lg border-2 border-purple-300">
          <h4 className="font-bold text-purple-800 mb-2">🎉 Great Reflections!</h4>
          <p className="text-purple-700 text-sm">
            Your thoughtful responses show you're thinking strategically about AI's role in your organization. These
            insights will be valuable in future AI discussions!
          </p>
        </div>
      )}

      <div className="text-center">
        <button
          onClick={handleComplete}
          disabled={!allFieldsFilled || isCompleted}
          style={{
            backgroundColor: allFieldsFilled && !isCompleted ? "#ed7c47" : isCompleted ? "#10b981" : "#e5e7eb",
            color: allFieldsFilled || isCompleted ? "white" : "#6b7280",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: allFieldsFilled && !isCompleted ? "pointer" : "default",
          }}
        >
          {isCompleted
            ? "✅ Section Complete!"
            : allFieldsFilled
              ? "💭 Complete My Reflection"
              : "💭 Share Your Thoughts"}
        </button>

        {isCompleted && (
          <p className="mt-3 text-green-600 font-medium">
            Excellent reflection! Ready to test your organizational AI knowledge?
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
      question: "What's the difference between AI automation and augmentation?",
      options: [
        "There is no difference",
        "Automation replaces humans; augmentation enhances human capabilities",
        "Augmentation is more expensive than automation",
      ],
      correctAnswer: 1,
      explanation:
        "Automation replaces human tasks entirely, while augmentation enhances human capabilities. Most successful AI implementations focus on augmentation, where AI and humans work together.",
    },
    {
      id: "q2",
      question: "Why is continuous learning important for organizational AI?",
      options: [
        "It makes AI systems more expensive",
        "It helps AI improve over time with new data and feedback",
        "It's not important for organizational AI",
      ],
      correctAnswer: 1,
      explanation:
        "Continuous learning allows AI systems to improve their performance over time by learning from new data and user feedback, making them more valuable and accurate as they're used.",
    },
    {
      id: "q3",
      question: "What's the best approach when implementing AI in customer service?",
      options: [
        "Replace all human agents with AI",
        "Use AI for common questions, humans for complex issues",
        "Avoid AI in customer service entirely",
      ],
      correctAnswer: 1,
      explanation:
        "The best approach is to use AI for handling common, repetitive questions while having human agents focus on complex issues that require empathy, creativity, and problem-solving skills.",
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
          Test your understanding of AI in organizational settings! Show off your strategic thinking about AI
          implementation and impact. 🧠
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
            🎉 Excellent work! You've demonstrated strong understanding of AI's role in organizations. Ready to create
            your action plan?
          </p>
        </div>
      )}
    </div>
  )
}

function Section6({ onComplete }: { onComplete: () => void }) {
  const [actionPlan, setActionPlan] = useState({
    learn: "",
    apply: "",
    share: "",
  })
  const [isCompleted, setIsCompleted] = useState(false)
  const router = useRouter()

  const handleActionChange = (key: string, value: string) => {
    setActionPlan((prev) => ({ ...prev, [key]: value }))
  }

  const handleComplete = () => {
    setIsCompleted(true)
    onComplete()
  }

  const allActionsFilled = Object.values(actionPlan).every((value) => value.trim().length > 0)

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700 mb-4">
          <strong>Congratulations on mastering AI in organizations!</strong> 🎉 You understand how AI transforms
          workplaces, the key concepts of implementation, and your role in this exciting journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-lg text-green-800 mb-3">🏆 What You've Mastered</h3>
          <ul className="space-y-2 text-green-700">
            <li>✓ AI's role across different departments</li>
            <li>✓ Automation vs. augmentation concepts</li>
            <li>✓ Strategic decision-making with AI</li>
            <li>✓ Organizational challenges and opportunities</li>
            <li>✓ Your role in AI transformation</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
          <h3 className="font-bold text-lg text-blue-800 mb-3">🎯 Next Steps</h3>
          <ul className="space-y-2 text-blue-700">
            <li>➡️ Proceed to Module 5: Future of AI</li>
            <li>🤝 Collaborate on AI initiatives</li>
            <li>💡 Identify AI opportunities in your work</li>
            <li>📢 Become an AI advocate in your organization</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-2 border-purple-200 mb-6">
        <h3 className="font-bold text-lg text-purple-800 mb-4">📋 Create Your AI Action Plan</h3>
        <p className="text-purple-700 mb-4">
          Plan your next steps to become an AI champion in your organization! This action plan will guide your continued
          AI journey.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-800 mb-2">🎓 What will you learn more about?</label>
            <textarea
              value={actionPlan.learn}
              onChange={(e) => handleActionChange("learn", e.target.value)}
              placeholder="e.g., Research AI tools in my industry, take an advanced AI course..."
              className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none h-20 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-800 mb-2">
              🚀 How will you apply this knowledge?
            </label>
            <textarea
              value={actionPlan.apply}
              onChange={(e) => handleActionChange("apply", e.target.value)}
              placeholder="e.g., Propose an AI chatbot for our customer service, identify automation opportunities..."
              className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none h-20 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-800 mb-2">
              👥 How will you share your knowledge?
            </label>
            <textarea
              value={actionPlan.share}
              onChange={(e) => handleActionChange("share", e.target.value)}
              placeholder="e.g., Present AI insights to my team, mentor colleagues on AI basics..."
              className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none h-20 resize-none"
            />
          </div>
        </div>
      </div>

      {allActionsFilled && (
        <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
          <h4 className="font-bold text-yellow-800 mb-2">🎉 Outstanding Action Plan!</h4>
          <p className="text-yellow-700 text-sm">
            Your commitment to learning, applying, and sharing AI knowledge will make you a valuable AI champion in your
            organization. Keep this plan handy as your roadmap!
          </p>
        </div>
      )}

      <div className="text-center space-y-4">
        <Button
          onClick={handleComplete}
          disabled={!allActionsFilled || isCompleted}
          className={`font-semibold px-8 py-3 text-lg ${
            allActionsFilled && !isCompleted
              ? "bg-green-500 hover:bg-green-600 text-white"
              : isCompleted
                ? "bg-green-600 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {isCompleted
            ? "🎓 Module Complete!"
            : allActionsFilled
              ? "📋 Complete Module 4"
              : "📋 Create Your Action Plan"}
        </Button>

        {isCompleted && (
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => {
                router.push("/module5")
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
