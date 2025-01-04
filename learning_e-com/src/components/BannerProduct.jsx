// import image1 from "../assets/banner/img1.webp";
// import image2 from "../assets/banner/img2.webp";
// import image3 from "../assets/banner/img3.jpg";
// import image4 from "../assets/banner/img4.jpg";
// import image5 from "../assets/banner/img5.webp";
// import image1Mobile from "../assets/banner/img1_mobile.jpg";
// import image2Mobile from "../assets/banner/img2_mobile.webp";
// import image3Mobile from "../assets/banner/img3_mobile.jpg";
// import image4Mobile from "../assets/banner/img4_mobile.jpg";
// import image5Mobile from "../assets/banner/img5_mobile.png";
// import { useEffect, useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// export function BannerProduct() {
//   const desktopImages = [image1, image2, image3, image4, image5];
//   const mobileImages = [
//     image1Mobile,
//     image2Mobile,
//     image3Mobile,
//     image4Mobile,
//     image5Mobile,
//   ];
//   const [currentImage, setCurrentImage] = useState(0);

//   const nextImage = () => {
//     if (desktopImages.length - 1 > currentImage) {
//       setCurrentImage((init) => init + 1);
//     }
//   };
//   const prevImage = () => {
//     if (currentImage != 0) {
//       setCurrentImage((init) => init - 1);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (desktopImages.length - 1 > currentImage) {
//         nextImage();
//       } else {
//         setCurrentImage(0);
//       }
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentImage]);

//   return (
//     <div className="container mx-auto px-4 rounded">
//       <div className=" h-64 md:h-[18rem] w-full bg-slate-300 relative">
//         <div className="absolute z-10 h-full w-full md:flex items-center hidden ">
//           <div className="flex justify-between w-full text-4xl">
//             <button
//               className="bg-white shadow-lg rounded-full m-4"
//               onClick={prevImage}
//             >
//               <FaAngleLeft />
//             </button>
//             <button
//               className="bg-white shadow-lg rounded-full m-4"
//               onClick={nextImage}
//             >
//               <FaAngleRight />
//             </button>
//           </div>
//         </div>
//         <div className="hidden md:flex h-full w-full overflow-hidden">
//           {desktopImages.map((imageUrl, index) => {
//             return (
//               <div
//                 className="w-full h-full min-w-full min-h-full transition-all"
//                 key={index}
//                 style={{ transform: `translateX(-${currentImage * 100}%)` }}
//               >
//                 <img src={imageUrl} alt={imageUrl} className="w-full h-full" />
//               </div>
//             );
//           })}
//         </div>
//         <div className="flex md:hidden h-full w-full overflow-hidden">
//           {mobileImages.map((imageUrl, index) => {
//             return (
//               <div
//                 className="w-full h-full min-w-full min-h-full transition-all"
//                 key={index}
//                 style={{ transform: `translateX(-${currentImage * 100}%)` }}
//               >
//                 <img src={imageUrl} alt={imageUrl} className="w-full h-full" />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

import image1 from "../assets/banner/img1.webp";
import image2 from "../assets/banner/img2.webp";
import image3 from "../assets/banner/img3.jpg";
import image4 from "../assets/banner/img4.jpg";
import image5 from "../assets/banner/img5.webp";
import image1Mobile from "../assets/banner/img1_mobile.jpg";
import image2Mobile from "../assets/banner/img2_mobile.webp";
import image3Mobile from "../assets/banner/img3_mobile.jpg";
import image4Mobile from "../assets/banner/img4_mobile.jpg";
import image5Mobile from "../assets/banner/img5_mobile.png";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export function BannerProduct() {
  const desktopImages = [image1, image2, image3, image4, image5];
  const mobileImages = [
    image1Mobile,
    image2Mobile,
    image3Mobile,
    image4Mobile,
    image5Mobile,
  ];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (desktopImages.length - 1 > currentImage) {
      setCurrentImage((init) => init + 1);
    }
  };
  const prevImage = () => {
    if (currentImage != 0) {
      setCurrentImage((init) => init - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopImages.length - 1 > currentImage) {
        nextImage();
      } else {
        setCurrentImage(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="container mx-auto px-4 rounded">
      <div className=" h-64 md:h-[18rem] w-full bg-slate-300 relative">
        <div className="absolute z-10 h-full w-full md:flex items-center hidden ">
          <div className="flex justify-between w-full text-4xl">
            <button
              className="bg-white shadow-lg rounded-full m-4"
              onClick={prevImage}
            >
              <FaAngleLeft />
            </button>
            <button
              className="bg-white shadow-lg rounded-full m-4"
              onClick={nextImage}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
        <div className="hidden md:flex h-full w-full overflow-hidden">
          {desktopImages.map((imageUrl, index) => {
            return (
              <div
                className="w-full h-full min-w-full min-h-full transition-all"
                key={index}
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                <img src={imageUrl} alt={imageUrl} className="w-full h-full" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
