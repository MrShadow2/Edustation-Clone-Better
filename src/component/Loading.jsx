import React from "react";
import { InfinitySpin } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="loader-bg">
      <div className="loader-container">
        <InfinitySpin  width={200} color="#ff8000" />
        <h1 className="loader-text">Welcome to Edu-Station...</h1>
      </div>
    </div>
  );
};

export default Loading;
