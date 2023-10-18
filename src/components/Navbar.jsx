const Navbar = () => {
  return (
    <nav className="bg-indigo-950 opacity-60 p-4 flex">
      <div className="container mx-auto flex justify-between items-center text-white font-bold">Dulce</div>
      <div className="container mx-auto flex justify-end space-x-4 items-center">
        <a href="/" className="text-white text-xl font-bold">
          Home
        </a>
        <a href="/signs" className="text-white text-xl font-bold">
          Signs
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
