import Card from "../components/Card"

export default function HomePage() {
    
    
    const allPersonnage=[
        {image:'Ahri.avif' , name: "Ahri" , Health:590, Mana:418,Armor:21,MagicArmor:30, AttDmg:53},
        {image:'Akalie.avif' , name: "Akalie" , Health:600, Mana:200,Armor:23,MagicArmor:37, AttDmg:62},
    ]
    
    return(
    <>
        <h1 className=" flex  justify-center container mx-auto font-serif font-black m-6 text-xl textShadow tracking-wider">
            CARTE A COLLECTIONER !!!!!
        </h1>
        <div className="flex item-center justify-center gap-10 flex-wrap">
        {allPersonnage.map((unPersonnage,index)=>(
            <Card key={index} personnage={unPersonnage} />
        ))}
        </div>
    </>
    )

}