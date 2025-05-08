
import { Bug, PieChart, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AdminStatsProps {
  stats: {
    users: number;
    analyses: number;
    detectionRate: number;
    pestEntries: number;
  }
}

const AdminStatsCards = ({ stats }: AdminStatsProps) => {
  return (
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
            <PieChart className="w-5 h-5 text-purple-500 mr-2" />
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
            <PieChart className="w-5 h-5 text-green-500 mr-2" />
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
  );
};

export default AdminStatsCards;
