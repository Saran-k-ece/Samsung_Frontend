import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ setShowLogin }) => {

  const [menu1, setMenu1] = useState(null);
  const [submenu, setSubmenu] = useState("Smartphones");
  
  
  const handleMouseEnter = (item) => {
    setMenu1(item);
  }; 

  const handleMouseLeave = () => {
    setMenu1(null);
  };
 
 
  return (
    <> 
      <div className='navbar'>
        <img src={assets.samsungLogo} alt="" className='logo' />
        <ul className="navbar-menu">
          <li onMouseEnter={() => handleMouseEnter("shop")} onMouseLeave={handleMouseLeave}>Shop</li>
          <li  onMouseEnter={() => handleMouseEnter("ai")} onMouseLeave={handleMouseLeave}>Ai</li>
          <li  onMouseEnter={() => handleMouseEnter("mobile")} onMouseLeave={handleMouseLeave}>Mobile</li>
          <li onMouseEnter={() => handleMouseEnter("tv&av")} onMouseLeave={handleMouseLeave}>Tv & Av</li>
          <li  onMouseEnter={() => handleMouseEnter("homeappliance")} onMouseLeave={handleMouseLeave}>Home Appliances</li> 
          <li  onMouseEnter={() => handleMouseEnter("accessories")} onMouseLeave={handleMouseLeave}>Accessories</li>
          <li  onMouseEnter={() => handleMouseEnter("smartthings")} onMouseLeave={handleMouseLeave}>SmartThings</li>
          <li  onMouseEnter={() => handleMouseEnter("computingdevices")} onMouseLeave={handleMouseLeave}>Computing Devices</li>
        </ul>
        <div className="navbar-right">
          <button>Support</button>
          <button>For Business</button>
          <div className="navbar-right-img">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='faMagnifyingGlass' />
            <FontAwesomeIcon icon={faCartShopping} className='faCartShopping' />
            <FontAwesomeIcon icon={faUser} className='faUser' onClick={() => setShowLogin(true)} />
          </div>
        </div>
      </div>


      {menu1 === "shop" && (
        <div className="dropdown-content" onMouseEnter={() => handleMouseEnter("shop")} onMouseLeave={handleMouseLeave}>
          <div className="dropdown-column">
            <h3>Offers</h3> 
            <ul>
              <li>All Offers</li>
              <li>#YouMake <span className="hot">HOT</span></li> 
              <li>Mobile Offers</li>
              <li>Television Offers</li>
              <li>Refrigerator Offers</li>
              <li>Washing Machine Offers</li>
              <li>Laptop & Computing Offers</li>
            </ul>
          </div>
          <div className="dropdown-column">
            <h3>Why buy from Samsung</h3>
            <ul>
              <li>Overview</li>
              <li>Samsung Finance+</li>
              <li>Samsung Axis Bank Credit Card</li>
              <li>Samsung Wallet</li>
              <li>Samsung Care+</li>
              <li>Delivery & Installation</li>
              <li>Mobiles Trade-in</li>
            </ul>
          </div>
          <div className="dropdown-column">
            <h3>Exclusive Discount Programs</h3>
            <ul>
              <li>Corporate Employee Program</li>
              <li>Samsung Student Advantage</li>
              <li>Government Employees</li>
              <li>Defence Purchase Program</li>
            </ul>
          </div>
        </div>
      )}

{menu1 === "ai" && (
        <div className="dropdown-content2" onMouseEnter={() => handleMouseEnter("ai")} onMouseLeave={handleMouseLeave}>
          <div className="dropdown-column">
            <h3>Offers</h3>
            <ul>
              <li>AI for all</li>
              <li>Galaxy AI</li>
              <li>Samsung AI Tv</li>
              <li>Bespoke AI</li>
              <li>All AI Product</li>
              
            </ul>
          </div>
         
        </div>
      )}

{menu1 === "mobile" && (
  <div className="dropdown-content" onMouseEnter={() => handleMouseEnter("mobile")} onMouseLeave={handleMouseLeave}>
    <div className="dropdown-column">
      <h3>Recommended</h3>
      <ul>
        <li>Galaxy Z Fold Series</li>
        <li>Galaxy Z Flip Series</li>
        <li>Galaxy S Series</li>
        <li>Galaxy Note Series</li>
        <li>Galaxy A Series</li>
        <li>Galaxy M Series</li>
        <li>Galaxy F Series</li>
        <li>Galaxy XCover Series</li>
        <li>Compare Galaxy Models <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
        </span></li>
      </ul>
    </div>
    <div className="dropdown-column">
      <h3>All Mobiles</h3>
      <ul>
        <li>Galaxy Z Fold</li>
        <li>Galaxy Z Flip</li>
        <li>Galaxy S23</li>
        <li>Galaxy Note20</li>
        <li>Galaxy A54</li>
        <li>Galaxy M34</li>
        <li>Galaxy F14</li>
        <li>Galaxy XCover 6 Pro</li>
        <li>Find Your Mobile</li>
      </ul>
    </div>
    <div className="dropdown-column">
      <h3>Exclusive Discount Programs</h3>
      <ul>
        <li>Corporate Employee Program</li>
        <li>Samsung Student Advantage</li>
        <li>Government Employees</li>
        <li>Defence Purchase Program</li>
      </ul>
    </div>
  </div>
)}

{menu1 === "tv&av" && (
   <div className="dropdown-content" onMouseEnter={() => handleMouseEnter("mobile")} onMouseLeave={handleMouseLeave}>
   <div className="dropdown-column">
     <h3>Recommended</h3>
     <ul>
       <li>All About TV</li>
       <li>Why Samsung TV</li>
       <li>Why 8K Tvs</li>
       <li>Why NEO QLED</li>
       <li>Why Samsumg OLED</li>
       <li>Why NEO QLED For Gaming</li>
       <li>Virtual Product Experience <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
      </span></li>
     </ul>
   </div>
   <div className="dropdown-column">
     <h3>All TVs</h3>
     <ul>
       <li>Neo QLED</li>
       <li>OLED</li>
       <li>QLED 4K</li>
       <li>Crystal 4K UHD</li>
       <li>The Frame</li>
       <li>The Serif</li>
       <li>TV Accessories</li>
       <li>Discover TVs</li>
     </ul>
   </div>
   <div className="dropdown-column">
     <h3>Exclusive Discount Programs</h3>
     <ul>
       <li>Corporate Employee Program</li>
       <li>Samsung Student Advantage</li>
       <li>Government Employees</li>
       <li>Defence Purchase Program</li>
     </ul>
   </div>
   <div className="dropdown-column">
  <h3>TV By Size</h3>
  <ul>
    <li>32 Inch</li>
    <li>40 Inch</li>
    <li>43 Inch</li>
    <li>50 Inch</li>
    <li>55 Inch</li>
    <li>60 Inch</li>
    <li>65 Inch</li>
    <li>70 Inch</li>
    <li>75 Inch</li>
    <li>85 Inch</li>
  </ul>
</div>

<div className="dropdown-column">
  <h3>TV By Resolution</h3>
  <ul>
    <li>HD Ready (720p)</li>
    <li>Full HD (1080p)</li>
    <li>4K Ultra HD (2160p)</li>
    <li>8K Ultra HD (4320p)</li>
  </ul>
</div>

<div className="dropdown-column">
  <h3>Projectors</h3>
  <ul>
    <li>Home Theater Projectors</li>
    <li>Business Projectors</li>
    <li>Portable Projectors</li>
    <li>4K Projectors</li>
  </ul>
</div>
<div className="dropdown-column">
  <h3>Sound Devices</h3>
  <ul>
    <li>Bluetooth Speakers</li>
    <li>Home Audio Systems</li>
    <li>Soundbars</li>
    <li>Headphones</li>
    <li>Smart Speakers</li>
    <li>Portable Speakers</li>
    <li>Wireless Earbuds</li>
    <li>Hi-Fi Systems</li>
    <li>Subwoofers</li>
    <li>Multi-Room Audio Systems</li>
  </ul>
</div>

 </div>
)}

       
{menu1 === "homeappliance" && (
  <div className="dropdown-content" onMouseEnter={() => handleMouseEnter("homeappliance")} onMouseLeave={handleMouseLeave}>
    <div className="dropdown-column">
      <h3>Refrigerators</h3>
      <ul>
        <li>Top Freezer Refrigerators</li>
        <li>Side-by-Side Refrigerators</li>
        <li>French Door Refrigerators</li>
        <li>Compact Refrigerators</li>
        <li>Mini Refrigerators</li>
      </ul>
    </div>
    <div className="dropdown-column">
      <h3>Washing Machines</h3>
      <ul>
        <li>Front Load Washers</li>
        <li>Top Load Washers</li>
        <li>Washer-Dryer Combos</li>
        <li>Portable Washers</li>
        <li>High-Efficiency Washers</li>
      </ul>
    </div>
    <div className="dropdown-column">
      <h3>Air Conditioners</h3>
      <ul>
        <li>Window Air Conditioners</li>
        <li>Split Air Conditioners</li>
        <li>Portable Air Conditioners</li>
        <li>Inverter Air Conditioners</li>
        <li>Smart Air Conditioners</li>
      </ul>
    </div>
    <div className="dropdown-column">
      <h3>Dishwashers</h3>
      <ul>
        <li>Built-In Dishwashers</li>
        <li>Compact Dishwashers</li>
        <li>Drawer Dishwashers</li>
        <li>Portable Dishwashers</li>
      </ul>
    </div>
    <div className="dropdown-column">
      <h3>Vacuum Cleaners</h3>
      <ul>
        <li>Upright Vacuums</li>
        <li>Cylinder Vacuums</li>
        <li>Stick Vacuums</li>
        <li>Robotic Vacuums</li>
        <li>Handheld Vacuums</li>
      </ul>
    </div>
  </div>
)}

{menu1 === "accessories" && (
  <div className="dropdown-content" onMouseEnter={() => handleMouseEnter("accessories")} onMouseLeave={handleMouseLeave}>
    <div className="dropdown-column">
      <h3>Display Accessories</h3>
      <ul>
        <li>Screen Protectors</li>
        <li>Display Cleaning Kits</li>
        <li>Screen Privacy Filters</li>
        <li>Stand Mounts</li>
      </ul>
    </div>
    <div className="dropdown-column">
      <h3>Audio Accessories</h3>
      <ul>
        <li>Speakers</li>
        <li>Headsets</li>
        <li>Earbuds</li>
        <li>Earbuds Covers</li>
      </ul>
    </div>
    <div className="dropdown-column">
      <h3>Mobile Accessories</h3>
      <ul>
        <li>Back Covers</li>
        <li>Keychains</li>
        <li>Spare Parts</li>
        <li>Chargers & Cables</li>
      </ul>
    </div>
  </div>
)}

{menu1 === "computingdevices" && (
  <div className="dropdown-content" onMouseEnter={() => handleMouseEnter("computingdevices")} onMouseLeave={handleMouseLeave}>
    <div className="dropdown-column">
      <h3>Recommended</h3>
      <ul>
        <li>New 2024 Monitors Lineup</li>
        <li>Galaxy Books Download Center</li>
        <li>Galaxy Book</li>
        <li>Discover Galaxy Book</li>
        <li>Galaxy Book4 Ultra</li>
        <li>Galaxy Book4 Pro 360</li>
        <li>Galaxy Book4 Pro</li>
        <li>Galaxy Book4 360</li>
        <li>Galaxy Book4</li>
        <li>Galaxy Book3</li>
        <li>Windows 11</li>
      </ul>
    </div>
    <div className="dropdown-column">
      <h3>All Galaxy Book</h3>
      <ul>
        <li>Galaxy Book By Size</li>
        <ul>
          <li>38.1cm (15") - 40.62cm (16")</li>
          <li>33.02cm (13") - 37.84cm (14.9")</li>
        </ul>
      </ul>
    </div>
    <div className="dropdown-column">
      <h3>Monitors</h3>
      <ul>
        <li>All Monitors</li>
        <li>Gaming Monitor</li>
        <li>Smart Monitor</li>
        <li>High Resolution Monitor</li>
        <li>Curved Monitor</li>
        <li>Flat Monitor</li>
        <li>Business Monitor</li>
        <li>Discover Monitors</li>
      </ul>
    </div>
    <div className="dropdown-column">
      <h3>Memory & Storage</h3>
      <ul>
        <li>Discover Memory & Storage</li>
        <li>NVMe SSD</li>
        <li>SATA SSD</li>
        <li>Portable SSD</li>
        <li>Memory Cards</li>
        <li>USB Flash Drive</li>
        <li>All Memory & Storage</li>
      </ul>
    </div>
  </div>
)}

{menu1 === "smartthings" && (
  <div className="dropdown-content" onMouseEnter={() => handleMouseEnter("smartthings")} onMouseLeave={handleMouseLeave}>
    <div className="dropdown-column">
      <h3>Offers</h3>
      <ul>
        <li>All Offers</li>
        <li>#YouMake <span className="hot">HOT</span></li>
        <li>Mobile Offers</li>
        <li>Television Offers</li>
        <li>Refrigerator Offers</li>
        <li>Washing Machine Offers</li>
        <li>Laptop & Computing Offers</li>
      </ul>
    </div>
    <div className="dropdown-column">
      <h3>Why buy from Samsung</h3>
      <ul>
        <li>Overview</li>
        <li>Samsung Finance+</li>
        <li>Samsung Axis Bank Credit Card</li>
        <li>Samsung Wallet</li>
        <li>Samsung Care+</li>
        <li>Delivery & Installation</li>
        <li>Mobiles Trade-in</li>
      </ul>
    </div>
   
    <div className="dropdown-column">
      <h3>Exclusive Discount Programs</h3>
      <ul>
        <li>Corporate Employee Program</li>
        <li>Samsung Student Advantage</li>
        <li>Government Employees</li>
        <li>Defence Purchase Program</li>
      </ul>
    </div>

    <div className="dropdown-column">
      <h3>Residential</h3>
      <ul>
        <li>All Residential ACs</li>
        <li>BESPOKE AI</li>
        <li>WindFree™ AC</li>
        <li>Convertible 5in1 AC</li>
        <li>Discover Air Conditioners</li>
      </ul>
      <h3>Commercial Air Conditioners</h3>
      <ul>
        <li>All Commercial ACs</li>
        <li>VRF</li>
        <li>Cassette AC</li>
        <li>Chiller</li>
        <li>Ventilation</li>
        <li>Controller <span className="arrow">→</span></li>
      </ul>
    </div>
  
  </div>
)}


      <div className="sub-navbar">
        <div className="sub-navbar-con1">
          <li>Mobile</li>
        </div>
        <div className="sub-navbar-con2">
          <li onClick={() => setSubmenu("smartphones")} className={submenu === "smartphones" ? "active" : ""}>Smartphones</li>
          <li onClick={() => setSubmenu("tablets")} className={submenu === "tablets" ? "active" : ""}>Tablets</li>
          <li onClick={() => setSubmenu("galaxybooks")} className={submenu === "galaxybooks" ? "active" : ""}>Galaxy Books</li>
          <li onClick={() => setSubmenu("watches")} className={submenu === "watches" ? "active" : ""}>Watches</li>
          <li onClick={() => setSubmenu("galaxy buds")} className={submenu === "galaxy buds" ? "active" : ""}>Galaxy Buds</li>
          <li onClick={() => setSubmenu("accessories")} className={submenu === "accessories" ? "active" : ""}>Accessories</li>
        </div>
      </div>
    
  
  

    </>
  );
};

export default Navbar;
