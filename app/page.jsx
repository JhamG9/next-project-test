import Users from "@/components/Users";

export const metadata = {
  title: "Mi pagina especial Home",
};

export default function HomePage() {
  return (
    <section>
      <h1>Hello World</h1>

      <Users />
    </section>
  );
}
