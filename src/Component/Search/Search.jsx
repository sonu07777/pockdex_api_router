import "./Search.css";
import useDebounce from "../hooks/useDebounce.js"

function search({ updateSearchTerm }) {
  const debouncedCallback = useDebounce((e) =>
    updateSearchTerm(e.target.value)
  );
  return (
    <>
      <input
        className="input"
        type="text"
        placeholder="Search here..."
        onChange={debouncedCallback}
      />
    </>
  );
}
export default search;