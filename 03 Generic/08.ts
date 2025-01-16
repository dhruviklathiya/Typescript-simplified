// A simple React-like generic component
type ListProps<T> = {
    items: T[];
    renderItem: (item: T) => JSX.Element;
  };
  
  function List<T>({ items, renderItem }: ListProps<T>) {
    return <ul>{items.map(renderItem)}</ul>;
  }
  
  // Using the generic component
  const App = () => (
    <List
      items={[{ id: 1, name: "Dhruvik" }, { id: 2, name: "Alice" }]}
      renderItem={(user) => <li key={user.id}>{user.name}</li>}
    />
  );
  
  export default App;
  