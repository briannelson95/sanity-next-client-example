// this is required at the app level
// this is where nav should go
// state is preserved 
import Link from 'next/link';

// in this example we fetch data for the navigation items
// fetch can be used inside any componenet in the /app dir
async function getNavItems() {
    // const navItems = await fetch('https://api.example.com/...');

    // return navItems.json();
}

// and we give the app a top level layout that contains a navigation and takes in {children}
export default function Layout({ children }) {
    // const navItems = getNavItems();

    return (
        <>
            <nav>
                <ul>
                    {/* {navItems.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={item.href}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))} */}
                </ul>
            </nav>
            {children}
        </>
    )
}