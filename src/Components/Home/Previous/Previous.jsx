import "./Previous.css";

function Previous() {
  return (
    <section className="previous-section">
      <div className="lg:w-2/3 xl:w-11/12 2xl:w-10/12 mx-auto px-4 xl:flex xl:flex-row items-center gap-10">
        <div className="xl:w-1/2">
          <p>
            Desde su inicio en 2022, la Semana de Humanidades Digitales
            (SemanaHD) ha sido un punto de encuentro clave para explorar la
            intersección de la tecnología y las humanidades en Latinoamérica.
            Organizando 26 eventos en su primer año desde Argentina, Colombia y
            México, este evento gratuito y en línea ha logrado atraer a una
            amplia audiencia regional. En su segunda edición en 2023, SemanaHD
            amplió su oferta con 38 eventos, incluyendo charlas, paneles, y
            talleres, manteniendo su compromiso con el acceso abierto y la
            colaboración. Permitiendo a cualquier persona o grupo proponer
            eventos, SemanaHD se consolida como una plataforma inclusiva para
            compartir tendencias actuales y fomentar el diálogo en Humanidades
            Digitales.
          </p>
          <p className="mt-12 previous-semanahd">
            <a href="">Ver SemanaHD 2023</a><a href="">Ver SemanaHD 2024</a>
          </p>
        </div>
        <div className="xl:w-1/2">
          <img src="images/semanahd-logo-high.png" alt="Ediciones anteriores" />
        </div>
      </div>
    </section>
  );
}

export default Previous;
