import { useState } from 'react';
import Logo from './Logo';
import MenuButton from './MenuButton';
import Search from './Search/Search';

const Header = () => {
  const [isSearchShown, setIsSearchShown] = useState(false);

  return (
    <header className="h-12 bg-dark-blue-600 md:h-14">
      <div className="relative mx-auto flex h-full max-w-screen-xl items-center pl-2.5 md:grid md:grid-cols-[2fr_3fr_2fr] md:px-5 xl:px-0">
        <Logo />
        <div
          className={`absolute top-0 left-0 flex h-full w-full items-center bg-dark-blue-600 pl-2.5 pr-[3rem] md:relative md:flex md:h-auto md:p-0 ${
            isSearchShown ? 'block' : 'hidden'
          }`}
        >
          <Search />
        </div>
        <MenuButton
          onClick={() => setIsSearchShown((prevState) => !prevState)}
        />
      </div>
    </header>
  );
};

export default Header;
