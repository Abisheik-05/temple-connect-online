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
  Bed, 
  Calendar as CalendarIcon, 
  Users, 
  IndianRupee,
  Wifi,
  Car,
  Utensils,
  ShowerHead,
  Tv,
  Wind,
  Home,
  Star,
  MapPin,
  Clock
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Accommodations = () => {
  const [selectedRoom, setSelectedRoom] = useState("");
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    adults: "2",
    children: "0",
    specialRequests: "",
  });
  
  const { toast } = useToast();

  const roomTypes = [
    {
      name: "Deluxe AC Room",
      capacity: "2-3 persons",
      price: "₹1,500",
      priceNote: "per night",
      image: "/api/placeholder/400/250",
      amenities: [
        { icon: Wind, name: "Air Conditioning" },
        { icon: Tv, name: "LED TV" },
        { icon: ShowerHead, name: "Attached Bathroom" },
        { icon: Wifi, name: "Free WiFi" },
      ],
      features: [
        "Clean bed linens and towels",
        "24-hour hot water",
        "Room service available",
        "Prayer room access"
      ],
      availability: "Available"
    },
    {
      name: "Standard Non-AC Room",
      capacity: "2-4 persons",
      price: "₹800",
      priceNote: "per night",
      image: "/api/placeholder/400/250",
      amenities: [
        { icon: Bed, name: "Comfortable Beds" },
        { icon: ShowerHead, name: "Attached Bathroom" },
        { icon: Wifi, name: "Free WiFi" },
      ],
      features: [
        "Clean and comfortable",
        "Natural ventilation",
        "Basic amenities provided",
        "Temple proximity"
      ],
      availability: "Available"
    },
    {
      name: "Family Suite",
      capacity: "4-6 persons",
      price: "₹2,500",
      priceNote: "per night",
      image: "/api/placeholder/400/250",
      amenities: [
        { icon: Wind, name: "Air Conditioning" },
        { icon: Tv, name: "LED TV" },
        { icon: ShowerHead, name: "Attached Bathroom" },
        { icon: Wifi, name: "Free WiFi" },
        { icon: Utensils, name: "Mini Kitchenette" },
      ],
      features: [
        "Separate living area",
        "Extra bedding available",
        "Refrigerator",
        "Balcony with temple view"
      ],
      availability: "Limited"
    },
    {
      name: "Dormitory (Men)",
      capacity: "8-12 persons",
      price: "₹300",
      priceNote: "per person/night",
      image: "/api/placeholder/400/250",
      amenities: [
        { icon: Bed, name: "Bunk Beds" },
        { icon: ShowerHead, name: "Common Bathroom" },
        { icon: Wifi, name: "Free WiFi" },
      ],
      features: [
        "Budget-friendly option",
        "Lockers for belongings",
        "Common seating area",
        "Ideal for pilgrims"
      ],
      availability: "Available"
    },
    {
      name: "Dormitory (Women)",
      capacity: "8-12 persons",
      price: "₹300",
      priceNote: "per person/night",
      image: "/api/placeholder/400/250",
      amenities: [
        { icon: Bed, name: "Bunk Beds" },
        { icon: ShowerHead, name: "Common Bathroom" },
        { icon: Wifi, name: "Free WiFi" },
      ],
      features: [
        "Safe and secure",
        "Female security staff",
        "Lockers for belongings",
        "Common prayer area"
      ],
      availability: "Available"
    },
    {
      name: "VIP Guest House",
      capacity: "2 persons",
      price: "₹3,500",
      priceNote: "per night",
      image: "/api/placeholder/400/250",
      amenities: [
        { icon: Wind, name: "Premium AC" },
        { icon: Tv, name: "Smart TV" },
        { icon: ShowerHead, name: "Premium Bathroom" },
        { icon: Wifi, name: "High-Speed WiFi" },
        { icon: Utensils, name: "Room Service" },
        { icon: Car, name: "Parking" },
      ],
      features: [
        "Luxury furnishing",
        "Temple view",
        "Priority darshan assistance",
        "Complimentary breakfast"
      ],
      availability: "Limited"
    }
  ];

  const additionalServices = [
    {
      service: "Meal Plans",
      options: [
        "Breakfast only - ₹150/person",
        "Lunch only - ₹200/person", 
        "Dinner only - ₹200/person",
        "Full board (3 meals) - ₹500/person"
      ]
    },
    {
      service: "Transportation",
      options: [
        "Railway station pickup - ₹500",
        "Bus stand pickup - ₹300",
        "Airport transfer - ₹2000",
        "Local sightseeing - ₹1500/day"
      ]
    },
    {
      service: "Special Services",
      options: [
        "Darshan booking assistance",
        "Pooja arrangements",
        "Local guide service",
        "Prasadam delivery"
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedRoom || !checkInDate || !checkOutDate) {
      toast({
        title: "Missing Information",
        description: "Please select room type, check-in and check-out dates.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Submitted!",
      description: "Your accommodation booking request has been submitted. You will receive a confirmation shortly.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      adults: "2",
      children: "0",
      specialRequests: "",
    });
    setCheckInDate(undefined);
    setCheckOutDate(undefined);
    setSelectedRoom("");
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
              <Home className="w-3 h-3 mr-1" />
              Temple Accommodations
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
              Comfortable Stay for Devotees
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience peaceful accommodation near the sacred temple with modern amenities and spiritual atmosphere
            </p>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Room Types & Amenities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from our range of comfortable accommodations suitable for all types of pilgrims
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomTypes.map((room, index) => (
              <Card key={index} className="card-divine h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      variant={room.availability === "Available" ? "secondary" : "outline"}
                      className={room.availability === "Available" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}
                    >
                      {room.availability}
                    </Badge>
                    <div className="text-right">
                      <div className="flex items-center text-primary font-bold text-lg">
                        <IndianRupee className="w-4 h-4 mr-1" />
                        {room.price.replace('₹', '')}
                      </div>
                      <div className="text-xs text-muted-foreground">{room.priceNote}</div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-serif">{room.name}</CardTitle>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{room.capacity}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Amenities */}
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Amenities:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {room.amenities.map((amenity, idx) => {
                        const Icon = amenity.icon;
                        return (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <Icon className="w-3 h-3 mr-2 text-primary" />
                            <span className="text-xs">{amenity.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Features:</h5>
                    <ul className="space-y-1">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Additional Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Enhance your stay with our additional services and conveniences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((category, index) => (
              <Card key={index} className="card-divine">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">{category.service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.options.map((option, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {option}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <Card className="card-divine">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif">Book Your Stay</CardTitle>
                <CardDescription>
                  Fill in your details to book accommodation at our temple guest house
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Room Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="room">Select Room Type*</Label>
                    <Select value={selectedRoom} onValueChange={setSelectedRoom}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a room type" />
                      </SelectTrigger>
                      <SelectContent>
                        {roomTypes.map((room) => (
                          <SelectItem key={room.name} value={room.name}>
                            <div className="flex items-center justify-between w-full">
                              <span>{room.name}</span>
                              <span className="ml-4 text-primary font-medium">{room.price}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Check-in Date*</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !checkInDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkInDate ? format(checkInDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={checkInDate}
                            onSelect={setCheckInDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label>Check-out Date*</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !checkOutDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOutDate ? format(checkOutDate, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={checkOutDate}
                            onSelect={setCheckOutDate}
                            disabled={(date) => date <= (checkInDate || new Date())}
                            initialFocus
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="adults">Adults</Label>
                      <Select value={formData.adults} onValueChange={(value) => handleInputChange("adults", value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Adult" : "Adults"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="children">Children</Label>
                      <Select value={formData.children} onValueChange={(value) => handleInputChange("children", value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[0, 1, 2, 3, 4].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Child" : "Children"}
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
                    <Bed className="w-4 h-4 mr-2" />
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Facilities */}
      <section className="section-padding bg-gradient-divine text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Location & Facilities
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Prime Location</h3>
              <p className="text-white/90 leading-relaxed">
                Located just 100 meters from the main temple entrance for easy access to all rituals and ceremonies
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold">24/7 Services</h3>
              <p className="text-white/90 leading-relaxed">
                Round-the-clock front desk, security, and assistance for all your needs during your spiritual stay
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Quality Assured</h3>
              <p className="text-white/90 leading-relaxed">
                Clean, comfortable rooms with modern amenities while maintaining the sanctity of the spiritual environment
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodations;