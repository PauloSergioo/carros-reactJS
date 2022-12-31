import "./styles.css";

export default function SearchBar() {
  return (
      <form className="dsc-search-bar">
        <input type="text" placeholder="Digite sua busca" />
        <button type="submit">Buscar</button>
      </form>
  );
}
