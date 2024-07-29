import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [moreDropdownVisible, setMoreDropdownVisible] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);

  const toggleMoreDropdown = () => {
    setMoreDropdownVisible(!moreDropdownVisible);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };

  return (
    <div className='navBar' style={{ backgroundColor: '#006400', padding: '20px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className='brand' style={{ fontFamily: 'Arial, sans-serif',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: 'white',
  textTransform: 'uppercase',
  marginRight: '15px',
  transition: 'transform 0.3s ease', /* Add transition for smoother animation */
  cursor: 'pointer', /* Change cursor to pointer to indicate interactivity */
  transformOrigin: 'center',
   }}>
        GreenMart
      </div>
      <div className='links' style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        {/* Home Link */}
        <div className='home' style={{ marginRight: '20px' }}>
          <Link to="/" style={{ color: 'white', fontSize: '17px', textDecoration: "none" }}>Home</Link>
        </div>
        {/* Product Link */}
        <div className='product' style={{ marginRight: '20px' }}>
          <Link to="/cart" style={{ color: 'white', fontSize: '17px', textDecoration: "none" }}>Product</Link>
        </div>
        {/* More Dropdown */}
        <div className='more' style={{ position: 'relative' }} onMouseEnter={toggleMoreDropdown} onMouseLeave={toggleMoreDropdown}>
          <Link to="/aboutt" style={{ color: 'white', fontSize: '17px', textDecoration: "none", marginRight: '20px' }}>
            More
          </Link>

          {moreDropdownVisible && (
            <div style={{ position: 'absolute', top: '40px', right: '0', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', zIndex: '1' }}>
              {/* Add your more dropdown content here */}
              <Link to="/aboutt" style={{ display: 'block', color: '#333', textDecoration: 'none', padding: '8px' }}>About</Link>
              <Link to="/privacy" style={{ display: 'block', color: '#333', textDecoration: 'none', padding: '8px' }}>Privacy & Policy</Link>
              <Link to="/terms" style={{ display: 'block', color: '#333', textDecoration: 'none', padding: '8px' }}>Terms & Condition</Link>
            </div>
          )}
        </div>
        {/* Login Link */}
        <div className='login' style={{ marginRight: '20px' }}>
          <Link to="/login" style={{ color: 'white', fontSize: '17px', textDecoration: "none" }}>Login</Link>
        </div>
        {/* Profile Image Link */}
        <div className='profile-image' style={{ position: 'relative' }} onMouseEnter={toggleProfileDropdown} onMouseLeave={toggleProfileDropdown}>
          <Link to="/profile">
            <img
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAMFBMVEXk5ueutLfn6eq3vL6rsbTh4+TZ3N3Jzc/Q09Wxt7q9wsTT1tjAxcfe4OLq7O3Dx8qKbjhhAAAD4UlEQVR4nO2b25arIAxAIdxB9P//9qC1nWlPZwpEE2ct9rMPeyUQuQQhBoPBYDAYDAaDwWAwGAyEADDZercUnEs2GwBupXfMxi8q6C9CXJKYubVegTxJqeUTWsuw5CtFFURS+sXyIRutuIrrnOIPmpuqjNeIKsDymvP/VB23ZAFs+F1zU1XsQQX/IZy7abDMpq7C8qbqOU1hqQnnbpr4TMHVexbYYtroyRZT8G2exZRlRoFo9SxVyjCICtUsKvVCr9k6QHdT+mGaOzRXqEXnjsRvIV1oTcH2eUoZMq1o7PSUmnQlBanXs4SUtEQ1/OP/Cynln9SE/ohKSbjhS/0BXX+kZJ69tWlnIQvpjPKUimyQdhfRG2TbEqjef/wA1byfu6v9DbKabxRSdCIStagqWiBaPwNalOgvivnR79CsoMBjPfWfEaX5ibZvk4foJ1GkJ5koetZTTSZ8eRoF/xn0vz7SeArAilKdQOGXeVQLZ2whJTspy8itCNmpzp/Z3PWdjd6hPCpBbUM1maboOhZ/eCrCIx1M7glPdAq5/y9KezPScrf4ElDi+zvoFaW+auodpfSXd6Zr4pNO+Rt9y2faA/zdtCP52tN7FtOKZpIXz8hzD9565aADV1+ZbfNUtJd2T6ZNyWds1IH6mOpgWNt0atqz9rwzNz7VFX4dWZo0ngD3sZdMB3eFPlKwH4KqI3e/2w6I3xr0dEiXaSAVAE69ddVS+Wt1OoNIy9rg/GRZxuaFonmnCFmnvnqxpXJZXE/zBsyzyDalZI2Y54tKrkAxfXCtsbkDxcom75YY1UaMk/NrYOEivkWj5NrF++B8mkv7UPUpr8KMljNYv0Ql9S/d7ZtwUJOzwDVowS5he75QQ/kqRE9eBADy+kigeSuio6d85wCQlp+eXHxUldEZmhUKGBf6LHdXGabz16YA1mEs73GN6dz1Ptip6iFDjeqJMwtMPEZzU5XhpMsRyAck/dlVnXCmC+BxDXlvTeV0dP4hH6+5qR6b/7LXODjr31Sn4+Y/mOksTXnkU6fqQ4Zu1WMucfG9Lp9NpwOOJ9A9mFWmCj1Q4czh+c0UfYQWSTwltk0XyDxxppSehf7sI94v9NB7dI5vbWtE97VG9L8E6jedOkzBUGvKvqtnogL6QnsDD8GP8x3td3uGxbM9+TNtBf1GaPJsuOg6msZnjmwBXX+lDZ58AW0LKU9pepjWB5Rryu+i1TsTXI8gnlAtim22xlK71+ecSiu104k78/V35oxF9Ebl0iQju9fx6FQlyj1Eq585oh4mH0PdYo97LsnKStrfw3ocuk5UsVO3KIULUCU6GFyKfx/mM+wpcPosAAAAAElFTkSuQmCC'
              alt='Profile'
              style={{ width: '30px', height: '30px', borderRadius: '50%', marginLeft: '20px', cursor: 'pointer' }}
            />
          </Link>

          {profileDropdownVisible && (
            <div style={{ position: 'absolute', top: '40px', right: '0', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', zIndex: '1' }}>
              {/* Add your profile dropdown content here */}
              <Link to="/profile" style={{ display: 'block', color: '#333', textDecoration: 'none', padding: '8px' }}>Your Account</Link>
              <Link to="/password" style={{ display: 'block', color: '#333', textDecoration: 'none', padding: '8px' }}>Change Password</Link>
              <Link to="/rating" style={{ display: 'block', color: '#333', textDecoration: 'none', padding: '8px' }}>Contact Us</Link>
            </div>
          )}
        </div>
        {/* ... other links ... */}
      </div>
    </div>
  );
}

export default Navbar;
