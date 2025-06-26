import { notFound } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  TrendingUp,
  DollarSign,
  BookOpen,
  Briefcase,
  Users,
  Star,
  Zap,
  Target,
  Award,
  Clock,
  CheckCircle,
  BarChart3,
  Shield,
  Lightbulb,
} from "lucide-react"
import { techFieldsData } from "@/lib/tech-fields-data"
import { AnimatedCounter } from "@/components/ui/animated-counter"

interface PageProps {
  params: {
    id: string
  }
}

export default function FieldDetailPage({ params }: PageProps) {
  const field = techFieldsData.find((f) => f.id === params.id)

  if (!field) {
    notFound()
  }

  const salaryNumbers = {
    entry: Number.parseFloat(field.salaryRange.entry.split("-")[0].replace("₹", "")),
    mid: Number.parseFloat(field.salaryRange.mid.split("-")[0].replace("₹", "")),
    senior: Number.parseFloat(field.salaryRange.senior.split("-")[0].replace("₹", "")),
  }

  const getFieldIcon = (fieldId: string) => {
    const icons = {
      "ai-ml": "🤖",
      "data-science": "📊",
      "web-development": "💻",
      "ui-ux-design": "🎨",
      cybersecurity: "🛡️",
      "cloud-computing": "☁️",
      blockchain: "⛓️",
      iot: "📱",
      "product-management": "🎯",
      "non-coding": "👥",
    }
    return icons[fieldId as keyof typeof icons] || "💼"
  }

  const fieldIcon = getFieldIcon(field.id)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Enhanced Hero Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />

        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <Link
            href="/tech-fields"
            className="inline-flex items-center text-blue-100 hover:text-white mb-8 group transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Fields
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{fieldIcon}</div>
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                    <Star className="h-4 w-4 mr-2" />
                    High-Growth Career Path
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">{field.title}</h1>
                </div>
              </div>

              <p className="text-xl mb-8 text-blue-100 leading-relaxed">{field.description}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-lg px-4 py-2 font-bold">
                  Average: {field.salary}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-white/30 text-white text-lg px-4 py-2 bg-white/10 backdrop-blur-sm"
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  High Demand
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-4 text-lg hover-lift shadow-large"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Start Learning Path
                </Button>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                  <div className="text-3xl font-bold mb-1">
                    <AnimatedCounter end={field.jobRoles.length} />
                  </div>
                  <div className="text-sm text-blue-200">Job Roles</div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 mx-auto mb-3 text-green-300" />
                  <div className="text-3xl font-bold mb-1">
                    <AnimatedCounter end={field.skills.length} />
                  </div>
                  <div className="text-sm text-blue-200">Core Skills</div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                  <div className="text-3xl font-bold mb-1">40%</div>
                  <div className="text-sm text-blue-200">Growth Rate</div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 mx-auto mb-3 text-purple-300" />
                  <div className="text-3xl font-bold mb-1">
                    <AnimatedCounter end={salaryNumbers.senior} />L
                  </div>
                  <div className="text-sm text-blue-200">Max Salary</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Field Overview */}
              <Card className="professional-card shadow-large">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
                    Career Overview
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Everything you need to know about {field.title.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">{field.detailedDescription}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <Shield className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <div className="font-semibold text-gray-900">Job Security</div>
                      <div className="text-sm text-gray-600">Very High</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <BarChart3 className="h-8 w-8 mx-auto mb-2 text-green-600" />
                      <div className="font-semibold text-gray-900">Market Demand</div>
                      <div className="text-sm text-gray-600">Excellent</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <Lightbulb className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                      <div className="font-semibold text-gray-900">Innovation</div>
                      <div className="text-sm text-gray-600">Cutting Edge</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills Section */}
              <Card className="professional-card shadow-large">
                <CardHeader>
                  <CardTitle className="text-2xl">Essential Skills & Technologies</CardTitle>
                  <CardDescription className="text-lg">
                    Master these skills to excel in {field.title.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {field.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg hover:shadow-medium transition-all duration-300"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="font-medium text-gray-900">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Learning Path */}
              <Card className="professional-card shadow-large">
                <CardHeader>
                  <CardTitle className="text-2xl">Learning Roadmap</CardTitle>
                  <CardDescription className="text-lg">Your step-by-step journey to mastery</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {field.learningPath.map((step, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-6 group-hover:scale-110 transition-transform shadow-medium">
                          {index + 1}
                        </div>
                        <div className="flex-1 pt-2">
                          <h4 className="font-semibold text-gray-900 text-lg mb-2">Phase {index + 1}</h4>
                          <p className="text-gray-700 leading-relaxed">{step}</p>
                          <div className="flex items-center mt-3 text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>2-3 months</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-8">
              {/* Salary Information */}
              <Card className="professional-card shadow-large bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <DollarSign className="h-6 w-6 mr-3 text-green-600" />
                    Salary Insights
                  </CardTitle>
                  <CardDescription>Competitive compensation across all levels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-soft border border-green-100">
                      <div>
                        <span className="text-gray-600 font-medium">Entry Level</span>
                        <div className="text-sm text-gray-500">0-2 years</div>
                      </div>
                      <span className="font-bold text-gray-900 text-lg">{field.salaryRange.entry}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-soft border border-green-100">
                      <div>
                        <span className="text-gray-600 font-medium">Mid Level</span>
                        <div className="text-sm text-gray-500">3-5 years</div>
                      </div>
                      <span className="font-bold text-gray-900 text-lg">{field.salaryRange.mid}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg shadow-large">
                      <div>
                        <span className="font-medium">Senior Level</span>
                        <div className="text-sm text-green-100">5+ years</div>
                      </div>
                      <span className="font-bold text-xl">{field.salaryRange.senior}</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white rounded-lg border border-green-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">₹{field.salary}</div>
                      <div className="text-sm text-gray-600">Average Salary</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job Roles */}
              <Card className="professional-card shadow-large bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Briefcase className="h-6 w-6 mr-3 text-purple-600" />
                    Career Opportunities
                  </CardTitle>
                  <CardDescription>Popular job roles in this field</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {field.jobRoles.map((role, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 bg-white rounded-lg shadow-soft hover:shadow-medium transition-shadow border border-purple-100"
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{role}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Market Outlook */}
              <Card className="professional-card shadow-large bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <TrendingUp className="h-6 w-6 mr-3 text-orange-600" />
                    Market Outlook
                  </CardTitle>
                  <CardDescription>Industry growth and future prospects</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">{field.growthProspects}</p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-orange-100">
                      <span className="text-sm font-medium text-gray-700">Job Growth Rate</span>
                      <span className="font-bold text-green-600">+35%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-orange-100">
                      <span className="text-sm font-medium text-gray-700">Remote Opportunities</span>
                      <span className="font-bold text-blue-600">High</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-orange-100">
                      <span className="text-sm font-medium text-gray-700">Industry Demand</span>
                      <span className="font-bold text-purple-600">Excellent</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="professional-card shadow-large bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full blur-xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-yellow-300/10 rounded-full blur-lg" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-300/30 rounded-full mb-6">
                      <Star className="h-8 w-8 text-yellow-300" />
                    </div>

                    <h3 className="font-bold text-2xl mb-4 text-white drop-shadow-sm">Ready to Launch Your Career?</h3>
                    <p className="text-white/90 mb-8 leading-relaxed text-lg max-w-sm mx-auto drop-shadow-sm">
                      Join thousands of professionals who've successfully built careers in {field.title.toLowerCase()}.
                      Start your journey today!
                    </p>

                    <div className="space-y-4">
                      <Button
                        size="lg"
                        className="w-full bg-white text-blue-700 hover:bg-gray-100 font-semibold hover-lift shadow-large text-lg py-4"
                      >
                        <Zap className="mr-2 h-5 w-5" />
                        Start Learning Path
                      </Button>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex items-center justify-center space-x-6 mt-8 pt-6 border-t border-white/30">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white drop-shadow-sm">95%</div>
                        <div className="text-xs text-white/80">Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white drop-shadow-sm">1000+</div>
                        <div className="text-xs text-white/80">Graduates</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white drop-shadow-sm">4.9★</div>
                        <div className="text-xs text-white/80">Rating</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
