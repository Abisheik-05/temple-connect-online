import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { 
  Clock, 
  Calendar as CalendarIcon, 
  Users, 
  IndianRupee,
  Sparkles,
  Heart,
  Star,
  Flame,
  Flower2
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Services = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    persons: "1",
    specialRequests: "",
  });
  
  const { toast } = useToast();

  const darshanTimings = [
    { time: "4:00 AM - 6:00 AM", type: "Suprabhata Darshan", crowd: "Low", price: "Free" },
    { time: "6:00 AM - 12:00 PM", type: "General Darshan", crowd: "High", price: "Free" },
    { time: "3:00 PM - 6:00 PM", type: "Afternoon Darshan", crowd: "Medium", price: "Free" },
    { time: "6:00 PM - 8:00 PM", type: "Sandhya Aarti", crowd: "High", price: "Free" },
    { time: "8:00 PM - 10:00 PM", type: "Evening Darshan", crowd: "Low", price: "Free" },
  ];

  const sevaServices = [
    {
      name: "Rudrabhishekam",
      duration: "30 minutes",
      price: "₹501",
      description: "Sacred bathing ceremony with Rudra mantras for spiritual purification",
      icon: Flame,
      benefits: ["Spiritual cleansing", "Peace of mind", "Divine blessings"]
    },
    {
      name: "Laghurudra",
      duration: "1 hour",
      price: "₹1,001",
      description: "Extended Rudra chanting ceremony for enhanced spiritual benefits",
      icon: Star,
      benefits: ["Material prosperity", "Health benefits", "Family harmony"]
    },
    {
      name: "Sahasra Lingarchana",
      duration: "2 hours",
      price: "₹2,501",
      description: "Worship with thousand Shiva lingas for major life transformations",
      icon: Sparkles,
      benefits: ["Fulfillment of desires", "Career advancement", "Spiritual growth"]
    },
    {
      name: "Abhishekam (Personal)",
      duration: "45 minutes",
      price: "₹751",
      description: "Personal bathing ceremony of the deity with your participation",
      icon: Flower2,
      benefits: ["Personal blessings", "Inner peace", "Positive energy"]
    },
    {
      name: "Kalyanam (Marriage Blessing)",
      duration: "1.5 hours",
      price: "₹5,001",
      description: "Special ceremony for couples seeking marital harmony and blessings",
      icon: Heart,
      benefits: ["Marital bliss", "Family prosperity", "Divine protection"]
    },
    {
      name: "Annadanam Sponsorship",
      duration: "Full day",
      price: "₹10,001",
      description: "Sponsorship of free food distribution to devotees and pilgrims",
      icon: Users,
      benefits: ["Spiritual merit", "Community service", "Divine grace"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService || !selectedDate) {
      toast({
        title: "Missing Information",
        description: "Please select a service and date to proceed with booking.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Submitted!",
      description: "Your seva booking request has been submitted. You will receive a confirmation shortly.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      persons: "1",
      specialRequests: "",
    });
    setSelectedDate(undefined);
    setSelectedService("");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-peaceful">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
              <Clock className="w-3 h-3 mr-1" />
              Temple Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
              Darshan & Seva Booking
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Plan your spiritual visit with our comprehensive darshan timings and sacred seva services
            </p>
          </div>
        </div>
      </section>

      {/* Darshan Timings */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Daily Darshan Timings
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the best time for your temple visit based on crowd levels and ceremonies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {darshanTimings.map((timing, index) => (
              <Card key={index} className="card-divine">
                <CardHeader className="text-center">
                  <Badge 
                    variant={timing.crowd === "Low" ? "secondary" : timing.crowd === "Medium" ? "outline" : "default"}
                    className="mb-2 self-center"
                  >
                    {timing.crowd} Crowd
                  </Badge>
                  <CardTitle className="text-lg font-serif">{timing.type}</CardTitle>
                  <div className="flex items-center justify-center text-primary">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-medium">{timing.time}</span>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    {timing.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seva Services */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Sacred Seva Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Participate in sacred rituals and ceremonies for spiritual benefits and divine blessings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sevaServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-divine h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-divine rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-serif">{service.name}</CardTitle>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{service.duration}</Badge>
                      <div className="flex items-center text-primary font-semibold">
                        <IndianRupee className="w-4 h-4 mr-1" />
                        {service.price.replace('₹', '')}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Benefits:</h5>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <Card className="card-divine">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif">Book Your Seva</CardTitle>
                <CardDescription>
                  Fill in your details to book a sacred seva service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="service">Select Seva Service*</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a seva service" />
                      </SelectTrigger>
                      <SelectContent>
                        {sevaServices.map((service) => (
                          <SelectItem key={service.name} value={service.name}>
                            <div className="flex items-center justify-between w-full">
                              <span>{service.name}</span>
                              <span className="ml-4 text-primary font-medium">{service.price}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date Selection */}
                  <div className="space-y-2">
                    <Label>Select Date*</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Personal Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name*</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number*</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter email address"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="persons">Number of Persons</Label>
                      <Select value={formData.persons} onValueChange={(value) => handleInputChange("persons", value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Person" : "Persons"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requests">Special Requests</Label>
                    <Textarea
                      id="requests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      placeholder="Any special requirements or requests..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full btn-divine">
                    <Heart className="w-4 h-4 mr-2" />
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="section-padding bg-gradient-divine text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold mb-6">
            Important Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="font-semibold">Advance Booking</h3>
              <p className="text-white/90 text-sm">
                Book your seva at least 2-3 days in advance for better availability
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Confirmation</h3>
              <p className="text-white/90 text-sm">
                You will receive SMS/email confirmation with detailed instructions
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Dress Code</h3>
              <p className="text-white/90 text-sm">
                Traditional attire is preferred. Please dress modestly
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;