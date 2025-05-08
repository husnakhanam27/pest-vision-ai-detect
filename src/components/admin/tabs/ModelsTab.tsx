
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

const ModelsTab = () => {
  return (
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
  );
};

export default ModelsTab;
