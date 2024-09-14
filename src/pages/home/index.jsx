import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";

function Home() {

  const [users, setUsers] = useState([]);

  const inputName = useRef(null);
  const inputAge = useRef(null);
  const inputEmail = useRef(null);

  async function getUsers() {
    const usersFromApi = await api.get("/usuarios")
    setUsers(usersFromApi.data)
  }

  useEffect(() => {
    getUsers()
  }, [])
  async function createUser() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    getUsers()
  }

  async function deleteUser(id) {
    await api.delete(`/usuarios/${id}`)
    getUsers()
  }

  return (
    <div className="container">
      <form className="form">
        <h1>Cadastro de Usuários</h1>
        <input name="nome" type="text" placeholder="Nome" ref={inputName} />
        <input name="idade" type="number" placeholder="Idade" ref={inputAge} />
        <input name="email" type="text" placeholder="Email" ref={inputEmail} />
        <button type="button" onClick={createUser}>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span> {user.name} </span> </p>
            <p>Idade: <span> {user.age} </span> </p>
            <p>Email: <span> {user.email} </span> </p>
          </div>
          <button onClick={() => deleteUser(user.id)}>
            <img src={Trash} />
          </button>
        </div>
      ))}

    </div>
  );
}

export default Home;
