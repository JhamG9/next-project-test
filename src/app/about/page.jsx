"use client";
import React from "react";
import { useRouter } from "next/navigation"; // antes era router

// export const metadata = {
//   title: "Acerca de Nosotros",
// };

const AboutPage = () => {
  const router = useRouter();
  return (
    <section>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
        sunt obcaecati pariatur voluptate totam iure, eos unde, saepe at nihil
        quae cumque ullam porro, excepturi sed enim! Earum dolores at a
        provident accusamus fuga cumque, asperiores blanditiis, libero veritatis
        mollitia excepturi et, natus laudantium maiores tenetur consectetur eum
        harum pariatur iste! Quisquam, cumque! Porro quo quam ex animi? Ipsam,
        voluptate incidunt praesentium vitae cumque dolor blanditiis architecto
        ducimus ullam illo minus voluptatibus aliquam deserunt esse, excepturi
        perferendis quis minima earum accusantium necessitatibus iste voluptatem
        quod? Unde quam earum corrupti sunt voluptates voluptatum alias
        possimus, rem quaerat et ea fugiat quasi.
      </p>

      <button
        className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => {
          router.push("/");
        }}
      >
        Click
      </button>
    </section>
  );
};

export default AboutPage;
