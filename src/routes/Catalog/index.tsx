import Card from "../../components/Card";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

export default function Catalog() {
  return (
    <>
      <Header />
      <main>
        <section>
          <SearchBar />
          <div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
    </>
  );
}
