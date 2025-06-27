"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProgressBar } from "@/components/progress-bar"
import { FlipCard } from "@/components/flip-card"
import { QuizQuestion } from "@/components/quiz-question"
import { SortingActivity } from "@/components/sorting-activity"
import { Footer } from "@/components/footer"
import { ChevronLeft, ChevronRight, CheckCircle, Play, BookOpen, Clock, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function Module1() {
  const [showLanding, setShowLanding] = useState(true)
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
      title: "What is Artificial Intelligence?",
      icon: "🧠",
      color: "from-coral-100 to-amber-100",
    },
    {
      title: "Interactive Quiz - Test Your AI Knowledge",
      icon: "🧩",
      color: "from-amber-100 to-soft-blue-100",
    },
    {
      title: "Flip Cards - Key AI Terms",
      icon: "🔄",
      color: "from-soft-blue-100 to-coral-100",
    },
    {
      title: "Sorting Activity - AI vs. Non-AI",
      icon: "🎯",
      color: "from-coral-100 to-amber-100",
    },
    {
      title: "Scenario - Choose the Best Response",
      icon: "💼",
      color: "from-amber-100 to-soft-blue-100",
    },
    {
      title: "Wrap-Up & Next Steps",
      icon: "🎉",
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

  // Landing Page Component
  if (showLanding) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-coral-50 via-amber-50 to-soft-blue-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="mb-8">
              <Image
                src="/images/ai-fundamentals-thumbnail.jpg"
                alt="AI Fundamentals for Non-Technical Teams eLearning Course"
                width={800}
                height={400}
                className="mx-auto rounded-lg shadow-lg"
                priority
              />
            </div>

            <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to AI Fundamentals</h1>
            <p className="text-xl text-gray-600 font-medium mb-8 max-w-3xl mx-auto">
              Discover the world of Artificial Intelligence designed specifically for non-technical team members. Build
              confidence, learn key concepts, and become an AI-savvy professional in your organization.
            </p>
          </div>

          {/* Course Overview Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-coral-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-coral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-coral-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Self-Paced Learning</h3>
                <p className="text-gray-600">
                  Complete the course at your own pace with interactive modules and engaging activities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">5 Comprehensive Modules</h3>
                <p className="text-gray-600">
                  From AI basics to future trends, covering everything you need to know about AI in the workplace.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-soft-blue-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-soft-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-soft-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Non-Technical Focus</h3>
                <p className="text-gray-600">
                  Designed specifically for business professionals without technical backgrounds.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Course Modules Preview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 border-coral-200">
                <CardHeader className="bg-gradient-to-r from-coral-100 to-amber-100">
                  <CardTitle className="text-lg font-bold text-gray-800 flex items-center">
                    <span className="text-2xl mr-3">🤖</span>
                    Module 1: AI Basics
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-700 text-sm">
                    Learn what AI is, its history, and key terminology through interactive activities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200">
                <CardHeader className="bg-gradient-to-r from-amber-100 to-soft-blue-100">
                  <CardTitle className="text-lg font-bold text-gray-800 flex items-center">
                    <span className="text-2xl mr-3">🛡️</span>
                    Module 2: AI Safety
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-700 text-sm">
                    Understand ethical AI use, data protection, and responsible AI practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-soft-blue-200">
                <CardHeader className="bg-gradient-to-r from-soft-blue-100 to-coral-100">
                  <CardTitle className="text-lg font-bold text-gray-800 flex items-center">
                    <span className="text-2xl mr-3">🔧</span>
                    Module 3: AI Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-700 text-sm">
                    Discover AI in everyday tools and how they enhance your workflow.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-coral-200">
                <CardHeader className="bg-gradient-to-r from-coral-100 to-amber-100">
                  <CardTitle className="text-lg font-bold text-gray-800 flex items-center">
                    <span className="text-2xl mr-3">🏢</span>
                    Module 4: AI at Work
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-700 text-sm">
                    Explore AI's role in your organization and collaboration opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200">
                <CardHeader className="bg-gradient-to-r from-amber-100 to-soft-blue-100">
                  <CardTitle className="text-lg font-bold text-gray-800 flex items-center">
                    <span className="text-2xl mr-3">🚀</span>
                    Module 5: AI Future
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-700 text-sm">
                    Look ahead to AI trends and your role in the AI-powered future.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-soft-blue-200 bg-gradient-to-r from-green-50 to-blue-50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">🎓</div>
                  <h3 className="font-bold text-gray-800 mb-2">Course Completion</h3>
                  <p className="text-gray-700 text-sm">
                    Earn your AI Fundamentals certificate and join the AI-confident workforce!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-coral-100 to-amber-100 p-8 rounded-lg border-2 border-coral-200 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Begin Your AI Journey?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Transform from AI-curious to AI-confident in just 5 engaging modules. No technical background required!
              </p>

              <Button
                onClick={() => setShowLanding(false)}
                className="bg-gradient-to-r from-coral-500 to-amber-500 hover:from-coral-600 hover:to-amber-600 text-white font-bold px-8 py-4 text-xl rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Play className="w-6 h-6 mr-3" />
                Start Course
              </Button>
            </div>

            <div className="text-sm text-gray-500">
              <p>🕒 Estimated completion time: 2-3 hours | 📱 Works on all devices | 🎯 Interactive and engaging</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // Main Course Content (existing code)
  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-amber-50 to-soft-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🤖 Module 1: Introduction to AI and Core Concepts</h1>
          <p className="text-lg text-gray-600 font-medium">
            Discover what AI is, why it matters, and learn key terms to join AI conversations confidently
          </p>
        </div>

        {/* Progress Bar */}
        <ProgressBar progress={completedCount} total={totalSections} />

        {/* Section Navigation - Explicitly show all 6 dots with reliable colors */}
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
              title="Section 1: What is Artificial Intelligence?"
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
              title="Section 2: Interactive Quiz"
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
              title="Section 3: Flip Cards - Key AI Terms"
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
              title="Section 4: Sorting Activity"
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
              title="Section 5: Scenario Response"
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
              title="Section 6: Wrap-Up & Next Steps"
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

          <Button
            onClick={goToNextSection}
            disabled={!completedSections[currentSection] || currentSection === totalSections - 1}
            className={`flex items-center gap-2 ${
              completedSections[currentSection]
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Next Section
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

// Individual Section Components (keeping existing code)
function Section1({ onComplete }: { onComplete: () => void }) {
  const [isCompleted, setIsCompleted] = useState(false)

  const handleComplete = () => {
    setIsCompleted(true)
    onComplete() // This should trigger the parent component to update
  }

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          <strong>Artificial Intelligence (AI)</strong> refers to systems or machines that mimic human intelligence to
          perform tasks like problem-solving, learning, or decision-making. From virtual assistants like Siri to
          recommendation algorithms on streaming platforms, AI is transforming how we work and live.
        </p>
      </div>

      <div className="bg-soft-blue-50 p-6 rounded-lg border-l-4 border-soft-blue-400 mb-6">
        <h3 className="font-bold text-lg text-soft-blue-800 mb-3">📚 A Brief History</h3>
        <p className="text-gray-700 leading-relaxed">
          AI has been around since the 1950s, with milestones like the development of expert systems in the 1980s and
          deep learning breakthroughs in the 2010s. Today, AI powers industries from healthcare to retail, improving
          efficiency and innovation.
        </p>
      </div>

      <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400 mb-6">
        <h3 className="font-bold text-lg text-amber-800 mb-3">💡 Why It Matters</h3>
        <p className="text-gray-700 leading-relaxed">
          AI enhances productivity, automates repetitive tasks, and enables data-driven decisions, making it a critical
          tool for businesses and employees alike.
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
          {isCompleted ? "✅ Section Complete!" : "📖 Mark as Complete"}
        </button>

        {isCompleted && (
          <p className="mt-3 text-green-600 font-medium">Great! Now click "Next Section" below to continue.</p>
        )}
      </div>
    </div>
  )
}

function Section2({ onComplete }: { onComplete: () => void }) {
  const [completedQuestions, setCompletedQuestions] = useState<boolean[]>([false, false, false])
  const [sectionComplete, setSectionComplete] = useState(false)

  const quizQuestions = [
    {
      id: "q1",
      question: "What does AI stand for?",
      options: ["Automated Intelligence", "Artificial Intelligence", "Algorithmic Integration"],
      correctAnswer: 1,
      explanation: "AI stands for Artificial Intelligence - systems that mimic human intelligence to perform tasks.",
    },
    {
      id: "q2",
      question: "Which of these is an example of AI?",
      options: [
        "A calculator performing basic math",
        "A chatbot answering customer queries",
        "A spreadsheet sorting data",
      ],
      correctAnswer: 1,
      explanation:
        "A chatbot uses AI to understand and respond to queries, while calculators and spreadsheets follow fixed rules.",
    },
    {
      id: "q3",
      question: "When did AI research begin?",
      options: ["2000s", "1950s", "1980s"],
      correctAnswer: 1,
      explanation:
        "AI research began in the 1950s, with significant milestones like expert systems in the 1980s and deep learning in the 2010s.",
    },
  ]

  const handleQuestionComplete = (questionIndex: number, correct: boolean) => {
    const newCompleted = [...completedQuestions]
    newCompleted[questionIndex] = true
    setCompletedQuestions(newCompleted)

    // Check if all questions are completed
    if (newCompleted.every(Boolean)) {
      setSectionComplete(true)
      onComplete()
    }
  }

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700">
          Answer these questions to gauge your initial understanding of AI. Don't worry about getting them right—it's
          all about learning! 🎯
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

      {/* Progress indicator */}
      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-800 font-medium">
          Progress: {completedQuestions.filter(Boolean).length} of {quizQuestions.length} questions answered
        </p>
      </div>

      {sectionComplete && (
        <div className="text-center p-4 bg-green-50 rounded-lg border-2 border-green-200">
          <p className="text-green-800 font-medium">
            🎉 Great job! You've completed all quiz questions. Ready for the next section!
          </p>
        </div>
      )}
    </div>
  )
}

function Section3({ onComplete }: { onComplete: () => void }) {
  const [isCompleted, setIsCompleted] = useState(false)

  const flipCards = [
    {
      front: "What is an Algorithm?",
      back: "A set of rules or instructions a computer follows to solve a problem or complete a task, like a recipe for AI.",
      frontColor: "bg-coral-500",
      backColor: "bg-coral-600",
    },
    {
      front: "What is Machine Learning?",
      back: "A subset of AI where systems learn from data to improve performance without being explicitly programmed.",
      frontColor: "bg-amber-500",
      backColor: "bg-amber-600",
    },
    {
      front: "What is a Neural Network?",
      back: "A computing system inspired by the human brain, used in AI to recognize patterns and make predictions.",
      frontColor: "bg-soft-blue-500",
      backColor: "bg-soft-blue-600",
    },
    {
      front: "What is Supervised Learning?",
      back: "A type of machine learning where the model is trained on labeled data, like teaching a child with examples.",
      frontColor: "bg-coral-400",
      backColor: "bg-coral-500",
    },
    {
      front: "What is Unsupervised Learning?",
      back: "A type of machine learning where the model finds patterns in unlabeled data, like sorting a pile of mixed toys.",
      frontColor: "bg-amber-400",
      backColor: "bg-amber-500",
    },
  ]

  const handleComplete = () => {
    setIsCompleted(true)
    onComplete()
  }

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700">
          Explore these core AI terms by hovering over each card to reveal its definition! These are the building blocks
          of AI literacy. 🏗️
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {flipCards.map((card, index) => (
          <FlipCard
            key={index}
            front={card.front}
            back={card.back}
            frontColor={card.frontColor}
            backColor={card.backColor}
          />
        ))}
      </div>

      <div className="text-center">
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
            opacity: isCompleted ? 0.9 : 1,
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
          {isCompleted ? "✓ Section Complete" : "I've Explored the Terms"}
        </button>

        {isCompleted && (
          <p className="mt-3 text-green-600 font-medium">Great! Now click "Next Section" below to continue.</p>
        )}
      </div>
    </div>
  )
}

function Section4({ onComplete }: { onComplete: () => void }) {
  const sortingItems = [
    { id: "1", text: "Spam email filter", category: "AI" as const },
    { id: "2", text: "Manual data entry", category: "Non-AI" as const },
    { id: "3", text: "Facial recognition in photos", category: "AI" as const },
    { id: "4", text: "A thermostat set to a fixed temperature", category: "Non-AI" as const },
    { id: "5", text: "Movie recommendation system", category: "AI" as const },
  ]

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700">
          Sort these examples into "AI" or "Non-AI" categories to understand what qualifies as AI. Click the buttons to
          move items to the correct category! 🎲
        </p>
      </div>

      <SortingActivity items={sortingItems} onComplete={onComplete} />
    </div>
  )
}

function Section5({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700 mb-4">
          You're in a team meeting, and your manager asks, "How can AI help our department?" Based on what you've
          learned, choose the best response. 🤔
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-semibold text-gray-800">
            <strong>Scenario:</strong> Your department handles customer support, and response times are slow due to high
            inquiry volumes.
          </p>
        </div>
      </div>

      <QuizQuestion
        question="What's the best response to your manager?"
        options={[
          "AI can replace all our staff to save costs.",
          "AI can automate repetitive tasks like answering common questions, freeing us to focus on complex issues.",
          "AI is only for technical teams, so it won't help us.",
        ]}
        correctAnswer={1}
        explanation="AI is a tool to enhance, not replace, human work. It's relevant for all teams, especially in automating routine tasks while humans handle complex, creative, and empathetic work."
        onAnswer={onComplete}
      />
    </div>
  )
}

function Section6({ onComplete, router }: { onComplete: () => void; router: any }) {
  const [isCompleted, setIsCompleted] = useState(false)

  const handleComplete = () => {
    setIsCompleted(true)
    onComplete()
  }

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700 mb-4">
          <strong>Congratulations!</strong> You've learned what AI is, its history, applications, and key terms like
          machine learning and neural networks. You're now ready to discuss AI's role in your workplace with confidence!
          🚀
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-lg text-green-800 mb-3">📋 What You've Learned</h3>
          <ul className="space-y-2 text-green-700">
            <li>✓ Definition and history of AI</li>
            <li>✓ Key AI terminology</li>
            <li>✓ Difference between AI and non-AI systems</li>
            <li>✓ How AI can enhance workplace productivity</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
          <h3 className="font-bold text-lg text-blue-800 mb-3">🎯 Next Steps</h3>
          <ul className="space-y-2 text-blue-700">
            <li>➡️ Proceed to Module 2: AI Safety and Ethics</li>
            <li>💬 Practice using AI terms in conversations</li>
            <li>🔍 Identify AI applications in your workplace</li>
          </ul>
        </div>
      </div>

      <div className="text-center space-y-4">
        <button
          onClick={handleComplete}
          disabled={isCompleted}
          style={{
            backgroundColor: isCompleted ? "#10b981" : "#22c55e",
            color: "white",
            border: "none",
            padding: "12px 32px",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: "600",
            cursor: isCompleted ? "default" : "pointer",
            opacity: isCompleted ? 0.9 : 1,
          }}
        >
          {isCompleted ? "🎓 Module Complete!" : "🎓 Complete Module 1"}
        </button>

        {isCompleted && (
          <div className="flex justify-center gap-4 mt-4">
            <Button
              onClick={() => {
                router.push("/module2")
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              ➡️ Go to Module 2
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
