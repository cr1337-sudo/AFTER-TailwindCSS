const destinos = [
  {
    nombre: "Estados Unidos",
    foto: "https://images.ecestaticos.com/esFQDHEZdUNMUTmFXecDNtrbfdc=/254x2:2272x1515/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ff16%2Fd53%2Fdd1%2Ff16d53dd1c68a694db86a74064081b43.jpg",
  },
  {
    nombre: "Argentina",
    foto: "https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/05/08213126/shutterstock_1371228326.jpg",
  },
  {
    nombre: "Perú",
    foto: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/04/19/16503736092836.jpg",
  },
  {
    nombre: "Brasil",
    foto: "https://www.preferente.com/wp-content/uploads/2021/10/Cristo-Redentor-Rio-de-Janeiro-RJ-002.jpg",
  },
];

const container = document.getElementById("destinosContainer");
destinos.map((destino) =>
  container.insertAdjacentHTML(
    "beforeend",
    `
      <section
        class="h-44 w-[32.5%] bg-red-100 border-orange-300 relative flex items-center"
      >
        <img
          src=${destino.foto}
          alt=""
          class="absolute w-[100%] h-[100%] object-cover"
        />
        <p
          class="flex items-center justify-center w-[40%] h-[80%] ml-3 bg-white shadow-2xl p-3 relative text-lg"
        >
        ${destino.nombre}
        </p>
      </section>

`
  )
);
