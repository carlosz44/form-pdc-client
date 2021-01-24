import { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import clientAxios from "../config/axios";
// import appContext from "../context/app/appContext";
import authContext from "../context/auth/authContext";

export default function Dropzone() {
  // const AppContext = useContext(appContext);
  // const { cargando, mostrarAlerta, subirArchivo, crearEnlace } = AppContext;

  const AuthContext = useContext(authContext);
  // const { user, autenticado } = AuthContext;

  const onDropRejected = () => {
    mostrarAlerta("No se pudo subir, el limite es 10MB");
  };

  const onDropAccepted = useCallback(async (acceptedFiles) => {
    // Crear un form Data
    const formData = new FormData();
    formData.append("uploadedFile", acceptedFiles[0]);

    // subirArchivo(formData, acceptedFiles[0].path);
  }, []);

  const maxSize = 1000000000000;

  // Extraer contenido de Dropzone
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
  } = useDropzone({ onDropAccepted, onDropRejected, maxSize });

  const loadedFiles = acceptedFiles.map((file) => (
    <li key={file.lastModified} className="py-3 mb-4">
      Archivo subido: <span className="font-medium text-md">{file.path}</span>
      {" - "}
      <span className="text-gray-500">
        {(file.size / Math.pow(1024, 2)).toFixed(2)} MB
      </span>
    </li>
  ));
  return (
    <>
      <div className="mt-2 border-2 border-gray-300 border-dashed rounded-md px-6 pt-5 pb-6 flex justify-center">
        <div {...getRootProps({ className: "dropzonespace-y-1 text-center" })}>
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex text-sm text-gray-600">
            {isDragActive ? (
              <p className="text-md text-gray-500">
                ... y suelta el archivo aquí
              </p>
            ) : (
              <>
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-pdc-purple hover:text-pdc-dark-purple focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pdc-purple"
                >
                  <span>Sube un archivo</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    {...getInputProps}
                  />
                </label>
                <p className="pl-1">o arrástralo aquí</p>
              </>
            )}
          </div>
          <p className="text-xs text-gray-500">
            PNG, JPG, GIF o PDF hasta 10MB
            {acceptedFiles.length > 0 ? (
              <p>{` (se reemplazará el archivo actual)`} </p>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
      <ul>{loadedFiles}</ul>
    </>
  );
}
