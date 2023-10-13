import React from'react';

import ma from '../images/ma.webp'
import mb from '../images/mb.webp'
import mc from '../images/mc.webp'
import md from '../images/md.webp'
import me from '../images/me.webp'
import mf from '../images/mf.webp'
import mg from '../images/mg.webp'
import mh from '../images/mh.webp'
import mi from '../images/mi.webp'
import mj from '../images/mj.webp'
function Menu(){
    return(
        <>
        <div className='row mt-2 com'>
        <div className='col-md-1 '>
              <br></br>
        </div>
        <div className='col-md-1 '>
            <img src={ma}/>  
            <p>Top Offers</p>
        </div>
        <div className='col-md-1 '>
            <img src={mb}/>  
            <p>Mobile </p>
        </div>
        <div className='col-md-1 '>
            <img src={mc}/>  
            <p>Electronics</p> 
        </div>
        <div className='col-md-1'>
            <img src={md}/>  
            <p>TVs App</p> 
        </div>
        <div className='col-md-1 '>
        <img src={me}/>  
            <p>Fashion</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mf}/>  
            <p>Beauty</p> 
        </div>
        <div className='col-md-1'>
        <img src={mg}/>  
            <p>Kitchen</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mh}/>  
            <p>Furniture</p> 
        </div>
        <div className='col-md-1'>
        <img src={mi}/>  
            <p>Flights</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mj}/>  
            <p>Grocery</p> 
        </div>
        <div className='col-md-1 '>
              <br></br>
        </div>
    </div>
    </>
        );
    }
    
    
    export default Menu;

