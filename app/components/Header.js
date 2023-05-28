import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
    return(
      <header>
        <div>
            <Link href="/" >
                <Image src= "/logo.png" alt="my logo image" width ={150} height= {40} />
            </Link>
        </div>

        <Nav />
      </header>
    );
  };
  
  export default Header;