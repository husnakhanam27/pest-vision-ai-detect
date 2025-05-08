
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Bug, Database, User, ArrowRight, Chart, Settings } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { pests } from '@/utils/pestData';

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedPest, setSelectedPest] = useState<string | null>(null);
  
  // Mock user and site statistics
  const stats = {
    users: 1287,
    analyses: 5823,
    detectionRate: 97.4,
    pestEntries: 102
  };

  const onSavePest = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pest information saved successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-gray-100">
        <div className="container mx-auto p-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Manage pests, view analytics, and configure system settings
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Total Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <User className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-3xl font-bold">{stats.users}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Total Analyses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Chart className="w-5 h-5 text-purple-500 mr-2" />
                  <span className="text-3xl font-bold">{stats.analyses}</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Detection Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Chart className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-3xl font-bold">{stats.detectionRate}%</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Pest Entries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Bug className="w-5 h-5 text-pest-green-500 mr-2" />
                  <span className="text-3xl font-bold">{stats.pestEntries}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-12 gap-6">
            {/* Admin Sidebar */}
            <div className="md:col-span-3">
              <Card>
                <CardHeader className="pb-4 pt-6">
                  <CardTitle className="text-lg">Admin Menu</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Tabs
                    orientation="vertical"
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="w-full flex flex-col items-stretch h-auto bg-transparent border-r-0">
                      <TabsTrigger
                        value="dashboard"
                        className="justify-start text-left py-3 px-6 border-l-2 border-transparent data-[state=active]:border-pest-green-500"
                      >
                        <Chart className="h-4 w-4 mr-2" />
                        Dashboard
                      </TabsTrigger>
                      <TabsTrigger
                        value="pests"
                        className="justify-start text-left py-3 px-6 border-l-2 border-transparent data-[state=active]:border-pest-green-500"
                      >
                        <Bug className="h-4 w-4 mr-2" />
                        Manage Pests
                      </TabsTrigger>
                      <TabsTrigger
                        value="models"
                        className="justify-start text-left py-3 px-6 border-l-2 border-transparent data-[state=active]:border-pest-green-500"
                      >
                        <Database className="h-4 w-4 mr-2" />
                        ML Models
                      </TabsTrigger>
                      <TabsTrigger
                        value="users"
                        className="justify-start text-left py-3 px-6 border-l-2 border-transparent data-[state=active]:border-pest-green-500"
                      >
                        <User className="h-4 w-4 mr-2" />
                        User Management
                      </TabsTrigger>
                      <TabsTrigger
                        value="settings"
                        className="justify-start text-left py-3 px-6 border-l-2 border-transparent data-[state=active]:border-pest-green-500"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        System Settings
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Area */}
            <div className="md:col-span-9">
              <TabsContent value="dashboard" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>System Overview</CardTitle>
                    <CardDescription>
                      View key metrics and system performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Weekly Analysis Activity</h3>
                        <div className="h-[300px] bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center">
                          <p className="text-gray-500">Chart visualization placeholder</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Top Identified Pests</h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                              <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Pest
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Count
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Avg. Confidence
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr className="bg-white">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  Rice Stem Borer
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  1,245
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  94.3%
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  Brown Planthopper
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  987
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  91.7%
                                </td>
                              </tr>
                              <tr className="bg-white">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  Fall Armyworm
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  842
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  89.2%
                                </td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  Aphid
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  756
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  87.5%
                                </td>
                              </tr>
                              <tr className="bg-white">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  Lady Beetle
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  612
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  92.1%
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pests" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Pest Database Management</CardTitle>
                    <CardDescription>
                      Add, edit, or remove pest information from the database
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-12 gap-6">
                      <div className="md:col-span-4 border-r">
                        <div className="pr-4">
                          <div className="mb-4">
                            <Input placeholder="Search pests..." />
                          </div>
                          <div className="space-y-1 max-h-[500px] overflow-y-auto pr-2">
                            {pests.map((pest) => (
                              <Button
                                key={pest.id}
                                variant="ghost"
                                className={`w-full justify-start text-left font-normal ${
                                  selectedPest === pest.id ? "bg-pest-green-50 text-pest-green-700" : ""
                                }`}
                                onClick={() => setSelectedPest(pest.id)}
                              >
                                <Bug className="h-4 w-4 mr-2" />
                                {pest.name}
                              </Button>
                            ))}
                          </div>
                          <Button 
                            className="w-full mt-4 bg-pest-green-500 hover:bg-pest-green-600"
                            onClick={() => {
                              setSelectedPest(null);
                              toast.success("Ready to add a new pest");
                            }}
                          >
                            Add New Pest
                          </Button>
                        </div>
                      </div>
                      <div className="md:col-span-8">
                        {selectedPest ? (
                          <form onSubmit={onSavePest}>
                            <div className="space-y-4">
                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="pestName">Pest Name</Label>
                                  <Input 
                                    id="pestName" 
                                    defaultValue={pests.find(p => p.id === selectedPest)?.name} 
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="scientificName">Scientific Name</Label>
                                  <Input 
                                    id="scientificName" 
                                    defaultValue={pests.find(p => p.id === selectedPest)?.scientificName} 
                                  />
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Select defaultValue={pests.find(p => p.id === selectedPest)?.category}>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Lepidoptera">Lepidoptera</SelectItem>
                                    <SelectItem value="Hemiptera">Hemiptera</SelectItem>
                                    <SelectItem value="Coleoptera">Coleoptera</SelectItem>
                                    <SelectItem value="Diptera">Diptera</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea 
                                  id="description" 
                                  rows={4}
                                  defaultValue={pests.find(p => p.id === selectedPest)?.description}
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <Label htmlFor="harmful">Harmful to Crops</Label>
                                  <Switch 
                                    id="harmful" 
                                    defaultChecked={pests.find(p => p.id === selectedPest)?.harmful}
                                  />
                                </div>
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="hostPlants">Host Plants (comma separated)</Label>
                                <Input 
                                  id="hostPlants" 
                                  defaultValue={pests.find(p => p.id === selectedPest)?.host_plants.join(', ')}
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="management">Management Strategies</Label>
                                <Textarea 
                                  id="management" 
                                  rows={4}
                                  defaultValue={pests.find(p => p.id === selectedPest)?.management.join('\n')}
                                />
                              </div>

                              <div className="flex justify-end space-x-3 pt-4">
                                <Button 
                                  type="button" 
                                  variant="outline" 
                                  className="border-red-500 text-red-700 hover:bg-red-50"
                                  onClick={() => {
                                    toast.error("Pest deleted!");
                                    setSelectedPest(null);
                                  }}
                                >
                                  Delete
                                </Button>
                                <Button type="submit" className="bg-pest-green-500 hover:bg-pest-green-600">
                                  Save Changes
                                </Button>
                              </div>
                            </div>
                          </form>
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <div className="text-center p-6">
                              <Bug className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                              <h3 className="text-lg font-medium text-gray-900">No pest selected</h3>
                              <p className="text-gray-500 mt-1">
                                Select a pest from the list or add a new one
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="models" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>ML Model Management</CardTitle>
                    <CardDescription>
                      Configure, train and deploy machine learning models
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg">DCNN Model</CardTitle>
                              <Badge className="bg-green-100 text-green-800">Active</Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 mb-4">
                              Deep Convolutional Neural Network optimized for pest recognition.
                            </p>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-500">Accuracy:</span>
                                <span className="font-medium">94.7%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">Precision:</span>
                                <span className="font-medium">92.3%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">Last trained:</span>
                                <span className="font-medium">2025-04-15</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="pt-0">
                            <Button variant="outline" className="w-full">
                              View Details
                            </Button>
                          </CardFooter>
                        </Card>
                        
                        <Card>
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg">ResNet Model</CardTitle>
                              <Badge className="bg-blue-100 text-blue-800">Training</Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 mb-4">
                              Residual Neural Network with transfer learning for pest classification.
                            </p>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-500">Accuracy:</span>
                                <span className="font-medium">96.2% (validation)</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">Precision:</span>
                                <span className="font-medium">94.8% (validation)</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">Training progress:</span>
                                <span className="font-medium">78%</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="pt-0">
                            <Button variant="outline" className="w-full">
                              View Training Status
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Train New Model</CardTitle>
                          <CardDescription>
                            Configure parameters and start training a new model
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <form className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="modelType">Model Architecture</Label>
                                <Select defaultValue="resnet">
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select model type" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="dcnn">DCNN</SelectItem>
                                    <SelectItem value="resnet">ResNet</SelectItem>
                                    <SelectItem value="vgg">VGG</SelectItem>
                                    <SelectItem value="efficientnet">EfficientNet</SelectItem>
                                    <SelectItem value="googlenet">GoogLeNet</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="datasetPath">Dataset Path</Label>
                                <Input id="datasetPath" placeholder="/data/pest_dataset_v2" />
                              </div>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="epochs">Training Epochs</Label>
                                <Input id="epochs" type="number" defaultValue="50" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="batchSize">Batch Size</Label>
                                <Input id="batchSize" type="number" defaultValue="32" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="learningRate">Learning Rate</Label>
                                <Input id="learningRate" type="number" defaultValue="0.001" step="0.0001" />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <Switch id="dataAugmentation" defaultChecked />
                                <Label htmlFor="dataAugmentation">Enable Data Augmentation</Label>
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <Switch id="transferLearning" defaultChecked />
                                <Label htmlFor="transferLearning">Use Transfer Learning</Label>
                              </div>
                            </div>
                            
                            <Button className="mt-4 bg-pest-green-500 hover:bg-pest-green-600">
                              Start Training
                            </Button>
                          </form>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="users" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>
                      View and manage system users
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Email
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Role
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Last Login
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div>
                                  <div className="text-sm font-medium text-gray-900">
                                    John Smith
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              john.smith@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Admin
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              2025-05-07 09:41:23
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div>
                                  <div className="text-sm font-medium text-gray-900">
                                    Maria Rodriguez
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              maria.r@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Researcher
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              2025-05-06 15:22:47
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div>
                                  <div className="text-sm font-medium text-gray-900">
                                    Rajesh Kumar
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              rajesh.k@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              User
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                Inactive
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              2025-04-28 10:11:35
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div>
                                  <div className="text-sm font-medium text-gray-900">
                                    Emily Johnson
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              emily.j@example.com
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Admin
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              2025-05-07 08:03:17
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>System Settings</CardTitle>
                    <CardDescription>
                      Configure system-wide settings and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">General Settings</h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="siteName">System Name</Label>
                            <Input id="siteName" defaultValue="PestVisionAI" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="contactEmail">Contact Email</Label>
                            <Input id="contactEmail" type="email" defaultValue="support@pestvisionai.com" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Switch id="enableRegistration" defaultChecked />
                            <Label htmlFor="enableRegistration">Allow New User Registrations</Label>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Switch id="enableApiAccess" defaultChecked />
                            <Label htmlFor="enableApiAccess">Enable API Access</Label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4 pt-2">
                        <h3 className="text-lg font-medium">Analysis Settings</h3>
                        
                        <div className="space-y-2">
                          <Label htmlFor="defaultModel">Default Model</Label>
                          <Select defaultValue="dcnn">
                            <SelectTrigger>
                              <SelectValue placeholder="Select model" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="dcnn">DCNN</SelectItem>
                              <SelectItem value="resnet">ResNet</SelectItem>
                              <SelectItem value="vgg">VGG</SelectItem>
                              <SelectItem value="ensemble">Ensemble (All Models)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="confidenceThreshold">Minimum Confidence Threshold (%)</Label>
                          <Input id="confidenceThreshold" type="number" defaultValue="70" min="0" max="100" />
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Switch id="storeUploads" defaultChecked />
                            <Label htmlFor="storeUploads">Store Uploaded Images</Label>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Switch id="anonymizeData" />
                            <Label htmlFor="anonymizeData">Anonymize Analysis Data</Label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button type="button" className="bg-pest-green-500 hover:bg-pest-green-600">
                          Save Settings
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Admin;
