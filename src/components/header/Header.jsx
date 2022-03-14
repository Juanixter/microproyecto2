import { Link } from 'react-router-dom'
import { userContext } from '../../context/UserContext'
import styles from "./Header.module.css"
import { useContext } from 'react'
import { auth } from '../../utils/firebase-config'

export default function Header() {

  const {usuario} = useContext(userContext)

  const handleLogout = async () => {
    await auth.signOut()
  }

  return (
    <div className={styles.box}>
      <h1>Cartelera Caracas</h1>
      {!usuario ? (
              <ul className={styles.lista}>
              <li className={styles.links}>
                <Link to='/login'>Login</Link>
              </li>
              <li className={styles.links}>
                <Link to='/signUp'>Sign Up</Link>
              </li>
            </ul>
      ) : (
        <ul className={styles.lista}>
        <li className={styles.links}>
          {usuario.name}
        </li>
        <li className={styles.links}>
          <button type='button' onClick={handleLogout}></button>
        </li>
      </ul>
      )}

    </div>
  )
}
