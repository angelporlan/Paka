
import React from 'react';
import { UserGoal } from '../types/nutrition';
import { Dumbbell, TrendingDown, Heart } from 'lucide-react';

interface UserGoalSelectorProps {
  selectedGoal: UserGoal;
  onGoalChange: (goal: UserGoal) => void;
}

export const UserGoalSelector: React.FC<UserGoalSelectorProps> = ({
  selectedGoal,
  onGoalChange
}) => {
  const goals = [
    {
      id: 'deportista' as UserGoal,
      label: 'Deportista',
      subtitle: 'Ganar masa muscular',
      icon: Dumbbell,
      color: 'from-blue-500 to-cyan-500',
      description: 'Prioriza proteínas y carbohidratos'
    },
    {
      id: 'perder-peso' as UserGoal,
      label: 'Perder peso',
      subtitle: 'Déficit calórico',
      icon: TrendingDown,
      color: 'from-orange-500 to-red-500',
      description: 'Controla calorías y azúcares'
    },
    {
      id: 'salud-general' as UserGoal,
      label: 'Salud general',
      subtitle: 'Alimentación equilibrada',
      icon: Heart,
      color: 'from-green-500 to-emerald-500',
      description: 'Balance nutricional completo'
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg lg:text-xl font-semibold text-gray-800 mb-3">¿Cuál es tu objetivo?</h2>
      
      <div className="grid gap-3 lg:gap-4">
        {goals.map((goal) => {
          const Icon = goal.icon;
          const isSelected = selectedGoal === goal.id;
          
          return (
            <button
              key={goal.id}
              onClick={() => onGoalChange(goal.id)}
              className={`
                relative p-4 lg:p-5 rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.02]
                ${isSelected 
                  ? 'border-green-500 bg-green-50 shadow-lg shadow-green-500/25' 
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }
              `}
            >
              <div className="flex items-center gap-4">
                <div className={`
                  w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center
                  bg-gradient-to-br ${goal.color} shadow-md
                `}>
                  <Icon size={20} className="text-white lg:w-6 lg:h-6" />
                </div>
                
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-900 lg:text-lg">{goal.label}</h3>
                  <p className="text-sm lg:text-base text-gray-600">{goal.subtitle}</p>
                  <p className="text-xs lg:text-sm text-gray-500 mt-1">{goal.description}</p>
                </div>
                
                {isSelected && (
                  <div className="w-6 h-6 lg:w-7 lg:h-7 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
