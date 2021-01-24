import { useContext, useEffect } from "react";
// import Image from "next/image";
import authContext from "../context/auth/authContext";

export default function Reports() {
  // Auth user from Local Storage
  const AuthContext = useContext(authContext);
  const { authenticatedUser, user } = AuthContext;

  // Extraer el mensaje de error de archivos
  // const AppContext = useContext(appContext);
  // const { mensaje_archivo, url } = AppContext;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      authenticatedUser();
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {user ? (
        <p>Próximamente página de reportes</p>
      ) : (
        <p>UD NO ESTÁ AUTORIZADO</p>
      )}
    </div>
  );
}
