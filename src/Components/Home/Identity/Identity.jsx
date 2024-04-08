import "./Identity.css";

function Identity() {
  return (
    <section className="identity-section">
      <div className="lg:w-2/3 xl:w-11/12 2xl:w-10/12 mx-auto px-4 xl:flex xl:flex-row items-center gap-6">
        <div className="xl:w-1/2">
          <h2 className="text-2xl text-white bg-red_hd p-2 block mb-6">Recursos</h2>
          <p>Nos emociona contar con su participación en este evento que celebra y profundiza en el fascinante mundo de las Humanidades Digitales. Para asegurar una presentación cohesiva y profesional, les invitamos a utilizar los recursos gráficos especialmente diseñados para este evento, incluyendo nuestro logotipo oficial y una plantilla de presentación única.</p>
          <h3 className="text-xl text-red_hd border-b border-red_hd mt-12 mb-6">¿Cómo utilizar estos recursos?</h3>
          <ul>
            <li><strong>Logotipo oficial</strong>. Úsenlo en todas las diapositivas de su presentación y materiales promocionales relacionados con su participación en el evento. Esto no solo refuerza la identidad visual del evento, sino que también crea un sentido de unidad y pertenencia entre todos los participantes.</li>
            <li><strong>Plantilla de presentación</strong>. Hemos diseñado una plantilla que no solo es estéticamente agradable, sino también funcional, con espacios predeterminados para títulos, subtítulos, contenido y notas. Esta uniformidad garantiza que nuestro público disfrute de una experiencia visual coherente y profesional a lo largo de todas las presentaciones.</li>
          </ul>
        </div>
        <div className="xl:w-1/2">
          <ul className="resourcses-items mt-10 xl:ml-20">
            <li><a href=""><img src="images/logo-resource.png" width={24} alt="Logotipo" /> Logotipo</a></li>
            <li><a href=""><img src="images/slideshow-resource.png" width={24} alt="Presentación" /> Presentación</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Identity;
