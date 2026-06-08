"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Filter,
  ArrowRight,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Star,
  Briefcase,
  BookOpen,
  Award,
  Target,
  Zap,
} from "lucide-react"
import { techFieldsData } from "@/lib/tech-fields-data"
import { cn } from "@/lib/utils"

const sortOptions = [
  { value: "salary", label: "Highest Salary" },
  { value: "name", label: "Alphabetical" },
  { value: "growth", label: "Growth Potential" },
  { value: "popularity", label: "Most Popular" },
]

const filterCategories = [
  { id: "all", label: "All Fields", count: techFieldsData.length },
  { id: "high-salary", label: "High Salary (₹20L+)", count: 4 },
  { id: "beginner-friendly", label: "Beginner Friendly", count: 6 },
  { id: "remote-friendly", label: "Remote Friendly", count: 8 },
]

export default function TechFieldsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("salary")
  const [activeFilter, setActiveFilter] = useState("all")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredFields = techFieldsData
    .filter((field) => {
      const matchesSearch =
        field.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        field.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        field.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

      if (activeFilter === "all") return matchesSearch
      if (activeFilter === "high-salary") {
        const salary = Number.parseFloat(field.salary.replace("₹", "").replace(" LPA", ""))
        return matchesSearch && salary >= 20
      }
      if (activeFilter === "beginner-friendly") {
        return (
          matchesSearch &&
          ["web-development", "ui-ux-design", "data-science", "non-coding", "product-management", "iot"].includes(
            field.id,
          )
        )
      }
      if (activeFilter === "remote-friendly") {
        return matchesSearch && !["iot"].includes(field.id)
      }
      return matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === "salary") {
        const salaryA = Number.parseFloat(a.salary.replace("₹", "").replace(" LPA", ""))
        const salaryB = Number.parseFloat(b.salary.replace("₹", "").replace(" LPA", ""))
        return salaryB - salaryA
      }
      if (sortBy === "name") return a.title.localeCompare(b.title)
      if (sortBy === "growth") {
        const growthOrder = ["ai-ml", "blockchain", "cybersecurity", "cloud-computing", "data-science"]
        return growthOrder.indexOf(a.id) - growthOrder.indexOf(b.id)
      }
      return 0
    })

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

  const getGrowthIndicator = (fieldId: string) => {
    const highGrowth = ["ai-ml", "blockchain", "cybersecurity", "cloud-computing"]
    const mediumGrowth = ["data-science", "web-development", "iot"]

    if (highGrowth.includes(fieldId)) {
      return { label: "High Growth", color: "bg-green-100 text-green-800", icon: TrendingUp }
    }
    if (mediumGrowth.includes(fieldId)) {
      return { label: "Growing", color: "bg-blue-100 text-blue-800", icon: Target }
    }
    return { label: "Stable", color: "bg-gray-100 text-gray-800", icon: Award }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Enhanced Hero Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />

        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div
            className={cn(
              "text-center transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8">
              <Briefcase className="h-4 w-4 mr-2" />
              Explore {techFieldsData.length} Technology Career Paths
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Technology
              <span className="block text-yellow-300">Career Fields</span>
            </h1>

            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover comprehensive insights into the most promising technology careers. Find your perfect match with
              detailed analysis, salary insights, and career roadmaps.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Briefcase, label: "Career Paths", value: "50+" },
                { icon: DollarSign, label: "Avg Salary", value: "₹18L" },
                { icon: TrendingUp, label: "Growth Rate", value: "35%" },
                { icon: Users, label: "Professionals", value: "1M+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-3">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Search and Filter Section */}
      <section className="py-8 bg-white shadow-soft border-b border-gray-100">
        <div className="max-w-7xl mx-auto container-padding">
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-2xl group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-blue-500 transition-colors" />
              <Input
                placeholder="Search by field name, skills, or job roles..."
                className="pl-12 h-12 text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Sort by:</span>
              </div>
              <select
                className="border-2 border-gray-200 rounded-lg px-4 py-2 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 font-medium"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-3 mb-6">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2",
                  activeFilter === category.id
                    ? "bg-blue-600 text-white shadow-medium"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                )}
              >
                <span>{category.label}</span>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <p>
              Showing <span className="font-semibold text-blue-600">{filteredFields.length}</span> of{" "}
              {techFieldsData.length} technology fields
              {searchQuery && (
                <span>
                  {" "}
                  for "<span className="font-medium">{searchQuery}</span>"
                </span>
              )}
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Updated daily</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>Expert verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Tech Fields Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          {filteredFields.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFields.map((field, index) => {
                const growthInfo = getGrowthIndicator(field.id)
                const fieldIcon = getFieldIcon(field.id)

                return (
                  <Card
                    key={field.id}
                    className={cn(
                      "professional-card hover-lift group relative overflow-hidden animate-fadeInUp",
                      "border-0 shadow-medium hover:shadow-large",
                    )}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Card Header with Icon */}
                    <CardHeader className="relative pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{fieldIcon}</div>
                          <div>
                            <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                              {field.title}
                            </CardTitle>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge className={cn("text-xs font-medium", growthInfo.color)}>
                                <growthInfo.icon className="h-3 w-3 mr-1" />
                                {growthInfo.label}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg px-3 py-1 shadow-medium">
                          {field.salary}
                        </Badge>
                      </div>

                      <CardDescription className="text-gray-600 text-base leading-relaxed">
                        {field.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Skills Section */}
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <BookOpen className="h-4 w-4 text-blue-500" />
                          <span className="text-sm font-semibold text-gray-700">Core Skills:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {field.skills.slice(0, 4).map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="outline"
                              className="text-xs bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                          {field.skills.length > 4 && (
                            <Badge variant="outline" className="text-xs bg-gray-100 text-gray-600">
                              +{field.skills.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                            <Users className="h-4 w-4 text-blue-500" />
                            <span>{field.jobRoles.length} Roles</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                            <Zap className="h-4 w-4 text-green-500" />
                            <span>High Demand</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <Link href={`/fields/${field.id}`}>
                        <Button className="w-full btn-primary group shadow-medium hover:shadow-large">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Explore Career Path
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </Card>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No results found</h3>
              <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                We couldn't find any tech fields matching your search criteria. Try adjusting your filters or search
                terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  onClick={() => setSearchQuery("")}
                  className="px-8 py-3 border-2 border-blue-200 text-blue-600 hover:bg-blue-50"
                >
                  Clear Search
                </Button>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setActiveFilter("all")
                  }}
                  className="btn-primary px-8 py-3"
                >
                  View All Fields
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Tech Career Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get personalized career guidance, salary insights, and learning roadmaps tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg hover-lift shadow-large"
              >
                <Star className="mr-2 h-5 w-5" />
                Get Started Free
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg hover-lift"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
