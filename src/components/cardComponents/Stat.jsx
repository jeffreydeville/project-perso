import { useState } from "react";





export default function Stat({stat,value,unité}){

    const [statValue,setStatValue] = useState(value)

    return(
        <div className="flex justify-between">
                <p className="font-bold">{stat}: </p>
                <div className='flex'>
                            
                    <div
                    onClick={()=>upHealth()}
                    className='cursor-pointer'
                    onClickCapture={()=>setStatValue(statValue+1)}
                    >🔼
                    </div>

                    <p>{statValue} <span className='text-white font-bold'>{unité}</span></p>
                    
                    <div 
                    onClick={()=>downHealth()}
                    className='cursor-pointer'
                    onClickCapture={()=>setStatValue(statValue-1)}
                    >🔽
                    </div>

                </div>
                
            </div>
            
    );
}