import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { 
  Heart,
  IndianRupee,
  Gift,
  Users,
  Sparkles,
  Building,
  Utensils,
  GraduationCap,
  Lightbulb,
  Shield,
  CreditCard,
  Smartphone,
  Receipt,
  Award
} from "lucide-react";

const Donations = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pan: "",
    purpose: "",
    anonymous: false,
    receipt: true,
  });
  
  const { toast } = useToast();

  const donationCategories = [
    {
      id: "general",
      name: "General Donation",
      description: "Support overall temple maintenance and daily activities",
      icon: Heart,
      suggestedAmounts: ["₹501", "₹1,001", "₹2,501", "₹5,001"],
      benefits: ["Spiritual merit", "General blessings", "Positive karma"]
    },
    {
      id: "annadanam",
      name: "Annadanam (Food Service)",
      description: "Sponsor free meals for devotees and pilgrims",
      icon: Utensils,
      suggestedAmounts: ["₹1,001", "₹2,501", "₹5,001", "₹10,001"],
      benefits: ["Feed the hungry", "Great spiritual merit", "Abundance blessings"]
    },
    {
      id: "maintenance",
      name: "Temple Maintenance",
      description: "Support temple upkeep, repairs, and infrastructure",
      icon: Building,
      suggestedAmounts: ["₹2,501", "₹5,001", "₹10,001", "₹25,001"],
      benefits: ["Preserve heritage", "Facility improvement", "Long-term impact"]
    },
    {
      id: "festivals",
      name: "Festival Celebrations",
      description: "Contribute to special festivals and ceremonies",
      icon: Sparkles,
      suggestedAmounts: ["₹1,001", "₹3,001", "₹5,001", "₹11,001"],
      benefits: ["Festival participation", "Community celebration", "Divine joy"]
    },
    {
      id: "education",
      name: "Education & Culture",
      description: "Support educational programs and cultural activities",
      icon: GraduationCap,
      suggestedAmounts: ["₹1,501", "₹3,001", "₹7,501", "₹15,001"],
      benefits: ["Knowledge promotion", "Cultural preservation", "Youth development"]
    },
    {
      id: "lighting",
      name: "Temple Lighting",
      description: "Sponsor oil lamps, electricity, and decorative lighting",
      icon: Lightbulb,
      suggestedAmounts: ["₹501", "₹1,001", "₹2,001", "₹5,001"],
      benefits: ["Divine illumination", "Auspicious environment", "Spiritual radiance"]
    },
    {
      id: "security",
      name: "Security & Safety",
      description: "Support temple security systems and safety measures",
      icon: Shield,
      suggestedAmounts: ["₹2,001", "₹5,001", "₹10,001", "₹20,001"],
      benefits: ["Devotee safety", "Asset protection", "Peace of mind"]
    },
    {
      id: "seva",
      name: "Special Seva Sponsorship",
      description: "Sponsor specific poojas and religious ceremonies",
      icon: Gift,
      suggestedAmounts: ["₹3,001", "₹7,501", "₹15,001", "₹31,001"],
      benefits: ["Personal seva", "Direct divine connection", "Specific blessings"]
    }
  ];

  const paymentMethods = [
    {
      id: "upi",
      name: "UPI Payment",
      description: "Pay using Google Pay, PhonePe, Paytm, or any UPI app",
      icon: Smartphone,
      fee: "No processing fee"
    },
    {
      id: "card",
      name: "Credit/Debit Card",
      description: "Secure online payment using Visa, MasterCard, RuPay",
      icon: CreditCard,
      fee: "2% processing fee"
    },
    {
      id: "netbanking",
      name: "Net Banking",
      description: "Direct payment from your bank account",
      icon: Building,
      fee: "Minimal processing fee"
    }
  ];

  const donorBenefits = [
    {
      icon: Receipt,
      title: "80G Tax Receipt",
      description: "Get official tax exemption certificate under Section 80G"
    },
    {
      icon: Award,
      title: "Donor Recognition",
      description: "Recognition in temple newsletter and special honors (optional)"
    },
    {
      icon: Heart,
      title: "Spiritual Merit",
      description: "Gain positive karma and divine blessings through your contribution"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Join thousands of devotees supporting temple activities"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCategory || (!donationAmount && !customAmount) || !paymentMethod) {
      toast({
        title: "Missing Information",
        description: "Please select donation category, amount, and payment method.",
        variant: "destructive",
      });
      return;
    }

    const amount = customAmount || donationAmount.replace('₹', '').replace(',', '');
    
    toast({
      title: "Redirecting to Payment",
      description: `Processing donation of ₹${amount} for ${selectedCategory}. You will be redirected to secure payment gateway.`,
    });

    // Here would be the actual payment integration
    setTimeout(() => {
      toast({
        title: "Thank You for Your Donation!",
        description: "Your generous contribution has been received. May you be blessed with divine grace.",
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const selectedCategoryData = donationCategories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-peaceful">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
              <Heart className="w-3 h-3 mr-1" />
              Online Donations
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
              Support Our Sacred Temple
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your generous donations help us maintain the temple, serve devotees, and continue our spiritual mission
            </p>
          </div>
        </div>
      </section>

      {/* Donation Categories */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Choose Your Donation Category
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Select how you'd like to contribute to our temple's spiritual mission
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationCategories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              
              return (
                <Card 
                  key={category.id} 
                  className={`card-divine cursor-pointer transition-all duration-300 ${
                    isSelected 
                      ? "ring-2 ring-primary bg-primary/5 shadow-temple" 
                      : "hover:shadow-temple"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${
                      isSelected 
                        ? "bg-gradient-divine shadow-divine" 
                        : "bg-gradient-temple"
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-serif">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <CardDescription className="text-sm leading-relaxed">
                      {category.description}
                    </CardDescription>
                    
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">Benefits:</p>
                      <ul className="space-y-1">
                        {category.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></div>
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

      {/* Donation Form */}
      {selectedCategory && (
        <section className="section-padding bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <Card className="card-divine">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-serif">Make Your Donation</CardTitle>
                  <CardDescription>
                    Contributing to: {selectedCategoryData?.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Amount Selection */}
                    <div className="space-y-4">
                      <Label className="text-base font-medium">Select Donation Amount*</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {selectedCategoryData?.suggestedAmounts.map((amount) => (
                          <Button
                            key={amount}
                            type="button"
                            variant={donationAmount === amount ? "default" : "outline"}
                            className={donationAmount === amount ? "btn-divine" : ""}
                            onClick={() => {
                              setDonationAmount(amount);
                              setCustomAmount("");
                            }}
                          >
                            <IndianRupee className="w-4 h-4 mr-1" />
                            {amount.replace('₹', '')}
                          </Button>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="custom-amount" className="text-sm">Or enter custom amount:</Label>
                        <div className="flex items-center space-x-2">
                          <IndianRupee className="w-4 h-4 text-muted-foreground" />
                          <Input
                            id="custom-amount"
                            type="number"
                            placeholder="Enter amount"
                            className="w-32"
                            value={customAmount}
                            onChange={(e) => {
                              setCustomAmount(e.target.value);
                              setDonationAmount("");
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Donor Information */}
                    <div className="space-y-4">
                      <Label className="text-base font-medium">Donor Information</Label>
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
                          <Label htmlFor="email">Email Address*</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="Enter email address"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pan">PAN Number (for 80G receipt)</Label>
                          <Input
                            id="pan"
                            value={formData.pan}
                            onChange={(e) => handleInputChange("pan", e.target.value.toUpperCase())}
                            placeholder="Enter PAN number"
                            maxLength={10}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Textarea
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          placeholder="Enter your complete address"
                          rows={2}
                        />
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-4">
                      <Label className="text-base font-medium">Select Payment Method*</Label>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {paymentMethods.map((method) => {
                            const Icon = method.icon;
                            return (
                              <div key={method.id} className="flex items-center space-x-2">
                                <RadioGroupItem value={method.id} id={method.id} />
                                <Label
                                  htmlFor={method.id}
                                  className="flex-1 cursor-pointer p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                                >
                                  <div className="flex items-center space-x-3">
                                    <Icon className="w-5 h-5 text-primary" />
                                    <div>
                                      <div className="font-medium">{method.name}</div>
                                      <div className="text-xs text-muted-foreground">{method.fee}</div>
                                    </div>
                                  </div>
                                </Label>
                              </div>
                            );
                          })}
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Additional Options */}
                    <div className="space-y-4">
                      <Label className="text-base font-medium">Additional Options</Label>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="anonymous"
                            checked={formData.anonymous}
                            onCheckedChange={(checked) => handleInputChange("anonymous", !!checked)}
                          />
                          <Label htmlFor="anonymous" className="text-sm">
                            Make this donation anonymous
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="receipt"
                            checked={formData.receipt}
                            onCheckedChange={(checked) => handleInputChange("receipt", !!checked)}
                          />
                          <Label htmlFor="receipt" className="text-sm">
                            I want to receive 80G tax exemption receipt via email
                          </Label>
                        </div>
                      </div>
                    </div>

                    {/* Purpose */}
                    <div className="space-y-2">
                      <Label htmlFor="purpose">Special Purpose or Message (Optional)</Label>
                      <Textarea
                        id="purpose"
                        value={formData.purpose}
                        onChange={(e) => handleInputChange("purpose", e.target.value)}
                        placeholder="Any special purpose for this donation or message to the temple..."
                        rows={3}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full btn-divine text-lg py-6">
                      <Heart className="w-5 h-5 mr-2" />
                      Proceed to Payment
                      <span className="ml-2">
                        ₹{(customAmount || donationAmount.replace('₹', '').replace(',', '')) || '0'}
                      </span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Donor Benefits */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Donor Benefits
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your generous contribution comes with these benefits and recognitions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donorBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="card-divine text-center">
                  <CardHeader>
                    <div className="w-12 h-12 mx-auto bg-gradient-temple rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-serif">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="section-padding bg-gradient-divine text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Your Impact Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="text-4xl font-bold">50,000+</div>
              <h3 className="text-xl font-serif font-semibold">Devotees Served</h3>
              <p className="text-white/90 text-sm">
                Monthly devotees benefit from temple services and facilities
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl font-bold">₹25 Lakhs</div>
              <h3 className="text-xl font-serif font-semibold">Annual Annadanam</h3>
              <p className="text-white/90 text-sm">
                Free meals provided to pilgrims and devotees every year
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl font-bold">1000+</div>
              <h3 className="text-xl font-serif font-semibold">Years of Heritage</h3>
              <p className="text-white/90 text-sm">
                Ancient traditions preserved and continued for future generations
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              "Every donation, no matter the size, contributes to preserving our sacred heritage 
              and serving devotees with love and devotion. May your generosity bring you abundant blessings."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donations;