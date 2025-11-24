"use client"

import { useState } from "react"
import { ChevronRight, Flame, Leaf, TrendingUp, TrendingDown, BookOpen, ChefHat } from "lucide-react"

type DietPlan = {
  id: string
  name: string
  description: string
  icon: any
  color: string
  calories: string
  macros: { carbs: number; protein: number; fat: number }
  foods: string[]
  recipes: { name: string; calories: number; time: string }[]
}

const dietPlans: DietPlan[] = [
  {
    id: "lowcarb",
    name: "Low Carb",
    description: "Redução de carboidratos para queima de gordura",
    icon: Leaf,
    color: "from-green-400 to-emerald-600",
    calories: "1500-1800 kcal/dia",
    macros: { carbs: 20, protein: 40, fat: 40 },
    foods: [
      "Carnes magras (frango, peixe, carne vermelha)",
      "Ovos",
      "Vegetais folhosos (espinafre, couve, alface)",
      "Abacate",
      "Azeite de oliva",
      "Queijos",
      "Nozes e castanhas",
      "Brócolis e couve-flor"
    ],
    recipes: [
      { name: "Omelete com Espinafre e Queijo", calories: 320, time: "10 min" },
      { name: "Frango Grelhado com Brócolis", calories: 380, time: "20 min" },
      { name: "Salada Caesar com Salmão", calories: 420, time: "15 min" },
      { name: "Carne com Legumes Refogados", calories: 450, time: "25 min" }
    ]
  },
  {
    id: "keto",
    name: "Cetogênica",
    description: "Altíssima gordura, baixíssimo carboidrato",
    icon: Flame,
    color: "from-orange-400 to-red-600",
    calories: "1600-2000 kcal/dia",
    macros: { carbs: 5, protein: 25, fat: 70 },
    foods: [
      "Bacon e linguiça",
      "Manteiga e ghee",
      "Abacate",
      "Óleo de coco",
      "Queijos gordos",
      "Salmão e atum",
      "Ovos",
      "Vegetais com baixo carboidrato"
    ],
    recipes: [
      { name: "Café Bulletproof", calories: 450, time: "5 min" },
      { name: "Bacon com Ovos e Abacate", calories: 520, time: "12 min" },
      { name: "Salmão ao Molho de Manteiga", calories: 580, time: "18 min" },
      { name: "Bife com Manteiga de Ervas", calories: 620, time: "20 min" }
    ]
  },
  {
    id: "bulking",
    name: "Ganho de Massa",
    description: "Alto consumo calórico para hipertrofia",
    icon: TrendingUp,
    color: "from-blue-400 to-indigo-600",
    calories: "2800-3500 kcal/dia",
    macros: { carbs: 50, protein: 30, fat: 20 },
    foods: [
      "Arroz integral",
      "Batata doce",
      "Aveia",
      "Frango e carne vermelha",
      "Ovos",
      "Pasta de amendoim",
      "Banana e frutas",
      "Whey protein",
      "Pão integral"
    ],
    recipes: [
      { name: "Panqueca de Aveia com Banana", calories: 450, time: "15 min" },
      { name: "Frango com Arroz e Batata Doce", calories: 680, time: "30 min" },
      { name: "Macarrão Integral com Carne Moída", calories: 720, time: "25 min" },
      { name: "Vitamina Hipercalórica", calories: 850, time: "5 min" }
    ]
  },
  {
    id: "cutting",
    name: "Emagrecimento",
    description: "Déficit calórico controlado",
    icon: TrendingDown,
    color: "from-purple-400 to-pink-600",
    calories: "1200-1500 kcal/dia",
    macros: { carbs: 30, protein: 45, fat: 25 },
    foods: [
      "Peito de frango",
      "Peixe branco",
      "Clara de ovos",
      "Vegetais variados",
      "Frutas vermelhas",
      "Iogurte grego light",
      "Quinoa",
      "Chá verde"
    ],
    recipes: [
      { name: "Omelete de Claras com Vegetais", calories: 180, time: "10 min" },
      { name: "Salada de Frango Grelhado", calories: 280, time: "15 min" },
      { name: "Peixe ao Vapor com Legumes", calories: 320, time: "20 min" },
      { name: "Iogurte com Frutas Vermelhas", calories: 150, time: "5 min" }
    ]
  }
]

