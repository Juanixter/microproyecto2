import Header from "../components/header/Header";
import { db, auth, googleProvider } from "../utils/firebase-config";
import styles from '../utils/emergencia.css';
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { userContext } from "../context/UserContext";

export default function Registro() {

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await auth.createUserWithEmailAndPassword(data.email, data.password);
    navigate("/");
  };

  const contexto = useContext(userContext)

  const handleLoginWithGoogle = async () => {
    await auth.signInWithPopup(googleProvider);
    navigate("/");
  };

  return (
    <div>
      <Header/>
      <section>
        <h3 className="titulo">Registro local</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="titulo">Email</p>
          <input {...register("email")} type="text" />
          <p className="titulo">Password</p>
          <input {...register("password")} type="text" />
          <button type="submit" className="registro">Registrarse</button>
        </form>
        <button type="button" className="boton" onClick={handleLoginWithGoogle} >
          Registro con Google
        </button>
      </section>
    </div>
  )
}
