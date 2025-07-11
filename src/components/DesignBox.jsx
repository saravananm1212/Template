import React from 'react'

const DesignBox = () => {
  return (

      <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-[#27282A] rounded-xl m-6">
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Your <span className="text-purple-500">AI-Powered</span> <br /> Design Assistant
          </h2>
          <p className="mb-6 text-gray-400 text-lg">
            Unlock your creative potential. Seamlessly generate, customize, and craft your vision with cutting-edge AI technology.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition">Get Started</button>
        </div>
        <img
          src="https://videos.openai.com/vg-assets/assets%2Ftask_01jy0tknxgf56sn6m3jwvaq7td%2F1750227128_img_2.webp?st=2025-06-18T04%3A20%3A15Z&se=2025-06-24T05%3A20%3A15Z&sks=b&skt=2025-06-18T04%3A20%3A15Z&ske=2025-06-24T05%3A20%3A15Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=oEijKTc0C6hIX2N2ZeQCdZ%2F7962kDPYReSfZ%2Bhuy5SQ%3D&az=oaivgprodscus"
          alt="AI Design"
          className="w-80 h-96"
        />
      </div>

      
    
  )
}

export default DesignBox
