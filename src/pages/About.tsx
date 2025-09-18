import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Clock, 
  MapPin, 
  Users, 
  Calendar,
  Star,
  Sparkles,
  Mountain,
  Heart
} from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Star,
      title: "12th Jyotirlinga",
      description: "One of the twelve sacred Jyotirlinga temples in India",
    },
    {
      icon: Mountain,
      title: "Ancient Architecture",
      description: "Magnificent Dravidian style temple architecture dating back centuries",
    },
    {
      icon: Users,
      title: "Million Devotees",
      description: "Visited by over a million devotees annually from around the world",
    },
    {
      icon: Calendar,
      title: "Rich Traditions",
      description: "Centuries-old rituals and festivals celebrated with grandeur",
    },
  ];

  const timings = [
    { service: "Morning Darshan", time: "4:00 AM - 12:00 PM" },
    { service: "Afternoon Break", time: "12:00 PM - 3:00 PM" },
    { service: "Evening Darshan", time: "3:00 PM - 10:00 PM" },
    { service: "Special Occasions", time: "24 Hours Open" },
  ];

  const architecture = [
    {
      feature: "Gopuram Tower",
      description: "Majestic entrance tower with intricate carvings depicting various deities and mythological scenes",
    },
    {
      feature: "Garbhagriha",
      description: "Sacred sanctum sanctorum housing the main Shiva Linga with natural cave formations",
    },
    {
      feature: "Mandapa Halls",
      description: "Spacious prayer halls with ornate pillars featuring traditional South Indian craftsmanship",
    },
    {
      feature: "Prakara Walls",
      description: "Protective walls surrounding the temple complex with beautiful stone work",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-peaceful">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
              <Sparkles className="w-3 h-3 mr-1" />
              Sacred Heritage
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
              About Sri Srisaila Devasthanam
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nestled in the Nallamala Hills of Andhra Pradesh, Sri Srisaila Devasthanam stands as one of 
              India's most revered spiritual destinations, combining natural beauty with divine sanctity.
            </p>
          </div>
        </div>
      </section>

      {/* Temple History */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">
                Sacred History & Legend
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sri Srisaila Devasthanam, also known as Srisailam, is one of the twelve Jyotirlinga temples 
                  dedicated to Lord Shiva. According to ancient scriptures, this sacred site is where Lord Shiva 
                  manifested as a column of light, making it one of the holiest pilgrimage destinations in Hinduism.
                </p>
                <p>
                  The temple's history spans over a millennium, with references found in various Puranas including 
                  the Skanda Purana. Legend states that Lord Shiva and Goddess Parvati blessed this place with 
                  their divine presence, making it a powerful center for spiritual transformation.
                </p>
                <p>
                  The temple complex showcases magnificent Dravidian architecture, with intricate stone carvings 
                  and sculptures that narrate stories from Hindu mythology. The natural cave formation within 
                  the sanctum adds to the mystical atmosphere of this sacred abode.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <Card key={highlight.title} className="card-divine text-center">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 mx-auto bg-gradient-divine rounded-full flex items-center justify-center mb-3">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg font-serif">{highlight.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {highlight.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Temple Architecture
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A masterpiece of Dravidian architecture showcasing centuries of craftsmanship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architecture.map((item, index) => (
              <Card key={index} className="card-divine">
                <CardHeader>
                  <CardTitle className="text-xl font-serif flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {item.feature}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Temple Timings */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Darshan Timings
              </h2>
              <p className="text-muted-foreground text-lg">
                Plan your visit according to our daily schedule
              </p>
            </div>
            
            <Card className="card-divine">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif flex items-center justify-center">
                  <Clock className="w-6 h-6 mr-3 text-primary" />
                  Daily Schedule
                </CardTitle>
                <CardDescription>
                  Temple remains open throughout the day with brief breaks for cleaning and maintenance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {timings.map((timing, index) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3">
                      <div className="font-medium text-foreground mb-1 sm:mb-0">
                        {timing.service}
                      </div>
                      <div className="text-primary font-semibold">
                        {timing.time}
                      </div>
                    </div>
                    {index < timings.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Spiritual Significance */}
      <section className="section-padding bg-gradient-divine text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Spiritual Significance
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold">Divine Blessings</h3>
                <p className="text-white/90 leading-relaxed">
                  Seek blessings for spiritual growth, peace, and fulfillment of righteous desires
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold">Inner Transformation</h3>
                <p className="text-white/90 leading-relaxed">
                  Experience profound spiritual awakening and inner purification through divine grace
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                  <Mountain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold">Sacred Energy</h3>
                <p className="text-white/90 leading-relaxed">
                  Connect with the powerful spiritual energy that flows through this holy abode
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;