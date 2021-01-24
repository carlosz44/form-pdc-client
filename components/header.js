import { useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import authContext from "../context/auth/authContext";

export default function Header() {
  const AuthContext = useContext(authContext);
  const { authenticatedUser, logOut, user } = AuthContext;
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      authenticatedUser();
    }
  }, []);

  return (
    <header className="shadow-sm">
      <div className="flex flex-wrap items-center justify-center lg:justify-between lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
        <Link href="/">
          <a>
            <Image
              src="/logopdc.png"
              width={200}
              height={92}
              priority
              alt="Polvos de Chorrillos"
            />
          </a>
        </Link>
        {user ? (
          <>
            <span>Hola admin!</span>

            <button
              className="py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-white bg-pdc-orange hover:bg-pdc-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pdc-purple transition duration-500"
              type="button"
              onClick={() => logOut()}
            >
              Cerrar Sesión
            </button>
          </>
        ) : (
          <Link href="/register">
            <a className="hidden lg:block py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-white bg-pdc-orange hover:bg-pdc-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pdc-purple transition duration-500">
              Registrar Documentos
            </a>
          </Link>
        )}
      </div>
    </header>
  );
}
