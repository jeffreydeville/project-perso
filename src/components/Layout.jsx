import {Outlet} from "react-router-dom"
import Footer from "./Footer";
import Navbar from "./NavBar";



export default function Layout(){
    return (
    <main className='flex min-h-svh flex-col'>
        <Navbar/>
        <section className='flex-grow container p-2 background-section'> {/*dis a la section de prendre tout l'espace disponnible sans ecrasser les elements mais en les poussent tout en haut ou tout en bas   */}
            {/* cest ici que les pages enfant de homme page saffiche */}
            <Outlet/>
        </section>
        <Footer/>
    </main>
    )
}