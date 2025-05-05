"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Leaf, Search, BookOpen, FileText, Video, Download, User, Calendar, Settings, LogOut, Bell } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ResourcesPage() {
  // Mock resources data
  const resources = [
    {
      id: 1,
      title: "Understanding Cannabis Strains",
      type: "article",
      description: "Learn about the differences between indica, sativa, and hybrid strains and their effects.",
      image: "/placeholder.svg?height=200&width=350",
      date: "April 5, 2025",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Beginner's Guide to Tinctures",
      type: "guide",
      description: "Everything you need to know about cannabis tinctures, including dosage and administration.",
      image: "/placeholder.svg?height=200&width=350",
      date: "March 22, 2025",
      readTime: "12 min read",
    },
    {
      id: 3,
      title: "The Endocannabinoid System Explained",
      type: "video",
      description: "A comprehensive explanation of how cannabis interacts with your body's endocannabinoid system.",
      image: "/placeholder.svg?height=200&width=350",
      date: "April 10, 2025",
      duration: "15:24",
    },
    {
      id: 4,
      title: "Cannabis and Sleep: Research Findings",
      type: "research",
      description: "Recent research on how different cannabinoids affect sleep patterns and quality.",
      image: "/placeholder.svg?height=200&width=350",
      date: "March 15, 2025",
      readTime: "20 min read",
    },
    {
      id: 5,
      title: "Cooking with Cannabis",
      type: "guide",
      description: "Learn how to properly infuse oils and create delicious edibles at home.",
      image: "/placeholder.svg?height=200&width=350",
      date: "April 2, 2025",
      readTime: "15 min read",
    },
    {
      id: 6,
      title: "Sustainable Growing Practices",
      type: "video",
      description: "Our master growers share environmentally friendly cultivation techniques.",
      image: "/placeholder.svg?height=200&width=350",
      date: "March 30, 2025",
      duration: "22:15",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-xl font-bold">GreenCoop</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Logout</span>
          </Button>
        </nav>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 border-r hidden md:block p-4">
          <nav className="grid gap-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-green-900 hover:bg-green-100"
            >
              <User className="h-4 w-4" />
              <span>My Profile</span>
            </Link>
            <Link
              href="/dashboard/products"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-green-900 hover:bg-green-100"
            >
              <FileText className="h-4 w-4" />
              <span>Products</span>
            </Link>
            <Link
              href="/dashboard/orders"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-green-900 hover:bg-green-100"
            >
              <Calendar className="h-4 w-4" />
              <span>My Orders</span>
            </Link>
            <Link
              href="/dashboard/resources"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-green-600 bg-green-50 transition-all hover:text-green-900 hover:bg-green-100"
            >
              <BookOpen className="h-4 w-4" />
              <span>Resources</span>
            </Link>
            <Link
              href="/dashboard/community"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-green-900 hover:bg-green-100"
            >
              <Calendar className="h-4 w-4" />
              <span>Community</span>
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-green-900 hover:bg-green-100"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <h1 className="text-2xl font-bold">Educational Resources</h1>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input type="search" placeholder="Search resources..." className="pl-8" />
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Resources</TabsTrigger>
                <TabsTrigger value="articles">Articles</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {resources.map((resource) => (
                    <Card key={resource.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={resource.image || "/placeholder.svg"}
                          alt={resource.title}
                          fill
                          className="object-cover"
                        />
                        <Badge
                          className="absolute top-2 right-2"
                          variant={
                            resource.type === "video"
                              ? "default"
                              : resource.type === "article"
                                ? "outline"
                                : resource.type === "guide"
                                  ? "secondary"
                                  : "destructive"
                          }
                        >
                          {resource.type === "video" && <Video className="mr-1 h-3 w-3" />}
                          {resource.type === "article" && <FileText className="mr-1 h-3 w-3" />}
                          {resource.type === "guide" && <BookOpen className="mr-1 h-3 w-3" />}
                          {resource.type === "research" && <FileText className="mr-1 h-3 w-3" />}
                          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle>{resource.title}</CardTitle>
                        <CardDescription>
                          {resource.date} • {resource.readTime || resource.duration}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-500">{resource.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">{resource.type === "video" ? "Watch Video" : "Read More"}</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="articles" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {resources
                    .filter((resource) => resource.type === "article")
                    .map((resource) => (
                      <Card key={resource.id} className="overflow-hidden">
                        <div className="relative h-48">
                          <Image
                            src={resource.image || "/placeholder.svg"}
                            alt={resource.title}
                            fill
                            className="object-cover"
                          />
                          <Badge className="absolute top-2 right-2" variant="outline">
                            <FileText className="mr-1 h-3 w-3" />
                            Article
                          </Badge>
                        </div>
                        <CardHeader>
                          <CardTitle>{resource.title}</CardTitle>
                          <CardDescription>
                            {resource.date} • {resource.readTime}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-500">{resource.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">Read More</Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="guides" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {resources
                    .filter((resource) => resource.type === "guide")
                    .map((resource) => (
                      <Card key={resource.id} className="overflow-hidden">
                        <div className="relative h-48">
                          <Image
                            src={resource.image || "/placeholder.svg"}
                            alt={resource.title}
                            fill
                            className="object-cover"
                          />
                          <Badge className="absolute top-2 right-2" variant="secondary">
                            <BookOpen className="mr-1 h-3 w-3" />
                            Guide
                          </Badge>
                        </div>
                        <CardHeader>
                          <CardTitle>{resource.title}</CardTitle>
                          <CardDescription>
                            {resource.date} • {resource.readTime}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-500">{resource.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">Read Guide</Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="videos" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {resources
                    .filter((resource) => resource.type === "video")
                    .map((resource) => (
                      <Card key={resource.id} className="overflow-hidden">
                        <div className="relative h-48">
                          <Image
                            src={resource.image || "/placeholder.svg"}
                            alt={resource.title}
                            fill
                            className="object-cover"
                          />
                          <Badge className="absolute top-2 right-2">
                            <Video className="mr-1 h-3 w-3" />
                            Video
                          </Badge>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="rounded-full bg-black/50 p-3">
                              <Video className="h-8 w-8 text-white" />
                            </div>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle>{resource.title}</CardTitle>
                          <CardDescription>
                            {resource.date} • {resource.duration}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-500">{resource.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">Watch Video</Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="research" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {resources
                    .filter((resource) => resource.type === "research")
                    .map((resource) => (
                      <Card key={resource.id} className="overflow-hidden">
                        <div className="relative h-48">
                          <Image
                            src={resource.image || "/placeholder.svg"}
                            alt={resource.title}
                            fill
                            className="object-cover"
                          />
                          <Badge className="absolute top-2 right-2" variant="destructive">
                            <FileText className="mr-1 h-3 w-3" />
                            Research
                          </Badge>
                        </div>
                        <CardHeader>
                          <CardTitle>{resource.title}</CardTitle>
                          <CardDescription>
                            {resource.date} • {resource.readTime}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-500">{resource.description}</p>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Button className="flex-1">Read Paper</Button>
                          <Button variant="outline" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2025 GreenCoop. All rights reserved.</p>
      </footer>
    </div>
  )
}
