
import { ArrowDown, Zap, Film, Video, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UploadSection from '@/components/UploadSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-6 animate-fade-in">
              Identify Any Movie From Just a Clip
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-down">
              <span className="block">What Movie Is This?</span>
              <span className="block text-accent">Find Out In Seconds</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-down" style={{ animationDelay: '100ms' }}>
              Upload a movie clip and our AI will instantly identify what film it's from, along with where you can watch it.
            </p>
            
            <UploadSection />
            
            <div className="mt-16 hidden md:block animate-fade-in" style={{ animationDelay: '600ms' }}>
              <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground animate-bounce" />
            </div>
          </div>
        </section>
        
        {/* How it works section */}
        <section id="how-it-works" className="py-16 md:py-24 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Identifying your movie is as simple as these three steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent/10 mb-6">
                  <Video className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Upload Clip</h3>
                <p className="text-muted-foreground">
                  Upload a short video clip from the movie you want to identify. Just a few seconds is all we need.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent/10 mb-6">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Instant Analysis</h3>
                <p className="text-muted-foreground">
                  Our advanced AI analyzes visual elements of your clip and matches it with our extensive movie database.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent/10 mb-6">
                  <Film className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Results</h3>
                <p className="text-muted-foreground">
                  Receive detailed information about the movie and links to streaming platforms where you can watch it.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section id="features" className="py-16 md:py-24 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Designed to help movie enthusiasts find and enjoy their favorite films
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Identification</h3>
                <p className="text-muted-foreground">
                  Our technology identifies movies in seconds, even from short clips or scenes.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 mb-4">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Streaming Links</h3>
                <p className="text-muted-foreground">
                  Find where to watch the movie across multiple streaming platforms and rental services.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 mb-4">
                  <Film className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Movie Details</h3>
                <p className="text-muted-foreground">
                  Get comprehensive information including director, cast, ratings, and similar recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-accent/5">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Identify Your Movie?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stop wondering what that movie was. Upload your clip now and get instant results.
            </p>
            <a href="#top" className="btn-accent text-lg px-8 py-3">
              Upload a Clip
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
