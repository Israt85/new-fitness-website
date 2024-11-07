import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links =<>
    <NavLink to='/home' className={({ isActive }) =>
    isActive ? 'mx-4 text-[#D32F2F]' : 'text-white mx-4'
  }>Home</NavLink>
    <NavLink to='aboutus' className={({ isActive }) =>
    isActive ? 'mx-4 text-[#D32F2F]' : 'mx-4'
  }>About Us</NavLink>
    <NavLink to='blog' className='mx-4'>Blogs</NavLink>
    <NavLink className='mx-4'>FAQs</NavLink>
    <NavLink to='contact' className='mx-4 px-4 py-1 text-black rounded-full bg-[#FFFF00]'>Contact Us</NavLink>
    </>
    return (
        <div className="navbar w-[1100px] mx-auto relative text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {links}
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
            <svg width="30" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.40002 27.0593C1.40002 21.7106 5.8686 17.3746 15 17.3746C24.1314 17.3746 28.6 21.7106 28.6 27.0593C28.6 27.9102 27.9792 28.6 27.2134 28.6H2.78669C2.02086 28.6 1.40002 27.9102 1.40002 27.0593Z" stroke="white" stroke-width="2"/>
<path d="M20.1 6.5C20.1 9.31665 17.8167 11.6 15 11.6C12.1834 11.6 9.90002 9.31665 9.90002 6.5C9.90002 3.68335 12.1834 1.4 15 1.4C17.8167 1.4 20.1 3.68335 20.1 6.5Z" stroke="white" stroke-width="2"/>
</svg>

          </ul>
        </div>
      </div>
    );
};

export default Navbar;