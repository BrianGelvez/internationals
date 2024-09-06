import Image from "next/image";

export default function AboutMe() {
  return (
    <div
      className="relative w-full flex flex-col h-[1800px] min1:h-[1650px] 
              min2:h-[1600px] min3:h-[1500px] min4:h-[1400px] sm:h-[1380px] md:h-[1330px] 
              lg:h-[1100px] xl:h-[1100px] 2xl:h-[900px]"
    >
      <Image
        src="/fondoArgentina.webp"
        alt="Imagen de fondo de inicio para dispositivos móviles"
        layout="fill"
        objectFit=""
        className="block lg:hidden"
      />
      <Image
        src="/blackdesktop.webp"
        alt="Imagen de fondo de inicio para dispositivos móviles"
        layout="fill"
        objectFit=""
        className="hidden lg:block"
      />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black bg-black/60 via-transparent to-transparent"></div>
        <div className="relative flex flex-col lg:flex-row p-4 lg:py-12 xl:justify-center">
          <div className="w-full xl:w-container flex flex-col lg:flex-row gap-8 justify-center">
            <div
              className="w-full lg:w-[50%] h-auto flex flex-col gap-2 lg:gap-8 border-[1px]
                      shadow-full border-[#195d69] backdrop-blur-sm p-4 rounded-lg"
            >
              <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
                <p className="text-xl lg:text-3xl text-gray-300 mb-4 text-center text-scratched">
                  ¡Hola! Soy{" "}
                  <span className="font-light text-yellow-700">
                    Tobias Giana
                  </span>
                  , creador y fundador de Internationals.
                </p>
                <p className="text-xl lg:text-3xl text-gray-300 mb-4 text-center text-scratched">
                  En Internationals nos especializamos en ofrecer comida rapida
                  de primera calidad con un toque internacional. Preparamos
                  hamburguesas y lomos unicos con ingredientes de cada rincon
                  del mundo.
                </p>
                <p className="text-xl lg:text-3xl text-gray-300 mb-4 text-center text-scratched">
                  Desde la jugosa hamburguesa{" "}
                  <span className="argentina-gradient font-bold">
                    argentina
                  </span>
                  , hasta los sabores mas vibrantes de la{" "}
                  <span className="font-bold brazil-gradient">brasilera</span>,
                  la <span className="font-bold mexico-gradient">mexicana</span>
                  , y muchas mas. Cada bocado es una experiencia unica que te
                  lleva a un país diferente.
                </p>

                <p className="text-xl lg:text-3xl text-gray-300 text-center text-scratched">
                  Ven y descubre por que Internationals es el lugar donde la
                  calidad y la diversidad culinaria se encuentran.
                </p>
              </div>

              <div className="w-auto flex flex-row justify-center gap-14 md:gap-20 lg:gap-36 items-center">
                <Image
                  src="/firma.webp"
                  alt="Firma de Luis y José"
                  width={110}
                  height={110}
                  className="opacity-50"
                />
              </div>
            </div>

            <div className="w-full lg:w-[50%] h-auto">
              <div className="mt-8 flex flex-col">
                <div className="flex flex-col">
                  <span className="flex flex-col justify-center items-center pb-2">
                    <Image
                      src="/estrellas.webp"
                      alt="Icono de tres estrellas"
                      width={80}
                      height={80}
                    />
                    <p className="gradient-text text-[15px] lg:text-lg">
                      Producto mas vendido
                    </p>
                  </span>
                  <a
                    href="/#contacto"
                    className="text-center lg:text-2xl py-2 px-4 lg:py-2 bg-gradient-to-r from-[#74A3E0] via-[#FFFFFF] to-[#74A3E0] text-blue-900 lg:rounded-xl rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    Hamburguesa Argenta 🍔
                  </a>
                </div>
              </div>
              <div className="w-full flex flex-col gap-5 my-12">
                <a
                  href="/aboutMe"
                  className="text-center backdrop-blur-sm lg:text-xl mt-2 w-full font-extralight text-slate-200 border-2 border-[#195d69] border-brown-primary rounded-lg lg:rounded-xl p-1 lg:p-2 shadow-light shadow-blue-200/50"
                >
                  Categorias 🍽️
                </a>
                <a
                  href="/services"
                  className="text-center backdrop-blur-sm lg:text-xl mt-2 w-full font-extralight text-slate-200 border-2 border-[#195d69] border-brown-primary rounded-lg lg:rounded-xl p-1 lg:p-2 shadow-light shadow-blue-200/50"
                >
                  Testimonios 💬
                </a>
              </div>
              <div className="">
                <h1 className="text-2xl text-brown-text">
                  Estamos ubicados en:
                </h1>
                <p className="text-1xl mb-7 text-brown-text">
                  Colinas del Rey 493. Ciudad de Cosquín, provincia de Córdoba.
                </p>
                <div className="w-full h-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.4383650345203!2d-64.46792298730378!3d-31.20858237425136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d7964e313273d%3A0x27e486893596a353!2sColinas%20del%20Rey%20493%2C%20X5166%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1724703394622!5m2!1ses!2sar"
                    className="w-full h-96 rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black to-transparent"></div>
      </div>
    </div>
  );
}
