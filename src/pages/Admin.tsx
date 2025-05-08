
import { useState } from 'react';
import { Tabs } from "@/components/ui/tabs";
import { toast } from '@/components/ui/sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminStatsCards from '@/components/admin/AdminStatsCards';
import AdminTabs from '@/components/admin/AdminTabs';

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  // Mock user and site statistics
  const stats = {
    users: 1287,
    analyses: 5823,
    detectionRate: 97.4,
    pestEntries: 102
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

          <AdminStatsCards stats={stats} />
          
          <div className="grid md:grid-cols-12 gap-6">
            {/* Admin Sidebar */}
            <div className="md:col-span-3">
              <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Main Content Area */}
            <div className="md:col-span-9">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <AdminTabs activeTab={activeTab} />
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Admin;
