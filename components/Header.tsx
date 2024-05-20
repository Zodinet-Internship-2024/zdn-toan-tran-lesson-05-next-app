import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
            <section className="w-full bg-neutral-100 flex items-center justify-center gap-3">
                <Image
                    src="/icons/ticket.svg"
                    alt="ticket icon"
                    className="w-4"
                    width={20}
                    height={18}
                />
                <span className="">30% off storewide — Limited time!</span>
                <Link
                    href="/shop"
                    className="border-b border-blue-400 flex items-center text-blue-400"
                >
                    <span>Shop now</span>
                    <Image src="/icons/arrow-right.svg" alt="arow icon" width={18} height={18} />
                </Link>
                <Button className="" variant="ghost">
                    <Image
                        src="/icons/close.svg"
                        alt="ticket icon"
                        className="w-4 justify-self-end"
                        width={20}
                        height={20}
                    />
                </Button>
            </section>
            <section className="max-w-[1140px] mx-auto flex justify-between py-4 items-center px-8">
                <h2 className="font-medium text-2xl leading-6">Shop.</h2>
                <Navbar />
                <div>
                    <Button variant="ghost">
                        <Image src="/icons/search.svg" alt="icon search" width={24} height={24} />
                    </Button>
                    <Button variant="ghost">
                        <Image
                            src="/icons/user-circle.svg"
                            alt="icon search"
                            width={24}
                            height={24}
                        />
                    </Button>
                    <Button variant="ghost">
                        <Image
                            src="/icons/shopping-bag.svg"
                            alt="icon search"
                            width={24}
                            height={24}
                        />
                        <span className="rounded-full bg-black text-white size-5 ml-2">2</span>
                    </Button>
                </div>
            </section>
        </header>
    );
};
export default Header;
