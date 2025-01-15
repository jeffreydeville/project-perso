export default function Buttons({color,children}) {
    return(
        <button className={`px-2 py-1 ${color} border-2 border-neutral-400 rounded-xl hover:border-neutral-700 hover:bg-opacity-90 duration-300 text-white` }>
        {children}
        </button>
        
    )
}