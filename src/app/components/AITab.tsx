"use client"

import { useState } from "react"
import { Sparkles, User, Target, Clock, TrendingUp, Zap, ChevronRight } from "lucide-react"

type UserData = {
  weight: string
  height: string
  age: string
  goal: string
  time: string
  experience: string
}

type GeneratedPlan = {
  diet: {
    calories: number
    meals: string[]
    macros: { carbs: number; protein: number; fat: number }
  }
  workout: {
    days: number
    exercises: string[]
    duration: string
  }
}

export default function AITab() {
  const [step, setStep] = useState(1)
  const [userData, setUserData] = useState<UserData>({
    weight: "",
    height: "",
    age: "",
    goal: "",
    time: "",
    experience: ""
  })
  const [generatedPlan, setGeneratedPlan] = useState<GeneratedPlan | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const goals = [
    { id: "weight-loss", name: "Emagrecimento", icon: "🔥", color: "from-red-400 to-pink-600" },
    { id: "muscle-gain", name: "Ganho de Massa", icon: "💪", color: "from-blue-400 to-indigo-600" },
    { id: "maintenance", name: "Manutenção", icon: "⚖️", color: "from-green-400 to-emerald-600" },
    { id: "performance", name: "Performance", icon: "⚡", color: "from-yellow-400 to-orange-600" }
  ]

  const timeOptions = [
    { id: "30", name: "30 min/dia", icon: "⏱️" },
    { id: "45", name: "45 min/dia", icon: "⏱️" },
    { id: "60", name: "1 hora/dia", icon: "⏱️" },
    { id: "90", name: "1h30/dia", icon: "⏱️" }
  ]

  const experienceOptions = [
    { id: "beginner", name: "Iniciante", icon: "🌱" },
    { id: "intermediate", name: "Intermediário", icon: "🏃" },
    { id: "advanced", name: "Avançado", icon: "🏆" }
  ]

  const handleGenerate = () => {
    setIsGenerating(true)
    
    // Simulação de geração de plano personalizado
    setTimeout(() => {
      const plan: GeneratedPlan = {
        diet: {
          calories: userData.goal === "weight-loss" ? 1600 : userData.goal === "muscle-gain" ? 2800 : 2200,
          meals: [
            "Café da manhã: Ovos mexidos com aveia e frutas",
            "Lanche: Iogurte grego com granola",
            "Almoço: Frango grelhado com arroz integral e legumes",
            "Lanche: Shake de proteína com banana",
            "Jantar: Salmão com batata doce e salada"
          ],
          macros: {
            carbs: userData.goal === "weight-loss" ? 30 : userData.goal === "muscle-gain" ? 50 : 40,
            protein: userData.goal === "weight-loss" ? 45 : userData.goal === "muscle-gain" ? 30 : 35,
            fat: userData.goal === "weight-loss" ? 25 : userData.goal === "muscle-gain" ? 20 : 25
          }
        },
        workout: {
          days: parseInt(userData.time) >= 60 ? 5 : parseInt(userData.time) >= 45 ? 4 : 3,
          exercises: [
            "Segunda: Peito e Tríceps",
            "Terça: Costas e Bíceps",
            "Quarta: Pernas",
            "Quinta: Ombros e Abdômen",
            "Sexta: Treino Funcional"
          ],
          duration: `${userData.time} minutos`
        }
      }
      setGeneratedPlan(plan)
      setIsGenerating(false)
      setStep(4)
    }, 2000)
  }

  const resetForm = () => {
    setStep(1)
    setUserData({
      weight: "",
      height: "",
      age: "",
      goal: "",
      time: "",
      experience: ""
    })
    setGeneratedPlan(null)
  }

  if (generatedPlan) {
    return (
      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Seu Plano Personalizado ✨
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Criado especialmente para você pela IA
          </p>
        </div>

        {/* Diet Plan */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 mb-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Plano de Dieta</h2>
          </div>
          
          <div className="bg-white/20 rounded-xl p-4 mb-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-white/80 text-sm">Calorias</p>
                <p className="text-2xl font-bold text-white">{generatedPlan.diet.calories}</p>
                <p className="text-white/80 text-xs">kcal/dia</p>
              </div>
              <div>
                <p className="text-white/80 text-sm">Carboidratos</p>
                <p className="text-2xl font-bold text-white">{generatedPlan.diet.macros.carbs}%</p>
              </div>
              <div>
                <p className="text-white/80 text-sm">Proteínas</p>
                <p className="text-2xl font-bold text-white">{generatedPlan.diet.macros.protein}%</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-white font-semibold mb-3">Refeições Sugeridas:</h3>
            {generatedPlan.diet.meals.map((meal, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-3">
                <p className="text-white text-sm">{meal}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workout Plan */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 mb-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Plano de Treino</h2>
          </div>
          
          <div className="bg-white/20 rounded-xl p-4 mb-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-white/80 text-sm">Frequência</p>
                <p className="text-2xl font-bold text-white">{generatedPlan.workout.days}x</p>
                <p className="text-white/80 text-xs">por semana</p>
              </div>
              <div>
                <p className="text-white/80 text-sm">Duração</p>
                <p className="text-2xl font-bold text-white">{userData.time}</p>
                <p className="text-white/80 text-xs">minutos</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-white font-semibold mb-3">Divisão Semanal:</h3>
            {generatedPlan.workout.exercises.slice(0, generatedPlan.workout.days).map((exercise, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-3">
                <p className="text-white text-sm">{exercise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={resetForm}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
          >
            Criar Novo Plano
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl font-bold shadow-lg transition-all">
            Salvar Plano
          </button>
        </div>
      </div>
    )
  }

  if (isGenerating) {
    return (
      <div className="p-4 sm:p-6 max-w-4xl mx-auto flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-75" />
            <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-24 h-24 flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-white animate-pulse" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Gerando seu plano personalizado...
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            A IA está analisando seus dados e criando o melhor plano para você
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Criador Inteligente 🤖
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Responda algumas perguntas e receba um plano personalizado
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Passo {step} de 3
          </span>
          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
            {Math.round((step / 3) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Basic Info */}
      {step === 1 && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Informações Básicas
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Peso (kg)
                </label>
                <input
                  type="number"
                  value={userData.weight}
                  onChange={(e) => setUserData({ ...userData, weight: e.target.value })}
                  placeholder="Ex: 75"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Altura (cm)
                </label>
                <input
                  type="number"
                  value={userData.height}
                  onChange={(e) => setUserData({ ...userData, height: e.target.value })}
                  placeholder="Ex: 175"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Idade
                </label>
                <input
                  type="number"
                  value={userData.age}
                  onChange={(e) => setUserData({ ...userData, age: e.target.value })}
                  placeholder="Ex: 28"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>
            </div>
          </div>

          <button
            onClick={() => setStep(2)}
            disabled={!userData.weight || !userData.height || !userData.age}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2"
          >
            Próximo
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Step 2: Goal & Time */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Qual seu objetivo?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {goals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => setUserData({ ...userData, goal: goal.id })}
                  className={`p-6 rounded-xl border-2 transition-all text-left ${
                    userData.goal === goal.id
                      ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-purple-300"
                  }`}
                >
                  <div className="text-4xl mb-3">{goal.icon}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    {goal.name}
                  </h3>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Tempo disponível
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {timeOptions.map((time) => (
                <button
                  key={time.id}
                  onClick={() => setUserData({ ...userData, time: time.id })}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    userData.time === time.id
                      ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-purple-300"
                  }`}
                >
                  <div className="text-2xl mb-2">{time.icon}</div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {time.name}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(1)}
              className="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
            >
              Voltar
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!userData.goal || !userData.time}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Próximo
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Experience */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Nível de experiência
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {experienceOptions.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setUserData({ ...userData, experience: exp.id })}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    userData.experience === exp.id
                      ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-purple-300"
                  }`}
                >
                  <div className="text-4xl mb-3">{exp.icon}</div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {exp.name}
                  </h3>
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setStep(2)}
              className="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700"
            >
              Voltar
            </button>
            <button
              onClick={handleGenerate}
              disabled={!userData.experience}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Gerar Plano
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
