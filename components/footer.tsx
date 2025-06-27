import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-2">
            This eLearning course was created by{" "}
            <Link
              href="https://sergeipanov.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coral-600 hover:text-coral-700 font-medium underline"
            >
              Sergei Panov
            </Link>
            , Technical Instructional Designer
          </p>
          <p className="text-gray-500 text-xs">© 2024 AI Fundamentals Course. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
