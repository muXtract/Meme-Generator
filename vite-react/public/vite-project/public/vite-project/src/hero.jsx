import React from "react"






export default function hero()

{    const [memeImage,setMemeImage]=React.useState({
    topText:"",
    bottomText:"",
    randomImage:""

})
React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
       .then(res=>res.json())
       .then(data=>setAllMemes(data.data.memes))
       
   },[])
   const[allMemes,setAllMemes]=React.useState([])
   console.log(allMemes)
   console.log(memeImage)
   function handleChange(event)
   {    const{name,value}=event.target
        setMemeImage(prevState=>({
            ...prevState,
            [name]:value
            
            
        })
            
        )
        console.log(memeImage)     
   }
    
      function getMemeImage()
    {   
        
        const memesArray=allMemes //
        const randomNumber=Math.floor(Math.random()*memesArray.length)
        console.log(randomNumber)   
        const url=memesArray[randomNumber].url
        
        setMemeImage(prevState=>(
            
            {
            
            ...prevState,
            
            randomImage:url,
            
            
            
        }))
        

    }
    return(
     
         <main className="p-8">
            <div className="line  flex justify-center gap-7">
                <div  className="top border-yellow-500 border-2 w-40 md:w-80 p-2 shadow-md font-mono">
                    <input onChange={handleChange} value={memeImage.topText}  name="topText" type="text" placeholder="Top Text" className=" w-20 md:text-2xl md:w-40 text-center md:ml-14 " />
                </div>
                <div className="bottom  border-yellow-500 border-2 p-2 w-40 md:w-80 shadow-md font-mono">
                    <input onChange={handleChange} value={memeImage.bottomText} name="bottomText" type="text"  className=" active:bg-none text-center md:ml-16 md:text-2xl md:w-36 w-28 " placeholder="Bottom Text" />
                </div>
            </div>
            <div className="btn  m-10 text-center font-roboto ">
                <button onClick={getMemeImage} id="btn" className="bg-purple-500 text-white shadow-xl border-2 border-black  p-3 ">Get A New Meme Image </button>
            </div>
            <div className="img flex relative justify-center ">
                <img src={memeImage.randomImage} className=" w-96 "  />
                
                <h2 className=" meme--text text-3xl absolute tp "> {memeImage.topText}</h2>
                <h2 className=" meme--text text-3xl absolute bottom-0 bt " >{memeImage.bottomText}</h2>
                
            </div>
            
        </main>
    
    )
}