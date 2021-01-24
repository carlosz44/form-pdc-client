// import Image from "next/image";
import { useContext, useEffect } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import authContext from "../context/auth/authContext";
import Alert from "../components/Alert";

export default function Login() {
  const AuthContext = useContext(authContext);
  const { message, authenticated, loginAdmin } = AuthContext;

  // Next router
  const router = useRouter();

  useEffect(() => {
    if (authenticated) {
      router.push("/reports");
    }
  }, [authenticated]);

  const { handleSubmit, values, handleChange, handleBlur } = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validationSchema: Yup.object({
      user: Yup.string().required("El Usuario es Obligatorio"),
      password: Yup.string().required("El password no puede ser vacío"),
    }),
    onSubmit: (datos) => {
      loginAdmin(datos);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="mb-4 text-lg font-medium leading-6 text-gray-900">
        Ingresar
      </h2>
      {message && <Alert />}
      <div className="max-w-md w-full space-y-8 shadow overflow-hidden sm:rounded-md px-4 py-5 bg-white sm:p-6">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="user" className="sr-only">
                Usuario
              </label>
              <input
                id="user"
                name="user"
                type="user"
                autoComplete="user"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:ring-1 focus:outline-none focus:ring-pdc-purple focus:border-pdc-purple focus:z-10 sm:text-sm"
                placeholder="Usuario"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:ring-1 focus:outline-none focus:ring-pdc-purple focus:border-pdc-purple focus:z-10 sm:text-sm"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-pdc-purple hover:bg-pdc-dark-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pdc-purple transition duration-500"
              value="Iniciar Sesión"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
