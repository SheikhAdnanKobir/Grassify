import React from 'react';
import SliderProduct from '../../Hooks/SliderProduct';
import Image1 from '../../Assets/img5.jpg';
import Image2 from '../../Assets/img6.png';
import Image3 from '../../Assets/img7.png';
import Image4 from '../../Assets/img8.png';

const Section2_LandscapeProduct = () => {
    return (
        <div className="my-28">
            <SliderProduct heading="Landscape Products" img1={Image1} img2={Image2} img3={Image3} img4={Image4} PdName1="Antiqo Fence" PdName2="JF Australian Trellis" PdName3="JF Polyhex Mesh" PdName4="JF Privezy Grass Wall" PdPrice1="₹10,024.00 – ₹14,984.82" PdPrice2="₹6,962.00" PdPrice3="₹4,050.00 – ₹10,770.00" PdPrice4="₹1,646.10 – ₹18,284.10"></SliderProduct>
        </div>
    );
};

export default Section2_LandscapeProduct;