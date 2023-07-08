"use client";
import { Navigation } from "../components/Navigation";
import { Picture } from "../components/Picture";
import { Button } from "@/components/Button";
const Home = () => {
  return (
    <div className=" font-mono ">
      <div>
        <Navigation />
      </div>
      <div className="flex items-center justify-between py-20 px-20">
        <div>
          <h2 className="text-7xl font-bold ">My Name Is</h2>
          <h2 className="text-7xl font-bold">Adrian Rogers</h2>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Hire me</h1>
          <h2 className="text-gray-400">Get in conctact with me</h2>
        </div>
        |
        <div className="gap-y-8">
          <h3>Instagram</h3>
          <h3>Fiverr</h3>
        </div>
      </div>

      <h2 className="text-4xl font-bold text-center mb-7">Mis Diseños</h2>
      <section className="grid grid-cols-4 gap-5">
        <div>
          <Picture
            name={"Sonic in Pixel Art"}
            date={"Made in 2020"}
            src={"/imgsonicweb.png"}
            page={"/sonicweb"}
          />
        </div>
        <div>
          <Picture
            name={"Cat made in Blender"}
            date={"Made in 2023"}
            src={"/imgcatweb.png"}
            page={"/catblender"}
          />
          <h4></h4>
        </div>
        <Picture
          name={"DK VS GODZILLA"}
          date={"Made in 2021"}
          src={"/imgdkweb.png"}
          page={"/dkgweb"}
        />
        <h4></h4>
        <div>
          <Picture
            name={"Legends Arceus Cat"}
            date={"Made in 2021"}
            src={"/imgcatpokemonweb.png"}
            page={"/catpokemonweb"}
          />
          <h4></h4>
        </div>
        <div>
          <Picture
            link={"/stray"}
            name={"Stray"}
            date={"Made in 2022"}
            src={"/imgstrayweb.png"}
            page={"/strayweb"}
          />
        </div>
      </section>
    </div>
  );
};
export default Home;
//Arreglar Pagina y agregar contenido
//Diseño en papel del diseño final de la pagina
//Terminal: cd portafolio, ls, npm run dev
//Terminar y enlazar Pictures
