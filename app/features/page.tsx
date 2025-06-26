import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, BarChart3, Users, Briefcase, Search, Filter, TrendingUp, Globe } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Field Descriptions",
      description:
        "Detailed explanations of each technology field, including current trends, applications, and future prospects.",
      benefits: ["In-depth field analysis", "Industry context", "Real-world applications", "Future outlook"],
    },
    {
      icon: BarChart3,
      title: "Skills Breakdown & Learning Paths",
      description:
        "Essential technical and soft skills required for each field, with structured learning paths to guide your development.",
      benefits: ["Skill requirements", "Learning roadmaps", "Difficulty levels", "Resource recommendations"],
    },
    {
      icon: Users,
      title: "Salary Insights & Market Data",
      description:
        "Current salary trends across experience levels in India, based on industry reports and market analysis.",
      benefits: ["Entry to senior level salaries", "Market trends", "Regional variations", "Growth projections"],
    },
    {
      icon: Briefcase,
      title: "Job Roles & Career Paths",
      description:
        "Various career positions available within each technology field, from entry-level to leadership roles.",
      benefits: ["Role descriptions", "Career progression", "Responsibilities", "Growth opportunities"],
    },
    {
      icon: Search,
      title: "Advanced Search & Filtering",
      description:
        "Powerful search functionality to find specific fields, skills, or job roles that match your interests.",
      benefits: ["Keyword search", "Skill-based filtering", "Salary sorting", "Quick navigation"],
    },
    {
      icon: Filter,
      title: "Personalized Recommendations",
      description: "Get tailored suggestions based on your background, interests, and career goals.",
      benefits: ["Custom recommendations", "Skill gap analysis", "Career matching", "Learning priorities"],
    },
    {
      icon: TrendingUp,
      title: "Market Trends & Analytics",
      description: "Stay updated with the latest industry trends, emerging technologies, and market demands.",
      benefits: ["Industry insights", "Emerging trends", "Demand forecasting", "Technology evolution"],
    },
    {
      icon: Globe,
      title: "Global Perspective with Local Focus",
      description: "International technology trends with specific focus on the Indian job market and opportunities.",
      benefits: ["Global context", "Local market data", "Cultural considerations", "Regional opportunities"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-gray-900 mb-6">
            Why Choose <span className="gradient-text-primary">Tech and Path</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover all the tools and resources available to help you navigate your tech career journey
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start exploring technology fields and find the perfect career path for your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tech-fields"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Browse Tech Fields
            </a>
            <a
              href="/search"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Search Careers
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
