import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();

    /**
     * Should link be active or not? Based on if the link is the current URL or not
     * Returns classes
     */
    const getLinkClassName = (pathname: string) => {
        return router.pathname == pathname ? "nav-link active" : "nav-link";
    }

    return (
        <nav className="navbar navbar-expand-md main-header">
            <div className="container">
                <div className="mx-auto order-0">
                    <div className="logo-wrapper">
                        <Link legacyBehavior href='/'>
                            <a>
                                <Image src="/logo.svg" alt="logo" width={100} height={100}/>
                            </a>
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="navbar-collapse collapse w-100 order-1 dual-collapse2">
                    <ul className="navbar-nav ml-auto link-wrapper">
                        <li className="nav-item">
                            <Link legacyBehavior href="/about">
                                <a className={getLinkClassName('/about')}>About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link legacyBehavior href="/contact">
                                <a className={getLinkClassName('/contact')}>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
