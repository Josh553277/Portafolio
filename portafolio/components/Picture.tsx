"use client";
import { Button } from "@/components/Button";
import { useState } from "react";

export const Picture = ({ name, date, src, link, page }: any) => {
  const [estado, cambiarEstado] = useState(false);
  const handleClick = () => {
    console.log("El usuario dio click", estado);
    cambiarEstado(true);
  };

  return (
    <a href={page}>
      <div>
        <a href={link}>
          <img src={src} className="h-60" />
        </a>
        <h3 className="text-3xl">{name}</h3>
        <p className="text-center">{estado === true ? "Date: 2021" : ""}</p>
        <Button
          text={"Ver más ▾"}
          variant={"secondary"}
          onClick={handleClick}
        />
      </div>
    </a>
  );
};
