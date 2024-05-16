import "./Identity.css";

function Identity() {
  return (
    <section className="section-hd identity-section">
      <div className="lg:w-2/3 xl:w-11/12 2xl:w-10/12 mx-auto px-4 xl:flex xl:flex-row items-center gap-6">
        <div className="xl:w-1/2">
          <h2 className="text-2xl text-white bg-red_hd p-2 block mb-6">Recursos</h2>
          <p>Nos emociona contar con su participación en este evento que celebra y profundiza en el fascinante mundo de las Humanidades Digitales.</p>
          <h3 className="text-xl text-red_hd border-b border-red_hd mt-12 mb-6">¿Cómo utilizar estos recursos?</h3>
          <ul>
            <li><strong>Logotipo oficial</strong>. Puedes usarlo en las diapositivas de tu presentación y materiales promocionales relacionados con su participación en el evento.</li>
            <li><strong>Plantilla de presentación</strong>. Te proponemos esta plantilla de presentación que puedes adaptar a tus necesidades.</li>
          </ul>
        </div>
        <div className="xl:w-1/2">
          <ul className="resources-items mt-10 xl:ml-20">
            <li><a href="https://drive.google.com/drive/folders/10ALuH5SLZVIR9AGXZnH1quxovK12qKVc" target="_blank" rel="noopener noreferrer"><img src="images/logo-resource.png" width={24} alt="Logotipo" /> Logotipo</a></li>
            <li>
              <p className="text-gray-50 mt-6 mb-2">Ponemos a tu disposición estas plantillas personalizables.</p>
              <a href="https://drive.google.com/drive/folders/13-3TWMDwPTN2l5jpMXuMEvbM9i7Vhz9X" target="_blank" rel="noopener noreferrer"><img src="images/slideshow-resource.png" width={24} alt="Presentación" /> Presentación</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Identity;
