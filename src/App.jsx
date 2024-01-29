


import './App.css'
import ChatBody from './componennts/ChatBody'

function App() {


  return (
   <div className='bg-[#1A232E] h-screen py-6 relative sm:px-28 text-white overflow-hidden  flex flex-col justify-between align-middle'>


{/* gradient */}
<div className='gradient-01 z-0 ab'></div>
<div className='gradient-02 z-0 ab'></div>



   {/* header */}
   <div className='uppercase font-bold text-2xl text-center'>
    ChartGpt2.O
   </div>


   {/* body */}
   <div> 
  
<ChatBody/>
   </div>

   {/* input */}
   <div>input</div>
       </div>
      
  )
}

export default App
