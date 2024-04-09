import Direction from "./elements/Direction";
import Logo from "./elements/Logo";
import Profile from "./elements/Profile";

function Navbar() {
  return (
    <main className="h-[4rem] flex justify-around items-center px-[1rem] md:px-[6rem] gap-[1rem] sticky top-0">
      <Logo />
      <Direction/>
      <Profile/>
    </main>
  );
}

export default Navbar;
