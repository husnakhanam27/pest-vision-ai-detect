
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const SettingsTab = () => {
  return (
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
  );
};

export default SettingsTab;
