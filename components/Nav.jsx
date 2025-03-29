import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutme" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact Me", path: "/contact" },
];

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-9 lg:gap-8 rounded-full px-10 py-3 
                bg-white dark:bg-gray-800 shadow-sm bg-opacity-50 
                dark:shadow-md dark:bg-transparent dark:border dark:border-white/50 transition-all duration-300">
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`px-3 py-2 rounded-md transition-colors duration-300 ${
                        link.path === pathname
                            ? "text-gray-300 dark:text-gray-600"
                            : "text-gray-700 dark:text-gray-400"
                    }`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
