// import React from "react";

// const Banner = () => {
//   return (
//     <div className="w-full py-2.5 font-medium text-sm text-green-800 text-center bg-gradient-to-r from-[#ABFF7E] to-[#FDFEFF]">
//       <p>
//         <span className="px-3 py-1 rounded-lg text-white bg-green-600 mr-2">
//           New
//         </span>
//         AI Feature Added
//       </p>
//     </div>
//   );
// };

// export default Banner;
import React from "react";

const Banner = () => {
  return (
    <div className="w-full py-3 text-sm font-medium text-center
      bg-gradient-to-r from-[#7FE7F2] via-[#B9EEF5] to-[#F4FDFF]">
      
      <p className="text-[#0F172A]">
        <span className="px-3 py-1 mr-2 rounded-full 
          bg-[#0F766E] text-white text-xs font-semibold shadow-sm">
          NEW
        </span>
        <span className="font-medium text-[#1E293B]">
          AI Feature Added
        </span>
      </p>
    </div>
  );
};

export default Banner;
