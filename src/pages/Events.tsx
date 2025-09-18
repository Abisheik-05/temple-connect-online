import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  Sparkles,
  Star,
  Flame,
  Flower2,
  Crown,
  Music,
  Gift,
  Heart
} from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Maha Shivaratri",
      date: "March 8, 2024",
      duration: "All Day Celebration",
      type: "Major Festival",
      description: "The great night of Lord Shiva celebrated with night-long prayers, fasting, and special abhishekams",
      schedule: [
        { time: "6:00 PM", activity: "Special Rudrabhishekam begins" },
        { time: "8:00 PM", activity: "Mass chanting and bhajans" },
        { time: "12:00 AM", activity: "Midnight Mahaarti" },
        { time: "4:00 AM", activity: "Sunrise prayers and prasadam distribution" }
      ],
      specialties: [
        "Night-long temple open",
        "Free prasadam for all devotees",
        "Special cultural programs",
        "Spiritual discourse by saints"
      ],
      icon: Flame,
      status: "upcoming"
    },
    {
      title: "Brahmotsavam Festival",
      date: "March 20-27, 2024",
      duration: "8 Days",
      type: "Grand Festival",
      description: "The most important annual festival with elaborate processions, special poojas, and cultural celebrations",
      schedule: [
        { time: "Day 1-2", activity: "Dhvajaarohanam and Kalash Sthapana" },
        { time: "Day 3-4", activity: "Special abhishekams and decorations" },
        { time: "Day 5-6", activity: "Procession with decorated vehicles" },
        { time: "Day 7-8", activity: "Grand finale and Dhvaja Avarohanam" }
      ],
      specialties: [
        "Daily processions",
        "Cultural programs",
        "Special food stalls",
        "Spiritual gatherings"
      ],
      icon: Crown,
      status: "upcoming"
    },
    {
      title: "Monthly Pradosha Pooja",
      date: "March 15, 2024",
      duration: "2 Hours",
      type: "Regular Ceremony",
      description: "Special evening prayers performed on Trayodashi tithi for Lord Shiva's blessings",
      schedule: [
        { time: "6:00 PM", activity: "Ganapati invocation" },
        { time: "6:30 PM", activity: "Special abhishekam" },
        { time: "7:30 PM", activity: "Pradosha Mahaarti" },
        { time: "8:00 PM", activity: "Prasadam distribution" }
      ],
      specialties: [
        "Enhanced spiritual energy",
        "Special mantras chanting",
        "Traditional music",
        "Community participation"
      ],
      icon: Flower2,
      status: "upcoming"
    }
  ];

  const annualFestivals = [
    {
      name: "Karthika Deepotsavam",
      month: "October/November",
      significance: "Festival of lights celebrating divine illumination",
      icon: Sparkles
    },
    {
      name: "Ugadi Festival",
      month: "March/April",
      significance: "Telugu New Year celebrated with special prayers",
      icon: Star
    },
    {
      name: "Navaratri Celebrations",
      month: "September/October",
      significance: "Nine nights of Goddess worship with cultural programs",
      icon: Flower2
    },
    {
      name: "Diwali Celebrations",
      month: "October/November",
      significance: "Festival of lights with lamp lighting ceremony",
      icon: Flame
    },
    {
      name: "Hanuman Jayanti",
      month: "April",
      significance: "Birth celebration of Lord Hanuman with special prayers",
      icon: Heart
    },
    {
      name: "Ganesha Chaturthi",
      month: "August/September",
      significance: "Lord Ganesha festival with elaborate decorations",
      icon: Crown
    }
  ];

  const weeklyEvents = [
    {
      day: "Monday",
      event: "Rudrabhishekam",
      time: "6:00 AM & 6:00 PM",
      description: "Special prayers for Lord Shiva"
    },
    {
      day: "Tuesday", 
      event: "Hanuman Chalisa",
      time: "7:00 AM & 7:00 PM",
      description: "Devotional singing for Lord Hanuman"
    },
    {
      day: "Wednesday",
      event: "Satyanarayana Pooja",
      time: "10:00 AM",
      description: "Lord Vishnu worship ceremony"
    },
    {
      day: "Thursday",
      event: "Lakshmi Pooja",
      time: "8:00 AM & 6:00 PM",
      description: "Goddess Lakshmi worship"
    },
    {
      day: "Friday",
      event: "Durga Chalisa",
      time: "7:00 AM & 7:00 PM", 
      description: "Divine Mother worship"
    },
    {
      day: "Saturday",
      event: "Shani Pooja",
      time: "6:00 AM",
      description: "Special prayers for planetary peace"
    },
    {
      day: "Sunday",
      event: "Bhajan Sandhya",
      time: "7:00 PM",
      description: "Devotional singing gathering"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-peaceful">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
              <Calendar className="w-3 h-3 mr-1" />
              Temple Events
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
              Festivals & Events
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join us in celebrating sacred festivals and spiritual events throughout the year
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Upcoming Major Events
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Mark your calendars for these special spiritual celebrations
            </p>
          </div>
          
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <Card key={index} className="card-divine">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-divine rounded-full flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-serif">{event.title}</CardTitle>
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex items-center text-primary">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span className="font-medium">{event.date}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Clock className="w-4 h-4 mr-2" />
                              <span>{event.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary self-start lg:self-center">
                        {event.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <CardDescription className="text-base leading-relaxed">
                      {event.description}
                    </CardDescription>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Schedule */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-4 flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          Event Schedule
                        </h4>
                        <div className="space-y-3">
                          {event.schedule.map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <Badge variant="outline" className="text-xs mt-0.5">
                                {item.time}
                              </Badge>
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {item.activity}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Specialties */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-4 flex items-center">
                          <Star className="w-4 h-4 mr-2 text-primary" />
                          Special Features
                        </h4>
                        <ul className="space-y-2">
                          {event.specialties.map((specialty, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                              {specialty}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Annual Festivals */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Annual Festivals
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Traditional celebrations that happen every year with great devotion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {annualFestivals.map((festival, index) => {
              const Icon = festival.icon;
              return (
                <Card key={index} className="card-divine text-center">
                  <CardHeader>
                    <div className="w-12 h-12 mx-auto bg-gradient-temple rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-serif">{festival.name}</CardTitle>
                    <Badge variant="outline">{festival.month}</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {festival.significance}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Weekly Events */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Weekly Events Schedule
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Regular spiritual activities happening throughout the week
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="card-divine">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif flex items-center justify-center">
                  <Music className="w-6 h-6 mr-3 text-primary" />
                  Weekly Schedule
                </CardTitle>
                <CardDescription>
                  Join us for these regular spiritual activities every week
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {weeklyEvents.map((event, index) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="secondary" className="bg-primary text-primary-foreground">
                            {event.day}
                          </Badge>
                          <h4 className="font-semibold text-foreground">{event.event}</h4>
                          <Badge variant="outline" className="text-xs">
                            {event.time}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm sm:ml-0 ml-16">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    {index < weeklyEvents.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Participation */}
      <section className="section-padding bg-gradient-divine text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Participate in Sacred Celebrations
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              All devotees and visitors are welcome to participate in our festivals and events. 
              Experience the joy of community worship and spiritual celebration.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold">Community Participation</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Join thousands of devotees in celebrating our sacred traditions together
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold">Volunteer Opportunities</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Serve the divine and gain spiritual merit by volunteering in festival activities
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold">Spiritual Growth</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Deepen your spiritual practice through participation in sacred ceremonies
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Contact for Event Information
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;