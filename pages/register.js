import { useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import authContext from "../context/auth/authContext";
import appContext from "../context/app/appContext";
import Alert from "../components/Alert";
import Dropzone from "../components/Dropzone";

export default function Register() {
  const AuthContext = useContext(authContext);
  const { message, registerUser } = AuthContext;

  const AppContext = useContext(appContext);
  const { message_file, url, cleanState } = AppContext;

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      idType: "",
      documentId: "",
      retailSpaceType: "",
      retailSpaceNumber: "",
      mode: "",
      ammount: "",
      contractUrl: "",
      // depositsUrl: "",
      // receiptsUrl: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("El Nombre es Obligatorio"),
      lastName: Yup.string().required("Los Apellidos son Obligatorios"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El Correo Electrónico es Obligatorio"),
      phone: Yup.string().required("El Teléfono es Obligatorio"),
      idType: Yup.string().required("El Tipo de Documento es Obligatorio"),
      documentId: Yup.string().required(
        "El Número de Documento es Obligatorio"
      ),
      retailSpaceType: Yup.string().required("El Tipo de Local es Obligatorio"),
      retailSpaceNumber: Yup.string().required(
        "El Número de Local es Obligatorio"
      ),
      mode: Yup.string().required("La Modalidad de Compra es Obligatoria"),
      ammount: Yup.string().required("El Monto Abonado es Obligatorio"),
      // contractUrl: Yup.string().required(
      //   "La Copia del Contrato es Obligatoria"
      // ),
      // depositsUrl: Yup.string().required(
      //   "El Voucher de Depósito es Obligatorio"
      // ),
      // receiptsUrl: Yup.string().required(
      //   "El Recibo de Depósito es Obligatorio"
      // ),
    }),
    onSubmit: (datos) => {
      registerUser(datos);
      cleanState();
    },
  });

  return (
    <>
      <div className="mt-5 md:mt-0 md:col-span-2 mx-auto max-w-3xl">
        <h2 className="mb-4 text-lg font-medium leading-6 text-gray-900">
          Registro de Información
        </h2>
        {message && <Alert />}
        {message_file && <Alert />}
        <form onSubmit={handleSubmit}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombres
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pdc-purple focus:border-pdc-purple focus:ring-1 sm:text-sm"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.firstName && errors.firstName ? (
                    <div className="my-2 bg-gray-50 border-l-4 border-red-700 text-red-700 p-4 text-sm">
                      <p className="">Error: {errors.firstName} </p>
                    </div>
                  ) : null}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apellidos
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pdc-purple focus:border-pdc-purple focus:ring-1 sm:text-sm"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.lastName && errors.lastName ? (
                    <div className="my-2 bg-gray-50 border-l-4 border-red-700 text-red-700 p-4 text-sm">
                      <p className="">Error: {errors.lastName} </p>
                    </div>
                  ) : null}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pdc-purple focus:border-pdc-purple focus:ring-1 sm:text-sm"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email ? (
                    <div className="my-2 bg-gray-50 border-l-4 border-red-700 text-red-700 p-4 text-sm">
                      <p className="">Error: {errors.email} </p>
                    </div>
                  ) : null}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Teléfono
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pdc-purple focus:border-pdc-purple focus:ring-1 sm:text-sm"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.phone && errors.phone ? (
                    <div className="my-2 bg-gray-50 border-l-4 border-red-700 text-red-700 p-4 text-sm">
                      <p className="">Error: {errors.phone} </p>
                    </div>
                  ) : null}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="idType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tipo de Documento
                  </label>
                  <select
                    id="idType"
                    name="idType"
                    autoComplete="idType"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pdc-purple focus:border-pdc-purple focus:ring-1 sm:text-sm"
                    value={values.idType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">--Elija una opción--</option>
                    <option value="DNI">DNI</option>
                    <option value="CE">CE</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {touched.idType && errors.idType ? (
                    <div className="my-2 bg-gray-50 border-l-4 border-red-700 text-red-700 p-4 text-sm">
                      <p className="">Error: {errors.idType} </p>
                    </div>
                  ) : null}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="documentId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Número de Documento
                  </label>
                  <input
                    type="text"
                    name="documentId"
                    id="documentId"
                    autoComplete="documentId"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pdc-purple focus:border-pdc-purple focus:ring-1 sm:text-sm"
                    value={values.documentId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.documentId && errors.documentId ? (
                    <div className="my-2 bg-gray-50 border-l-4 border-red-700 text-red-700 p-4 text-sm">
                      <p className="">Error: {errors.documentId} </p>
                    </div>
                  ) : null}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="retailSpaceType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tipo de Local
                  </label>
                  <select
                    id="retailSpaceType"
                    name="retailSpaceType"
                    autoComplete="retailSpaceType"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pdc-purple focus:border-pdc-purple focus:ring-1 sm:text-sm"
                    value={values.retailSpaceType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">--Elija una opción--</option>
                    <option value="1">Tipo 1</option>
                    <option value="2">Tipo 2</option>
                    <option value="3">Tipo 3</option>
                  </select>
                  {touched.retailSpaceType && errors.retailSpaceType ? (
                    <div className="my-2 bg-gray-50 border-l-4 border-red-700 text-red-700 p-4 text-sm">
                      <p className="">Error: {errors.retailSpaceType} </p>
                    </div>
                  ) : null}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="retailSpaceNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Número de Local
                  </label>
                  <input
                    type="text"
                    name="retailSpaceNumber"
                    id="retailSpaceNumber"
                    autoComplete="retailSpaceNumber"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pdc-purple focus:border-pdc-purple focus:ring-1 sm:text-sm"
                    value={values.retailSpaceNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.retailSpaceNumber && errors.retailSpaceNumber ? (
                    <div className="my-2 bg-gray-50 border-l-4 border-red-700 text-red-700 p-4 text-sm">
                      <p className="">Error: {errors.retailSpaceNumber} </p>
                    </div>
                  ) : null}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="mode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Modalidad de Compra
                  </label>
                  <select
                    id="mode"
                    name="mode"
                    autoComplete="mode"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pdc-purple focus:border-pdc-purple focus:ring-1 sm:text-sm"
                    value={values.mode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">--Elija una opción--</option>
                    <option value="Contado">Contado</option>
                    <option value="Financiado">Financiado</option>
                  </select>
                  {touched.mode && errors.mode ? (
                    <div className="my-2 bg-gray-50 border-l-4 border-red-700 text-red-700 p-4 text-sm">
                      <p className="">Error: {errors.mode} </p>
                    </div>
                  ) : null}
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="ammount"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Monto Abonado
                  </label>
                  <input
                    type="text"
                    name="ammount"
                    id="ammount"
                    autoComplete="ammount"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pdc-purple focus:border-pdc-purple focus:ring-1 sm:text-sm"
                    value={values.ammount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.ammount && errors.ammount ? (
                    <div className="my-2 bg-gray-50 border-l-4 border-red-700 text-red-700 p-4 text-sm">
                      <p className="">Error: {errors.ammount} </p>
                    </div>
                  ) : null}
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="contractUrl"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Copia de Contrato
                  </label>
                  <Dropzone />
                </div>
              </div>
            </div>
            <div className="bg-white px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-pdc-purple hover:bg-pdc-dark-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pdc-purple w-full transition duration-500"
                value="Registrar Información"
              >
                Registrar Información
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
