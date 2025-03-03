import { onAuthStateChanged } from "firebase/auth"
import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"
import { auth } from "./components/lib/firebase"
import { useEffect } from "react"
import { useUserStore} from "./components/lib/userStore"


const App = () => {

 const {currentUser, isLoading, fetchUserInfo} = useUserStore();

 useEffect(() => {
  const unSub = onAuthStateChanged(auth, (user) => {
    console.log("Usuário autenticado:", user);

    if (user) {
      fetchUserInfo(user.uid);
    } else {
      useUserStore.setState({ currentUser: null, isLoading: false });
    }
  });

  return () => {
    unSub();
  };
}, [fetchUserInfo]);


  console.log(currentUser);
  if(isLoading) return <div className="loading">Loading......</div>

  return (
    <div className='container'>
    {
      currentUser ? (
        <>
        <List />
        <Chat />
        <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  )
}

export default App