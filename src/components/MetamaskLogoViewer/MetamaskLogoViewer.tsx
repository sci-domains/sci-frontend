'use client';
import React, { useEffect, useRef } from 'react';
const ModelViewer = require('@metamask/logo');

type Props = {
  width: number;
  height: number;
  followMouse?: boolean;
  followMotion?: boolean;
  slowDrift?: boolean;
};

const MetamaskLogoViewer: React.FC<Props> = ({
  width,
  height,
  followMouse = false,
  followMotion = true,
  slowDrift = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);

  useEffect(() => {
    // This check ensures that the viewer is only created once
    if (viewerRef.current) return;

    if (containerRef.current) {
      viewerRef.current = ModelViewer({
        pxNotRatio: true,
        width,
        height,
        followMouse,
        followMotion,
        slowDrift,
      });

      containerRef.current.appendChild(viewerRef.current.container);
    }

    return () => {
      // Proper cleanup to remove the viewer when the component is unmounted
      if (viewerRef.current) {
        viewerRef.current.stopAnimation();
        if (containerRef.current) {
          containerRef.current.removeChild(viewerRef.current.container);
        }
        viewerRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default MetamaskLogoViewer;
