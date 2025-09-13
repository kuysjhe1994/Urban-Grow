import { Camera, Scan, Smartphone, Leaf, ArrowRight, Play, BookOpen, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import heroImage from "@/assets/hero-ar-garden.jpg";
import arScanningImage from "@/assets/ar-scanning.jpg";
import urbanGardenImage from "@/assets/urban-garden.jpg";

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const features = [
    {
      icon: Camera,
      title: "AR Plant Scanner",
      description: "Point your camera to analyze growing conditions and get instant plant recommendations"
    },
    {
      icon: Scan,
      title: "Real-time Monitoring",
      description: "Live sensor data for temperature, humidity, soil moisture, and light exposure"
    },
    {
      icon: Smartphone,
      title: "Smart Notifications",
      description: "Get alerts when your plants need water, fertilizer, or environmental adjustments"
    },
    {
      icon: Leaf,
      title: "Urban Gardening",
      description: "Optimized for small spaces like balconies, windowsills, and indoor shelves"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        
        <div className="relative z-10 px-4 pt-12 pb-10 md:pt-16 md:pb-12">
          <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="text-center md:text-left space-y-4 md:space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  UrbanBloom AR
                </h1>
                <p className="text-base md:text-lg text-muted-foreground md:max-w-xl md:mx-0 max-w-2xl mx-auto">
                  Transform your small urban spaces into thriving gardens with augmented reality 
                  and smart climate monitoring
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 md:justify-start justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary shadow-ar-glow hover:shadow-ar-glow transition-smooth w-full sm:w-auto"
                  onClick={() => onNavigate('scanner')}
                >
                  <Camera className="mr-2 h-5 w-5" />
                  Start AR Scanning
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => onNavigate('library')}
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-smooth w-full sm:w-auto"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Plants
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mt-8 md:mt-0 relative">
              <div className="relative mx-auto md:mx-0 max-w-sm md:max-w-md">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={heroImage} 
                    alt="AR gardening app showing plant monitoring interface" 
                    className="w-full h-full object-cover rounded-2xl shadow-ar-glow border border-primary/20"
                    loading="lazy"
                  />
                </AspectRatio>
                <div className="hidden sm:block absolute -top-4 -right-4 w-8 h-8 bg-ar-green rounded-full animate-pulse shadow-ar-glow"></div>
                <div className="hidden sm:block absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-4 py-12 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Smart Gardening Made Simple
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Use cutting-edge AR technology to optimize your urban garden with real-time environmental data
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card backdrop-blur-sm shadow-card border border-primary/10 hover:shadow-ar-glow transition-smooth cursor-pointer group"
              onClick={() => {
                if (index === 0) onNavigate('scanner');
                else if (index === 1) onNavigate('monitoring');
                else if (index === 2) onNavigate('profile');
                else if (index === 3) onNavigate('library');
              }}
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <feature.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-smooth" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-card-foreground mb-2">{feature.title}</h3>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-smooth" />
                    </div>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Demo Section */}
      <div className="px-4 py-12 md:py-16 bg-gradient-to-b from-transparent to-muted/30">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            See It In Action
          </h2>
        </div>

        <div className="grid gap-4 md:gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="space-y-4">
            <AspectRatio ratio={16/9}>
              <img 
                src={arScanningImage} 
                alt="Person using AR to scan plants" 
                className="w-full h-full object-cover rounded-xl shadow-card"
                loading="lazy"
              />
            </AspectRatio>
            <div className="text-center">
              <h3 className="font-semibold text-foreground">AR Plant Identification</h3>
              <p className="text-sm text-muted-foreground">
                Point your camera at any space to get instant growing recommendations
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <AspectRatio ratio={16/9}>
              <img 
                src={urbanGardenImage} 
                alt="Small urban garden on balcony" 
                className="w-full h-full object-cover rounded-xl shadow-card"
                loading="lazy"
              />
            </AspectRatio>
            <div className="text-center">
              <h3 className="font-semibold text-foreground">Urban Garden Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Perfect for balconies, windowsills, and small indoor spaces
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 py-12 md:py-16 text-center">
        <Card className="bg-gradient-primary text-primary-foreground shadow-ar-glow border-primary-glow/20 max-w-lg mx-auto">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-xl font-bold mb-4">Ready to Start Growing?</h2>
            <p className="mb-6 opacity-90">
              Join thousands of urban gardeners already using AR technology to optimize their growing spaces
            </p>
            <div className="flex gap-3 flex-col sm:flex-row">
              <Button 
                variant="secondary" 
                size="lg" 
                className="flex-1 bg-white/20 hover:bg-white/30 transition-smooth w-full sm:w-auto"
                onClick={() => onNavigate('scanner')}
              >
                <Scan className="mr-2 h-5 w-5" />
                Start Scanning
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white/20 hover:bg-white/30 transition-smooth w-full sm:w-auto"
                onClick={() => onNavigate('monitoring')}
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                View Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HeroSection;