import React from "react"
import trollFace from "/src/assets/images/troll-face.png"
export default function nav(){
  return (
    <div className="container">
      <nav className="flex  bg-purple-600 ">
        <div className="left  flex space-x-6 ">
          <img src={trollFace} alt="troll-face" width={70} />
          <h1 className=" heading text-lg mt-3 md:text-2xl font-bold text-white">Meme Generator
          </h1>
        </div>
        <div className="right flex ml-auto mt-3 mr-10 ">
          <h2 className="md:text-xl  text-lg text-white">Using React</h2>
        </div>

      </nav>
    </div>
  )
}