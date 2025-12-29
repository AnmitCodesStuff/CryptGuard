import { Shield, Lock, Key, Zap, Eye, Server } from "lucide-react";
import EncryptionCard from "@/components/EncryptionCard";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Encryption",
      description: "Military-grade encryption algorithms to protect your sensitive data from unauthorized access.",
    },
    {
      icon: Key,
      title: "Custom Keys",
      description: "Use your own encryption keys for maximum security and complete control over your data.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant encryption and decryption with optimized algorithms for real-time processing.",
    },
    {
      icon: Eye,
      title: "Privacy First",
      description: "All processing happens locally in your browser. No data is ever sent to external servers.",
    },
    {
      icon: Server,
      title: "No Storage",
      description: "We don't store any of your encrypted data or keys. Complete privacy guaranteed.",
    },
    {
      icon: Lock,
      title: "End-to-End",
      description: "Full end-to-end encryption ensures only you can access your encrypted content.",
    },
  ];

  return (
    <div className="min-h-screen cyber-grid">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">
              Secure • Fast • Private
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Protect Your Data with
            <span className="text-gradient block mt-2">CryptGuard</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A powerful encryption tool that keeps your sensitive information safe. 
            Encrypt and decrypt text instantly with custom keys.
          </p>
        </header>

        {/* Encryption Tool */}
        <section className="mb-20">
          <EncryptionCard />
        </section>

        {/* Features Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose <span className="text-primary">CryptGuard</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Built with security and privacy as the top priorities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm font-mono">
            © 2025 CryptGuard. All processing happens locally in your browser.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
