import Link from 'next/link'

const NavItem = ({href, children} : {href: string, children: string }) => {
    return (
        <li className='list-none'>
            <Link className='text-lg select-none' href={href}>{children}</Link>
        </li>
    )
}

export default NavItem;