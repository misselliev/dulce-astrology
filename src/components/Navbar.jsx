const Navbar = () => {
  return (
    <nav className="bg-indigo-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
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
