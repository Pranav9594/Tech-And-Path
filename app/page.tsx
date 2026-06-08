"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  BookOpen,
  BarChart3,
  Users,
  Briefcase,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Target,
} from "lucide-react"
import { techFieldsData } from "@/lib/tech-fields-data"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Career Guides",
    description: "In-depth analysis of each technology field with detailed career roadmaps",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: BarChart3,
    title: "Market-Driven Insights",
    description: "Real-time salary data and industry trends to guide your decisions",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Users,
    title: "Expert-Curated Content",
    description: "Information validated by industry professionals and career experts",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Briefcase,
    title: "Career Path Planning",
    description: "Structured learning paths from beginner to advanced professional levels",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
]

const stats = [
  { label: "Technology Fields", value: 10, suffix: "+", icon: Target },
  { label: "Career Paths", value: 50, suffix: "+", icon: TrendingUp },
  { label: "Success Stories", value: 95, suffix: "%", icon: Award },
  { label: "Professionals Guided", value: 1000, suffix: "+", icon: Users },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    content:
      "This platform helped me transition from marketing to tech. The career roadmaps are incredibly detailed and practical.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Rajesh Kumar",
    role: "Data Scientist at Microsoft",
    content:
      "The salary insights and skill requirements were spot-on. It gave me the confidence to negotiate my current role.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer at Airbnb",
    content:
      "As a career changer, I found the learning paths invaluable. The step-by-step guidance made the transition smooth.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div
            className={cn(
              "text-center transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-8 animate-fadeInScale">
              <Star className="h-4 w-4 mr-2" />
              Trusted by 1000+ Professionals
            </div>

            <h1 className="heading-primary text-gray-900 mb-6">
              Navigate Your
              <span className="gradient-text-primary"> Tech and Path</span>
              <br />
              with Confidence
            </h1>

            <p className="text-large text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover comprehensive insights into the most promising technology careers of 2025. Make informed
              decisions with expert-curated content, real-time market data, and proven career roadmaps.
            </p>

            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-16">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  placeholder="Search technology fields, skills, or career paths..."
                  className="pl-16 pr-32 h-16 text-lg bg-white border-2 border-gray-200 rounded-2xl shadow-soft focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" className="absolute right-2 top-2 h-12 px-8 btn-primary rounded-xl">
                  Search
                </Button>
              </div>
            </form>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tech Fields */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-gray-900 mb-6">
              Explore <span className="gradient-text-primary">Technology Fields</span>
            </h2>
            <p className="text-large text-gray-600 max-w-2xl mx-auto">
              Discover detailed insights into the most promising and high-growth technology careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techFieldsData.slice(0, 6).map((field, index) => (
              <Card
                key={field.id}
                className={cn("professional-card hover-lift group animate-fadeInUp")}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="relative pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-medium">
                        {field.title.charAt(0)}
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                          {field.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            High Growth
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg px-3 py-1 shadow-medium">
                      {field.salary}
                    </Badge>
                  </div>

                  <CardDescription className="text-gray-600 text-base leading-relaxed mb-4">
                    {field.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <BookOpen className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-semibold text-gray-700">Core Skills:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {field.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {field.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs bg-gray-100 text-gray-600">
                          +{field.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                        <Users className="h-4 w-4 text-blue-500" />
                        <span>{field.jobRoles.length} Roles</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                        <Award className="h-4 w-4 text-green-500" />
                        <span>High Demand</span>
                      </div>
                    </div>
                  </div>

                  <Link href={`/fields/${field.id}`}>
                    <Button className="w-full btn-secondary group shadow-soft hover:shadow-medium">
                      Explore Career Path
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/tech-fields">
              <Button size="lg" className="btn-primary hover-lift">
                View All Technology Fields
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-gray-900 mb-6">
              Why Choose <span className="gradient-text-primary">TechCareers2025</span>
            </h2>
            <p className="text-large text-gray-600 max-w-2xl mx-auto">
              Everything you need to make informed career decisions in technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn("text-center group animate-fadeInUp")}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300",
                    feature.bgColor,
                  )}
                >
                  <feature.icon className={cn("h-8 w-8", feature.color)} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-gray-900 mb-6">Tech and Path Success Stories</h2>
            <p className="text-large text-gray-600 max-w-2xl mx-auto">
              Hear from professionals who've successfully navigated their tech careers with our guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={cn("professional-card animate-fadeInUp")}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="heading-secondary mb-6">Ready to Start Your Tech and Path Journey?</h2>
          <p className="text-large mb-10 max-w-2xl mx-auto opacity-90">
            Join thousands of professionals who have successfully launched and advanced their technology careers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tech-fields">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg hover-lift shadow-large"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Career Paths
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg hover-lift"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
