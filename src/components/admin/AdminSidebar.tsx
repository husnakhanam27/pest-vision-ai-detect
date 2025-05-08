
import { Bug, Database, PieChart, Settings, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AdminSidebar = ({ activeTab, setActiveTab }: AdminSidebarProps) => {
  return (
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
              <PieChart className="h-4 w-4 mr-2" />
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
  );
};

export default AdminSidebar;
