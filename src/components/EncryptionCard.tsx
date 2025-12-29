import { useState } from "react";
import { Lock, Unlock, Copy, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const EncryptionCard = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [key, setKey] = useState("");

  // Simple XOR encryption for demonstration
  const xorCipher = (text: string, key: string): string => {
    if (!key) return text;
    let result = "";
    for (let i = 0; i < text.length; i++) {
      result += String.fromCharCode(
        text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
      );
    }
    return result;
  };

  const handleProcess = () => {
    if (!inputText.trim()) {
      toast.error("Please enter some text");
      return;
    }
    if (!key.trim()) {
      toast.error("Please enter an encryption key");
      return;
    }

    if (mode === "encrypt") {
      const encrypted = btoa(xorCipher(inputText, key));
      setOutputText(encrypted);
      toast.success("Text encrypted successfully!");
    } else {
      try {
        const decrypted = xorCipher(atob(inputText), key);
        setOutputText(decrypted);
        toast.success("Text decrypted successfully!");
      } catch {
        toast.error("Invalid encrypted text");
      }
    }
  };

  const handleCopy = () => {
    if (outputText) {
      navigator.clipboard.writeText(outputText);
      toast.success("Copied to clipboard!");
    }
  };

  const toggleMode = () => {
    setMode(mode === "encrypt" ? "decrypt" : "encrypt");
    setInputText("");
    setOutputText("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="gradient-card rounded-2xl border border-border p-6 md:p-8 animate-slide-up">
        {/* Mode Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {mode === "encrypt" ? (
              <Lock className="w-5 h-5 text-primary" />
            ) : (
              <Unlock className="w-5 h-5 text-primary" />
            )}
            <span className="font-medium text-lg">
              {mode === "encrypt" ? "Encrypt" : "Decrypt"} Mode
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleMode}
            className="gap-2"
          >
            <ArrowRightLeft className="w-4 h-4" />
            Switch
          </Button>
        </div>

        {/* Key Input */}
        <div className="mb-6">
          <label className="block text-sm text-muted-foreground mb-2">
            Encryption Key
          </label>
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Enter your secret key..."
            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-mono"
          />
        </div>

        {/* Input Text */}
        <div className="mb-6">
          <label className="block text-sm text-muted-foreground mb-2">
            {mode === "encrypt" ? "Plain Text" : "Encrypted Text"}
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={
              mode === "encrypt"
                ? "Enter text to encrypt..."
                : "Paste encrypted text..."
            }
            rows={4}
            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none font-mono text-sm"
          />
        </div>

        {/* Process Button */}
        <Button
          onClick={handleProcess}
          variant="glow"
          size="lg"
          className="w-full mb-6"
        >
          {mode === "encrypt" ? (
            <>
              <Lock className="w-5 h-5" />
              Encrypt Text
            </>
          ) : (
            <>
              <Unlock className="w-5 h-5" />
              Decrypt Text
            </>
          )}
        </Button>

        {/* Output */}
        {outputText && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-muted-foreground">
                {mode === "encrypt" ? "Encrypted Output" : "Decrypted Output"}
              </label>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="gap-2"
              >
                <Copy className="w-4 h-4" />
                Copy
              </Button>
            </div>
            <div className="bg-background border border-primary/30 rounded-lg px-4 py-3 glow-primary">
              <p className="font-mono text-sm text-primary break-all">
                {outputText}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EncryptionCard;
