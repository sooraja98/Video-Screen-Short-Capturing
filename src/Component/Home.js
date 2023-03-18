import React,{useState} from 'react'
import HomePicture from './HomePicture'
import HomeVideo from './HomeVideo'

function Home() {
    const[data,setData]=useState(null)

    const handleGet=(screenshort)=>{
        setData(screenshort)
    }
  

  return (
    <div>
    <div className="flex border-2 h-screen">
      <div className="flex-1 border-r-2">
        < HomeVideo onGet={handleGet}/>
      </div>
      <div className="flex-1">
      < HomePicture data={data}/>
      </div>
    </div>

    </div>
  )
}

export default Home