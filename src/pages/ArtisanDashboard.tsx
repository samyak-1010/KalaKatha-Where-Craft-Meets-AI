import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Camera, Mic, Wand2, Upload, IndianRupee } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ArtisanDashboard = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [voiceInput, setVoiceInput] = useState("This is a handwoven scarf made with natural dyes from turmeric and indigo. The patterns are inspired by traditional Rajasthani motifs passed down in my family for three generations...");

  const handleGenerateAI = async () => {
    setIsGenerating(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsGenerating(false);
      setShowResults(true);
      toast({
        title: "AI Content Generated!",
        description: "Your product listing has been enhanced with AI.",
      });
    }, 2000);
  };

  const handlePublish = () => {
    toast({
      title: "Product Published!",
      description: "Your handwoven scarf is now live on KalaKatha marketplace.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      <Navigation />
      
      <main className="container max-w-4xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-gradient-hero rounded-2xl p-6 text-primary-foreground shadow-glow">
            <h1 className="text-2xl font-heading font-bold mb-2">
              Hello, Rani Devi 👋
            </h1>
            <p className="opacity-90">Let's create your first product listing and share your craft with the world.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="w-5 h-5 mr-2 text-primary" />
                  Product Photo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-xl border-2 border-dashed border-border flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Drag photo here or click to upload</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Camera className="w-4 h-4 mr-2" />
                  Take Photo
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mic className="w-5 h-5 mr-2 text-primary" />
                  Voice Description
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full py-8 border-2 border-primary/20 hover:border-primary/40"
                >
                  <Mic className="w-6 h-6 mr-2" />
                  Start Recording
                </Button>
                
                <div>
                  <Label htmlFor="transcription">Transcription</Label>
                  <Textarea 
                    id="transcription"
                    value={voiceInput}
                    onChange={(e) => setVoiceInput(e.target.value)}
                    placeholder="Tell us about your craft..."
                    className="min-h-[100px] mt-2"
                  />
                </div>

                <Button 
                  onClick={handleGenerateAI}
                  disabled={isGenerating}
                  className="w-full bg-gradient-hero border-0 shadow-glow"
                >
                  <Wand2 className={`w-4 h-4 mr-2 ${isGenerating ? 'animate-spin' : ''}`} />
                  {isGenerating ? 'Generating AI Content...' : 'Generate AI Pack'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {showResults && (
              <>
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-accent-foreground">✨ AI-Generated Description</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-2">Version 1 (Emotional)</h4>
                      <p className="text-sm text-muted-foreground">
                        "Experience the warmth of tradition with this exquisite handwoven scarf. Each thread tells a story of heritage, dyed with natural turmeric and indigo, creating patterns that have graced Rajasthani families for generations..."
                      </p>
                    </div>
                    
                    <div className="p-4 bg-accent/20 rounded-lg border border-accent/30">
                      <h4 className="font-semibold mb-2">Version 2 (Technical) ✨ Recommended</h4>
                      <p className="text-sm text-muted-foreground">
                        "Handwoven cotton scarf featuring traditional Rajasthani block-print motifs. Made with natural dyes (turmeric, indigo) on organic cotton. Dimensions: 180cm x 70cm. Machine washable in cold water..."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>📸 AI Poster Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                      <p className="text-center text-accent-foreground font-medium">AI-Generated<br />Product Poster</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <IndianRupee className="w-5 h-5 mr-2 text-primary" />
                      Pricing Suggestion
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-primary">₹1,200</p>
                        <p className="text-sm text-muted-foreground">Based on material, time, and market analysis</p>
                      </div>
                      <Badge className="bg-accent/20 text-accent-foreground">Competitive</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>📱 Social Caption</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm bg-muted/50 p-3 rounded-lg">
                      "Bringing centuries-old Rajasthani artistry to your wardrobe ✨ Each scarf is a canvas of cultural heritage 🎨 #HandmadeWithLove #KalaKatha #RajasthaniCraft"
                    </p>
                  </CardContent>
                </Card>

                <Button 
                  onClick={handlePublish}
                  className="w-full bg-gradient-hero border-0 shadow-glow py-6 text-lg"
                >
                  Publish Product
                </Button>
              </>
            )}
            
            {!showResults && (
              <Card className="shadow-card">
                <CardContent className="p-8 text-center">
                  <Wand2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Upload a photo and record your story to generate AI-enhanced content.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArtisanDashboard;