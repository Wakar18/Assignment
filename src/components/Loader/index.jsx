import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <div className="loader">
        <ColorRing
          visible={true}
          height="45"
          width="45"
          // ariaLabel="color-ring-loading"
          // wrapperStyle={{}}
          // wrapperClass="color-ring-wrapper"
          colors={["#5D02DC", "#5D02DC", "#5D02DC", "#5D02DC", "#5D02DC"]}
        />
      </div>
    </>
  );
};

export default Loader;
