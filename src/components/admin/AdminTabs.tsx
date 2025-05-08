
import { TabsContent } from "@/components/ui/tabs";
import DashboardTab from './tabs/DashboardTab';
import PestsTab from './tabs/PestsTab';
import ModelsTab from './tabs/ModelsTab';
import UsersTab from './tabs/UsersTab';
import SettingsTab from './tabs/SettingsTab';

interface AdminTabsProps {
  activeTab: string;
}

const AdminTabs = ({ activeTab }: AdminTabsProps) => {
  return (
    <>
      <TabsContent value="dashboard" className="m-0">
        <DashboardTab />
      </TabsContent>

      <TabsContent value="pests" className="m-0">
        <PestsTab />
      </TabsContent>

      <TabsContent value="models" className="m-0">
        <ModelsTab />
      </TabsContent>

      <TabsContent value="users" className="m-0">
        <UsersTab />
      </TabsContent>

      <TabsContent value="settings" className="m-0">
        <SettingsTab />
      </TabsContent>
    </>
  );
};

export default AdminTabs;
