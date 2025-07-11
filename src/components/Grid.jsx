import React from 'react'

const Grid = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-around py-16 px-6 ">
        <div className="text-left max-w-md">
          <h4 className="text-2xl font-bold mb-4">High-Resolution Outputs</h4>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut beatae officia harum maxime error? Aspernatur a at nisi ipsam dolores.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg">Try Now</button>
        </div>
        <img src="" alt="Output" className="w-80 mt-10 md:mt-0" />
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-around py-16 px-6">
        <div className="text-left max-w-md">
          <h4 className="text-2xl font-bold mb-4">Real-Time Collaboration</h4>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestiae quia labore, in rem culpa officia aperiam porro esse doloribus.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg">Start Now</button>
        </div>
        <img src="/collaboration.png" alt="Collab" className="w-80 mt-10 md:mt-0" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around py-16 px-6">
        <div className="text-left max-w-md">
          <h4 className="text-2xl font-bold mb-4">Advanced Scheduling Tools</h4>
          <p className="text-gray-400 mb-6">
            Stay organized with automated planning, reminders, and workflow optimization features.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg">Get Started</button>
        </div>
        <img src="/schedule-tools.png" alt="Schedule" className="w-80 mt-10 md:mt-0" />
      </div>
    </div>
  )
}

export default Grid
