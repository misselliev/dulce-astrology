const Navbar = () => {
  return (
    <nav className="bg-indigo-950 opacity-60 p-4 flex">
      <div className="container mx-auto flex text-xl items-center text-white font-bold">Dulce</div>
      <div className="container mx-auto flex justify-end space-x-6 items-center">
        <a href="/" className="text-white text-xl font-bold">
          Home
        </a>
        <a href="/signs" className="text-white text-xl font-bold">
          Signs
        </a>
        <a href="/horoscopes" className="text-white text-xl font-bold">
          Horoscopes
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
