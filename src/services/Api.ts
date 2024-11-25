const BASE_URL = "https://api.github.com/users";

export const fetchUser = async (username: string) => {
  const response = await fetch(`${BASE_URL}/${username}`);

  // Verifica si la respuesta es exitosa.
  if (!response.ok) {
    throw new Error("Usuario no encontrado");
  }
  const data = await response.json();
  return data;
};
