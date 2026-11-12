export default function MenuFilters({
  categories, activeCategory, search, sort,
  onCategoryChange, onSearchChange, onSortChange,
}) {
  return (
    <div className="filters">
      {categories.map((c) => (
        <button
          key={c}
          className={c === activeCategory ? "chip active" : "chip"}
          onClick={() => onCategoryChange(c)}
        >
          {c}
        </button>
      ))}
      <input
        className="input search"
        placeholder="Search menu…"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select className="input sort" value={sort} onChange={(e) => onSortChange(e.target.value)}>
        <option value="default">Sort: default</option>
        <option value="low">Price: low to high</option>
      </select>
    </div>
  );
}
