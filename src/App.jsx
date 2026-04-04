import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center space-y-6 transform transition-all hover:scale-105">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Tailwind is Working!
        </h1>
        
        <p className="text-gray-500 leading-relaxed">
          Your React project is now successfully configured with Tailwind CSS v4. You're ready to start building amazing user interfaces.
        </p>
        
        <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App
