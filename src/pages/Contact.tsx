import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Navigation,
  Car,
  Train,
  Plane,
  Bus,
  MessageCircle,
  HelpCircle,
  Info
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  });
  
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 8512-287-333 (Main Office)",
        "+91 8512-287-334 (Booking Office)",
        "+91 8512-287-335 (Emergency)"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@srisailadevasthanam.org",
        "bookings@srisailadevasthanam.org",
        "admin@srisailadevasthanam.org"
      ]
    },
    {
      icon: MapPin,
      title: "Temple Address",
      details: [
        "Sri Srisaila Devasthanam",
        "Srisailam, Kurnool District",
        "Andhra Pradesh - 518102, India"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Sunday: 6:00 AM - 8:00 PM",
        "Booking Office: 8:00 AM - 6:00 PM",
        "Emergency: 24/7 Available"
      ]
    }
  ];

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "booking", label: "Seva/Darshan Booking" },
    { value: "accommodation", label: "Accommodation" },
    { value: "donation", label: "Donation Related" },
    { value: "events", label: "Events & Festivals" },
    { value: "feedback", label: "Feedback & Suggestions" },
    { value: "complaint", label: "Complaint" },
    { value: "media", label: "Media & Press" }
  ];

  const transportOptions = [
    {
      mode: "By Air",
      icon: Plane,
      details: [
        "Nearest Airport: Rajiv Gandhi International Airport, Hyderabad (213 km)",
        "Travel Time: 4-5 hours by road",
        "Airport Shuttle: Available on request"
      ]
    },
    {
      mode: "By Train",
      icon: Train,
      details: [
        "Nearest Railway Station: Markapur Road (85 km)",
        "Major Station: Kurnool City (110 km)",
        "Railway Reservation: Available at temple office"
      ]
    },
    {
      mode: "By Bus",
      icon: Bus,
      details: [
        "Regular APSRTC buses from major cities",
        "Private luxury buses available",
        "Direct connectivity from Hyderabad, Bangalore, Chennai"
      ]
    },
    {
      mode: "By Car",
      icon: Car,
      details: [
        "Well-connected by National Highways",
        "Parking available at temple premises",
        "GPS Coordinates: 16.0755° N, 78.8675° E"
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will respond to your inquiry soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "",
    });
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
              <MessageCircle className="w-3 h-3 mr-1" />
              Contact Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're here to help you plan your spiritual journey and answer all your questions
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="card-divine text-center">
                  <CardHeader>
                    <div className="w-12 h-12 mx-auto bg-gradient-divine rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-serif">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-divine">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Send us a Message</CardTitle>
                <CardDescription>
                  Fill in the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name*</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address*</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Brief subject of your message"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message*</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Write your message here..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full btn-divine">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map & Location Info */}
            <div className="space-y-6">
              <Card className="card-divine">
                <CardHeader>
                  <CardTitle className="text-xl font-serif flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    Temple Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.7756469618!2d78.86532!3d16.075556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb04a1b7d48e4d%3A0x8b995a5c5a5c5a5c!2sSrisailam%20Temple!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Temple Location Map"
                    ></iframe>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-divine">
                <CardHeader>
                  <CardTitle className="text-xl font-serif flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2 text-primary" />
                    Quick Help
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">For Urgent Matters</h4>
                      <p className="text-sm text-muted-foreground">
                        Call our 24/7 helpline: +91 8512-287-335
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">WhatsApp Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Message us on WhatsApp: +91 8512-287-333
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reach */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              How to Reach Srisailam
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Multiple transportation options available to reach our sacred temple
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportOptions.map((transport, index) => {
              const Icon = transport.icon;
              return (
                <Card key={index} className="card-divine">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 mx-auto bg-gradient-temple rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-serif">{transport.mode}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {transport.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-gradient-divine text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold mb-6">
            Emergency Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="space-y-2">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold">Temple Security</h3>
              <p className="text-white/90">+91 8512-287-100</p>
            </div>
            <div className="space-y-2">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold">Medical Emergency</h3>
              <p className="text-white/90">+91 8512-287-200</p>
            </div>
            <div className="space-y-2">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold">Local Police</h3>
              <p className="text-white/90">+91 8512-287-300</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;