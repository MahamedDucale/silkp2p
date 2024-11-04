import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

export function LevelCard({ level, title, xp }: { level: number; title: string; xp: string }) {
  return (
    <Card className="w-full bg-purple-600/20 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-3">
          <Trophy className="w-6 h-6 text-yellow-400" />
          <div>
            <h2 className="font-bold">Level {level}</h2>
            <p className="text-sm text-gray-300">{title}</p>
            <p className="text-xs text-gray-400">{xp} XP to next level</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 