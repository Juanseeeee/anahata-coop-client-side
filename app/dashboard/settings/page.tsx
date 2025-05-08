"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Leaf, User, FileText, Calendar, Settings, LogOut, Bell, Shield, CreditCard, Mail } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CartDropdown } from "@/components/cart-dropdown"

export default function SettingsPage() {
  const [loading, setLoading] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    address: "123 Main St, Anytown, CA 90210",
    bio: "Cannabis enthusiast and community advocate.",
    notifications: {
      email: true,
      sms: false,
      promotions: true,
      newsletter: true,
    },
  })

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      // Show success message or handle response
    }, 1000)
  }

  const handleNotificationChange = (key: string, checked: boolean) => {
    setProfileData((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: checked,
      },
    }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-xl font-bold">GreenCoop</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
        <CartDropdown />
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
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-green-600 bg-green-50 transition-all hover:text-green-900 hover:bg-green-100"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Account Settings</h1>
            </div>

            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
              </TabsList>
              <TabsContent value="profile" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleProfileUpdate}>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First name</Label>
                            <Input
                              id="firstName"
                              value={profileData.firstName}
                              onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last name</Label>
                            <Input
                              id="lastName"
                              value={profileData.lastName}
                              onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={profileData.phone}
                            onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            value={profileData.address}
                            onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            value={profileData.bio}
                            onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                          />
                        </div>
                      </div>
                      <Button type="submit" disabled={loading}>
                        {loading ? "Saving..." : "Save Changes"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Membership Preferences</CardTitle>
                    <CardDescription>Manage your membership settings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="membershipType">Membership Type</Label>
                        <Select defaultValue="premium">
                          <SelectTrigger>
                            <SelectValue placeholder="Select membership type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="basic">Basic</SelectItem>
                            <SelectItem value="premium">Premium</SelectItem>
                            <SelectItem value="founder">Founder</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="autoRenew">Auto-Renewal</Label>
                        <div className="flex items-center space-x-2">
                          <Switch id="autoRenew" defaultChecked />
                          <Label htmlFor="autoRenew">Enable automatic renewal of membership</Label>
                        </div>
                      </div>
                    </div>
                    <Button>Update Preferences</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="notifications" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between space-x-2">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4" />
                          <Label htmlFor="emailNotifications">Email Notifications</Label>
                        </div>
                        <Switch
                          id="emailNotifications"
                          checked={profileData.notifications.email}
                          onCheckedChange={(checked) => handleNotificationChange("email", checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between space-x-2">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4" />
                          <Label htmlFor="smsNotifications">SMS Notifications</Label>
                        </div>
                        <Switch
                          id="smsNotifications"
                          checked={profileData.notifications.sms}
                          onCheckedChange={(checked) => handleNotificationChange("sms", checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between space-x-2">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4" />
                          <Label htmlFor="promotionalEmails">Promotional Emails</Label>
                        </div>
                        <Switch
                          id="promotionalEmails"
                          checked={profileData.notifications.promotions}
                          onCheckedChange={(checked) => handleNotificationChange("promotions", checked)}
                        />
                      </div>
                      <div className="flex items-center justify-between space-x-2">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4" />
                          <Label htmlFor="newsletterEmails">Newsletter</Label>
                        </div>
                        <Switch
                          id="newsletterEmails"
                          checked={profileData.notifications.newsletter}
                          onCheckedChange={(checked) => handleNotificationChange("newsletter", checked)}
                        />
                      </div>
                    </div>
                    <Button>Save Notification Preferences</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="security" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Change your password</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    <Button>Update Password</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>Add an extra layer of security to your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between space-x-2">
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-2">
                          <Shield className="h-4 w-4" />
                          <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Secure your account with two-factor authentication
                        </p>
                      </div>
                      <Switch id="twoFactorAuth" />
                    </div>
                    <Button variant="outline">Set Up Two-Factor Authentication</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="billing" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Manage your payment methods</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <CreditCard className="h-8 w-8" />
                          <div>
                            <p className="font-medium">Visa ending in 4242</p>
                            <p className="text-sm text-muted-foreground">Expires 04/2026</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button>Add Payment Method</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Billing History</CardTitle>
                    <CardDescription>View your recent billing history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border">
                        <div className="flex items-center justify-between p-4 border-b">
                          <div>
                            <p className="font-medium">Membership Renewal</p>
                            <p className="text-sm text-muted-foreground">April 1, 2025</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">$99.00</p>
                            <p className="text-sm text-green-600">Paid</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4 border-b">
                          <div>
                            <p className="font-medium">Product Order #ORD-12345</p>
                            <p className="text-sm text-muted-foreground">March 15, 2025</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">$125.50</p>
                            <p className="text-sm text-green-600">Paid</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4">
                          <div>
                            <p className="font-medium">Membership Renewal</p>
                            <p className="text-sm text-muted-foreground">January 1, 2025</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">$99.00</p>
                            <p className="text-sm text-green-600">Paid</p>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        View All Transactions
                      </Button>
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
