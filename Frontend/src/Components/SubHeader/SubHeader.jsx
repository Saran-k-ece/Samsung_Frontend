import React, { useState } from 'react';
import './SubHeader.css';
import { assets } from '../../assets/assets'; 

const SubHeader = () => {
  const [color, setColor] = useState('Silver Shadow');
  const [color1, setColor1] = useState('Blue');
  const[color2,setColor2] = useState('Titanium Gray') 
  const[color3,setColor3] = useState('Onyx Black') 
  const[color4,setColor4] = useState('Onyx Black') 
  const[color5 ,setColor5] = useState('Awesome Iceblue')
  const[color6 ,setColor6] = useState('Awesome Iceblue')
  const[color7 ,setColor7] = useState('Light Green')
  const[color8 ,setColor8] = useState('Orange')
  const[color9 ,setColor9] = useState('Green')
  const[color10 ,setColor10] = useState('Silver')  
  const[color11 ,setColor11] = useState('Graphite')
  
  const [imageSrc, setImageSrc] = useState(assets.SliverShadow); 
  const [imageSrc1, setImageSrc1] = useState(assets.Flip1); 
  const [imageSrc2 ,setImageSrc2] =useState(assets.S24_U1);
  const [imageSrc3 ,setImageSrc3] =useState(assets.S24__2)
  const [imageSrc4 ,setImageSrc4] =useState(assets.S24_2)
  const [imageSrc5 ,setImageSrc5] =useState(assets.A55_5G)
  const [imageSrc6 ,setImageSrc6] =useState(assets.A35_5G)
  const [imageSrc7 ,setImageSrc7] =useState(assets.A34_5G)
  const [imageSrc8 ,setImageSrc8] =useState(assets.watch1)
  const [imageSrc9 ,setImageSrc9] =useState(assets.watch2)
  const [imageSrc10 ,setImageSrc10] =useState(assets.buds)
  const [imageSrc11 ,setImageSrc11] =useState(assets.tab)


  const handleColorChange = (newColor) => {
    setColor(newColor);
    if (newColor === 'Pink') {
      setImageSrc(assets.Pink);
    } else if (newColor === 'Navy') {
      setImageSrc(assets.Navy);
    } else {
      setImageSrc(assets.SliverShadow); 
    }
  };

  const handleColorChange2 =(newColor1)=>
  {
    setColor1(newColor1);
    if(newColor1 === "Silver Shadow"){
      setImageSrc1(assets.Flip2);
    }
    else if(newColor1 === "Green"){
      setImageSrc1(assets.Flip3);
    }
    else{
      setImageSrc1(assets.Flip1);
    }

  }

  const handleColorChange3 = (newcolor2)=>{
    setColor2(newcolor2)
    if(newcolor2 === "Titanium Black")
    {
      setImageSrc2(assets.S24_U4)
    }
    else if(newcolor2 === "Titanium Violet")
    {
      setImageSrc2(assets.S24_U3)
    }
    else if(newcolor2 === "Titanium Yellow")
    {
      setImageSrc2(assets.S24_U2)
    }
    else{
      setImageSrc2(assets.S24_U1)
    }
  }

  const handleColorChange4 = (newcolor3)=>{
    setColor3(newcolor3)
    if(newcolor3 === "Cobalt Violet")
    {
      setImageSrc3(assets.S24__1)
    }
    else{
      setImageSrc3(assets.S24__2)
    }
  }

  const handleColorChange5 = (newcolor4)=>{
    setColor4(newcolor4)
    if(newcolor4 === "Cobalt Violet")
    {
      setImageSrc4(assets.S24_3)
    }
    else if(newcolor4 === "Marbel Gray")
    {
      setImageSrc4(assets.S24_4)
    }
    
    else{
      setImageSrc4(assets.S24_2)
    }
  }

  const handleColorChange6 = (newcolor5)=>{
    setColor5(newcolor5)
    if(newcolor5 === "Awesome Navy")
    {
      setImageSrc5(assets.A55_5G_2)
    }
   
    else{
      setImageSrc5(assets.A55_5G)
    }
  }

  const handleColorChange7 = (newcolor6)=>{
    setColor6(newcolor6)
    if(newcolor6 === "Awesome Navy")
    {
      setImageSrc6(assets.A35_5G_2)
    }
     else if(newcolor6 === "Awesome Lilac"){
      setImageSrc6(assets.A35_5G_3)
   }
    else{
      setImageSrc6(assets.A35_5G)
    }
  }

  const handleColorChange8 = (newcolor7)=>{
    setColor7(newcolor7)
    if(newcolor7 === "Black")
    {
      setImageSrc7(assets.A34_5G_2)
    }
     else if(newcolor7 === "Violet"){
      setImageSrc7(assets.A34_5G_3)
   }
   else if(newcolor7 === "Silver"){
    setImageSrc7(assets.A34_5G_4)
 }
    else{
      setImageSrc7(assets.A34_5G)
    }
  }

  const handleColorChange9 = (newcolor7)=>{
    setColor8(newcolor7)
    if(newcolor7 === "Titanium Silver")
    {
      setImageSrc8(assets.watch1_1)
    }
     else if(newcolor7 === "Titanium White"){
      setImageSrc8(assets.watch1_2)
   }
    else{
      setImageSrc8(assets.watch1)
    }
  }

  const handleColorChange10 = (newcolor8)=>{
    setColor9(newcolor8)
    if(newcolor8 === "Cream")
    {
      setImageSrc9(assets.watch2_1)
    }
    else{
      setImageSrc9(assets.watch2)
    }
  }

   const handleColorChange11 = (newColor9) => {
    setColor10(newColor9);
    if (newColor9 === 'White') {
      setImageSrc10(assets.buds2);
    } else {
      setImageSrc10(assets.buds);
    }
  };

  const handleColorChange12 = (newColor10) => {
    setColor11(newColor10);
    if (newColor10 === 'Beige') {
      setImageSrc11(assets.tab2);
    } else {
      setImageSrc11(assets.tab);
    }
  };

  return (
    <div className="sub-header">
      <div className="sub-header-heading">
        <h1>What's New</h1>
      </div>

      <div className="sub-header-container">
        <div className="sub-header-left-container">
          <div className="sub-header-left-container-img">
            <img src={assets.samsung12} alt="Galaxy Z Fold6" />
            <div className="sub-header-left-container-content">
              <h1>Galaxy Z Fold6</h1>
              <h1>Special Edition</h1>
              <button>Buy now</button>
            </div>
          </div>
        </div>

        <div className="sub-head-right-container">
          <div className="box">
            <img src={assets.samsung19} alt="Galaxy Z Flip6" />
            <h2>Galaxy Z Flip6</h2>
            <button>Buy now</button>
          </div>
          <div className="box">
            <img src={assets.samsung14} alt="Galaxy Z Fold6" />
            <h2>Galaxy Z Fold6</h2>
            <button>Buy now</button>
          </div>
          <div className="box">
            <img src={assets.samsung15} alt="Galaxy S24 Ultra" />
            <h2>Galaxy S24 Ultra</h2>
            <button>Buy now</button>
          </div>
          <div className="box">
            <img src={assets.samsung20} alt="Galaxy 24|24+" />
            <h2>Galaxy 24|24+</h2>
            <button>Buy now</button>
          </div>
        </div>
      </div>  

      <div className="banner">
        <div className="banner-text">
          <h1>GalaxyZ</h1>
          <p>Join the flip side</p>
          <button className="cta-button">See all</button>
        </div>
        <div className="banner-image">
          <img src={assets.samsung17} alt="Galaxy Z phones" />
        </div>
      </div> 

      <div className="banner-2">
        <div className="box2">
          <div className="box2-top">
          <h3>New</h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="heart">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          </div>
        
          <img src={imageSrc} alt="Galaxy Z Fold6" />
          <h2>Galaxy Z Fold6</h2>

          <div className="color-selection">
            <p>Colour: <span>{color}</span></p>
            <div className="color-showing">
              <div className="button1">
                <button onClick={() => handleColorChange('Silver Shadow')}></button>
              </div>
              <div className="button2">
                <button onClick={() => handleColorChange('Navy')}></button>
              </div>
              <div className="button3">
                <button onClick={() => handleColorChange('Pink')}></button>
              </div>
            </div> 
          </div>

          <div className="box3-content">
            <h2>From ₹7299.06/mo for 24 mos at 15% Interest or ₹176999.00</h2>
            <div className="rating">
              <span>⭐⭐⭐⭐⭐</span> <span>4.6 (340)</span>
            </div>
       
            <button className="buy-now">Buy now</button>
            
          </div>
        </div>

        <div className="box2">
          <div className="box2-top">
          <h3>New</h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="heart">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          </div>
          <img src={imageSrc1} alt="Galaxy Z Flip6" />
          <h2>Galaxy Z Flip6</h2>

          <div className="color-selection">
            <p>Colour: <span>{color1}</span></p>
            <div className="color-showing">
              <div className="button4">
                <button onClick={() => handleColorChange2('Blue')}></button>
              </div>
              <div className="button5">
                <button onClick={() => handleColorChange2('Silver Shadow')}></button>
              </div>
              <div className="button6">
                <button onClick={() => handleColorChange2('Green')}></button>
              </div>
            </div>
          </div>

          <div className="box3-content">
            <h2>From ₹4536.12/mo for 24 mos at 15% Interest or ₹109999.00</h2>
            <div className="rating">
              <span>⭐⭐⭐⭐⭐</span>
               <span>4.7 (326)</span>
            </div>
            <button className="buy-now">Buy now</button>
            
          </div>
        </div>
        <div className='banner2-bottom'>
           <button>See all</button>
        </div>
      </div>
     
     <div className="banner-3">
      <div className="banner3-img">
        <img src={assets.samsung2}></img>
        <div className="image-content2">
          <h1>Galaxy S</h1>
          <button>See all</button>
        </div>
      </div>
      
     
     </div>
     <div className="box3-container">
      <div className="box-3">
        <img src={imageSrc2}></img>
        <h1>Galaxy S24 Ultra</h1>
        <div className="color-selection">
            <p>Colour: <span>{color2}</span></p>
            <div className="color-showing">
              <div className="button7">
                <button onClick={() => handleColorChange3('Titanium Gray')}></button>
              </div>
              <div className="button8">
                <button onClick={() => handleColorChange3('Titanium Black')}></button>
              </div>
              <div className="button9">
                <button onClick={() => handleColorChange3('Titanium Violet')}></button>
              </div>
              <div className="button10">
                <button onClick={() => handleColorChange3('Titanium Yellow')}></button>
              </div>
            </div>
          </div>
          <div className="box3-content">
            <h2>From ₹4536.12/mo for 24 mos at 15% Interest or ₹109999.00</h2>
            <div className="rating">
              <span>⭐⭐⭐⭐⭐</span>
               <span>4.7 (326)</span>
            </div>
            <button className="buy-now">Buy now</button>
            
          </div>
        
      </div>
      <div className="box-3">
        <img src={imageSrc3}></img>
        <h1>Galaxy S24+</h1>
        <div className="color-selection">
            <p>Colour: <span>{color3}</span></p>
            <div className="color-showing">
              <div className="button1">
                <button onClick={() => handleColorChange4('Onyx Black')}></button>
              </div>
              <div className="button2">
                <button onClick={() => handleColorChange4('Cobalt Violet')}></button>
              </div>
            
            </div>
          </div>
          <div className="box3-content">
            <h2>From ₹4536.12/mo for 24 mos at 15% Interest or ₹109999.00</h2>
            <div className="rating">
              <span>⭐⭐⭐⭐⭐</span>
               <span>4.7 (326)</span>
            </div>
            <button className="buy-now">Buy now</button>
            
          </div>
      </div>
      <div className="box-3">
        <img src={imageSrc4}></img>
        <h1>Galaxy S24</h1>
        <div className="color-selection">
            <p>Colour: <span>{color4}</span></p>
            <div className="color-showing">
              <div className="button14">
                <button onClick={() => handleColorChange5('Onyx Black')}></button>
              </div>
              <div className="button15">
                <button onClick={() => handleColorChange5('Cobalt Violet')}></button>
              </div>
              <div className="button16">
                <button onClick={() => handleColorChange5('Marbel Gray')}></button>
              </div>
            </div>
          </div>
          <div className="box3-content">
            <h2>From ₹4536.12/mo for 24 mos at 15% Interest or ₹109999.00</h2>
            <div className="rating">
              <span>⭐⭐⭐⭐⭐</span>
               <span>4.7 (326)</span>
            </div>
            <button className="buy-now">Buy now</button>
          </div>
         
      </div>
      <div className='banner3-bottom'>
           <button>See all</button>
        </div>
      </div>

      <div className='banner-4'>
        <div className='banner4-img'>
          <img src={assets.A55}></img>
          <div className='banner4-img-content'>
          <h1>Galaxy A55 5G</h1>
          <h4>Awesome is for everyone</h4>
          <button>See all</button>
          </div>
        </div>
      </div>

      <div className="banner4-box">
      <div className='box-4'>
     <img src={imageSrc5} alt="Galaxy A55 5G" />
     <h1>Galaxy A55 5G (8GB Memory)</h1>
  
     <div className="color-selection">
       <p>Colour: <span>{color5}</span></p>
       <div className="color-showing">
         <div className="button16">
           <button onClick={() => handleColorChange6('Awesome Iceblue')}></button>
         </div>
         <div className="button17">
           <button onClick={() => handleColorChange6('Awesome Navy')}></button>
         </div>
         
       </div>
     </div>
  
       <div className="box3-content">
           <h2>From ₹2084.87/mo for 24 mos at 15% Interest or ₹ 42999.00</h2>
            <div className="Saving">
              <span className='Saving1'><s>₹ 45999.00</s></span>
              <span className='Saving2'>Save ₹3000.00</span>
            </div>
            <button className="buy-now">Buy now</button>
          </div>
        </div>

        <div className='box-4'>
     <img src={imageSrc6} alt="Galaxy A55 5G" />
     <h1>Galaxy A35 5G (8GB Memory)</h1>
  
     <div className="color-selection">
       <p>Colour: <span>{color6}</span></p>
       <div className="color-showing">
         <div className="button18">
           <button onClick={() => handleColorChange7('Awesome Iceblue')}></button>
         </div>
         <div className="button19">
           <button onClick={() => handleColorChange7('Awesome Navy')}></button>
         </div>
         <div className="button20">
           <button onClick={() => handleColorChange7('Awesome Lilac')}></button>
         </div>
         
       </div>
     </div>
  
       <div className="box3-content">
           <h2>From ₹1503.03/mo for 24 mos at 15% Interest or ₹ 30999.00</h2>
            <div className="Saving">
              <span className='Saving1'><s>₹ 33999.00</s></span>
              <span className='Saving2'>Save ₹3000.00</span>
            </div>
            <button className="buy-now">Buy now</button>
                      </div>
        </div>

        <div className='box-4'>
         <img src={assets.Dog} className='Dog'></img>
         <div className="dog-box-4-content">
          <h1>Galaxy A55 5G</h1>
          <h5>Awesome is for everyone</h5>
          <button>Learn more</button>
         </div>
        </div>
 
        <div className='box-4'>

     <img src={imageSrc7} alt="Galaxy A55 5G" />
     <h1>Galaxy A34 5G (8GB Memory)</h1>
  
     <div className="color-selection">
       <p>Colour: <span>{color7}</span></p>
       <div className="color-showing">
         <div className="button21">
           <button onClick={() => handleColorChange8('Light Green')}></button>
         </div>
         <div className="button22">
           <button onClick={() => handleColorChange8('Black')}></button>
         </div>
         <div className="button23">
           <button onClick={() => handleColorChange8('Violet')}></button>
         </div>
         <div className="button24">
           <button onClick={() => handleColorChange8('Silver')}></button>
         </div>
         
       </div>
     </div>
  
       <div className="box3-content">
           <h2>From ₹1084.87/mo for 24 mos at 15% Interest or ₹ 22999.00</h2>
            <div className="Saving">
              <span className='Saving1'><s>₹ 22999.00</s></span>
              <span className='Saving2'>Save ₹3000.00</span>
            </div>
            <button className="buy-now">Buy now</button>          
            </div>
        </div>
        <div className='banner4-bottom'>
          <button>See all</button>
        </div>
      
      </div>
      <div className="banner-5">
        <div className='banner5-img'>
        <img src={assets.All_Products}></img>
        <div className='banner5-img-content'>
          <h1>The Connected power of</h1>
          <h1>Samsung Galaxy</h1>
          <button>See all</button>
        </div>
        </div>
        
      </div>
      <div className="box5-container">
        <div className="box-5">
        <div className="box5-top">
          <h3>New</h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="heart">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          </div>
          <img src={imageSrc8}></img>
          <h1>Galaxy Watch Ultra(LTE,4.7,cm)</h1>
  
        <div className="color-selection">
          <p>Colour: <span>{color8}</span></p>
          <div className="color-showing">
            <div className="button25">
              <button onClick={() => handleColorChange9('Orange')}></button>
            </div>
            <div className="button26">
              <button onClick={() => handleColorChange9('Titanium Silver')}></button>
            </div>
            <div className="button27">
              <button onClick={() => handleColorChange9('Titanium White')}></button>
            </div>
            
          </div>
        </div>
      
    <div className="box3-content">
        <h2>From ₹2909.15/mo for 24 mos at 15% Interest or ₹ 59999.00</h2>
         <div className="Saving">
           <span className='Saving1'><s>₹ 69999.00 </s></span>
           <span className='Saving2'>Save ₹10000.00</span>
         </div>
         <button className="buy-now">Buy now</button>
       </div>
        </div>


        <div className="box-5">
        <div className="box5-top">
          <h3>New</h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="heart">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          </div>
          <img src={imageSrc9}></img>
          <h1>Galaxy Watch7 (Bluetooth,4.0 cm)</h1>
  
  <div className="color-selection">
    <p>Colour: <span>{color9}</span></p>
    <div className="color-showing">
      <div className="button28">
        <button onClick={() => handleColorChange10('Green')}></button>
      </div>
      <div className="button29">
        <button onClick={() => handleColorChange10('Cream')}></button>
      </div>
      
    </div>
  </div>

    <div className="box3-content">
        <h2>From ₹1377.96/mo for 18 mos at 15.99% Interest or ₹ 29999.00</h2>
         <div className="Saving">
           <span className='Saving1'><s>₹ 32999.00 </s></span>
           <span className='Saving2'> Save ₹3000.00</span>
         </div>
         <button className="buy-now">Buy now</button>
       </div>
        </div>
        
        <div className="box-5">
        <div className="box5-top">
          <h3>New</h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="heart">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          </div>
          <img src={imageSrc10}></img>
          <h1>Galaxy Buds3 Pro(With Samsung AI)</h1>
          
          <div className="color-selection">
            <p>Colour: <span>{color10}</span></p>
            <div className="color-showing">
              <div className="button30">
                <button onClick={() => handleColorChange11('Silver')}></button>
              </div>
              <div className="button31">
                <button onClick={() => handleColorChange11('White')}></button>
              </div>
              
            </div>
          </div>
        
            <div className="box3-content">
                <h2>From ₹2084.87/mo for 24 mos at 15% Interest or ₹ 42999.00</h2>
                 <div className="Saving">
                   <span className='Saving1'><s>₹ 45999.00</s></span>
                   <span className='Saving2'>Save ₹3000.00</span>
                 </div>
                 <button className="buy-now">Buy now</button>
               </div>
                </div>


                <div className="box-5">
                <div className="box5-top">
          <h3>New</h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="heart">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          </div>
                  <img src={imageSrc11}></img>
                  <h1>Galaxy A55 5G (8GB Memory)</h1>
          
          <div className="color-selection">
            <p>Colour: <span>{color11}</span></p>
            <div className="color-showing">
              <div className="button32">
                <button onClick={() => handleColorChange12('Graphite')}></button>
              </div>
              <div className="button33">
                <button onClick={() => handleColorChange12('Beige')}></button>
              </div>
              
            </div>
          </div>
        
            <div className="box3-content">
                <h2>From ₹2084.87/mo for 24 mos at 15% Interest or ₹ 42999.00</h2>
                 <div className="Saving">
                   <span className='Saving1'><s>₹ 45999.00</s></span>
                   <span className='Saving2'>Save ₹3000.00</span>
                 </div>
                 <button className="buy-now">Buy now</button>
               </div>
                </div>
                <button className='box-5btn'>See all</button>
              </div>

              <div className="banner-6">
                <img src={assets.banner6}></img>
              </div>

    </div>
  );
};

export default SubHeader;
