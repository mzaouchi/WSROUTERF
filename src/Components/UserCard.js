import { Link } from "react-router-dom"

const UserCard=({el})=>{
    return(
        <div>
            <h2><Link to={`/user/${el.id}`}>{el.name}</Link></h2>
        </div>
    )
}

export default UserCard