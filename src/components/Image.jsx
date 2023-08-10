import React from 'react';

export const Image = ({ src, ...props }) => {
  try {
    return React.createElement(require.resolve("next/image").default, {
      src: typeof src === "string" ? src : src,
      ...props
    });
  } catch {
    return React.createElement("img", { src, ...props });
  }
}