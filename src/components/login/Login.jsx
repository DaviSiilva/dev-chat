import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { db } from "../lib/firebase";

import { doc, setDoc } from "firebase/firestore";
import upload from "../lib/upload";


const Login = () =>{
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    });

const [loanding, setLoanding] = useState(false);

    const handleAvatar = e =>{
        if(e.target.files[0]){

            setAvatar({
                file:e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    };

    const handleLogin = async e =>{
        e.preventDefault()
                              //toast.warn("Hello") notification of status.
        setLoanding(true);

        const formData = new FormData(e.target);
        const {email, password } = Object.fromEntries(formData);


        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }finally {
            setLoanding(false);
        }
    };

    const handleRegsiter = async (e) => {
        e.preventDefault();
        setLoanding(true);
        const formData = new FormData(e.target);
        const { username, email, password } = Object.fromEntries(formData);
      
        try {
          const res = await createUserWithEmailAndPassword(auth, email, password);
      
          // Tenta fazer o upload, mesmo que não tenha imagem
          const imgUrl = await upload(avatar.file);
      
          await setDoc(doc(db, "users", res.user.uid), {
            username,
            email,
            avatar: imgUrl, // Usará a imagem padrão se não houver upload(não vai kkk, pois o storege no firebase é pago )
            id: res.user.uid,
            blocked: [],
          });
      
          await setDoc(doc(db, "userchats", res.user.uid), {
            chats: [],
          });
      
          toast.success("Conta Criada! Você pode fazer login agora");
        } catch (err) {
          console.log(err);
          toast.error(err.message);
        } finally{
            setLoanding(false);
        }
      };
      


    return (
        <div className="login">
            <div className="item">
                <h2>Welcome back,</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" name="email"/>
                    <input type="password" placeholder="Password" name="password"/>
                    <button disabled={loanding}>{loanding ? "loanding" : "Sing in"}</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form onSubmit={handleRegsiter}>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} />
                    Upload an image</label>
                    <input type="file" id="file" style={{display: "none"}} onChange={handleAvatar}/>
                    <input type="text" placeholder="Username" name="username"/>
                    <input type="text" placeholder="Email" name="email"/>
                    <input type="password" placeholder="Password" name="password"/>
                    <button disabled={loanding}>{loanding ? "loanding" : "Sing up"}</button>
                </form>
            </div>
        </div>
    )
};

export default Login;