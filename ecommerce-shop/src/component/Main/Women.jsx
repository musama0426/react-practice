import {React, useState,useEffect,useRef} from 'react'

function Women() { 
  const [count, setCount ] = useState(0);
  useEffect(()=> {
    limitFunc();
  }, [count])

  limitFunc((count)=>{
      if(count >= 10){
        console.log("reaced Limit");
      }
  })  
  return (
    <div className='pt-[100px]'>

      {/* <h1 className='px-4 py-4'> Uses of Useeffect Hookes</h1> */}
      {/* <ul>
        <li>1: when component render useeffect chaly ga he chaly ga useEffect(() = > {});</li>
        <li>2: when component mount hum chahty just 1 bar(first time) chaly useEffect(()=> {}, []);</li>
        <li>3: jb hum chahty k kse specific element py he chaly baqi py na chaly useEffect(()=> {}, [name])</li>
        <li>4: jb unmount yani clear krna ho k jse he component chly khtm ho jai state ko clear krny k lye ya socket clear ho hmri  to link is    
            https://react.dev/reference/react/useEffect
      </li>
      </ul> */}
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-3' onClick={() => setCount(count + 1)}>Counter : {count}</button>
    </div> 
  )
}

export default Women