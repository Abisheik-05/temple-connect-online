import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  Camera,
  Video,
  Calendar,
  Eye,
  Download,
  Share2,
  Sparkles,
  Crown,
  Flame,
  Mountain
} from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      title: "Main Temple Architecture",
      category: "architecture",
      type: "image",
      description: "Magnificent Dravidian style temple facade with intricate carvings",
      date: "2024-01-15",
      views: 1250,
      thumbnail: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop",
      fullImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Maha Shivaratri Celebration 2024",
      category: "festivals",
      type: "image",
      description: "Devotees gathered for night-long prayers during Maha Shivaratri",
      date: "2024-03-08",
      views: 2100,
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      fullImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Daily Abhishekam Ritual",
      category: "rituals",
      type: "video",
      description: "Sacred bathing ceremony of Lord Mallikarjuna with holy water",
      date: "2024-02-20",
      views: 1800,
      thumbnail: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=300&fit=crop",
      duration: "15:30"
    },
    {
      id: 4,
      title: "Sanctum Sanctorum",
      category: "architecture",
      type: "image",
      description: "The sacred inner chamber housing the main deity",
      date: "2024-01-20",
      views: 950,
      thumbnail: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop",
      fullImage: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Brahmotsavam Procession",
      category: "festivals",
      type: "image",
      description: "Grand procession during the annual Brahmotsavam festival",
      date: "2024-03-22",
      views: 2800,
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      fullImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Evening Aarti Ceremony",
      category: "rituals",
      type: "video",
      description: "Beautiful evening prayer ceremony with traditional lamps",
      date: "2024-02-15",
      views: 1600,
      thumbnail: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&h=300&fit=crop",
      duration: "12:45"
    },
    {
      id: 7,
      title: "Temple Complex Aerial View",
      category: "architecture",
      type: "image",
      description: "Bird's eye view of the entire temple complex and surroundings",
      date: "2024-01-10",
      views: 1100,
      thumbnail: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      fullImage: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop"
    },
    {
      id: 8,
      title: "Devotees in Prayer",
      category: "devotees",
      type: "image",
      description: "Faithful devotees offering prayers in the temple premises",
      date: "2024-02-05",
      views: 800,
      thumbnail: "https://images.unsplash.com/photo-1552026260-3c17d5aa96c9?w=400&h=300&fit=crop",
      fullImage: "https://images.unsplash.com/photo-1552026260-3c17d5aa96c9?w=800&h=600&fit=crop"
    },
    {
      id: 9,
      title: "Pradosha Pooja Highlights",
      category: "rituals",
      type: "video",
      description: "Special monthly Pradosha ceremony with traditional rituals",
      date: "2024-03-15",
      views: 1400,
      thumbnail: "https://images.unsplash.com/photo-1570888080760-f92d5263e46a?w=400&h=300&fit=crop",
      duration: "20:15"
    }
  ];

  const categories = [
    { id: "all", name: "All Media", icon: Camera, count: galleryItems.length },
    { id: "architecture", name: "Architecture", icon: Mountain, count: galleryItems.filter(item => item.category === "architecture").length },
    { id: "festivals", name: "Festivals", icon: Crown, count: galleryItems.filter(item => item.category === "festivals").length },
    { id: "rituals", name: "Rituals", icon: Flame, count: galleryItems.filter(item => item.category === "rituals").length },
    { id: "devotees", name: "Devotees", icon: Sparkles, count: galleryItems.filter(item => item.category === "devotees").length }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleShare = (item: any) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.description,
        url: window.location.href
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-peaceful">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
              <Camera className="w-3 h-3 mr-1" />
              Temple Gallery
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
              Photo & Video Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore the divine beauty of our temple through stunning photographs and videos
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? "btn-divine"
                      : "hover:bg-primary/10 hover:text-primary hover:border-primary"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <Badge
                    variant="secondary"
                    className="ml-2 bg-background/80 text-foreground text-xs"
                  >
                    {category.count}
                  </Badge>
                </Button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="card-divine group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Media Type Badge */}
                    <Badge
                      variant="secondary"
                      className="absolute top-2 left-2 bg-black/70 text-white border-none"
                    >
                      {item.type === "video" ? (
                        <>
                          <Video className="w-3 h-3 mr-1" />
                          {item.duration}
                        </>
                      ) : (
                        <>
                          <Camera className="w-3 h-3 mr-1" />
                          Photo
                        </>
                      )}
                    </Badge>

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          {item.type === "image" ? (
                            <img
                              src={item.fullImage}
                              alt={item.title}
                              className="w-full h-auto rounded-lg"
                            />
                          ) : (
                            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                              <div className="text-center">
                                <Video className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                                <p className="text-muted-foreground">Video content placeholder</p>
                                <p className="text-sm text-muted-foreground mt-2">Duration: {item.duration}</p>
                              </div>
                            </div>
                          )}
                          <div className="mt-4">
                            <h3 className="text-lg font-serif font-semibold">{item.title}</h3>
                            <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Button 
                        size="sm" 
                        variant="secondary"
                        className="bg-white/90 text-black hover:bg-white"
                        onClick={() => handleShare(item)}
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-serif font-semibold mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{item.description}</p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {item.views.toLocaleString()} views
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Camera className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">No media found</h3>
              <p className="text-muted-foreground">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Highlights */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Featured Videos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the divine atmosphere through our featured video content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems
              .filter(item => item.type === "video")
              .slice(0, 3)
              .map((video) => (
                <Card key={video.id} className="card-divine">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <Video className="w-8 h-8 text-primary ml-1" />
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="absolute bottom-2 right-2 bg-black/70 text-white border-none"
                      >
                        {video.duration}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif font-semibold mb-2">{video.title}</h3>
                      <p className="text-muted-foreground text-sm">{video.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-divine text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Share Your Temple Experience
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Have you captured beautiful moments at our temple? We'd love to feature your photographs 
            and videos in our gallery. Share your divine experiences with fellow devotees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Camera className="w-5 h-5 mr-2" />
              Submit Your Photos
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Media Kit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;