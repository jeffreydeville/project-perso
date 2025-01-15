import {Link, NavLink} from "react-router-dom";


export default function Navbar(){
    
    
    const navItems = [
        {text:'Home', path:'/'},
        {text:'All-cards', path:'/All-cards'},
        {text:'Erreur page', path:'/onverra'},
    ]

    
    return(
        <>
            <nav className='p-4 mb-1 border-2 border-bottom customShadow'>
                
                    <div className="flex gap-40 justify-center text-xl container mx-auto">
                        {navItems.map((item,index)=>(
                            <NavLink key={index} to={item.path} 
                            className={({isActive})=>isActive?'text-yellow-200  font-bold  tracking-wider textShadow2':''}>
                            
                                {item.text}
                            </NavLink>
                        ))}
                    </div>
                
            </nav>
        </> 
    )
}