const Header = () => {
    return (
      <header className="bg-blue-600 text-white py-4 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold sm:text-2xl">
            Community Bulletin Board
          </h1>
          <nav className="flex gap-4 text-sm sm:text-base">
            <a href="/login" className="hover:underline">
              Login
            </a>
            <a href="/signup" className="hover:underline">
              Sign Up
            </a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  