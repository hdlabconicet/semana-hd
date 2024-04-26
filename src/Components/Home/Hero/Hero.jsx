import ColorBar from "../../ColorBar/ColorBar";

const Hero = () => {
  return (
    <section className="section-hd bg-gray-50">
      <div className="lg:flex lg:flex-row justify-center items-center w-11/12 xl:w-10/12 py-10">
        <div className="lg:w-1/2 p-4">
          <img
            src="images/semanahd.png"
            alt="Semana de Humanidades Digitales"
            width={1200}
            className="block"
          />
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2 p-4 2xl:pl-10 text-center">
          <p className="mb-12 md:text-lg 2xl:text-2xl leading-relaxed 2xl:leading-10">
            La SemanaHD es un evento abierto y colaborativo que tiene como
            objetivo dar visibilidad a los proyectos e iniciativas sobre
            Humanidades Digitales en América Latina y el Caribe. A lo largo de
            una semana se desarrollan charlas, paneles, mesas de debates y
            talleres, etcétera. sobre Humanidades Digitales. Es un encuentro
            gratuito y se desarrolla completamente en línea. ¡Participa!
          </p>
          <ColorBar />
          <h4 className="mt-12 text-green_hd font-semibold text-xl md:text-2xl xl:text-3xl">
            del 20 al 25 de mayo de 2024
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Hero;
