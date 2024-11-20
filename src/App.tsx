import { useState, useEffect } from 'react';
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import ErrorMessage from "./components/ErrorMessage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { searchGitHubUserParams } from "./services/userService";
import "./index.css";
import "./components/UserCard.css"
import "./App.css";

interface User {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  public_repos: number;
  following: number;
  followers: number;
}

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Este useEffect aplica la clase "dark-mode" al body cuando el estado cambia
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode'); // Agrega clase dark-mode al body
    } else {
      document.body.classList.remove('dark-mode'); // Elimina la clase del body
    }
  }, [darkMode]); // Solo se ejecutará cuando darkMode cambie


  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Alternar el modo oscuro
  };
  const handleSearch = (username: string) => {
    searchGitHubUserParams({ username, setUser, setError }); // uso la funcion importada de userService.ts
  };
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Búsqueda de Usuarios de GitHub</h1>
      <button onClick={toggleDarkMode} className="btn-dark-mode btn btn-dark mb-4">
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>
      {/* renderizo SearchBar */}
      <SearchBar onSearch={handleSearch} />
      {/* renderizo message con el condicional error si es true muestra el mensaje de error */}
      {error && <ErrorMessage message={error} />}
      {/* renderizo UseCard */}
      {user && <UserCard user={user} />}
    </div>
  );
};

export default App;
