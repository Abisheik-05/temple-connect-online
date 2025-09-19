import { useAuth } from "@/hooks/useAuth";
import { AnnouncementsList } from "@/components/announcements/AnnouncementsList";
import { CreateAnnouncementForm } from "@/components/announcements/CreateAnnouncementForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Bell, Plus } from "lucide-react";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-orange-800 mb-2">Temple Dashboard</h1>
        <p className="text-gray-600">Welcome, {user.email}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Temple Announcements
              </CardTitle>
              <CardDescription>
                Stay updated with the latest temple news and events
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnnouncementsList />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Member since:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
                <p><strong>Status:</strong> <span className="text-green-600">Active</span></p>
              </div>
            </CardContent>
          </Card>

          <CreateAnnouncementForm />
        </div>
      </div>
    </div>
  );
}