export default function DietTab() {
  const [selectedPlan, setSelectedPlan] = useState<DietPlan | null>(null)
  const [activeView, setActiveView] = useState<"foods" | "recipes">("foods")

  if (selectedPlan) {
    const Icon = selectedPlan.icon
    return (
      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        {/* Header */}
        <button
          onClick={() => setSelectedPlan(null)}
          className="text-blue-600 dark:text-blue-400 font-medium mb-4 hover:underline"
        >
          ← Voltar aos planos
        </button>

        <div className={`bg-gradient-to-r ${selectedPlan.color} rounded-2xl p-6 mb-6 shadow-lg`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-4 rounded-xl">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{selectedPlan.name}</h1>
              <p className="text-white/90">{selectedPlan.description}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white/80 text-sm">Calorias</p>
              <p className="text-white font-bold">{selectedPlan.calories}</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white/80 text-sm">Carboidratos</p>
              <p className="text-white font-bold">{selectedPlan.macros.carbs}%</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white/80 text-sm">Proteínas</p>
              <p className="text-white font-bold">{selectedPlan.macros.protein}%</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white/80 text-sm">Gorduras</p>
              <p className="text-white font-bold">{selectedPlan.macros.fat}%</p>
            </div>
          </div>
        </div>

        {/* Toggle View */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveView("foods")}
            className={`flex-1 py-3 rounded-lg font-medium transition-all ${
              activeView === "foods"
                ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
          >
            <BookOpen className="w-5 h-5 inline mr-2" />
            Alimentos
          </button>
          <button
            onClick={() => setActiveView("recipes")}
            className={`flex-1 py-3 rounded-lg font-medium transition-all ${
              activeView === "recipes"
                ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            }`}
          >
            <ChefHat className="w-5 h-5 inline mr-2" />
            Receitas
          </button>
        </div>

        {/* Foods List */}
        {activeView === "foods" && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Alimentos Permitidos
            </h3>
            <div className="space-y-3">
              {selectedPlan.foods.map((food, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <p className="text-gray-700 dark:text-gray-300">{food}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recipes List */}
        {activeView === "recipes" && (
          <div className="space-y-4">
            {selectedPlan.recipes.map((recipe, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {recipe.name}
                    </h4>
                    <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Flame className="w-4 h-4" />
                        {recipe.calories} kcal
                      </span>
                      <span>⏱️ {recipe.time}</span>
                    </div>
                  </div>
                  <ChefHat className="w-6 h-6 text-orange-500" />
                </div>
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-2 rounded-lg font-medium transition-all">
                  Ver Receita Completa
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Planos de Dieta 🥗
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Escolha o plano ideal para seu objetivo
        </p>
      </div>

      {/* Diet Plans Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {dietPlans.map((plan) => {
          const Icon = plan.icon
          return (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan)}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all text-left group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-gradient-to-r ${plan.color} p-4 rounded-xl`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {plan.description}
              </p>
              <div className="flex gap-2 text-xs">
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">
                  {plan.calories}
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">
                  {plan.recipes.length} receitas
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Daily Meal Tracker */}
      <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 shadow-lg">
        <h3 className="text-white font-semibold text-lg mb-4">Registro de Hoje</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/20 rounded-lg p-4 text-center">
            <p className="text-white/80 text-sm mb-1">Café</p>
            <p className="text-2xl font-bold text-white">420</p>
            <p className="text-white/80 text-xs">kcal</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4 text-center">
            <p className="text-white/80 text-sm mb-1">Almoço</p>
            <p className="text-2xl font-bold text-white">680</p>
            <p className="text-white/80 text-xs">kcal</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4 text-center">
            <p className="text-white/80 text-sm mb-1">Jantar</p>
            <p className="text-2xl font-bold text-white">350</p>
            <p className="text-white/80 text-xs">kcal</p>
          </div>
        </div>
      </div>
    </div>
  )
}
