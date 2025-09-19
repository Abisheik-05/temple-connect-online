import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { Bell, Calendar } from "lucide-react";

interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: number;
  created_at: string;
  is_active: boolean;
}

interface AnnouncementCardProps {
  announcement: Announcement;
}

const getPriorityColor = (priority: number) => {
  switch (priority) {
    case 3: return "bg-red-500 text-white";
    case 2: return "bg-yellow-500 text-black";
    default: return "bg-green-500 text-white";
  }
};

const getPriorityLabel = (priority: number) => {
  switch (priority) {
    case 3: return "High Priority";
    case 2: return "Medium Priority";
    default: return "Low Priority";
  }
};

export const AnnouncementCard = ({ announcement }: AnnouncementCardProps) => {
  return (
    <Card className="w-full border-l-4 border-l-orange-500 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-serif text-orange-800 flex items-center gap-2">
            <Bell className="w-5 h-5" />
            {announcement.title}
          </CardTitle>
          <Badge className={getPriorityColor(announcement.priority)}>
            {getPriorityLabel(announcement.priority)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-3 leading-relaxed">{announcement.content}</p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>
            {formatDistanceToNow(new Date(announcement.created_at), { addSuffix: true })}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};