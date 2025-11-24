"use client"

import { useState, useEffect } from "react"
import { Flame, Droplets, Footprints, Dumbbell, TrendingUp, CheckCircle2, Bell } from "lucide-react"

export default function HomeTab() {
  const [dailyStats, setDailyStats] = useState({
    calories: 1450,
    caloriesGoal: 2000,
    water: 6,
    waterGoal: 8,
    steps: 7234,
    stepsGoal: 10000,
    workoutCompleted: false
  })

  const [todayWorkout, setTodayWorkout] = useState({
    name: "Treino de Peito e Tríceps",
    exercises: 8,
    duration: "45 min",
    completed: false
  })

  const [motivationalQuote, setMotivationalQuote] = useState(
    "Seu único limite é você mesmo. Vamos treinar!"
  )

  const addWater = () => {
    if (dailyStats.water < dailyStats.waterGoal) {
      setDailyStats({ ...dailyStats, water: dailyStats.water + 1 })
    }
  }

  const completeWorkout = () => {
    setDailyStats({ ...dailyStats, workoutCompleted: true })
    setTodayWorkout({ ...todayWorkout, completed: true })
  }

  const caloriesPercentage = (dailyStats.calories / dailyStats.caloriesGoal) * 100
  const waterPercentage = (dailyStats.water / dailyStats.waterGoal) * 100
  const stepsPercentage = (dailyStats.steps / dailyStats.stepsGoal) * 100

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Olá, Atleta! 💪
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
        </p>
      </div>

      {/* Motivational Banner */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 mb-6 shadow-lg">
        <div className="flex items-start gap-3">
          <Bell className="w-6 h-6 text-white flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-white font-semibold text-lg mb-1">Motivação do Dia</h3>
            <p className="text-white/90 text-sm">{motivationalQuote}</p>
          </div>
        </div>
      </div>

      {/* Daily Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Calories Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-xl">
                <Flame className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Calorias</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {dailyStats.calories}
                  <span className="text-sm text-gray-500 dark:text-gray-400">/{dailyStats.caloriesGoal}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(caloriesPercentage, 100)}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            {dailyStats.caloriesGoal - dailyStats.calories} kcal restantes
          </p>
        </div>

        {/* Water Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                <Droplets className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Água</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {dailyStats.water}
                  <span className="text-sm text-gray-500 dark:text-gray-400">/{dailyStats.waterGoal}</span>
                </p>
              </div>
            </div>
            <button
              onClick={addWater}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              + 1 copo
            </button>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(waterPercentage, 100)}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            {dailyStats.waterGoal - dailyStats.water} copos restantes
          </p>
        </div>

        {/* Steps Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
                <Footprints className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Passos</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {dailyStats.steps.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(stepsPercentage, 100)}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Meta: {dailyStats.stepsGoal.toLocaleString()} passos
          </p>
        </div>

        {/* Workout Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
                <Dumbbell className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Treino de Hoje</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {todayWorkout.completed ? "Concluído! ✅" : todayWorkout.name}
                </p>
              </div>
            </div>
          </div>
          {!todayWorkout.completed ? (
            <>
              <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                <span>{todayWorkout.exercises} exercícios</span>
                <span>•</span>
                <span>{todayWorkout.duration}</span>
              </div>
              <button
                onClick={completeWorkout}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-medium transition-all"
              >
                Iniciar Treino
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">Parabéns! Treino concluído hoje</span>
            </div>
          )}
        </div>
      </div>

      {/* Quick Stats Summary */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-6 h-6 text-white" />
          <h3 className="text-white font-semibold text-lg">Resumo Semanal</h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">5</p>
            <p className="text-sm text-white/80">Treinos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">-1.2kg</p>
            <p className="text-sm text-white/80">Esta semana</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">87%</p>
            <p className="text-sm text-white/80">Meta atingida</p>
          </div>
        </div>
      </div>
    </div>
  )
}
