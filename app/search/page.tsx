"use client"

import { useSearchParams } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { techFieldsData } from "@/lib/tech-fields-data"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(initialQuery)

  const searchResults = techFieldsData.filter((field) => {
    const query = searchQuery.toLowerCase()
    return (
      field.title.toLowerCase().includes(query) ||
      field.description.toLowerCase().includes(query) ||
      field.skills.some((skill) => skill.toLowerCase().includes(query)) ||
      field.jobRoles.some((role) => role.toLowerCase().includes(query))
    )
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Search Header */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Search Results</h1>
          <div className="max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search for tech fields, skills, or jobs..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          {searchQuery && (
            <p className="text-gray-600 mt-4">
              {searchResults.length} results found for "{searchQuery}"
            </p>
          )}
        </div>
      </section>

      {/* Search Results */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((field) => (
                <Card key={field.id} className={`${field.color} hover:shadow-lg transition-shadow cursor-pointer`}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">{field.title}</CardTitle>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 font-bold">
                        {field.salary}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-600 mb-4">{field.description}</CardDescription>

                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Skills:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {field.skills.slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {field.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{field.skills.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Link href={`/fields/${field.id}`}>
                      <Button
                        variant="outline"
                        className="w-full bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      >
                        Learn more
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : searchQuery ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">No results found</h2>
              <p className="text-gray-600 mb-6">
                We couldn't find any tech fields matching "{searchQuery}". Try searching for different keywords.
              </p>
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Start Your Search</h2>
              <p className="text-gray-600">Enter keywords to search for tech fields, skills, or job roles.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
