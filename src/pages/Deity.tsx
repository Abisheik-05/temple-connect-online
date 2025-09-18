import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Sparkles, 
  Clock, 
  Flame, 
  Flower2,
  Crown,
  Heart,
  Star
} from "lucide-react";

const Deity = () => {
  const mainDeity = {
    name: "Lord Mallikarjuna",
    title: "The Jyotirlinga Form of Lord Shiva",
    description: "Lord Mallikarjuna, the presiding deity of Srisailam, is revered as one of the twelve sacred Jyotirlingas. The name 'Mallikarjuna' combines 'Mallika' (jasmine) representing Goddess Parvati and 'Arjuna' representing Lord Shiva, symbolizing their eternal union.",
    significance: [
      "12th Jyotirlinga among the sacred twelve",
      "Natural Swayambhu (self-manifested) Linga",
      "Destroyer of ego and negative karma",
      "Bestower of spiritual liberation (Moksha)"
    ]
  };

  const subsidiaryDeities = [
    {
      name: "Goddess Bhramaramba",
      title: "Divine Consort of Lord Mallikarjuna",
      description: "The divine mother goddess, representing the creative power of the universe",
      speciality: "Fulfillment of desires and protection of devotees",
      icon: Flower2
    },
    {
      name: "Lord Ganesha",
      title: "Remover of Obstacles",
      description: "Worshipped first before beginning any ritual or prayer",
      speciality: "Success in endeavors and removal of obstacles",
      icon: Crown
    },
    {
      name: "Goddess Durga",
      title: "The Divine Mother",
      description: "Protector deity worshipped for strength and courage",
      speciality: "Protection from evil forces and inner strength",
      icon: Star
    },
    {
      name: "Lord Hanuman",
      title: "The Devoted Servant",
      description: "Symbol of devotion, courage, and righteousness",
      speciality: "Physical and mental strength, devotion",
      icon: Heart
    }
  ];

  const dailyRituals = [
    {
      time: "4:00 AM",
      ritual: "Suprabhata Seva",
      description: "Morning awakening prayers and chanting of hymns"
    },
    {
      time: "5:30 AM", 
      ritual: "Abhishekam",
      description: "Sacred bathing ceremony with milk, honey, and holy water"
    },
    {
      time: "7:00 AM",
      ritual: "Alankaram",
      description: "Decoration of the deity with flowers and ornaments"
    },
    {
      time: "8:00 AM",
      ritual: "Mahamangalarathi",
      description: "Grand aarti ceremony with devotional singing"
    },
    {
      time: "12:00 PM",
      ritual: "Madhyahna Seva",
      description: "Noon prayers and offering of food (naivedyam)"
    },
    {
      time: "6:00 PM",
      ritual: "Sandhya Aarti",
      description: "Evening prayers and lamp lighting ceremony"
    },
    {
      time: "8:30 PM",
      ritual: "Sayana Seva",
      description: "Night prayers preparing the deity for rest"
    }
  ];

  const specialPoojas = [
    {
      name: "Rudrabhishekam",
      frequency: "Daily",
      description: "Sacred bathing ritual with Rudra mantras",
      benefits: "Spiritual purification and blessings"
    },
    {
      name: "Laghurudra",
      frequency: "Monthly",
      description: "Extended Rudra chanting ceremony",
      benefits: "Peace, prosperity, and spiritual growth"
    },
    {
      name: "Mahrudra",
      frequency: "Special occasions",
      description: "Grand Rudra homam with 11 priests",
      benefits: "Major life transformations and blessings"
    },
    {
      name: "Sahasra Lingarchana",
      frequency: "Festivals",
      description: "Worship with thousand Shiva lingas",
      benefits: "Fulfillment of desires and spiritual merit"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-peaceful">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
              <Flame className="w-3 h-3 mr-1" />
              Divine Presence
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
              Deity Information
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn about the sacred deities of Sri Srisaila Devasthanam and their divine significance
            </p>
          </div>
        </div>
      </section>

      {/* Main Deity */}
      <section className="section-padding">
        <div className="container mx-auto">
          <Card className="card-divine mb-12">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 mx-auto bg-gradient-divine rounded-full flex items-center justify-center mb-6 shadow-divine">
                <Flame className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-serif mb-2">{mainDeity.name}</CardTitle>
              <Badge variant="secondary" className="text-lg px-4 py-1 bg-primary/10 text-primary">
                {mainDeity.title}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <CardDescription className="text-lg leading-relaxed text-center">
                {mainDeity.description}
              </CardDescription>
              
              <Separator />
              
              <div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-center">
                  Spiritual Significance
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mainDeity.significance.map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Subsidiary Deities */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Subsidiary Deities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Other divine presences that bless devotees at our sacred temple
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subsidiaryDeities.map((deity) => {
              const Icon = deity.icon;
              return (
                <Card key={deity.name} className="card-divine">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-temple rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-serif">{deity.name}</CardTitle>
                        <Badge variant="outline" className="text-sm">
                          {deity.title}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="leading-relaxed">
                      {deity.description}
                    </CardDescription>
                    <div className="bg-primary/5 p-3 rounded-lg">
                      <span className="text-sm font-medium text-primary">Speciality: </span>
                      <span className="text-sm text-muted-foreground">{deity.speciality}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Daily Rituals */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Daily Rituals
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sacred ceremonies performed throughout the day to honor the divine
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="card-divine">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif flex items-center justify-center">
                  <Clock className="w-6 h-6 mr-3 text-primary" />
                  Daily Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {dailyRituals.map((ritual, index) => (
                  <div key={index}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="secondary" className="bg-primary text-primary-foreground">
                            {ritual.time}
                          </Badge>
                          <h4 className="font-semibold text-foreground">{ritual.ritual}</h4>
                        </div>
                        <p className="text-muted-foreground text-sm sm:ml-0 ml-16">
                          {ritual.description}
                        </p>
                      </div>
                    </div>
                    {index < dailyRituals.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Poojas */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Special Poojas & Ceremonies
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sacred rituals for specific spiritual benefits and divine blessings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialPoojas.map((pooja, index) => (
              <Card key={index} className="card-divine">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-serif">{pooja.name}</CardTitle>
                    <Badge variant="outline">{pooja.frequency}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="leading-relaxed">
                    {pooja.description}
                  </CardDescription>
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-lg">
                    <h5 className="font-medium text-primary mb-2">Benefits:</h5>
                    <p className="text-sm text-muted-foreground">{pooja.benefits}</p>
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
          <div className="max-w-3xl mx-auto">
            <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-serif font-bold mb-6">
              Experience Divine Blessings
            </h2>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Immerse yourself in the divine presence of Lord Mallikarjuna and receive blessings 
              that transform your spiritual journey. Every moment spent in the sacred presence 
              brings you closer to inner peace and enlightenment.
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 text-white border-white/30">
              "Har Har Mahadev - Blessings of the Divine"
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Deity;