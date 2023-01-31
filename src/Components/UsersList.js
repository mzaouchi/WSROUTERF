import UserCard from "./UserCard"

const UsersList=({users})=>{
    return(
        <div>
            {
                users.map(el=> <UserCard key={el.id} el={el}/>)
            }
        </div>
    )
}

export default UsersList