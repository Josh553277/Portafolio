export default function Home() {
  return (
  <div className="max-w-[1000px] mx-auto font-mono mt-9">
    <h1 className="text-5xl font-bold text-teal-400 text-center mb-6">
      ADRIAN NUÑEZ
    </h1>
    <p className="text-2xl text-justify">
      Mi nombre es Adrian Nuñez Gonzales, puedo dibujar varios estilos de dibujos bambas gratis en 2 segundos.
      </p>
      <h2 className="text-4xl font-bold text-center mb-7">
      Mis Diseños
      </h2>
    <section className="grid grid-cols-4 gap-5">
        <div>
          <img src="/imgcatweb.png" className="h-60"/>
          <h3 className="text-3xl text-violet-800"> Cat made in Blender</h3>
          <p className="text-center"> Made in 2023</p>
        </div>
        <div>
          <img src="/imgsonicweb.png" className="h-60" />
          <h3 className="text-3xl text-blue-600"> Sonic Poster in PixelArt</h3>
          <p className="text-center"> Made in 2021</p>
        </div>
        <div>
          <img src="/imgdkweb.png" className="h-60"/>
          <h3 className="text-3xl text-yellow-700"> Godzilla vs Kong</h3>
          <p className="text-center"> Made in 2020</p>
        </div>
        <div>
          <img src="/imgcatpokemonweb.png" className="h-60"/>
          <h3 className="text-3xl text-indigo-300"> Pokemon Legends Arceus </h3>
          <p className="text-center"> Made in 2022</p>
        </div>
      </section>
  </div>
  )
}
