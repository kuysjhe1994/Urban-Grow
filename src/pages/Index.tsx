import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FunctionalDashboard from "@/components/FunctionalDashboard";
import FunctionalARScanner from "@/components/FunctionalARScanner";
import PlantLibrary from "@/components/PlantLibrary";
import Navigation from "@/components/Navigation";
import TopNavigation from "@/components/TopNavigation";
import SplashScreen from "@/components/SplashScreen";
import AuthScreen from "@/components/AuthScreen";
import Profile from "@/components/Profile";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [showSplash, setShowSplash] = useState(true);
  const { user, loading } = useAuth();

  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<{ tab: string }>
      if (custom.detail?.tab) {
        setActiveTab(custom.detail.tab)
      }
    }
    window.addEventListener('app:navigate', handler as EventListener)
    return () => window.removeEventListener('app:navigate', handler as EventListener)
  }, [])

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HeroSection onNavigate={setActiveTab} />;
      case "scanner":
        return <FunctionalARScanner />;
      case "library":
        return <PlantLibrary />;
      case "monitoring":
        return <FunctionalDashboard />;
      case "profile":
        return <Profile />;
      default:
        return <HeroSection onNavigate={setActiveTab} />;
    }
  };

  // Show splash screen first
  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Show auth screen if not authenticated
  if (!user) {
    return <AuthScreen onAuthSuccess={() => {}} />;
  }

  return (
    <div className="relative">
      <TopNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="md:pt-4">
        {renderContent()}
      </div>
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="md:hidden h-[calc(5rem+env(safe-area-inset-bottom))]"></div>
    </div>
  );
};

export default Index;
