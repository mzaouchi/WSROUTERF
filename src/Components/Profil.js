import { useParams } from "react-router-dom"

const Profil=({users})=>{
    const {oussema} = useParams()
   const found = users.find(el=> el.id == oussema)
    return(
        <div>
            <h1>Profil Component</h1>
            <h2>{found.name}</h2>
            <h3>{found.age}</h3>
        </div>
    )
}

export default Profil