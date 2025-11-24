"use client"

import { useState } from "react"
import { User, Scale, TrendingDown, Calendar, Award, Settings, Bell, Moon, Sun } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function ProfileTab() {
  const [activeSection, setActiveSection] = useState<"stats" | "settings">("stats")
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)

  const [userProfile, setUserProfile] = useState({
    name: "João Silva",
    age: 28,
    height: 175,
    currentWeight: 78,
    goalWeight: 72,
    startWeight: 85
  })

  const [weightHistory, setWeightHistory] = useState([
    { date: "Jan", weight: 85 },
    { date: "Fev", weight: 83 },
    { date: "Mar", weight: 81 },
    { date: "Abr", weight: 80 },
    { date: "Mai", weight: 78 }
  ])

  const [achievements, setAchievements] = useState([
    { id: 1, name: "Primeira Semana", icon: "🎯", unlocked: true },
    { id: 2, name: "5kg Perdidos", icon: "🔥", unlocked: true },
    { id: 3, name: "30 Dias Seguidos", icon: "⚡", unlocked: true },
    { id: 4, name: "10kg Perdidos", icon: "💪", unlocked: false },
    { id: 5, name: "Meta Atingida", icon: "🏆", unlocked: false }
  ])

  const weightLost = userProfile.startWeight - userProfile.currentWeight
  const progressPercentage = ((weightLost) / (userProfile.startWeight - userProfile.goalWeight)) * 100

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Perfil 👤
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Acompanhe sua evolução e configurações
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 mb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{userProfile.name}</h2>
            <p className="text-white/90">{userProfile.age} anos • {userProfile.height}cm</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white/20 rounded-lg p-3 text-center">
            <p className="text-white/80 text-sm">Peso Atual</p>
            <p className="text-2xl font-bold text-white">{userProfile.currentWeight}kg</p>
          </div>
          <div className="bg-white/20 rounded-lg p-3 text-center">
            <p className="text-white/80 text-sm">Meta</p>
            <p className="text-2xl font-bold text-white">{userProfile.goalWeight}kg</p>
          </div>
          <div className="bg-white/20 rounded-lg p-3 text-center">
            <p className="text-white/80 text-sm">Perdidos</p>
            <p className="text-2xl font-bold text-white">{weightLost}kg</p>
          </div>
        </div>
      </div>

      {/* Toggle Sections */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveSection("stats")}
          className={`flex-1 py-3 rounded-lg font-medium transition-all ${
            activeSection === "stats"
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          }`}
        >
          <TrendingDown className="w-5 h-5 inline mr-2" />
          Estatísticas
        </button>
        <button
          onClick={() => setActiveSection("settings")}
          className={`flex-1 py-3 rounded-lg font-medium transition-all ${
            activeSection === "settings"
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          }`}
        >
          <Settings className="w-5 h-5 inline mr-2" />
          Configurações
        </button>
      </div>

      {/* Statistics Section */}
      {activeSection === "stats" && (
        <div className="space-y-6">
          {/* Weight Progress */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Progresso de Peso
              </h3>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Progresso até a meta
                </span>
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {Math.round(progressPercentage)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Faltam {userProfile.currentWeight - userProfile.goalWeight}kg para sua meta
              </p>
            </div>

            {/* Weight Chart */}
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weightHistory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                  <XAxis dataKey="date" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" domain={[70, 90]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: 'none', 
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="weight" 
                    stroke="#8B5CF6" 
                    strokeWidth={3}
                    dot={{ fill: '#8B5CF6', r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Conquistas
              </h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-xl border-2 text-center transition-all ${
                    achievement.unlocked
                      ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20"
                      : "border-gray-200 dark:border-gray-700 opacity-50"
                  }`}
                >
                  <div className="text-4xl mb-2">{achievement.icon}</div>
                  <p className={`text-sm font-medium ${
                    achievement.unlocked
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-400"
                  }`}>
                    {achievement.name}
                  </p>
                  {achievement.unlocked && (
                    <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                      Desbloqueado!
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Summary */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-white" />
              <h3 className="text-xl font-bold text-white">Resumo Semanal</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white/20 rounded-lg p-3 text-center">
                <p className="text-white/80 text-sm">Treinos</p>
                <p className="text-2xl font-bold text-white">5</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3 text-center">
                <p className="text-white/80 text-sm">Calorias</p>
                <p className="text-2xl font-bold text-white">1.8k</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3 text-center">
                <p className="text-white/80 text-sm">Água</p>
                <p className="text-2xl font-bold text-white">42</p>
              </div>
              <div className="bg-white/20 rounded-lg p-3 text-center">
                <p className="text-white/80 text-sm">Passos</p>
                <p className="text-2xl font-bold text-white">52k</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Section */}
      {activeSection === "settings" && (
        <div className="space-y-4">
          {/* Profile Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Informações Pessoais
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  value={userProfile.name}
                  onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Idade
                  </label>
                  <input
                    type="number"
                    value={userProfile.age}
                    onChange={(e) => setUserProfile({ ...userProfile, age: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Altura (cm)
                  </label>
                  <input
                    type="number"
                    value={userProfile.height}
                    onChange={(e) => setUserProfile({ ...userProfile, height: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Peso Meta (kg)
                </label>
                <input
                  type="number"
                  value={userProfile.goalWeight}
                  onChange={(e) => setUserProfile({ ...userProfile, goalWeight: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Notificações
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Lembretes de Treino
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Receba lembretes para treinar
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    notifications ? "bg-purple-500" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                      notifications ? "translate-x-7" : ""
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Lembrete de Água
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Notificações para beber água
                    </p>
                  </div>
                </div>
                <button
                  className="relative w-14 h-7 rounded-full transition-colors bg-purple-500"
                >
                  <div className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform translate-x-7" />
                </button>
              </div>
            </div>
          </div>

          {/* Theme Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Aparência
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {darkMode ? (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Modo Escuro
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ativar tema escuro
                  </p>
                </div>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  darkMode ? "bg-purple-500" : "bg-gray-300 dark:bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    darkMode ? "translate-x-7" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl font-bold shadow-lg transition-all">
            Salvar Alterações
          </button>
        </div>
      )}
    </div>
  )
}
