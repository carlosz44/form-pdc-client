import Image from "next/image";
import Link from "next/link";

export default function IndexPage() {
  return (
    // <div className="flex flex-col sm:flex-row-reverse items-center justify-around space-y-12">
    <>
      {/* <div className="sm:w-1/2">
        <Image
          src="/team-of-critters.svg"
          alt="Four one-eyed aliens playing"
          width={576}
          height={429.734}
          priority
        />
      </div>
      <div className="sm:w-1/2 text-center">
        <h2 className=" p-3 font-bold bg-yellow-300 md:text-2xl">
          Hi! Welcome to your first Next.js site.
        </h2>
      </div> */}

      {/* <div className="relative bg-gray-800">
        <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <Image
            className="w-full h-full object-cover"
            src="/fondopdc.jpg"
            alt="Proyecto Polvos de Chorrillos"
            layout="fill"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
              Award winning support
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              We’re here to help
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  Visit the help center
                  <svg
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="relative">
        <div className="lg:absolute lg:inset-0">
          <div className="hidden lg:block h-96 w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              className="w-full h-full object-cover"
              src="/fondopdc.jpg"
              alt="Proyecto Polvos de Chorrillos"
              layout="fill"
            />
          </div>
        </div>
        <div className="h-full relative px-4 sm:px-6 lg:px-8 lg:container lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl mt-2 py-4 font-extrabold sm:text-4xl">
                Proyecto <br /> Polvos de Chorrillos
              </h2>
              <p className="my-10 text-lg text-gray-500 sm:mt-3">
                El proyecto Polvos de Chorrillos fue un ambicioso proyecto
                destinado a comerciantes, empresarios, emprendedores y
                negociantes, que ofrece tiendas a precios de remate por preventa
                en el corazón de Chorrillos, una zona de alto tránsito
                comercial. <br />
                Si has sido afectado, continua para registrar tu documentación.
              </p>
              <Link href="/register">
                <a className="py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-white bg-pdc-orange hover:bg-pdc-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pdc-purple transition duration-500">
                  Registrar Documentos
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
