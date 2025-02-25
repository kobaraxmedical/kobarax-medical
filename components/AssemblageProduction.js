import { Check } from 'lucide-react'

export default function AssemblageProduction(props) {
    const { icon: Icon, title, description } = props;
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 rounded-full p-3 mr-4 group-hover:bg-[#DFF8FF] transition-colors">
            <Icon className="w-8 h-8 text-[#1e6c92] group-hover:text-[#1e6c92] transition-colors" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#1e6c92] transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      <div className="h-1 w-full bg-[#1e6c92] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}

