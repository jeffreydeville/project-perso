import { useState } from "react";
import Stat from "./cardComponents/Stat";
import Buttons from "./buttons";


export default function Card({personnage}){
console.table({personnage})    

    const allStat=[
        {stat:'Health❤️',    value:personnage.Health ,unité :'HP '},
        {stat:'Mana💧',      value:personnage.Mana,  unité:'MP'},
        {stat:'Armor🛡️',     value:personnage.Armor,   unité:'PR'},
        {stat:'Magic Amor🟣',value:personnage.MagicArmor,   unité:'MR'},
        {stat:'Att.Dmg⚔️',  value:personnage.AttDmg,    unité:'AD'},
    ]

    return(
        
        <div className='flex flex-col text-center bg-slate-800 bordureFace w-[250px] h-[480px] ShadowBlue overflow-hidden hover:scale-105 relative'>
            
        
            <div className='w-[250px] h-[280px] overflow-hidden '>
                <img src={`src/assets/images/LOL/${personnage.image}`} alt={personnage.name} className='object-cover duration-300 hover:scale-105 ' />
            </div>
            <div className='p-2 '>
                <p className="text-xl text-center font-bold text-white mt-0 select-none ">{personnage.name}</p>
                
                <div className='flex flex-col text-white'>
                {allStat.map((oneStat,index) => ( 
                    <Stat key={index}stat={oneStat.stat}value={oneStat.value} unité={oneStat.unité}/>  
                )
                )}

                </div>
                <div className='flex justify-between mt-2'>
                    <Buttons color="bg-red-500">Attaquer </Buttons>
                    <Buttons color="bg-blue-500">Deffendre </Buttons>
                </div>
            </div>


        </div>
    )
}