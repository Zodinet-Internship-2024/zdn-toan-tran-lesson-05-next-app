'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    return (
        <nav className="flex gap-10">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/shop">Shop</NavLink>
            <NavLink href="/product">Product</NavLink>
            <NavLink href="/contact-us">Contact us</NavLink>
        </nav>
    );
};

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
};
const NavLink = ({ href, children }: NavLinkProps) => {
    const pathname = usePathname();
    return (
        <Link
            href={href}
            className={cn(
                'text-sm leading-6 font-medium text-neutral-400',
                pathname === href && 'text-neutral-700'
            )}
        >
            {children}
        </Link>
    );
};
export default Navbar;
