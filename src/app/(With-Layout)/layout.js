const WithLayout = ({ children }) => {
  return (
    <div>
      <aside>nav</aside>
      {children}
      <footer>footer</footer>
    </div>
  );
};

export default WithLayout;
