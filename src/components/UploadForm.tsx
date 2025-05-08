
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import { Progress } from '@/components/ui/progress';

export default function UploadForm({ onUploadComplete }: { onUploadComplete: (result: any) => void }) {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  };

  const handleFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter(file => file.type.startsWith('image/'));
    if (validFiles.length !== newFiles.length) {
      toast.warning("Some files were skipped. Only images are allowed.");
    }
    setFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      toast.error("Please select at least one image to upload.");
      return;
    }

    setUploading(true);
    
    // Simulate upload progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setUploading(false);
          setProgress(0);
          setFiles([]);
          
          // Mock result data - in a real app, this would come from the server
          const mockResult = {
            pest: {
              name: "Rice Stem Borer",
              scientificName: "Scirpophaga incertulas",
              confidence: 94.7,
              harmful: true,
              description: "The rice stem borer is a moth pest whose larvae bore into rice stems, causing 'deadhearts' (dead central shoots) during the vegetative stage and 'whiteheads' (empty panicles) during the reproductive stage.",
              pesticides: [
                "Chlorantraniliprole",
                "Flubendiamide",
                "Cartap hydrochloride",
                "Fipronil"
              ]
            },
            timestamp: new Date().toISOString()
          };
          
          onUploadComplete(mockResult);
          toast.success("Analysis complete!");
        }, 500);
      }
    }, 100);
  };

  const openFileDialog = () => {
    inputRef.current?.click();
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            dragActive ? 'border-pest-green-500 bg-pest-green-50' : 'border-gray-300'
          }`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
          
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="rounded-full bg-pest-green-100 p-3">
              <Upload className="h-8 w-8 text-pest-green-600" />
            </div>
            <div>
              <p className="text-lg font-medium">Drag and drop your images here</p>
              <p className="text-sm text-gray-500 mt-1">or click to browse</p>
            </div>
            <Button 
              type="button" 
              onClick={openFileDialog}
              variant="outline"
              className="mt-2"
            >
              Select Files
            </Button>
          </div>
        </div>

        {files.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Selected Images ({files.length})</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {files.map((file, index) => (
                <div key={index} className="relative group">
                  <div className="rounded-lg border overflow-hidden aspect-square relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-xs truncate mt-1">{file.name}</p>
                </div>
              ))}
            </div>
            
            {uploading ? (
              <div className="mt-6 space-y-3">
                <Progress value={progress} className="w-full h-2" />
                <p className="text-sm text-center text-gray-600">
                  Processing... {progress}%
                </p>
              </div>
            ) : (
              <Button
                className="mt-6 w-full bg-pest-green-500 hover:bg-pest-green-600"
                onClick={handleUpload}
                disabled={uploading}
              >
                {uploading ? 'Uploading...' : 'Analyze Images'}
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
