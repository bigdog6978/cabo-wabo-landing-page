import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  downloadEmailListAsCSV, 
  downloadEmailListAsJSON, 
  getEmailListAsText,
  getSubscriberCount 
} from "@/lib/emailExport";

const EmailListAdmin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState<number | null>(null);
  const [emailList, setEmailList] = useState<string>("");

  const handleDownloadCSV = async () => {
    setIsLoading(true);
    await downloadEmailListAsCSV();
    setIsLoading(false);
  };

  const handleDownloadJSON = async () => {
    setIsLoading(true);
    await downloadEmailListAsJSON();
    setIsLoading(false);
  };

  const handleGetEmailList = async () => {
    setIsLoading(true);
    const emails = await getEmailListAsText();
    setEmailList(emails);
    setIsLoading(false);
  };

  const handleGetCount = async () => {
    const count = await getSubscriberCount();
    setSubscriberCount(count);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailList);
    alert("Email list copied to clipboard!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-cabo-dark mb-6">
        Email Subscribers Admin
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Subscriber Count */}
        <Card>
          <CardHeader>
            <CardTitle>Subscriber Count</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-cabo-teal">
                {subscriberCount !== null ? subscriberCount : "?"}
              </span>
              <Button onClick={handleGetCount} variant="outline">
                Refresh Count
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Download Options */}
        <Card>
          <CardHeader>
            <CardTitle>Download Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              onClick={handleDownloadCSV} 
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? "Downloading..." : "Download as CSV"}
            </Button>
            <Button 
              onClick={handleDownloadJSON} 
              disabled={isLoading}
              variant="outline"
              className="w-full"
            >
              {isLoading ? "Downloading..." : "Download as JSON"}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Email List Display */}
      <Card>
        <CardHeader>
          <CardTitle>Email List (Plain Text)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex space-x-2">
              <Button onClick={handleGetEmailList} disabled={isLoading}>
                {isLoading ? "Loading..." : "Load Email List"}
              </Button>
              {emailList && (
                <Button onClick={copyToClipboard} variant="outline">
                  Copy to Clipboard
                </Button>
              )}
            </div>
            
            {emailList && (
              <div className="border rounded-lg p-4 bg-gray-50">
                <textarea
                  value={emailList}
                  readOnly
                  className="w-full h-64 p-2 text-sm font-mono bg-transparent resize-none"
                  placeholder="Click 'Load Email List' to see subscribers..."
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>How to Use</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p><strong>CSV Download:</strong> Best for importing into email marketing tools like Mailchimp, ConvertKit, etc.</p>
          <p><strong>JSON Download:</strong> Best for developers or custom integrations.</p>
          <p><strong>Plain Text:</strong> Simple list of emails, one per line. Easy to copy/paste.</p>
          <p><strong>Subscriber Count:</strong> Quick overview of your total subscribers.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailListAdmin;
