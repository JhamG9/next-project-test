import Link from "next/link";
import React from "react";


export const metadata = {
    title: "Tienda Oficial",
  };

const TiendaLayout = ({ children }) => {
  return (
    <>
      <nav>
        <h3>Seccion Tienda</h3>

        <ul>
          <li>
            <Link href="/tienda/categorias">Categorias</Link>
          </li>
          <li>
            <Link href="/tienda/categorias/computadoras">Computadoras</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default TiendaLayout;
