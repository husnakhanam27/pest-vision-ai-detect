
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardTab = () => {
  return (
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
  );
};

export default DashboardTab;
