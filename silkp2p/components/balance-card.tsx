import { Card, CardContent } from "@/components/ui/card";

export function BalanceCard({ balance }: { balance: string }) {
  return (
    <Card className="w-full bg-purple-600/30 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="space-y-2">
          <p className="text-sm text-gray-200">Available Balance</p>
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <span className="opacity-90">$</span>
            {balance}
          </h2>
          <p className="text-xs text-gray-300">Protected by Holonym</p>
        </div>
      </CardContent>
    </Card>
  );
} 