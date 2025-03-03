import "./addUser.css"

const AddUser = () =>{
    return (
        <div className="addUser">
            <form>
                <input type="text" placeholder="Username" name="username"/>
                <button>Search</button>
            </form>
            <div className="user">
                <div className="datail">
                    <img src="./avatar.png"/>
                    <span>Kaio lopes</span>
                </div>
                <button>Add User</button>
            </div>
        </div>
    )
}

export default AddUser;