"use client"

import { useState, useEffect } from "react"
import { Home, Apple, Dumbbell, Sparkles, User } from "lucide-react"
import HomeTab from "./components/HomeTab"
import DietTab from "./components/DietTab"
import WorkoutTab from "./components/WorkoutTab"
import AITab from "./components/AITab"
import ProfileTab from "./components/ProfileTab"

export default function FitnessApp() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto pb-20">
        {activeTab === "home" && <HomeTab />}
        {activeTab === "diet" && <DietTab />}
        {activeTab === "workout" && <WorkoutTab />}
        {activeTab === "ai" && <AITab />}
        {activeTab === "profile" && <ProfileTab />}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto px-4">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-all ${
              activeTab === "home"
                ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Início</span>
          </button>

          <button
            onClick={() => setActiveTab("diet")}
            className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-all ${
              activeTab === "diet"
                ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30"
                : "text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400"
            }`}
          >
            <Apple className="w-5 h-5" />
            <span className="text-xs font-medium">Dieta</span>
          </button>

          <button
            onClick={() => setActiveTab("workout")}
            className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-all ${
              activeTab === "workout"
                ? "text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30"
                : "text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
            }`}
          >
            <Dumbbell className="w-5 h-5" />
            <span className="text-xs font-medium">Treino</span>
          </button>

          <button
            onClick={() => setActiveTab("ai")}
            className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-all ${
              activeTab === "ai"
                ? "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30"
                : "text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
            }`}
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-xs font-medium">IA</span>
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-all ${
              activeTab === "profile"
                ? "text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/30"
                : "text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400"
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-xs font-medium">Perfil</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
