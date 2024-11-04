import { Button } from "./ui/button";
import { Send, ArrowDownLeft } from "lucide-react";

export function ActionButtons() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <Button 
        className="bg-blue-500 hover:bg-blue-600 text-white"
        size="lg"
      >
        <Send className="mr-2 h-4 w-4" /> Send
      </Button>
      <Button 
        className="bg-purple-500 hover:bg-purple-600 text-white"
        size="lg"
      >
        <ArrowDownLeft className="mr-2 h-4 w-4" /> Request
      </Button>
    </div>
  );
} 