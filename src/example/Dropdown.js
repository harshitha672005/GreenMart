import React, { useState } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

export default function Dropdown() {
  const [value] = useState(null);

  const options = [
    { label: 'Fruits', value: 'fruits' },
    { label: 'Vegetables', value: 'vegetables' },
    { label: 'Frozen vegetables', value: 'frozen vegetables' },
    { label: 'Foodgrains, Oil & Masala', value: 'Foodgrains, Oil & Masala' },
    { label: 'Eggs, Meat & Fish', value: 'Eggs, Meat & Fish' },
    { label: 'Snacks', value: 'Snacks' },
    { label: 'Bakery, Cakes & Dairy', value: 'Bakery, Cakes & Dairy' },
    { label: 'Dry Fruits', value: 'Dry Fruits' },
    
  ];

  return (
    <div>

      
        <Select options={options} defaultValue={value} placeholder="Select your product" />
        <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
    <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>27% Offer!</h2>
    <img src="https://thumbs.dreamstime.com/b/tomatoes-half-tomato-isolated-white-png-file-transparent-background-tomatoes-half-tomato-isolated-white-136961939.jpg" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Tomato</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 27(1 Kg)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}><Link to='/cart'style={{ color: 'white', fontSize: '16px', textDecoration: "none" }}>Add to cart</Link></button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>35% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/10000063_20-fresho-broccoli.jpg?tr=w-1920,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Broccoli</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 37.23(200 Gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>25% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/10000273_16-fresho-mushrooms-button.jpg?tr=w-1920,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Mushrooms</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 48.5(1 pack)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  </div>
  <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>20% Offer!</h2>
    <img src="https://origin.club/media/catalog/product/cache/86eaafd287624d270d87c663dd3976d5/w/a/walnut_2__1.jpg" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Walnut</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs : 180(100 Gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to Cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>14% Offer!</h2>
    <img src="https://sardarjimewewale.com/wp-content/uploads/2023/12/RoastedFlaxSeeds_800x.jpg" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Flax Seeds</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 46(200 Gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>12% Offer!</h2>
    <img src="https://www.nutseedmart.com/wp-content/uploads/2021/08/Phool-Makahne.jpg" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Foxnut</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs:100(200 Gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  </div>
        <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
   <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
     <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>43% Offer!</h2>
     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/800px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Kiwi</p>
     <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs : 155(3 pcs)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to Cart</button>
   </div>
   <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
     <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>33% Offer!</h2>
    <img src="https://www.melissas.com/cdn/shop/products/image-of-organic-mini-red-seedless-watermelon-fruit-29678417018924_512x512.jpg?v=1644607939" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
     <p style={{ color: '#555', fontSize: '1.2rem' }}>Watermelon</p>
     <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 46(1 Kg)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
   </div>
   <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
     <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>27% Offer!</h2>
    <img src="https://fruitboxco.com/cdn/shop/products/asset_19_grande.jpg?v=1594383262" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
     <p style={{ color: '#555', fontSize: '1.2rem' }}>Guava</p>
     <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs:120(1 Kg)</p>
     <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
   </div>
   </div>
        
  <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
    <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>38% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/10000908_15-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free-13-15-pcs.jpg?tr=w-1080,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Chiken-Curry Cut Without Skin,Antibiotic ResidueFree Meet</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 140(500 g)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>18%% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/20000963_3-fresho-rohu-fish-large-curry-cutbengali-cut-preservative-free.jpg?tr=w-1080,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rohu Fish Curry Cut/Bengali Cut</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 149 (500 g-With Head)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>29% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/10000755_27-fresho-catla-fish-large-curry-cutbengali-cut-preservative-free-12-15-pcs.jpg?tr=w-1080,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Catla Fish Currry Cut/Bengali Cut</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 341(1 Kg-With Head)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  </div>
  <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
    <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>7% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/40224136_2-fresho-fresho-butter-pasteurised.jpg?tr=w-1080,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Premium Butter-pasteurised</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 56(100 Gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>15% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/1209134_4-milky-mist-natural-set-curd.jpg?tr=w-1080,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Farm Fresh Curd-No Preservatives</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 24(200 Gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>15% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/40006899_9-amul-cooking-butter-unsalted.jpg?tr=w-1080,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Amul Butter-Unsalted</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 161(100 gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  </div>
  <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
    <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>48% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/40308846_3-bb-home-earth-tea-coffee-mug-with-lid-cum-coaster-wave-blue-hand-painted.jpg?tr=w-1080,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Tea/Coffee Mug With Lid/Coaster,Hnad Crafted</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 60(180 ml)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>48%Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/40316450_7-bb-home-tealight-candles-white-upto-25-hour-burning-time.jpg?tr=w-1080,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Tealight Candles-white,upto 2.5hour Burning Time</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 54(10 pcs)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>29% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/413495_13-harpic-disinfectant-bathroom-cleaner-lemon.jpg?tr=w-1080,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Harpic Disinfectant Bathroom Cleaner Liquid,Lemon</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 46(200 ml)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  </div>
    </div>
    
  );
}
