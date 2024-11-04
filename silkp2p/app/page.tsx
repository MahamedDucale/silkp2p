"use client";

import { BalanceCard } from "@/components/balance-card";
import { LevelCard } from "@/components/level-card";
import { ActionButtons } from "@/components/action-buttons";
import { Wallet, Activity, Trophy, User } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-800">
      <div className="container max-w-md mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-300">✨</span> SilkPay
          </h1>
          <div className="relative">
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            <button className="text-white">🔔</button>
          </div>
        </div>

        {/* Level Info */}
        <div className="mb-6">
          <LevelCard level={12} title="Master Trader" xp="80/100" />
        </div>

        {/* Balance */}
        <div className="mb-6">
          <BalanceCard balance="1,234.56" />
        </div>

        {/* Actions */}
        <div className="mb-8">
          <ActionButtons />
        </div>

        {/* Recent Transactions */}
        <div className="mb-6">
          <h2 className="text-white text-lg font-semibold mb-4">Recent Transactions</h2>
          {/* Transaction list will go here */}
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-purple-800/90 backdrop-blur-sm border-t border-purple-700">
          <div className="container max-w-md mx-auto px-4">
            <div className="flex justify-between py-4">
              <button className="text-white opacity-60 hover:opacity-100 flex flex-col items-center gap-1">
                <Wallet className="w-6 h-6" />
                <span className="text-xs">Wallet</span>
              </button>
              <button className="text-white opacity-60 hover:opacity-100 flex flex-col items-center gap-1">
                <Activity className="w-6 h-6" />
                <span className="text-xs">Activity</span>
              </button>
              <button className="text-white opacity-60 hover:opacity-100 flex flex-col items-center gap-1">
                <Trophy className="w-6 h-6" />
                <span className="text-xs">Rewards</span>
              </button>
              <button className="text-white opacity-60 hover:opacity-100 flex flex-col items-center gap-1">
                <User className="w-6 h-6" />
                <span className="text-xs">Profile</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
}
