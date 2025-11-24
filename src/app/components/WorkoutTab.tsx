"use client"

import { useState } from "react"
import { ChevronRight, Dumbbell, Home, Zap, TrendingDown, TrendingUp, Clock, Repeat } from "lucide-react"

type Exercise = {
  name: string
  sets: string
  reps: string
  rest: string
  image: string
}

type WorkoutPlan = {
  id: string
  name: string
  description: string
  icon: any
  color: string
  duration: string
  difficulty: string
  exercises: Exercise[]
}

const workoutPlans: WorkoutPlan[] = [
  {
    id: "weight-loss",
    name: "Emagrecimento",
    description: "Treino focado em queima de gordura",
    icon: TrendingDown,
    color: "from-red-400 to-pink-600",
    duration: "40-50 min",
    difficulty: "Intermediário",
    exercises: [
      { name: "Burpees", sets: "4", reps: "15", rest: "45s", image: "🏃" },
      { name: "Mountain Climbers", sets: "4", reps: "20", rest: "30s", image: "🧗" },
      { name: "Jump Squats", sets: "4", reps: "15", rest: "45s", image: "🦵" },
      { name: "High Knees", sets: "3", reps: "30s", rest: "30s", image: "🏃" },
      { name: "Prancha", sets: "3", reps: "45s", rest: "30s", image: "🧘" },
      { name: "Jumping Jacks", sets: "4", reps: "30", rest: "30s", image: "🤸" }
    ]
  },
  {
    id: "hypertrophy",
    name: "Hipertrofia",
    description: "Ganho de massa muscular",
    icon: TrendingUp,
    color: "from-blue-400 to-indigo-600",
    duration: "60-75 min",
    difficulty: "Avançado",
    exercises: [
      { name: "Supino Reto", sets: "4", reps: "8-12", rest: "90s", image: "💪" },
      { name: "Agachamento Livre", sets: "4", reps: "8-12", rest: "2min", image: "🦵" },
      { name: "Levantamento Terra", sets: "4", reps: "6-10", rest: "2min", image: "🏋️" },
      { name: "Desenvolvimento", sets: "4", reps: "10-12", rest: "90s", image: "💪" },
      { name: "Remada Curvada", sets: "4", reps: "10-12", rest: "90s", image: "🚣" },
      { name: "Rosca Direta", sets: "3", reps: "12-15", rest: "60s", image: "💪" }
    ]
  },
  {
    id: "functional",
    name: "Funcional",
    description: "Treino completo do corpo",
    icon: Zap,
    color: "from-yellow-400 to-orange-600",
    duration: "45-55 min",
    difficulty: "Intermediário",
    exercises: [
      { name: "Kettlebell Swing", sets: "4", reps: "15", rest: "60s", image: "🏋️" },
      { name: "Box Jump", sets: "3", reps: "12", rest: "60s", image: "📦" },
      { name: "Battle Rope", sets: "4", reps: "30s", rest: "45s", image: "🪢" },
      { name: "Medicine Ball Slam", sets: "4", reps: "15", rest: "45s", image: "⚽" },
      { name: "TRX Row", sets: "3", reps: "15", rest: "60s", image: "🚣" },
      { name: "Farmer's Walk", sets: "3", reps: "40m", rest: "90s", image: "🚶" }
    ]
  },
  {
    id: "home",
    name: "Treino em Casa",
    description: "Sem equipamentos necessários",
    icon: Home,
    color: "from-green-400 to-emerald-600",
    duration: "30-40 min",
    difficulty: "Iniciante",
    exercises: [
      { name: "Flexões", sets: "4", reps: "15-20", rest: "60s", image: "💪" },
      { name: "Agachamento", sets: "4", reps: "20", rest: "60s", image: "🦵" },
      { name: "Prancha", sets: "3", reps: "60s", rest: "45s", image: "🧘" },
      { name: "Lunges", sets: "3", reps: "15/perna", rest: "60s", image: "🦵" },
      { name: "Abdominais", sets: "4", reps: "25", rest: "45s", image: "🔥" },
      { name: "Polichinelos", sets: "3", reps: "30", rest: "30s", image: "🤸" }
    ]
  },
  {
    id: "gym",
    name: "Academia Completo",
    description: "Treino com equipamentos",
    icon: Dumbbell,
    color: "from-purple-400 to-pink-600",
    duration: "60-70 min",
    difficulty: "Intermediário",
    exercises: [
      { name: "Leg Press", sets: "4", reps: "12-15", rest: "90s", image: "🦵" },
      { name: "Puxada Frontal", sets: "4", reps: "10-12", rest: "75s", image: "🚣" },
      { name: "Crucifixo", sets: "3", reps: "12-15", rest: "60s", image: "💪" },
      { name: "Cadeira Extensora", sets: "3", reps: "15", rest: "60s", image: "🦵" },
      { name: "Tríceps Pulley", sets: "3", reps: "15", rest: "60s", image: "💪" },
      { name: "Rosca Scott", sets: "3", reps: "12", rest: "60s", image: "💪" }
    ]
  }
]

