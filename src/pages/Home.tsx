import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Clock,
  Heart,
  Sparkles,
  Home as HomeIcon,
  Users,
  Gift,
  Camera,
} from "lucide-react";
import templeHero from "@/assets/temple-hero.jpg";

const Home = () => {
  const quickServices = [
    {
      title: "Book Darshan",
      description: "Schedule your divine darshan visit",
      icon: Clock,
      href: "/services",
      variant: "divine" as const,
    },
    {
      title: "Temple Stay",
      description: "Comfortable accommodations for devotees",
      icon: HomeIcon,
      href: "/accommodations",
      variant: "temple" as const,
    },
    {
      title: "Make Donation",
      description: "Support temple activities and services",
      icon: Heart,
      href: "/donations",
      variant: "divine" as const,
    },
    {
      title: "View Gallery",
      description: "Explore temple photos and videos",
      icon: Camera,
      href: "/gallery",
      variant: "temple" as const,
    },
  ];

  const upcomingEvents = [
    {
      title: "Maha Shivaratri",
      date: "March 8, 2024",
      time: "All Day",
      description: "Grand celebration with special poojas and abhishekam",
    },
    {
      title: "Monthly Pradosha Pooja",
      date: "March 15, 2024",
      time: "6:00 PM - 8:00 PM",
      description: "Special evening prayers for Lord Shiva",
    },
    {
      title: "Brahmotsavam Festival",
      date: "March 20-27, 2024",
      time: "Multiple Sessions",
      description: "8-day grand festival with processions and celebrations",
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Sacred Darshan",
      description: "Experience divine presence with daily darshan timings",
    },
    {
      icon: Users,
      title: "Spiritual Sevas",
      description: "Participate in various religious ceremonies and rituals",
    },
    {
      icon: Gift,
      title: "Prasadam Distribution",
      description: "Receive blessed prasadam after your temple visit",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${templeHero})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            Sacred Abode of Divinity
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Sri Srisaila <span className="text-divine">Devasthanam</span>
          </h1>
          
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-white/90">
            Experience divine blessings at one of the most sacred Jyotirlinga temples,
            where spiritual serenity meets ancient traditions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-divine text-lg px-8 py-6">
              <Link to="/services">
                <Calendar className="w-5 h-5 mr-2" />
                Book Darshan Now
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
            >
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="section-padding bg-gradient-peaceful">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Temple Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need for a complete spiritual experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="card-divine group cursor-pointer">
                  <Link to={service.href}>
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                        service.variant === 'divine' 
                          ? 'bg-gradient-divine' 
                          : 'bg-gradient-temple'
                      } shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Temple Features */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Why Visit Our Temple
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the spiritual significance and divine experiences awaiting you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-divine rounded-full flex items-center justify-center shadow-divine">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
                Upcoming Events
              </h2>
              <p className="text-muted-foreground text-lg">
                Join us for these special spiritual celebrations
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 sm:mt-0">
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="card-divine">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Upcoming
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {event.time}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-serif">{event.title}</CardTitle>
                  <div className="flex items-center text-primary">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {event.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-divine text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Plan Your Spiritual Journey
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Book your darshan, arrange accommodation, and make your visit to our sacred temple
            a memorable spiritual experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
            >
              <Link to="/contact">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/accommodations">
                <HomeIcon className="w-5 h-5 mr-2" />
                Book Stay
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;