import Link from 'next/link'
const Header = () => {
    return (
        <>

        <nav>
            <div className='logo'>
                <Link href="/"><a><h2>My blog spot.</h2></a></Link>
            </div>
            <a><Link href='/'>Home</Link></a>
            <a><Link href='/about'>About us</Link></a>
            <a><Link href='/blogs'>Blogs</Link></a>


        </nav>

        </>
     );
}
 
export default Header;