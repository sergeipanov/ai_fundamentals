"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProgressBar } from "@/components/progress-bar"
import { QuizQuestion } from "@/components/quiz-question"
import { Footer } from "@/components/footer"
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Module5() {
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
      title: "The Future is Now - AI Trends",
      icon: "🚀",
      color: "from-coral-100 to-amber-100",
    },
    {
      title: "Key Concepts of Future AI",
      icon: "🔮",
      color: "from-amber-100 to-soft-blue-100",
    },
    {
      title: "Interactive Timeline - AI Evolution",
      icon: "📅",
      color: "from-soft-blue-100 to-coral-100",
    },
    {
      title: "Future Skills Assessment",
      icon: "🎯",
      color: "from-coral-100 to-amber-100",
    },
    {
      title: "Quiz - Test Your Future AI Knowledge",
      icon: "🧠",
      color: "from-amber-100 to-soft-blue-100",
    },
    {
      title: "Course Completion & Celebration",
      icon: "🎓",
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🚀 Module 5: The Future of AI and Your Role</h1>
          <p className="text-lg text-gray-600 font-medium">
            Welcome to the final frontier! Explore emerging AI trends, future possibilities, and your exciting role in
            the AI-powered world. Get ready to become a confident AI leader in your organization!
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
              title="Section 1: The Future is Now - AI Trends"
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
              title="Section 2: Key Concepts of Future AI"
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
              title="Section 3: Interactive Timeline"
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
              title="Section 4: Future Skills Assessment"
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
              title="Section 5: Future AI Knowledge Quiz"
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
              title="Section 6: Course Completion & Celebration"
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
          <strong>The future of AI is happening now!</strong> From generative AI creating art and writing to autonomous
          systems managing entire workflows, AI is evolving rapidly. Understanding these trends helps you stay ahead and
          contribute meaningfully to your organization's AI journey.
        </p>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 mb-6">
        <h3 className="font-bold text-lg text-purple-800 mb-3">🌟 Why This Matters</h3>
        <p className="text-gray-700 leading-relaxed">
          AI literacy is becoming as essential as digital literacy was 20 years ago. Those who understand and adapt to
          AI trends will lead the future workforce.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-coral-50 p-6 rounded-lg border-2 border-coral-200">
          <h3 className="font-bold text-lg text-coral-800 mb-3">🎨 Generative AI</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• AI creates content: text, images, code, music</li>
            <li>• Tools like ChatGPT, DALL-E, GitHub Copilot</li>
            <li>• Transforming creative and technical work</li>
            <li>• Democratizing content creation</li>
          </ul>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
          <h3 className="font-bold text-lg text-amber-800 mb-3">🤖 Autonomous Systems</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Self-driving vehicles and delivery drones</li>
            <li>• Automated manufacturing and logistics</li>
            <li>• Smart building management systems</li>
            <li>• AI-powered decision-making processes</li>
          </ul>
        </div>

        <div className="bg-soft-blue-50 p-6 rounded-lg border-2 border-soft-blue-200">
          <h3 className="font-bold text-lg text-soft-blue-800 mb-3">🧠 AI Assistants</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Personal AI companions for work and life</li>
            <li>• Intelligent scheduling and task management</li>
            <li>• Real-time language translation</li>
            <li>• Personalized learning and development</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-lg text-green-800 mb-3">🔬 AI in Science & Healthcare</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Drug discovery and medical diagnosis</li>
            <li>• Climate modeling and environmental solutions</li>
            <li>• Personalized medicine and treatment</li>
            <li>• Scientific research acceleration</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg border-2 border-blue-300">
        <h4 className="font-bold text-blue-800 mb-2">🔮 Looking Ahead</h4>
        <p className="text-blue-700">
          By 2030, AI will be seamlessly integrated into most jobs, not replacing humans but making them more capable,
          creative, and strategic. The question isn't whether AI will impact your work—it's how you'll shape that
          impact.
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
          {isCompleted ? "✅ Section Complete!" : "🚀 I'm Ready for the Future!"}
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

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700">
          Let's dive into the fundamental concepts that will define AI's future! Understanding these will help you
          navigate and contribute to the AI-powered world ahead. 🔮
        </p>
      </div>

      <div className="grid md:grid-cols-1 gap-6 mb-6">
        <div className="bg-coral-50 p-6 rounded-lg border-2 border-coral-200">
          <h3 className="font-bold text-lg text-coral-800 mb-3">🧩 Artificial General Intelligence (AGI)</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Unlike today's narrow AI (designed for specific tasks), AGI would match human intelligence across all
            domains. While still theoretical, it represents the ultimate goal of AI research.
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-coral-400">
            <p className="text-sm text-gray-600">
              <strong>Current Status:</strong> We're still years away from AGI, but progress in foundation models is
              accelerating research.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
          <h3 className="font-bold text-lg text-amber-800 mb-3">🤝 Human-AI Collaboration</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            The future isn't about AI replacing humans, but about creating powerful partnerships where AI handles data
            processing while humans provide creativity, empathy, and strategic thinking.
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-amber-400">
            <p className="text-sm text-gray-600">
              <strong>Example:</strong> Doctors using AI for diagnosis while providing patient care and treatment
              decisions.
            </p>
          </div>
        </div>

        <div className="bg-soft-blue-50 p-6 rounded-lg border-2 border-soft-blue-200">
          <h3 className="font-bold text-lg text-soft-blue-800 mb-3">🌐 AI Democratization</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            AI tools are becoming more accessible to non-technical users through intuitive interfaces, making AI
            capabilities available to everyone, not just programmers.
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-soft-blue-400">
            <p className="text-sm text-gray-600">
              <strong>Impact:</strong> Anyone can now use AI for writing, design, analysis, and problem-solving without
              coding skills.
            </p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-lg text-green-800 mb-3">⚖️ Responsible AI Development</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            As AI becomes more powerful, ensuring it's developed and deployed ethically, fairly, and safely becomes
            crucial for society's benefit.
          </p>
          <div className="bg-white p-3 rounded border-l-4 border-green-400">
            <p className="text-sm text-gray-600">
              <strong>Focus Areas:</strong> Bias prevention, transparency, privacy protection, and human oversight.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-purple-100 p-4 rounded-lg border-2 border-purple-300">
        <h4 className="font-bold text-purple-800 mb-2">💭 Future Mindset</h4>
        <p className="text-purple-700">
          The key to thriving in an AI-powered future is maintaining a growth mindset: stay curious, keep learning, and
          focus on uniquely human skills like creativity, emotional intelligence, and ethical reasoning.
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
          {isCompleted ? "✅ Section Complete!" : "🔮 I Understand Future AI!"}
        </button>

        {isCompleted && (
          <p className="mt-3 text-green-600 font-medium">
            Excellent! Ready to explore AI's evolution through an interactive timeline?
          </p>
        )}
      </div>
    </div>
  )
}

