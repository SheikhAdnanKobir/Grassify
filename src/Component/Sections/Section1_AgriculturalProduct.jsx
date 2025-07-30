import React from 'react';
import SliderProduct from '../../Hooks/SliderProduct';
import Image1 from '../../assets/img1.jpg';
import Image2 from '../../assets/img2.jpg';
import Image3 from '../../assets/img3.png';
import Image4 from '../../assets/img4.jpg';

const Section1_AgriculturalProduct = () => {
    return (
        <div className="my-28">
            <SliderProduct heading="Agricultural Products" img1={Image1} img2={Image2} img3={Image3} img4={Image4} PdName1="JF Barbed Wire- 270 GSM" PdName2="FGC RustFree Fencing Poles" PdName3="GI Poultry Mesh" PdName4="JF Bluelink Mesh" PdPrice1="₹4,995.00" PdPrice2="₹499.00 – ₹1,589.00" PdPrice3="₹1,260.00 – ₹10,750.00" PdPrice4="₹3,067.50 – ₹6,362.50"></SliderProduct>
        </div>
    );
};

export default Section1_AgriculturalProduct;