"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function DevNavigation() {
  const router = useRouter()

  const modules = [
    {
      id: 1,
      title: "Introduction to AI and Core Concepts",
      description: "Discover what AI is, why it matters, and learn key terms",
      path: "/",
      icon: "🤖",
      color: "from-coral-100 to-amber-100",
    },
    {
      id: 2,
      title: "AI Safety and Ethical Use",
      description: "Learn to use AI responsibly and protect sensitive data",
      path: "/module2",
      icon: "🛡️",
      color: "from-amber-100 to-soft-blue-100",
    },
    {
      id: 3,
      title: "AI in Everyday Tools",
      description: "Uncover the magic of AI in tools you use every day",
      path: "/module3",
      icon: "🔧",
      color: "from-soft-blue-100 to-coral-100",
    },
    {
      id: 4,
      title: "AI in Your Organization",
      description: "Explore how AI fits into your industry and company",
      path: "/module4",
      icon: "🏢",
      color: "from-coral-100 to-amber-100",
    },
    {
      id: 5,
      title: "The Future of AI and Your Role",
      description: "Explore the exciting future of AI and your role in it",
      path: "/module5",
      icon: "🚀",
      color: "from-amber-100 to-soft-blue-100",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-amber-50 to-soft-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🛠️ Developer Navigation</h1>
          <p className="text-lg text-gray-600 font-medium">Quick access to all modules for testing and development</p>
        </div>

        <div className="grid md:grid-cols-1 gap-6 mb-8">
          {modules.map((module) => (
            <Card key={module.id} className="border-2 border-coral-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className={`bg-gradient-to-r ${module.color}`}>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <span className="text-3xl mr-3">{module.icon}</span>
                  Module {module.id}: {module.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">{module.description}</p>
                <button
                  onClick={() => router.push(module.path)}
                  style={{
                    backgroundColor: "#ed7c47",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#de5a2c"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#ed7c47"
                  }}
                >
                  Go to Module {module.id}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6">
          <h3 className="font-bold text-yellow-800 mb-3">💡 Developer Tips</h3>
          <ul className="space-y-2 text-yellow-700">
            <li>• Each module has a "Show Developer Mode" link at the bottom of the header</li>
            <li>• Developer mode lets you complete all sections instantly or jump to any section</li>
            <li>• Use this to quickly test different parts of the course without completing everything</li>
            <li>• Remember to test the normal user flow occasionally to ensure everything works</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
