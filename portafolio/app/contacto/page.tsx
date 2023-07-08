import { Navigation } from "../../components/Navigation";

const ContactPage = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <h1 className="text-center text-6xl py-20 font-mono font-black">
        Contact Me
      </h1>
      <div className="flex gap-80 justify-center">
        <h2>ADDRESS</h2>
        <h2>PHONE</h2>
        <h2>EMAIL</h2>
      </div>
      <div className="flex">
        <h3 className="">Somewhere</h3>
        <h3>984 213 412</h3>
        <h3 className="pl-96">adrianrogerng@gmail</h3>
      </div>
    </div>
  );
};

export default ContactPage;
