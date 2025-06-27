"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProgressBar } from "@/components/progress-bar"
import { QuizQuestion } from "@/components/quiz-question"
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Module3() {
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
      title: "AI in Your Daily Workflow",
      icon: "⚡",
      color: "from-coral-100 to-amber-100",
    },
    {
      title: "Key Concepts of AI Tools",
      icon: "🔧",
      color: "from-amber-100 to-soft-blue-100",
    },
    {
      title: "Interactive Case Study - AI in a Workplace Tool",
      icon: "🔍",
      color: "from-soft-blue-100 to-coral-100",
    },
    {
      title: "Clickable Diagram - How AI Processes Work",
      icon: "🎯",
      color: "from-coral-100 to-amber-100",
    },
    {
      title: "Quiz - Test Your AI Tool Knowledge",
      icon: "🧠",
      color: "from-amber-100 to-soft-blue-100",
    },
    {
      title: "Wrap-Up and Fun Challenge",
      icon: "🚀",
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🔧 Module 3: AI in Everyday Tools</h1>
          <p className="text-lg text-gray-600 font-medium">
            Get ready to uncover the magic of AI in the tools you use every day! This module dives into how AI powers
            chatbots, recommendation systems, and more, making your work smoother and smarter. Let's explore with fun
            and hands-on activities!
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
              title="Section 1: AI in Your Daily Workflow"
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
              title="Section 2: Key Concepts of AI Tools"
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
              title="Section 3: Interactive Case Study"
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
              title="Section 4: Clickable Diagram"
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
              title="Section 5: AI Tool Knowledge Quiz"
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
          <strong>AI is already your silent partner!</strong> Tools like email filters, virtual assistants (e.g., Siri),
          and Netflix recommendations rely on AI to learn your habits and assist you. Understanding how AI works in
          these tools can boost your productivity and appreciation for technology.
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
        <h3 className="font-bold text-lg text-blue-800 mb-3">💡 Did You Know?</h3>
        <p className="text-gray-700 leading-relaxed">
          The average person interacts with AI-powered tools over 10 times a day without even realizing it!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-coral-50 p-6 rounded-lg border-2 border-coral-200">
          <h3 className="font-bold text-lg text-coral-800 mb-3">📧 Email & Communication</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Spam filters automatically sort your inbox</li>
            <li>• Smart compose suggests email responses</li>
            <li>• Language translation in real-time</li>
          </ul>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
          <h3 className="font-bold text-lg text-amber-800 mb-3">🎵 Entertainment & Media</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Netflix recommends shows you'll love</li>
            <li>• Spotify creates personalized playlists</li>
            <li>• YouTube suggests relevant videos</li>
          </ul>
        </div>

        <div className="bg-soft-blue-50 p-6 rounded-lg border-2 border-soft-blue-200">
          <h3 className="font-bold text-lg text-soft-blue-800 mb-3">🛒 Shopping & Commerce</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Amazon suggests products you might buy</li>
            <li>• Price comparison tools find best deals</li>
            <li>• Chatbots answer customer questions</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-lg text-green-800 mb-3">🗺️ Navigation & Travel</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• GPS finds fastest routes in real-time</li>
            <li>• Travel apps suggest destinations</li>
            <li>• Voice assistants answer questions</li>
          </ul>
        </div>
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
          {isCompleted ? "✅ Section Complete!" : "⚡ I See AI Everywhere!"}
        </button>

        {isCompleted && (
          <p className="mt-3 text-green-600 font-medium">
            Amazing! Now let's dive deeper into how these AI tools actually work!
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
          Let's break down the key concepts that make AI tools so powerful! Understanding these building blocks will
          help you use AI more effectively. 🔧
        </p>
      </div>

      <div className="grid md:grid-cols-1 gap-6 mb-6">
        <div className="bg-coral-50 p-6 rounded-lg border-2 border-coral-200">
          <h3 className="font-bold text-lg text-coral-800 mb-3">📊 Data Inputs</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            AI starts with data—think of it as the "ingredients" like your search history or customer queries that feed
            the system.
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-coral-400">
            <p className="text-sm text-gray-600">
              <strong>Examples:</strong> Your Netflix viewing history, email content for spam detection, voice
              recordings for Siri
            </p>
          </div>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
          <h3 className="font-bold text-lg text-amber-800 mb-3">🧠 Training Models</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            This is where AI "learns" by analyzing patterns in the data, like a chef perfecting a recipe.
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-amber-400">
            <p className="text-sm text-gray-600">
              <strong>Examples:</strong> Learning which movies you like, understanding spam email patterns, recognizing
              your voice commands
            </p>
          </div>
        </div>

        <div className="bg-soft-blue-50 p-6 rounded-lg border-2 border-soft-blue-200">
          <h3 className="font-bold text-lg text-soft-blue-800 mb-3">🎯 Outputs</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            The result! This could be a personalized playlist or a chatbot response tailored to your needs.
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-soft-blue-400">
            <p className="text-sm text-gray-600">
              <strong>Examples:</strong> Movie recommendations, filtered inbox, voice assistant responses, product
              suggestions
            </p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-lg text-green-800 mb-3">👁️ Recognizing AI's Role</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Spotting AI in action helps you use it effectively—whether it's sorting emails or suggesting products.
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-green-400">
            <p className="text-sm text-gray-600">
              <strong>Tip:</strong> Look for personalization, automation, and smart suggestions in your daily tools!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
        <h4 className="font-bold text-yellow-800 mb-2">🤔 Quick Question</h4>
        <p className="text-yellow-700">
          Can you name an AI tool you use daily?
          <br />
          <span className="text-sm italic">(Hint: It might be in your inbox or streaming app!)</span>
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
          {isCompleted ? "✅ Section Complete!" : "🔧 I Understand AI Tools!"}
        </button>

        {isCompleted && (
          <p className="mt-3 text-green-600 font-medium">Perfect! Ready to solve a real workplace AI challenge?</p>
        )}
      </div>
    </div>
  )
}

function Section3({ onComplete }: { onComplete: () => void }) {
  const [selectedCauses, setSelectedCauses] = useState<string[]>([])
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([])
  const [showAnswers, setShowAnswers] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const causes = [
    { id: "poor-data", text: "Poor data inputs", correct: true },
    { id: "untrained-model", text: "Untrained model", correct: true },
    { id: "unclear-queries", text: "Unclear queries", correct: true },
    { id: "too-fast", text: "Bot responds too quickly", correct: false },
  ]

  const solutions = [
    { id: "improve-training", text: "Improve training data", correct: true },
    { id: "feedback-button", text: "Add user feedback options", correct: true },
    { id: "slower-responses", text: "Make responses slower", correct: false },
    { id: "remove-bot", text: "Remove the chatbot entirely", correct: false },
  ]

  const toggleCause = (causeId: string) => {
    setSelectedCauses((prev) => (prev.includes(causeId) ? prev.filter((id) => id !== causeId) : [...prev, causeId]))
  }

  const toggleSolution = (solutionId: string) => {
    setSelectedSolutions((prev) =>
      prev.includes(solutionId) ? prev.filter((id) => id !== solutionId) : [...prev, solutionId],
    )
  }

  const checkAnswers = () => {
    setShowAnswers(true)
    const correctCauses = causes.filter((c) => c.correct).map((c) => c.id)
    const correctSolutions = solutions.filter((s) => s.correct).map((s) => s.id)

    const causesCorrect = correctCauses.every((id) => selectedCauses.includes(id))
    const solutionsCorrect = correctSolutions.every((id) => selectedSolutions.includes(id))

    if (causesCorrect && solutionsCorrect) {
      setIsCompleted(true)
      onComplete()
    }
  }

  const resetActivity = () => {
    setSelectedCauses([])
    setSelectedSolutions([])
    setShowAnswers(false)
    setIsCompleted(false)
  }

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700">
          Let's dive into a fun case study! Imagine your company uses an AI-powered helpdesk chatbot called "HelpBot" to
          handle customer inquiries. 🤖
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-300 mb-6">
        <h3 className="font-bold text-lg text-gray-800 mb-3">📋 Scenario</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          HelpBot receives 100 emails daily, answering 80% of them automatically (e.g., "How do I reset my password?").
          The remaining 20% are flagged for human review. Recently, some customers complained that HelpBot gave
          irrelevant answers.
        </p>
      </div>

      {!showAnswers && (
        <div className="space-y-6">
          <Card className="border-2 border-coral-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-coral-800">🔍 Step 1: Identify Possible Causes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Select all the causes that might explain HelpBot's poor performance:</p>
              <div className="space-y-3">
                {causes.map((cause) => (
                  <label
                    key={cause.id}
                    className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedCauses.includes(cause.id)
                        ? "border-coral-400 bg-coral-50"
                        : "border-gray-200 hover:border-coral-200 hover:bg-coral-25"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedCauses.includes(cause.id)}
                      onChange={() => toggleCause(cause.id)}
                      className="mr-3 text-coral-500"
                    />
                    <span className="font-medium">{cause.text}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-amber-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-amber-800">💡 Step 2: Suggest Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">Select the best solutions to improve HelpBot's performance:</p>
              <div className="space-y-3">
                {solutions.map((solution) => (
                  <label
                    key={solution.id}
                    className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedSolutions.includes(solution.id)
                        ? "border-amber-400 bg-amber-50"
                        : "border-gray-200 hover:border-amber-200 hover:bg-amber-25"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedSolutions.includes(solution.id)}
                      onChange={() => toggleSolution(solution.id)}
                      className="mr-3 text-amber-500"
                    />
                    <span className="font-medium">{solution.text}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <button
              onClick={checkAnswers}
              disabled={selectedCauses.length === 0 || selectedSolutions.length === 0}
              style={{
                backgroundColor: selectedCauses.length > 0 && selectedSolutions.length > 0 ? "#ed7c47" : "#e5e7eb",
                color: selectedCauses.length > 0 && selectedSolutions.length > 0 ? "white" : "#6b7280",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: selectedCauses.length > 0 && selectedSolutions.length > 0 ? "pointer" : "not-allowed",
              }}
            >
              🔍 Check My Analysis
            </button>
          </div>
        </div>
      )}

      {showAnswers && (
        <div className="space-y-4">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="font-bold text-lg text-green-800 mb-3">🎉 Answer Key</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Correct Causes:</h4>
                <ul className="space-y-1 text-green-600">
                  <li>✓ Poor data inputs (outdated training data)</li>
                  <li>✓ Untrained model (lacks diverse query examples)</li>
                  <li>✓ Unclear queries (customers ask vague questions)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Best Solutions:</h4>
                <ul className="space-y-1 text-green-600">
                  <li>✓ Improve training data (add recent customer queries)</li>
                  <li>✓ Add user feedback options ("Was this helpful?" button)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">💡 Feedback</h4>
            <p className="text-blue-700">
              {isCompleted
                ? "Great detective work! Adjusting inputs and outputs keeps AI tools like HelpBot on track. You understand how to troubleshoot AI systems!"
                : "Good effort! Remember: AI problems often stem from data quality or training issues. Review the correct answers to master AI troubleshooting."}
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
                Excellent analysis! Ready to explore how AI processes actually work?
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function Section4({ onComplete }: { onComplete: () => void }) {
  const [clickedSteps, setClickedSteps] = useState<number[]>([])
  const [isCompleted, setIsCompleted] = useState(false)

  const steps = [
    {
      id: 1,
      title: "Data Inputs",
      icon: "📊",
      description: "Raw data like customer reviews, clicks, search history, or voice recordings",
      example: "Example: Your Netflix viewing history and ratings",
    },
    {
      id: 2,
      title: "Training Models",
      icon: "🧠",
      description: "AI learns patterns, like what music you enjoy or which emails are spam",
      example: "Example: Learning you prefer action movies over romance",
    },
    {
      id: 3,
      title: "Outputs",
      icon: "🎯",
      description: "Results like personalized playlists, chatbot replies, or product recommendations",
      example: "Example: Netflix suggests 'Top Gun: Maverick' based on your preferences",
    },
  ]

  const handleStepClick = (stepId: number) => {
    if (!clickedSteps.includes(stepId)) {
      setClickedSteps((prev) => [...prev, stepId])
    }

    if (clickedSteps.length + 1 === steps.length) {
      setIsCompleted(true)
      onComplete()
    }
  }

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700 mb-4">
          Explore the AI process step-by-step with an interactive diagram! Click each step to reveal details and see how
          AI transforms data into smart results. 🎯
        </p>
        <p className="text-sm text-gray-600">
          <strong>Engagement Tip:</strong> Click each step and guess what happens next before revealing the answer!
        </p>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            <Card
              className={`border-2 cursor-pointer transition-all duration-300 ${
                clickedSteps.includes(step.id)
                  ? "border-green-400 bg-green-50 shadow-lg"
                  : "border-gray-300 hover:border-coral-400 hover:shadow-md"
              }`}
              onClick={() => handleStepClick(step.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`text-4xl p-3 rounded-full ${
                        clickedSteps.includes(step.id) ? "bg-green-200" : "bg-gray-100"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Step {step.id}: {step.title}
                      </h3>
                      {!clickedSteps.includes(step.id) && <p className="text-gray-600">Click to reveal details!</p>}
                    </div>
                  </div>
                  {clickedSteps.includes(step.id) && <div className="text-green-500 text-2xl">✓</div>}
                </div>

                {clickedSteps.includes(step.id) && (
                  <div className="mt-4 space-y-3 animate-in slide-in-from-top duration-300">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-coral-400">
                      <p className="text-gray-700 font-medium">{step.description}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-blue-800 text-sm">
                        <strong>{step.example}</strong>
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {index < steps.length - 1 && (
              <div className="flex justify-center my-4">
                <div className="w-1 h-8 bg-gray-300 rounded"></div>
                <div className="absolute mt-6 text-gray-500">↓</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-800 font-medium">
          Progress: {clickedSteps.length} of {steps.length} steps explored
        </p>
      </div>

      {isCompleted && (
        <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
          <p className="text-green-800 font-medium">
            🎉 Fantastic! Understanding this flow helps you see AI's role in tools you love. Ready for a knowledge test?
          </p>
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
      question: "What is the first step in an AI tool's process?",
      options: ["Training models", "Data inputs", "Outputs"],
      correctAnswer: 1,
      explanation:
        "Data inputs are the first step - AI needs raw data like your search history, clicks, or voice recordings before it can learn patterns or generate outputs.",
    },
    {
      id: "q2",
      question: "Which tool uses AI to suggest movies?",
      options: ["A calculator", "Netflix", "A notepad"],
      correctAnswer: 1,
      explanation:
        "Netflix uses AI to analyze your viewing history and preferences to recommend movies and shows you're likely to enjoy.",
    },
    {
      id: "q3",
      question: "What can improve an AI tool's output?",
      options: ["Ignoring user feedback", "Better training data", "Less data input"],
      correctAnswer: 1,
      explanation:
        "Better training data improves AI outputs by providing more accurate, diverse, and recent examples for the AI to learn from.",
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
          Challenge yourself with this engaging quiz! Test your understanding of AI tools and how they work. 🧠
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
            🎉 Fantastic effort! Review any mistakes to master AI tool mechanics. You're ready for the final challenge!
          </p>
        </div>
      )}
    </div>
  )
}

function Section6({ onComplete }: { onComplete: () => void }) {
  const [toolTuneUp, setToolTuneUp] = useState("")
  const [selectedTool, setSelectedTool] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  const router = useRouter()

  const handleComplete = () => {
    setIsCompleted(true)
    onComplete()
  }

  const toolSuggestions = [
    "Email filter",
    "Netflix recommendations",
    "Spotify playlists",
    "GPS navigation",
    "Shopping suggestions",
    "Voice assistant",
  ]

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700 mb-4">
          <strong>You've unlocked the secrets of AI in everyday tools!</strong> 🎉 From data inputs to smart outputs,
          you now see AI's impact on your work and daily life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-lg text-green-800 mb-3">🏆 What You've Mastered</h3>
          <ul className="space-y-2 text-green-700">
            <li>✓ Recognizing AI in daily tools</li>
            <li>✓ Understanding data inputs, training, and outputs</li>
            <li>✓ Troubleshooting AI tool problems</li>
            <li>✓ How AI processes work step-by-step</li>
            <li>✓ Improving AI tool performance</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
          <h3 className="font-bold text-lg text-blue-800 mb-3">🎯 Next Steps</h3>
          <ul className="space-y-2 text-blue-700">
            <li>➡️ Proceed to Module 4: AI in Your Organization</li>
            <li>🔧 Apply AI tool knowledge at work</li>
            <li>👥 Share insights with your team</li>
            <li>🔍 Look for AI improvement opportunities</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-2 border-purple-200 mb-6">
        <h3 className="font-bold text-lg text-purple-800 mb-4">🔧 Fun Challenge: Create a "Tool Tune-Up" Plan!</h3>
        <p className="text-purple-700 mb-4">
          Pick a tool you use daily and suggest one way to improve its AI. Share your idea with a colleague!
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-800 mb-2">Choose a tool:</label>
            <select
              value={selectedTool}
              onChange={(e) => setSelectedTool(e.target.value)}
              className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none"
            >
              <option value="">Select a tool...</option>
              {toolSuggestions.map((tool, index) => (
                <option key={index} value={tool}>
                  {tool}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-800 mb-2">Your improvement idea:</label>
            <textarea
              value={toolTuneUp}
              onChange={(e) => setToolTuneUp(e.target.value)}
              placeholder="e.g., Add new keywords to email filter, include mood-based music suggestions..."
              className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none h-24"
            />
          </div>
        </div>
      </div>

      <div className="text-center space-y-4">
        <Button
          onClick={handleComplete}
          disabled={isCompleted}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 text-lg"
        >
          {isCompleted ? "🎓 Module Complete!" : "🚀 Complete Module 3"}
        </Button>

        {selectedTool && toolTuneUp && (
          <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
            <p className="text-yellow-800 font-medium">
              🎉 Great idea! Improving <strong>{selectedTool}</strong> with: "{toolTuneUp}" 🔧
            </p>
          </div>
        )}

        {isCompleted && (
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => {
                router.push("/module4")
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
              ➡️ Go to Module 4
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
