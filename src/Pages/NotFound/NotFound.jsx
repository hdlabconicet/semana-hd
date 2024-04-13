function NotFound() {
  return (
    <section>
      <div className="text-center">
        <h1 className="text-2xl font-medium leading-relaxed mb-12">
          Esta ruta no conduce a información de<br />la Semana de Humanidades
          Digitales
        </h1>
        <p>
          <a
            href="/"
            className="bg-red_hd inline-block text-gray-50 p-2 rounded"
          >
            regresar al inicio
          </a>
        </p>
      </div>
    </section>
  );
}

export default NotFound;
