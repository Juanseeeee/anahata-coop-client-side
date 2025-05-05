"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, User, FileText, Calendar, LogOut, Bell, Settings, ShieldAlert } from "lucide-react"
import { useUserStore } from "@/lib/store"

export default function DashboardPage() {
  const { user } = useUserStore()
  const [memberInfo] = useState({
    name: user?.name || "John Doe",
    memberSince: user?.memberSince || "January 2023",
    membershipLevel: user?.membershipLevel || "Premium",
    membershipId: user?.membershipId || "GC-12345",
    nextRenewal: user?.nextRenewal || "January 2026",
  })

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-xl font-bold">GreenCoop</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {user?.isAdmin && (
            <Link href="/admin" className="flex items-center text-sm font-medium hover:underline">
              <ShieldAlert className="mr-1 h-4 w-4 text-red-600" />
              Admin Dashboard
            </Link>
          )}
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
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-green-600 bg-green-50 transition-all hover:text-green-900 hover:bg-green-100"
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
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-green-900 hover:bg-green-100"
            >
              <Calendar className="h-4 w-4" />
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
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Welcome back, {memberInfo.name}</h1>
              <Button variant="outline" className="hidden md:flex">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="credentials">Credentials</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Membership Status</CardTitle>
                      <FileText className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{memberInfo.membershipLevel}</div>
                      <p className="text-xs text-muted-foreground">Member since {memberInfo.memberSince}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                      <Calendar className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3</div>
                      <p className="text-xs text-muted-foreground">Events in the next 30 days</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Renewal Date</CardTitle>
                      <Calendar className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{memberInfo.nextRenewal}</div>
                      <p className="text-xs text-muted-foreground">Your membership is active</p>
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Announcements</CardTitle>
                    <CardDescription>Stay updated with the latest news from the cooperative</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <h3 className="font-medium">New Educational Workshop Series</h3>
                        <p className="text-sm text-muted-foreground">
                          Join us for our new series of educational workshops starting next month. Topics include
                          sustainable growing practices and therapeutic applications.
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">Posted on April 10, 2025</p>
                      </div>
                      <div className="border-b pb-4">
                        <h3 className="font-medium">Community Garden Expansion</h3>
                        <p className="text-sm text-muted-foreground">
                          We're excited to announce the expansion of our community garden. Members can now reserve
                          additional growing space for the summer season.
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">Posted on April 5, 2025</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Annual Member Meeting</h3>
                        <p className="text-sm text-muted-foreground">
                          Mark your calendars for our annual member meeting on May 15th. We'll be discussing cooperative
                          goals and electing new board members.
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">Posted on March 28, 2025</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="credentials" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Membership Credentials</CardTitle>
                    <CardDescription>Your official membership information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-medium">Member ID</h3>
                          <p className="text-lg">{memberInfo.membershipId}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Membership Level</h3>
                          <p className="text-lg">{memberInfo.membershipLevel}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Member Since</h3>
                          <p className="text-lg">{memberInfo.memberSince}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium">Next Renewal</h3>
                          <p className="text-lg">{memberInfo.nextRenewal}</p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <h3 className="text-sm font-medium mb-2">Digital Membership Card</h3>
                        <div className="border rounded-lg p-4 bg-green-50">
                          <div className="flex items-center gap-4 mb-4">
                            <Leaf className="h-10 w-10 text-green-600" />
                            <div>
                              <h4 className="font-bold text-lg">GreenCoop</h4>
                              <p className="text-sm text-muted-foreground">Member Card</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Name:</span>
                              <span className="font-medium">{memberInfo.name}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Member ID:</span>
                              <span className="font-medium">{memberInfo.membershipId}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Level:</span>
                              <span className="font-medium">{memberInfo.membershipLevel}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Valid Until:</span>
                              <span className="font-medium">{memberInfo.nextRenewal}</span>
                            </div>
                          </div>
                        </div>
                        <Button className="w-full mt-4">Download Membership Card</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="benefits" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Member Benefits</CardTitle>
                    <CardDescription>
                      Exclusive benefits available to you as a {memberInfo.membershipLevel} member
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Product Discounts</h3>
                          <p className="text-sm text-muted-foreground">
                            Enjoy 15% off all cooperative products with your {memberInfo.membershipLevel} membership.
                          </p>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Educational Workshops</h3>
                          <p className="text-sm text-muted-foreground">
                            Free access to all educational workshops and seminars.
                          </p>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Community Garden Access</h3>
                          <p className="text-sm text-muted-foreground">
                            Reserve space in our community garden for personal growing.
                          </p>
                        </div>
                        <div className="border rounded-lg p-4">
                          <h3 className="font-medium mb-2">Voting Rights</h3>
                          <p className="text-sm text-muted-foreground">
                            Participate in cooperative decisions and board elections.
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h3 className="font-medium mb-2">Upcoming Member Events</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between border-b pb-2">
                            <div>
                              <h4 className="font-medium">Spring Cultivation Workshop</h4>
                              <p className="text-sm text-muted-foreground">Learn sustainable growing techniques</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">April 20, 2025</p>
                              <p className="text-sm text-muted-foreground">2:00 PM - 4:00 PM</p>
                            </div>
                          </div>
                          <div className="flex justify-between border-b pb-2">
                            <div>
                              <h4 className="font-medium">Member Appreciation Day</h4>
                              <p className="text-sm text-muted-foreground">Special events and giveaways</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">May 1, 2025</p>
                              <p className="text-sm text-muted-foreground">All Day</p>
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <div>
                              <h4 className="font-medium">Annual Member Meeting</h4>
                              <p className="text-sm text-muted-foreground">Cooperative updates and board elections</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">May 15, 2025</p>
                              <p className="text-sm text-muted-foreground">6:00 PM - 8:00 PM</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
