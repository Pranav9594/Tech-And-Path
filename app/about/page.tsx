import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Target, Users, TrendingUp } from "lucide-react"

export default function AboutPage() {
  const aboutSections = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide comprehensive, up-to-date information about technology careers and help individuals make informed decisions about their future in tech.",
    },
    {
      icon: Users,
      title: "Who We Serve",
      description:
        "Students, professionals, career changers, and anyone interested in understanding the technology job market and career opportunities.",
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description:
        "We analyze current market trends, salary data, and industry demands to provide accurate career guidance and skill recommendations.",
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description:
        "Curated learning paths, skill requirements, and educational resources to help you succeed in your chosen technology field.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Tech and Path</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your comprehensive guide to technology careers and opportunities
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Guide</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                Welcome to the Tech Fields and Jobs Guide for 2025. This comprehensive resource has been created to help
                individuals navigate the complex and rapidly evolving technology landscape. Whether you're just starting
                your career journey, looking to make a transition into tech, or seeking to advance in your current
                field, this guide provides the insights and information you need.
              </p>
              <p className="mb-6">
                The technology industry continues to be one of the fastest-growing sectors globally, with new roles and
                specializations emerging regularly. Our guide covers the most promising technology fields, providing
                detailed information about career paths, required skills, salary expectations, and growth prospects.
              </p>
              <p>
                We believe that informed decisions lead to successful careers. That's why we've compiled data from
                industry reports, salary surveys, and job market analysis to give you the most accurate and current
                information available.
              </p>
            </div>
          </div>

          {/* About Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {aboutSections.map((section, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                      <section.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">{section.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">By the Numbers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Technology Fields Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Job Roles Detailed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">2025</div>
                <div className="text-gray-600">Updated Market Data</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
