import { IconType } from 'react-icons'

interface StatsCardProps {
  title: string
  value: number | string
  icon: IconType
  color: 'blue' | 'green' | 'yellow' | 'red' | 'purple'
  change?: string
}

const colorClasses = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  red: 'bg-red-500',
  purple: 'bg-purple-500',
}

export default function StatsCard({ title, value, icon: Icon, color, change }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-800">{value}</p>
          {change && (
            <p className={`text-sm mt-2 ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {change} bu hafta
            </p>
          )}
        </div>
        <div className={`${colorClasses[color]} p-4 rounded-xl text-white`}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  )
}
