
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { BarChart, Bug, Calendar, History, Download, Search, Info } from 'lucide-react';
import { mockAnalysisHistory } from '@/utils/pestData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UploadForm from '@/components/UploadForm';
import PestResult from '@/components/PestResult';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("analyze");
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleUploadComplete = (result: any) => {
    setAnalysisResult(result);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 crop-bg-pattern">
        <div className="container mx-auto p-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Analyze pests and view your history
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button asChild className="bg-pest-green-500 hover:bg-pest-green-600">
                <a href="#uploadSection">
                  New Analysis
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Total Analyses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Bug className="w-5 h-5 text-pest-green-500 mr-2" />
                  <span className="text-3xl font-bold">{mockAnalysisHistory.length}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Harmful Pests Identified
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Info className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-3xl font-bold">
                    {mockAnalysisHistory.filter(item => item.pest.harmful).length}
                  </span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Last Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-lg font-semibold">
                    {formatDate(mockAnalysisHistory[0].timestamp)}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
              <TabsTrigger value="analyze" className="text-base py-3">
                <Bug className="mr-2 h-4 w-4" />
                Analyze
              </TabsTrigger>
              <TabsTrigger value="history" className="text-base py-3">
                <History className="mr-2 h-4 w-4" />
                History
              </TabsTrigger>
            </TabsList>

            <TabsContent value="analyze" className="space-y-8">
              <section id="uploadSection" className="max-w-3xl mx-auto">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Analyze New Images</CardTitle>
                    <CardDescription>
                      Upload images of pests or affected crops to identify and get recommendations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <UploadForm onUploadComplete={handleUploadComplete} />
                  </CardContent>
                </Card>
                
                {analysisResult && (
                  <div className="mt-8">
                    <Card className="border-none shadow-md">
                      <CardHeader>
                        <CardTitle>Analysis Results</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <PestResult result={analysisResult} />
                      </CardContent>
                    </Card>
                  </div>
                )}
              </section>
            </TabsContent>

            <TabsContent value="history">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <History className="h-5 w-5" />
                    Analysis History
                  </CardTitle>
                  <CardDescription>
                    View and manage your past pest analyses.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Pest
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Confidence
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Harmful
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {mockAnalysisHistory.map((analysis, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                {formatDate(analysis.timestamp)}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                      {analysis.pest.name}
                                    </div>
                                    <div className="text-sm text-gray-500 italic">
                                      {analysis.pest.scientificName}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div
                                  className={`inline-flex px-2 py-1 text-xs font-medium rounded-full 
                                  ${analysis.confidence > 90 
                                    ? 'bg-green-100 text-green-800' 
                                    : analysis.confidence > 70 
                                      ? 'bg-yellow-100 text-yellow-800' 
                                      : 'bg-orange-100 text-orange-800'}`}
                                >
                                  {analysis.confidence}%
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {analysis.pest.harmful ? (
                                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                                    Yes
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                    No
                                  </span>
                                )}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div className="flex justify-end space-x-2">
                                  <Button variant="ghost" size="sm">
                                    <Search className="h-4 w-4" />
                                    <span className="sr-only">View</span>
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <Download className="h-4 w-4" />
                                    <span className="sr-only">Download</span>
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
