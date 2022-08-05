import { Skeleton, Typography } from "@mui/material";
import React from "react";
import OwlCarousel from "react-owl-carousel";

function SkeletonSlider() {
  return (
    <div className="d-flex justify-content-between">
      <div className="slider_item">
        <Skeleton variant="rectangular" width={190} height={175} />
        <Skeleton variant="text" />
        <Typography variant="h3">
          <Skeleton />
        </Typography>
      </div>
      <div className="slider_item">
        <Skeleton variant="rectangular" width={190} height={175} />
        <Skeleton variant="text" />
        <Typography variant="h3">
          <Skeleton />
        </Typography>
      </div>
      <div className="slider_item">
        <Skeleton variant="rectangular" width={190} height={175} />
        <Skeleton variant="text" />
        <Typography variant="h3">
          <Skeleton />
        </Typography>
      </div>
      <div className="slider_item">
        <Skeleton variant="rectangular" width={190} height={175} />
        <Skeleton variant="text" />
        <Typography variant="h3">
          <Skeleton />
        </Typography>
      </div>
      <div className="slider_item">
        <Skeleton variant="rectangular" width={190} height={175} />
        <Skeleton variant="text" />
        <Typography variant="h3">
          <Skeleton />
        </Typography>
      </div>
    </div>
  );
}

export default SkeletonSlider;
