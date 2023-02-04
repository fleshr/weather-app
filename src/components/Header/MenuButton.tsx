import { HiOutlineMenu } from 'react-icons/hi';

interface Props {
  onClick: () => void;
}

const MenuButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative z-20 ml-auto flex h-12 w-12 items-center justify-center md:hidden"
    >
      <HiOutlineMenu className="text-[1.75rem]" />
    </button>
  );
};

export default MenuButton;
