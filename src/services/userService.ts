import { fetchUser } from "./Api";

type searchGitUserError = {
  username: string;
  setUser: (user: any) => void;
  setError: (error: string) => void;
};

export const searchGitHubUserParams = async ({
  username,
  setUser,
  setError,
}: searchGitUserError) => {
  if (!username.trim()) {
    setError("Por favor agregue un nombre de usuario");
    setUser(null);
    return;
  }

  try {
    setError(""); // Limpiar cualquier error previo
    setUser(null); // Limpiar los datos del usuario previos
    const userData = await fetchUser(username); // Llamar a la API
    setUser(userData); // Actualizar el estado con los datos del usuario
  } catch (error: any) {
    setError((error.message = "No se encuentra el Usuario"));

    // Manejar el error si ocurre
    setUser(null); // Limpiar los datos del usuario en caso de error
  }
};
