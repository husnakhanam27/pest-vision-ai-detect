
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, AlertTriangle, Check } from 'lucide-react';

interface PestResultProps {
  result: {
    pest: {
      name: string;
      scientificName: string;
      confidence: number;
      harmful: boolean;
      description: string;
      pesticides: string[];
    };
    timestamp: string;
  };
}

export default function PestResult({ result }: PestResultProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const truncateDescription = (description: string, maxLength: number = 150) => {
    if (description.length <= maxLength) return description;
    return `${description.substring(0, maxLength)}...`;
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="overflow-hidden">
        <CardHeader className={`${result.pest.harmful ? 'bg-red-50' : 'bg-green-50'} py-4`}>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-bold">{result.pest.name}</CardTitle>
              <p className="text-sm text-gray-500 italic mt-1">{result.pest.scientificName}</p>
            </div>
            <Badge className={`${
              result.pest.confidence > 90 
                ? 'bg-green-100 text-green-800' 
                : result.pest.confidence > 70 
                  ? 'bg-yellow-100 text-yellow-800' 
                  : 'bg-orange-100 text-orange-800'
            }`}>
              {result.pest.confidence}% Confidence
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <Info size={16} className="text-blue-500" />
                About this pest
              </h3>
              <p className="text-gray-700">
                {showFullDescription 
                  ? result.pest.description 
                  : truncateDescription(result.pest.description)}
              </p>
              {result.pest.description.length > 150 && (
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-pest-green-600" 
                  onClick={() => setShowFullDescription(!showFullDescription)}
                >
                  {showFullDescription ? 'Show less' : 'Read more'}
                </Button>
              )}
            </div>

            <Alert className={result.pest.harmful ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'}>
              <div className="flex items-center gap-2">
                {result.pest.harmful ? (
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                ) : (
                  <Check className="h-5 w-5 text-green-600" />
                )}
                <span className="font-medium">
                  {result.pest.harmful 
                    ? 'This pest is harmful to crops' 
                    : 'This pest is not considered harmful'}
                </span>
              </div>
              <AlertDescription className="mt-2">
                {result.pest.harmful 
                  ? 'Immediate action is recommended to prevent crop damage.' 
                  : 'No immediate action is required, but monitoring is advised.'}
              </AlertDescription>
            </Alert>

            {result.pest.harmful && result.pest.pesticides.length > 0 && (
              <div>
                <h3 className="font-medium mb-2">Recommended pesticides</h3>
                <div className="flex flex-wrap gap-2">
                  {result.pest.pesticides.map((pesticide, index) => (
                    <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {pesticide}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Note: Always follow local regulations and guidelines when applying pesticides.
                </p>
              </div>
            )}
            
            <div className="text-xs text-gray-500 pt-2 border-t">
              Analyzed on {new Date(result.timestamp).toLocaleString()}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-end gap-3">
        <Button variant="outline">Save to History</Button>
        <Button variant="outline">Download Report</Button>
        <Button className="bg-pest-green-500 hover:bg-pest-green-600">Share Results</Button>
      </div>
    </div>
  );
}