function Section3({ onComplete }: { onComplete: () => void }) {
  const [clickedEvents, setClickedEvents] = useState<number[]>([])
  const [isCompleted, setIsCompleted] = useState(false)

  const timelineEvents = [
    {
      id: 1,
      year: "2024",
      title: "Today",
      icon: "📍",
      description: "Generative AI mainstream adoption, ChatGPT revolution, AI assistants in every workplace",
      details: "We're here! AI tools are becoming as common as email and spreadsheets in the workplace.",
      color: "bg-coral-100 border-coral-400",
    },
    {
      id: 2,
      year: "2027",
      title: "Near Future",
      icon: "🚀",
      description:
        "AI agents handle complex workflows, personalized AI tutors, advanced robotics in service industries",
      details: "AI will manage entire business processes autonomously while humans focus on strategy and creativity.",
      color: "bg-amber-100 border-amber-400",
    },
    {
      id: 3,
      year: "2030",
      title: "Mid Future",
      icon: "🌟",
      description: "Human-AI collaboration standard, AI-powered scientific breakthroughs, sustainable AI systems",
      details:
        "Working with AI will be as natural as working with human colleagues. Major scientific discoveries accelerated by AI.",
      color: "bg-soft-blue-100 border-soft-blue-400",
    },
    {
      id: 4,
      year: "2035+",
      title: "Far Future",
      icon: "🔮",
      description: "Potential AGI emergence, AI-human integration, transformation of education and work",
      details:
        "The possibility of Artificial General Intelligence could fundamentally change how we think about intelligence and work.",
      color: "bg-purple-100 border-purple-400",
    },
  ]

  const handleEventClick = (eventId: number) => {
    if (!clickedEvents.includes(eventId)) {
      setClickedEvents((prev) => [...prev, eventId])
    }

    if (clickedEvents.length + 1 === timelineEvents.length) {
      setIsCompleted(true)
      onComplete()
    }
  }

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700 mb-4">
          Journey through AI's evolution from today to the far future! Click each milestone to discover what lies ahead
          and how it might impact your career and life. 📅
        </p>
        <p className="text-sm text-gray-600">
          <strong>Engagement Tip:</strong> Think about how each milestone might affect your industry or role!
        </p>
      </div>

      <div className="space-y-8">
        {timelineEvents.map((event, index) => (
          <div key={event.id} className="relative">
            <Card
              className={`border-2 cursor-pointer transition-all duration-300 ${
                clickedEvents.includes(event.id)
                  ? `${event.color} shadow-lg transform scale-105`
                  : "border-gray-300 hover:border-coral-400 hover:shadow-md"
              }`}
              onClick={() => handleEventClick(event.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`text-4xl p-3 rounded-full ${
                        clickedEvents.includes(event.id) ? "bg-white shadow-md" : "bg-gray-100"
                      }`}
                    >
                      {event.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{event.year}</h3>
                      <h4 className="text-lg font-semibold text-gray-700">{event.title}</h4>
                    </div>
                  </div>
                  {clickedEvents.includes(event.id) && <div className="text-green-500 text-3xl">✓</div>}
                </div>

                <p className="text-gray-700 font-medium mb-3">{event.description}</p>

                {!clickedEvents.includes(event.id) && (
                  <p className="text-gray-500 text-sm italic">Click to explore this milestone!</p>
                )}

                {clickedEvents.includes(event.id) && (
                  <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-coral-400 animate-in slide-in-from-top duration-300">
                    <p className="text-gray-700 font-medium">{event.details}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {index < timelineEvents.length - 1 && (
              <div className="flex justify-center my-6">
                <div className="w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-400 rounded"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-800 font-medium">
          Progress: {clickedEvents.length} of {timelineEvents.length} milestones explored
        </p>
      </div>

      {isCompleted && (
        <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-green-800 mb-2">🎉 Timeline Complete!</h3>
          <p className="text-green-700">
            You've journeyed through AI's evolution! This timeline shows how AI will gradually transform from a helpful
            tool to an integral part of human society. Your role is to stay informed, adaptable, and ready to shape this
            future.
          </p>
        </div>
      )}
    </div>
  )
}

function Section4({ onComplete }: { onComplete: () => void }) {
  const [skillRatings, setSkillRatings] = useState<{ [key: string]: number }>({})
  const [developmentPlan, setDevelopmentPlan] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  const futureSkills = [
    {
      id: "ai-literacy",
      name: "AI Literacy",
      description: "Understanding AI capabilities, limitations, and ethical use",
      importance: "Essential for all roles",
    },
    {
      id: "critical-thinking",
      name: "Critical Thinking",
      description: "Analyzing AI outputs, questioning assumptions, making informed decisions",
      importance: "Increasingly valuable as AI handles routine tasks",
    },
    {
      id: "creativity",
      name: "Creativity & Innovation",
      description: "Generating novel ideas, creative problem-solving, artistic expression",
      importance: "Uniquely human skill that complements AI",
    },
    {
      id: "emotional-intelligence",
      name: "Emotional Intelligence",
      description: "Understanding emotions, empathy, interpersonal communication",
      importance: "Critical for human-centered roles and leadership",
    },
    {
      id: "adaptability",
      name: "Adaptability",
      description: "Learning new tools, adjusting to change, continuous skill development",
      importance: "Essential in rapidly evolving AI landscape",
    },
    {
      id: "collaboration",
      name: "Human-AI Collaboration",
      description: "Working effectively with AI systems, prompt engineering, AI tool mastery",
      importance: "Core competency for future workforce",
    },
  ]

  const handleSkillRating = (skillId: string, rating: number) => {
    setSkillRatings((prev) => ({ ...prev, [skillId]: rating }))
  }

  const handleComplete = () => {
    setIsCompleted(true)
    onComplete()
  }

  const allSkillsRated = futureSkills.every((skill) => skillRatings[skill.id] !== undefined)
  const averageRating = allSkillsRated
    ? Object.values(skillRatings).reduce((sum, rating) => sum + rating, 0) / futureSkills.length
    : 0

  const getSkillFeedback = () => {
    if (averageRating >= 4) {
      return {
        message: "Excellent! You're well-prepared for the AI-powered future!",
        color: "text-green-700",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
      }
    } else if (averageRating >= 3) {
      return {
        message: "Good foundation! Focus on developing your lower-rated skills.",
        color: "text-blue-700",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
      }
    } else {
      return {
        message: "Great opportunity for growth! These skills will be your competitive advantage.",
        color: "text-amber-700",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-200",
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700 mb-4">
          Assess your readiness for the AI-powered future! Rate your current skill level in each area, then create a
          development plan. This self-reflection will guide your continued growth. 🎯
        </p>
        <p className="text-sm text-gray-600">
          <strong>Rating Scale:</strong> 1 = Beginner, 2 = Developing, 3 = Competent, 4 = Proficient, 5 = Expert
        </p>
      </div>

      <div className="space-y-6">
        {futureSkills.map((skill) => (
          <Card key={skill.id} className="border-2 border-soft-blue-200">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.name}</h3>
                <p className="text-gray-700 mb-2">{skill.description}</p>
                <p className="text-sm text-soft-blue-600 font-medium">{skill.importance}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Rate your current level:</span>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => handleSkillRating(skill.id, rating)}
                      className={`w-10 h-10 rounded-full border-2 font-bold transition-all ${
                        skillRatings[skill.id] === rating
                          ? "bg-soft-blue-500 text-white border-soft-blue-600"
                          : "bg-white text-gray-600 border-gray-300 hover:border-soft-blue-400"
                      }`}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {allSkillsRated && (
        <div className={`p-6 rounded-lg border-2 ${getSkillFeedback().bgColor} ${getSkillFeedback().borderColor}`}>
          <h3 className="font-bold text-lg mb-3">📊 Your Skills Assessment</h3>
          <p className={`${getSkillFeedback().color} mb-4`}>
            <strong>Average Rating: {averageRating.toFixed(1)}/5</strong>
          </p>
          <p className={getSkillFeedback().color}>{getSkillFeedback().message}</p>
        </div>
      )}

      {allSkillsRated && (
        <Card className="border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-purple-800">🚀 Your Development Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-3">
              Based on your assessment, what's one skill you'd like to develop further? How will you work on it?
            </p>
            <textarea
              value={developmentPlan}
              onChange={(e) => setDevelopmentPlan(e.target.value)}
              placeholder="e.g., I want to improve my AI literacy by taking online courses and experimenting with AI tools in my daily work..."
              className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none h-24 resize-none"
            />
          </CardContent>
        </Card>
      )}

      <div className="text-center">
        <button
          onClick={handleComplete}
          disabled={!allSkillsRated || !developmentPlan.trim() || isCompleted}
          style={{
            backgroundColor:
              allSkillsRated && developmentPlan.trim() && !isCompleted
                ? "#ed7c47"
                : isCompleted
                  ? "#10b981"
                  : "#e5e7eb",
            color: allSkillsRated && developmentPlan.trim() ? "white" : "#6b7280",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: allSkillsRated && developmentPlan.trim() && !isCompleted ? "pointer" : "default",
          }}
        >
          {isCompleted ? "✅ Section Complete!" : "🎯 Complete My Assessment"}
        </button>

        {isCompleted && (
          <p className="mt-3 text-green-600 font-medium">
            Excellent self-reflection! Ready to test your future AI knowledge?
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
      question: "What is the main difference between current AI and Artificial General Intelligence (AGI)?",
      options: [
        "AGI is faster than current AI",
        "AGI would match human intelligence across all domains, not just specific tasks",
        "AGI uses less energy than current AI",
      ],
      correctAnswer: 1,
      explanation:
        "Current AI is 'narrow' - designed for specific tasks like image recognition or language translation. AGI would have human-level intelligence across all cognitive domains, able to learn and adapt to any task.",
    },
    {
      id: "q2",
      question: "What's the most important skill for thriving in an AI-powered future?",
      options: ["Programming ability", "Adaptability and continuous learning", "Mathematical expertise"],
      correctAnswer: 1,
      explanation:
        "While technical skills are valuable, adaptability and continuous learning are most crucial. The AI landscape changes rapidly, and those who can learn new tools and adapt to change will thrive regardless of their technical background.",
    },
    {
      id: "q3",
      question: "How will human-AI collaboration likely evolve?",
      options: [
        "AI will completely replace human workers",
        "Humans and AI will work as partners, each contributing unique strengths",
        "AI will only be used for entertainment",
      ],
      correctAnswer: 1,
      explanation:
        "The future points toward partnership, not replacement. AI excels at data processing, pattern recognition, and automation, while humans contribute creativity, empathy, ethical reasoning, and strategic thinking.",
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
          Final knowledge check! Test your understanding of AI's future and your role in it. Show off everything you've
          learned about the exciting world ahead! 🧠
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
            🎉 Outstanding! You've demonstrated excellent understanding of AI's future. You're ready to lead in the
            AI-powered world!
          </p>
        </div>
      )}
    </div>
  )
}

function Section6({ onComplete }: { onComplete: () => void }) {
  const [certificateName, setCertificateName] = useState("")
  const [commitments, setCommitments] = useState({
    learn: false,
    apply: false,
    share: false,
  })
  const [isCompleted, setIsCompleted] = useState(false)

  const handleCommitmentChange = (key: string, checked: boolean) => {
    setCommitments((prev) => ({ ...prev, [key]: checked }))
  }

  const handleComplete = () => {
    setIsCompleted(true)
    onComplete()
  }

  const allCommitmentsMade = Object.values(commitments).every(Boolean)

  return (
    <div className="space-y-6">
      <div className="speech-bubble mb-6">
        <p className="text-lg text-gray-700 mb-4">
          <strong>🎉 Congratulations! You've completed the AI Fundamentals course!</strong> You've transformed from
          AI-curious to AI-confident, ready to thrive in the AI-powered future. Let's celebrate your achievement and
          plan your next steps!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <h3 className="font-bold text-lg text-green-800 mb-3">🏆 Your Journey Completed</h3>
          <ul className="space-y-2 text-green-700">
            <li>✓ Module 1: AI Basics & Core Concepts</li>
            <li>✓ Module 2: AI Safety & Ethical Use</li>
            <li>✓ Module 3: AI in Everyday Tools</li>
            <li>✓ Module 4: AI in Your Organization</li>
            <li>✓ Module 5: Future of AI & Your Role</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
          <h3 className="font-bold text-lg text-blue-800 mb-3">🎯 Skills You've Gained</h3>
          <ul className="space-y-2 text-blue-700">
            <li>• AI literacy and terminology</li>
            <li>• Safe and ethical AI practices</li>
            <li>• Understanding AI tools and processes</li>
            <li>• Strategic thinking about AI in organizations</li>
            <li>• Future-ready mindset and skills</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg border-2 border-purple-200 mb-6">
        <h3 className="font-bold text-lg text-purple-800 mb-4">🎓 Your AI Fundamentals Certificate</h3>
        <p className="text-purple-700 mb-4">Enter your name to generate your personalized completion certificate!</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-purple-800 mb-2">Your Full Name:</label>
            <input
              type="text"
              value={certificateName}
              onChange={(e) => setCertificateName(e.target.value)}
              placeholder="Enter your name for the certificate"
              className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none"
            />
          </div>

          {certificateName && (
            <div className="bg-white p-6 rounded-lg border-2 border-gold-300 shadow-lg">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">🏆 Certificate of Completion</h2>
                <p className="text-lg text-gray-700 mb-4">AI Fundamentals for Non-Technical Teams</p>
                <p className="text-xl font-semibold text-purple-800 mb-4">
                  This certifies that <span className="text-coral-600">{certificateName}</span>
                </p>
                <p className="text-gray-700 mb-4">
                  has successfully completed the comprehensive AI Fundamentals course and demonstrated proficiency in AI
                  concepts, safety practices, and future-ready skills.
                </p>
                <p className="text-sm text-gray-600">
                  Completed on {new Date().toLocaleDateString()} | Course by Sergei Panov
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 mb-6">
        <h3 className="font-bold text-lg text-amber-800 mb-4">🚀 Your AI Journey Continues</h3>
        <p className="text-amber-700 mb-4">Make these commitments to continue your AI growth:</p>

        <div className="space-y-3">
          <label className="flex items-start p-3 rounded-lg border-2 border-amber-200 cursor-pointer hover:bg-amber-100">
            <input
              type="checkbox"
              checked={commitments.learn}
              onChange={(e) => handleCommitmentChange("learn", e.target.checked)}
              className="mr-3 mt-1 text-amber-500"
            />
            <span className="font-medium text-amber-800">
              I commit to staying curious and continuing to learn about AI developments
            </span>
          </label>

          <label className="flex items-start p-3 rounded-lg border-2 border-amber-200 cursor-pointer hover:bg-amber-100">
            <input
              type="checkbox"
              checked={commitments.apply}
              onChange={(e) => handleCommitmentChange("apply", e.target.checked)}
              className="mr-3 mt-1 text-amber-500"
            />
            <span className="font-medium text-amber-800">
              I will look for opportunities to apply AI knowledge in my work and daily life
            </span>
          </label>

          <label className="flex items-start p-3 rounded-lg border-2 border-amber-200 cursor-pointer hover:bg-amber-100">
            <input
              type="checkbox"
              checked={commitments.share}
              onChange={(e) => handleCommitmentChange("share", e.target.checked)}
              className="mr-3 mt-1 text-amber-500"
            />
            <span className="font-medium text-amber-800">
              I will share my AI knowledge with colleagues and help others become AI-confident
            </span>
          </label>
        </div>
      </div>

      <div className="text-center space-y-4">
        <Button
          onClick={handleComplete}
          disabled={!certificateName.trim() || !allCommitmentsMade || isCompleted}
          className={`font-semibold px-8 py-4 text-xl ${
            certificateName.trim() && allCommitmentsMade && !isCompleted
              ? "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
              : isCompleted
                ? "bg-green-600 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {isCompleted ? "🎓 Course Complete!" : "🎉 Complete Your AI Journey"}
        </Button>

        {isCompleted && (
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg border-2 border-green-300">
            <h3 className="font-bold text-2xl text-green-800 mb-4">🎊 Welcome to the AI-Confident Community!</h3>
            <p className="text-green-700 text-lg mb-4">
              You're now equipped with the knowledge, skills, and mindset to thrive in the AI-powered future. Go forth
              and make a positive impact!
            </p>
            <div className="flex justify-center gap-4 text-4xl">🤖 🚀 🌟 🎯 🏆</div>
          </div>
        )}
      </div>
    </div>
  )
}
