
import { useState } from 'react';
import { Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from '@/components/ui/sonner';
import { pests } from '@/utils/pestData';

const PestsTab = () => {
  const [selectedPest, setSelectedPest] = useState<string | null>(null);
  
  const onSavePest = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pest information saved successfully!");
  };

  return (
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
  );
};

export default PestsTab;
