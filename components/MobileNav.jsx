"use client";

import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutme" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact Me", path: "/contact" },
];

const MobileNav = () => { 
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center outline-none focus:ring-0 focus:outline-none">
                <CiMenuFries className={`text-[32px] text-gray-700`} />
            </SheetTrigger>
            <SheetContent
                side="right"
                className={`flex flex-col transition-transform shadow-lg
                bg-white text-gray-800
                data-[state=closed]:translate-x-full data-[state=open]:translate-x-0
                data-[state=open]:duration-500 data-[state=closed]:duration-400
                data-[state=open]:ease-out data-[state=closed]:ease-in`}>
                
                <SheetTitle />
                <div>
                    <h1 className="mt-32 mb-40 text-center text-2xl">
                        <span className="font-outfit">{"An-Khiem Le"}</span>
                    </h1>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <SheetClose asChild key={index}>
                            <Link
                                href={link.path}
                                className={`text-xl capitalize transition-all ${
                                    link.path === pathname
                                }`}
                            >
                                {link.name}
                            </Link>
                        </SheetClose>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
