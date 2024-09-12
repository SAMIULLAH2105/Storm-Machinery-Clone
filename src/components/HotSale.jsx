import React from "react";
import imageSrc1 from "../assets/HotSaleOne.jpg";
import imageSrc2 from "../assets/HotSaleTwo.jpg";
import imageSrc3 from "../assets/HotSaleThree.png";
import styles from "./HotSale.module.css";

const HotSale = () => (
  <>
    <div className={styles.main}>
      <img
        src={imageSrc1}
        alt="Descriptive text about the image"
        className={styles.img1}
      />
      <img
        src={imageSrc2}
        alt="Descriptive text about the image"
        className={styles.img2}
      />

    
      <img
        src={imageSrc3}
        alt="Descriptive text about the image"
        className={styles.img3}
      />

    </div>
  </>
);

export default HotSale;
// import React from 'react';
// import styles from"./HotSale.module.css"

// function HotSaleProducts() {
//   return (
//     <div className={styles.hot-sale-products}>
//       <h2>HOT'S SALE PRODUCTS</h2>
//       <div className={styles.product-grid}>
//         <div className={styles.product}>
//           <img src="path/to/howo-8x4-dump-truck.jpg" alt="HOWO 8X4 Dump Truck" />
//           <h3>HOWO 8X4 DUMP TRUCK</h3>
//         </div>
//         <div className={styles.product}>
//           <img src="path/to/howo-6x4-dump-truck.jpg" alt="HOWO 6X4 Dump Truck" />
//           <h3>HOWO 6X4 DUMP TRUCK</h3>
//         </div>
//         <div className={styles.product}>
//           <img src="path/to/howo-6x4-tractor-truck.jpg" alt="HOWO 6X4 Tractor Truck" />
//           <h3>HOWO 6X4 TRACTOR TRUCK</h3>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HotSaleProducts;
