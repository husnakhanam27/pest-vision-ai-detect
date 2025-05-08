
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Bug, ArrowRight, CheckCircle, BarChart, Upload, Database } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UploadForm from '@/components/UploadForm';
import PestResult from '@/components/PestResult';

const Index = () => {
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  
  const handleUploadComplete = (result: any) => {
    setAnalysisResult(result);
    window.scrollTo({ top: document.getElementById('results-section')?.offsetTop || 0, behavior: 'smooth' });
  };

  const resetAnalysis = () => {
    setAnalysisResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pest-green-600 to-pest-green-400 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/f261f5b4-fec6-4958-99ec-fa1c546c3fdc.png')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-6 p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Bug className="h-12 w-12" />
            </div>
            <h1 className="heading-xl mb-6">
              Advanced Crop Pest Classification Using AI
            </h1>
            <p className="text-xl mb-8 max-w-2xl text-balance">
              Identify crop pests and get detailed recommendations with our deep learning-powered platform to protect your harvests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                asChild
                className="bg-white text-pest-green-700 hover:bg-gray-100"
              >
                <a href="#upload-section">
                  Analyze Pest Images
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-gray-900 mb-4">How Our Pest Detection Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform leverages advanced deep learning models to identify and classify crop pests with high accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-pest-green-100 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <Upload className="h-6 w-6 text-pest-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Upload Images</h3>
                <p className="text-gray-600">
                  Submit photos of pests or affected crops for quick and accurate identification.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-pest-green-100 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-pest-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
                <p className="text-gray-600">
                  Our deep learning models analyze the images and classify the pest with high precision.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-full bg-pest-green-100 p-3 w-14 h-14 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-pest-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Get Results</h3>
                <p className="text-gray-600">
                  Receive detailed information about the pest and management recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload-section" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="heading-lg text-gray-900 mb-4">Analyze Your Pest Images</h2>
              <p className="text-lg text-gray-600">
                Upload images of pests or affected crops to get identification and management recommendations.
              </p>
            </div>
            
            <UploadForm onUploadComplete={handleUploadComplete} />
          </div>
        </div>
      </section>

      {/* Results Section */}
      {analysisResult && (
        <section id="results-section" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="heading-lg text-gray-900 mb-4">Analysis Results</h2>
                <p className="text-lg text-gray-600">
                  Here's what we found based on your uploaded images.
                </p>
              </div>
              
              <PestResult result={analysisResult} />
              
              <div className="mt-10 text-center">
                <Button 
                  variant="outline" 
                  className="mr-4"
                  onClick={resetAnalysis}
                >
                  Analyze Another Image
                </Button>
                <Button asChild className="bg-pest-green-500 hover:bg-pest-green-600">
                  <Link to="/dashboard">View History</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-gray-900 mb-4">Our Impact By The Numbers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              PestVisionAI is helping farmers worldwide protect their crops and improve yields.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-pest-green-600 mb-2">1.2M+</div>
              <div className="text-gray-600">Pest Analyses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pest-green-600 mb-2">98.2%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pest-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Farmers Helped</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pest-green-600 mb-2">102</div>
              <div className="text-gray-600">Pest Species</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pest-brown-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to protect your crops?</h2>
            <p className="text-lg mb-8 opacity-90">
              Create an account to save your pest analyses, access detailed reports, and get personalized recommendations.
            </p>
            <Button 
              size="lg" 
              asChild
              className="bg-white text-pest-brown-600 hover:bg-gray-100"
            >
              <Link to="/login?register=true">
                Get Started For Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
