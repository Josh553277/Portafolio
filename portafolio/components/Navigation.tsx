export const Navigation = () => {
  return (
    <div className="flex justify-between items-center border-b-4 border-t-gray-400 py-5 px-20">
      <h2 className="text-5xl font-bold text-left">My Page</h2>
      <div className="flex gap-8">
        <a className="font-bold" href="/">
          Portafolio
        </a>
        <a href="/">Gallery</a>
        <a href="/">About me</a>
        <a href="/contacto">Contact me</a>
      </div>
    </div>
  );
};
