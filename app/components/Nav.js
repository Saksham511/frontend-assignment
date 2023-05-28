import Link from "next/link";

const Nav = () => {
    return(
      <nav>
        <div>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>

                <li>
                    <Link href="/search">
                        search
                    </Link>
                </li>

                <li>
                    <Link href="/albumdetails">
                        Album Details
                    </Link>
                </li>

            </ul>
        </div>

      </nav>
    );
  };
  
  export default Nav;