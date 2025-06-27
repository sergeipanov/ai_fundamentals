"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProgressBar } from "@/components/progress-bar"
import { FlipCard } from "@/components/flip-card"
import { QuizQuestion } from "@/components/quiz-question"
import { ChevronLeft, CheckCircle, Download, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Module5() {
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState<boolean[]>(new Array(5).fill(false))
  const [sectionProgress, setSectionProgress] = useState<{ [key: number]: boolean }>({})

  // Add developer mode
  const [devMode, setDevMode] = useState(false)

  const totalSections = 5
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
      title: "The Future is Now",
      icon: "🌟",
      color: "from-coral-100 to-amber-100",
    },
    {
      title: "Key Concepts for the Future",
      icon: "🔮",
      color: "from-amber-100 to-soft-blue-100",
    },
    {
      title: "Final Knowledge Check Quiz",
      icon: "🎓",
      color: "from-soft-blue-100 to-coral-100",
    },
    {
      title: "AI Glossary and Resource List",
      icon: "📚",
      color: "from-coral-100 to-amber-100",
    },
    {
      title: "Wrap-Up and Fun Challenge",
      icon: "🎉",
      color: "from-amber-100 to-soft-blue-100",
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
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-amber-50 to-soft-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🚀 Module 5: The Future of AI and Your Role</h1>
          <p className="text-lg text-gray-600 font-medium">
            Congratulations on reaching the final module! Let's explore the exciting future of AI and discover how you,
            as a non-technical team member, can shape and thrive in this evolving landscape. Get ready for an inspiring
            and interactive finish!
          </p>
        </div>

        {/* Developer Mode Panel */}
        {devMode && (
          <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-yellow-800 mb-3">🛠️ Developer Mode</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <button
                onClick={() => setCompletedSections(new Array(5).fill(true))}
                className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
              >
                Complete All Sections
              </button>
              <button
                onClick={() => setCompletedSections(new Array(5).fill(false))}
                className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
              >
                Reset All Sections
              </button>
              {[0, 1, 2, 3, 4].map((index) => (
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

        {/* Section Navigation - 5 dots */}
        <div className="flex justify-center items-center mb-6">
          <div className="flex gap-3 px-4">
            {[0, 1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full transition-colors duration-300 border ${
                  index === currentSection
                    ? "bg-orange-500 border-orange-600"
                    : completedSections[index]
                      ? "bg-green-500 border-green-600"
                      : "bg-gray-300 border-gray-400"
                }`}
                title={`Section ${index + 1}: ${sections[index].title}`}
              />
            ))}
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
                {currentSection === totalSections - 1 ? "Course Complete! 🎉" : "Section Complete! Ready to continue."}
              </div>
            ) : (
              <div className="text-gray-500 text-sm">Complete this section to continue</div>
            )}
          </div>

          <button
            onClick={goToNextSection}
            disabled={
              (!completedSections[currentSection] && !devMode) ||
              currentSection === totalSections - 1 ||
              (currentSection === totalSections - 1 && completedSections[currentSection])
            }
            style={{
              backgroundColor:
                currentSection === totalSections - 1 && completedSections[currentSection]
                  ? "#e5e7eb" // Grey when final section is complete
                  : completedSections[currentSection] || devMode
                    ? "#ed7c47" // Orange when can proceed
                    : "#e5e7eb", // Grey when can't proceed
              color:
                currentSection === totalSections - 1 && completedSections[currentSection]
                  ? "#6b7280" // Grey text when final section is complete
                  : completedSections[currentSection] || devMode
                    ? "white" // White text when can proceed
                    : "#6b7280", // Grey text when can't proceed
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "500",
              cursor:
                currentSection === totalSections - 1 && completedSections[currentSection]
                  ? "not-allowed" // Not allowed when final section is complete
                  : completedSections[currentSection] || devMode
                    ? "pointer" // Pointer when can proceed
                    : "not-allowed", // Not allowed when can't proceed
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {currentSection === totalSections - 1 && completedSections[currentSection] ? (
              <>
                Course Complete!
                <CheckCircle className="w-4 h-4" />
              </>
            ) : (
              <>
                Next Section
                <ChevronRight className="w-4 h-4" />
              </>
            )}
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
          <strong>AI is advancing fast</strong>—think smarter chatbots, self-driving cars, and personalized healthcare.
          By 2025 and beyond, AI will continue to transform industries, creating new opportunities and challenges. Your
          role is key in ensuring it benefits everyone!
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-6">
        <h3 className="font-bold text-lg text-blue-800 mb-3">🔮 Fun Prediction</h3>
        <p className="text-gray-700 leading-relaxed">
          Experts suggest AI could help create a 4-day workweek by automating routine tasks—exciting, right?
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-coral-50 p-6 rounded-lg border-2 border-coral-200">
          <h3 className="font-bold text-lg text-coral-800 mb-3">🤖 Smarter AI Assistants</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• More conversational and context-aware</li>
            <li>• Better understanding of complex requests</li>
            <li>• Integration across all work platforms</li>
            <li>• Proactive task suggestions</li>
          </ul>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
          <h3 className="font-bold text-lg text-amber-800 mb-3">🚗 Autonomous Systems</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Self-driving vehicles and delivery</li>
            <li>• Automated manufacturing processes</li>
            <li>• Smart building management</li>
            <li>• Robotic assistance in workplaces</li>
          </ul>
        </div>

        <div className="bg-soft-blue-50 p-6 rounded-lg border-2 border-soft-blue-200">
          <h3 className="font-bold text-lg text-soft-blue-800 mb-3">🏥 Personalized Healthcare</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• AI-powered diagnosis and treatment</li>
            <li>• Personalized medicine recommendations</li>
            <li>• Predictive health monitoring</li>
            <li>• Mental health support systems</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-lg text-green-800 mb-3">🎨 Creative AI</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• AI-generated content and art</li>
            <li>• Collaborative design tools</li>
            <li>• Personalized learning experiences</li>
            <li>• Enhanced creative workflows</li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
        <h3 className="font-bold text-lg text-purple-800 mb-3">🌟 Your Role in the Future</h3>
        <p className="text-gray-700 leading-relaxed">
          As AI evolves, your human skills become more valuable—creativity, empathy, critical thinking, and ethical
          judgment. You'll be the bridge between AI capabilities and human needs, ensuring technology serves everyone
          fairly and effectively.
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
          {isCompleted ? "✅ Section Complete!" : "🌟 I'm Ready for the Future!"}
        </button>

        {isCompleted && (
          <p className="mt-3 text-green-600 font-medium">
            Fantastic! Now let's explore the key concepts that will shape AI's future!
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

  const flipCards = [
    {
      front: "Trends in AI Development",
      back: "Look out for generative AI (e.g., content creation), AI ethics regulations, and improved natural language processing. These will shape how we work and interact.",
      frontColor: "bg-coral-500",
      backColor: "bg-coral-600",
    },
    {
      front: "Responsible AI Practices",
      back: "Staying ethical means advocating for fairness, transparency, and privacy as AI grows—your voice matters in shaping responsible AI!",
      frontColor: "bg-amber-500",
      backColor: "bg-amber-600",
    },
    {
      front: "Staying Informed",
      back: "Keep learning through updates, courses, or discussions to stay ahead in the AI game. Continuous learning is your superpower!",
      frontColor: "bg-soft-blue-500",
      backColor: "bg-soft-blue-600",
    },
    {
      front: "Generative AI Revolution",
      back: "AI that creates content, code, images, and more. This technology will transform creative industries and everyday work processes.",
      frontColor: "bg-purple-500",
      backColor: "bg-purple-600",
    },
    {
      front: "AI Ethics & Regulation",
      back: "New laws and guidelines ensuring AI is fair, transparent, and safe. Your understanding helps advocate for responsible implementation.",
      frontColor: "bg-green-500",
      backColor: "bg-green-600",
    },
    {
      front: "Human-AI Collaboration",
      back: "The future isn't AI replacing humans, but AI augmenting human capabilities. You'll work alongside AI as a powerful team!",
      frontColor: "bg-pink-500",
      backColor: "bg-pink-600",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700">
          Explore the key concepts that will define AI's future! Hover over each card to discover what's coming and how
          you can be part of it. 🔮
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

      <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
        <h4 className="font-bold text-yellow-800 mb-2">🤔 Quick Thought</h4>
        <p className="text-yellow-700">
          What future AI trend excites you most?
          <br />
          <span className="text-sm italic">(Think about how it could improve your work or daily life!)</span>
        </p>
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
          {isCompleted ? "✓ Section Complete" : "🔮 I've Explored the Future!"}
        </button>

        {isCompleted && (
          <p className="mt-3 text-green-600 font-medium">Excellent! Ready for your final knowledge check?</p>
        )}
      </div>
    </div>
  )
}

function Section3({ onComplete }: { onComplete: () => void }) {
  const [completedQuestions, setCompletedQuestions] = useState<boolean[]>([false, false, false])
  const [sectionComplete, setSectionComplete] = useState(false)

  const quizQuestions = [
    {
      id: "q1",
      question: "What's a future AI trend?",
      options: ["Slower internet speeds", "Generative AI for content creation", "Less automation"],
      correctAnswer: 1,
      explanation:
        "Generative AI for content creation is a major future trend, enabling AI to create text, images, code, and other content automatically.",
    },
    {
      id: "q2",
      question: "Why is responsible AI important?",
      options: ["To confuse users", "To ensure fairness and privacy", "To avoid updates"],
      correctAnswer: 1,
      explanation:
        "Responsible AI is crucial for ensuring fairness, privacy, transparency, and ethical use as AI becomes more prevalent in society.",
    },
    {
      id: "q3",
      question: "How can you stay informed about AI?",
      options: ["Ignoring new developments", "Taking courses and reading updates", "Relying only on old data"],
      correctAnswer: 1,
      explanation:
        "Staying informed through courses, reading updates, and continuous learning is essential to keep up with rapidly evolving AI technology.",
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
          Let's test your journey with this engaging quiz! Answer to see how much you've learned throughout this entire
          course. 🎓
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
            🎉 Amazing job! Celebrate your growth—review any missed answers to solidify your knowledge. You're ready for
            the resources section!
          </p>
        </div>
      )}
    </div>
  )
}

function Section4({ onComplete }: { onComplete: () => void }) {
  const [isCompleted, setIsCompleted] = useState(false)

  const handleComplete = () => {
    setIsCompleted(true)
    onComplete()
  }

  const glossaryTerms = [
    {
      term: "Artificial Intelligence (AI)",
      definition:
        "Systems or machines that mimic human intelligence to perform tasks like problem-solving, learning, or decision-making.",
    },
    {
      term: "Algorithm",
      definition:
        "A set of rules or instructions a computer follows to solve a problem or complete a task, like a recipe for AI.",
    },
    {
      term: "Machine Learning",
      definition:
        "A subset of AI where systems learn from data to improve performance without being explicitly programmed.",
    },
    {
      term: "Neural Network",
      definition:
        "A computing system inspired by the human brain, used in AI to recognize patterns and make predictions.",
    },
    {
      term: "Supervised Learning",
      definition:
        "A type of machine learning where the model is trained on labeled data, like teaching a child with examples.",
    },
    {
      term: "Unsupervised Learning",
      definition:
        "A type of machine learning where the model finds patterns in unlabeled data, like sorting a pile of mixed toys.",
    },
    {
      term: "Generative AI",
      definition:
        "AI that creates new content like text, images, or code based on patterns learned from training data.",
    },
    {
      term: "Natural Language Processing (NLP)",
      definition: "AI technology that helps computers understand, interpret, and generate human language.",
    },
    {
      term: "Bias (in AI)",
      definition:
        "Unfair or prejudiced results from AI systems, often caused by skewed or unrepresentative training data.",
    },
    {
      term: "Data Privacy",
      definition: "The protection of personal and sensitive information from unauthorized access or misuse.",
    },
    {
      term: "Chatbot",
      definition: "An AI program designed to simulate conversation with human users, often used for customer service.",
    },
    {
      term: "Automation",
      definition: "The use of technology to perform tasks without human intervention, often improving efficiency.",
    },
  ]

  const resources = [
    {
      category: "Official AI Resources",
      items: [
        "OpenAI Blog - Latest developments in AI research",
        "Google AI Blog - Insights from Google's AI research",
        "Microsoft AI Blog - Enterprise AI solutions and updates",
        "IBM AI Ethics Board - Guidelines for responsible AI",
      ],
    },
    {
      category: "Learning Platforms",
      items: [
        "Coursera AI for Everyone - Non-technical AI course",
        "edX Introduction to AI - Beginner-friendly courses",
        "Khan Academy - Basic computer science concepts",
        "LinkedIn Learning - AI and machine learning basics",
      ],
    },
    {
      category: "Industry News & Updates",
      items: [
        "MIT Technology Review - AI section",
        "Wired AI coverage - Latest AI trends and news",
        "VentureBeat AI - Business-focused AI news",
        "AI News - Daily AI industry updates",
      ],
    },
    {
      category: "Ethics & Responsible AI",
      items: [
        "Partnership on AI - Collaborative AI research",
        "AI Ethics Guidelines - IEEE standards",
        "Algorithmic Justice League - Fighting AI bias",
        "Future of Humanity Institute - AI safety research",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700 mb-4">
          Cap off your learning with valuable tools! Use these resources to keep exploring and growing your AI
          knowledge. 📚
        </p>
        <p className="text-sm text-gray-600">
          <strong>Engagement Tip:</strong> Bookmark these resources and share with your team for a group learning boost!
        </p>
      </div>

      {/* AI Glossary */}
      <Card className="border-2 border-coral-200 mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-coral-800 flex items-center">
            📖 AI Glossary
            <Button
              variant="outline"
              size="sm"
              className="ml-auto bg-transparent"
              onClick={() => {
                const glossaryText = glossaryTerms.map((item) => `${item.term}: ${item.definition}`).join("\n\n")
                const blob = new Blob([glossaryText], { type: "text/plain" })
                const url = URL.createObjectURL(blob)
                const a = document.createElement("a")
                a.href = url
                a.download = "AI-Glossary.txt"
                a.click()
                URL.revokeObjectURL(url)
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            Definitions for key AI terms to reference anytime during your AI journey.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
            {glossaryTerms.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-coral-800 mb-2">{item.term}</h4>
                <p className="text-sm text-gray-700">{item.definition}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resource List */}
      <Card className="border-2 border-amber-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-amber-800 flex items-center">
            🔗 Resource List
            <Button
              variant="outline"
              size="sm"
              className="ml-auto bg-transparent"
              onClick={() => {
                const resourceText = resources
                  .map((category) => `${category.category}:\n${category.items.map((item) => `• ${item}`).join("\n")}`)
                  .join("\n\n")
                const blob = new Blob([resourceText], { type: "text/plain" })
                const url = URL.createObjectURL(blob)
                const a = document.createElement("a")
                a.href = url
                a.download = "AI-Resources.txt"
                a.click()
                URL.revokeObjectURL(url)
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">
            Links to articles, videos, and courses for ongoing AI education and staying current with trends.
          </p>
          <div className="space-y-6">
            {resources.map((category, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-amber-800 mb-3">{category.category}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-700 flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
        <h4 className="font-bold text-green-800 mb-2">💡 Feedback</h4>
        <p className="text-green-700">
          These tools will empower you to stay ahead—great start to your AI journey! Keep these resources handy as you
          continue exploring the world of AI.
        </p>
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
          {isCompleted ? "✅ Section Complete!" : "📚 I Have My Resources!"}
        </button>

        {isCompleted && (
          <p className="mt-3 text-green-600 font-medium">Perfect! Ready for the final celebration and challenge?</p>
        )}
      </div>
    </div>
  )
}

function Section5({ onComplete }: { onComplete: () => void }) {
  const [visionDescription, setVisionDescription] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  const handleComplete = () => {
    setIsCompleted(true)
    onComplete()
  }

  const visionExamples = [
    "AI Assistant Ally - helping with scheduling and research",
    "Smart Analytics Partner - providing instant data insights",
    "Creative Collaboration Bot - brainstorming and content creation",
    "Efficiency Enhancement AI - automating routine tasks",
    "Customer Experience AI - personalizing client interactions",
    "Learning & Development AI - customized training programs",
  ]

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700 mb-4">
          <strong>You've completed the course!</strong> 🎉 You're now equipped to anticipate AI's future, promote
          responsible use, and grow your skills as a non-technical contributor to the AI revolution.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-lg text-green-800 mb-3">🏆 Your AI Journey Complete</h3>
          <ul className="space-y-2 text-green-700">
            <li>✓ Understanding AI fundamentals</li>
            <li>✓ AI safety and ethical practices</li>
            <li>✓ Recognizing AI in everyday tools</li>
            <li>✓ AI's role in organizations</li>
            <li>✓ Future trends and your role</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
          <h3 className="font-bold text-lg text-blue-800 mb-3">🚀 Your Next Steps</h3>
          <ul className="space-y-2 text-blue-700">
            <li>🎯 Apply AI knowledge in your role</li>
            <li>🤝 Collaborate with AI teams</li>
            <li>📚 Continue learning with resources</li>
            <li>🗣️ Share insights with colleagues</li>
            <li>🔍 Stay curious about AI developments</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-2 border-purple-200 mb-6">
        <h3 className="font-bold text-lg text-purple-800 mb-4">
          🎨 Fun Challenge: Create a "Future AI Vision" Poster!
        </h3>
        <p className="text-purple-700 mb-4">
          Describe how AI will enhance your team in 5 years (e.g., "AI Assistant Ally"). Share it with pride!
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-800 mb-2">Your Future AI Vision:</label>
            <textarea
              value={visionDescription}
              onChange={(e) => setVisionDescription(e.target.value)}
              placeholder="Describe how AI will transform your team's work in 5 years..."
              className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none h-24"
            />
          </div>

          <div>
            <p className="text-sm text-purple-600 mb-2">Need inspiration? Try one of these visions:</p>
            <div className="flex flex-wrap gap-2">
              {visionExamples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setVisionDescription(example)}
                  className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm hover:bg-purple-300 transition-colors"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg border-2 border-yellow-300">
        <h3 className="font-bold text-lg text-yellow-800 mb-3">🎓 Congratulations, AI Champion!</h3>
        <p className="text-yellow-700 leading-relaxed">
          You've transformed from AI-curious to AI-confident! You now have the knowledge, tools, and mindset to thrive
          in an AI-powered future. Remember: you're not just adapting to AI—you're helping shape how it benefits
          everyone.
        </p>
      </div>

      <div className="text-center space-y-4">
        <Button
          onClick={handleComplete}
          disabled={isCompleted}
          className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold px-8 py-3 text-lg"
        >
          {isCompleted ? "🎓 Course Complete!" : "🎉 Complete My AI Journey!"}
        </Button>

        {visionDescription && (
          <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
            <p className="text-yellow-800 font-medium">
              🎨 Amazing vision! <strong>"{visionDescription}"</strong> - Your team's AI future looks bright! 🌟
            </p>
          </div>
        )}

        {isCompleted && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-800 mb-3">🎊 Final Celebration!</h4>
              <p className="text-green-700 mb-4">
                You've successfully completed the AI Fundamentals course! You're now ready to:
              </p>
              <ul className="text-green-700 space-y-1">
                <li>• Confidently discuss AI in workplace conversations</li>
                <li>• Identify opportunities for AI in your role</li>
                <li>• Advocate for responsible AI practices</li>
                <li>• Collaborate effectively with AI teams</li>
                <li>• Stay informed about AI developments</li>
              </ul>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  window.location.href = "/dev"
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
                🔄 Revisit Any Module
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
