import Link from "next/link"
import { BookOpen, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"

export function Footer() {
  const techFields = [
    { href: "/fields/ai-ml", label: "AI & Machine Learning" },
    { href: "/fields/data-science", label: "Data Science" },
    { href: "/fields/web-development", label: "Web Development" },
    { href: "/fields/ui-ux-design", label: "UI/UX Design" },
    { href: "/fields/cybersecurity", label: "Cybersecurity" },
    { href: "/fields/cloud-computing", label: "Cloud Computing" },
  ]

  const resources = [
    { href: "/about", label: "About Us" },
    { href: "/features", label: "Features" },
    { href: "/tech-fields", label: "All Fields" },
    { href: "/search", label: "Search" },
  ]

  const company = [
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Tech and Path</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering professionals to make informed career decisions in technology through comprehensive guides,
              market insights, and expert-curated content.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>hello@techandpath.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Tech Fields */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Fields</h4>
            <div className="space-y-3">
              {techFields.map((field) => (
                <Link
                  key={field.href}
                  href={field.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {field.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <div className="space-y-3">
              {resources.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {resource.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <div className="space-y-3">
              {company.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Tech and Path. All rights reserved. Built with care for aspiring tech professionals.
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