export default function WorkoutTab() {
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutPlan | null>(null)
  const [completedExercises, setCompletedExercises] = useState<number[]>([])

  const toggleExercise = (index: number) => {
    if (completedExercises.includes(index)) {
      setCompletedExercises(completedExercises.filter(i => i !== index))
    } else {
      setCompletedExercises([...completedExercises, index])
    }
  }

  if (selectedWorkout) {
    const Icon = selectedWorkout.icon
    const progress = (completedExercises.length / selectedWorkout.exercises.length) * 100

    return (
      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        {/* Header */}
        <button
          onClick={() => {
            setSelectedWorkout(null)
            setCompletedExercises([])
          }}
          className="text-blue-600 dark:text-blue-400 font-medium mb-4 hover:underline"
        >
          ← Voltar aos treinos
        </button>

        <div className={`bg-gradient-to-r ${selectedWorkout.color} rounded-2xl p-6 mb-6 shadow-lg`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-4 rounded-xl">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{selectedWorkout.name}</h1>
              <p className="text-white/90">{selectedWorkout.description}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white/80 text-sm">Duração</p>
              <p className="text-white font-bold">{selectedWorkout.duration}</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white/80 text-sm">Dificuldade</p>
              <p className="text-white font-bold">{selectedWorkout.difficulty}</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-white/80 text-sm">Exercícios</p>
              <p className="text-white font-bold">{selectedWorkout.exercises.length}</p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Progresso</h3>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {completedExercises.length} de {selectedWorkout.exercises.length} exercícios concluídos
          </p>
        </div>

        {/* Exercises List */}
        <div className="space-y-4">
          {selectedWorkout.exercises.map((exercise, index) => {
            const isCompleted = completedExercises.includes(index)
            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 transition-all ${
                  isCompleted
                    ? "border-green-500 dark:border-green-400"
                    : "border-gray-100 dark:border-gray-700"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{exercise.image}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className={`text-lg font-bold mb-2 ${
                          isCompleted 
                            ? "text-green-600 dark:text-green-400 line-through" 
                            : "text-gray-900 dark:text-white"
                        }`}>
                          {exercise.name}
                        </h4>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <Repeat className="w-4 h-4" />
                            {exercise.sets} séries
                          </span>
                          <span className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            {exercise.reps} reps
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {exercise.rest} descanso
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleExercise(index)}
                      className={`w-full py-3 rounded-lg font-medium transition-all ${
                        isCompleted
                          ? "bg-green-500 hover:bg-green-600 text-white"
                          : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                      }`}
                    >
                      {isCompleted ? "✓ Concluído" : "Marcar como Concluído"}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Complete Workout Button */}
        {progress === 100 && (
          <div className="mt-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-2">🎉 Parabéns!</h3>
            <p className="text-white/90 mb-4">Você completou o treino!</p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Registrar Treino
            </button>
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
          Treinos 💪
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Escolha seu treino e comece agora
        </p>
      </div>

      {/* Workout Plans Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {workoutPlans.map((plan) => {
          const Icon = plan.icon
          return (
            <button
              key={plan.id}
              onClick={() => setSelectedWorkout(plan)}
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
              <div className="flex gap-2 text-xs flex-wrap">
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">
                  ⏱️ {plan.duration}
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">
                  {plan.difficulty}
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">
                  {plan.exercises.length} exercícios
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Weekly Schedule */}
      <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 shadow-lg">
        <h3 className="text-white font-semibold text-lg mb-4">Treinos da Semana</h3>
        <div className="space-y-2">
          {["Segunda", "Terça", "Quarta", "Quinta", "Sexta"].map((day, index) => (
            <div key={day} className="bg-white/20 rounded-lg p-3 flex items-center justify-between">
              <span className="text-white font-medium">{day}</span>
              <span className="text-white/80 text-sm">
                {index % 2 === 0 ? "Hipertrofia" : "Funcional"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
