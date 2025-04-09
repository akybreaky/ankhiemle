import React from "react";

const Spotify = ({
  link,
  style = {},
  wide = false,
  width = wide ? "100%" : 300,
  height = wide ? 80 : 200,
  frameBorder = 0,
  allow = "encrypted-media",
  ...props
}) => {
  const url = new URL(link);
  url.pathname = url.pathname.replace(/\/intl-\w+\//, "/");

  return (
    <iframe
      title="Spotify Web Player"
      src={`https://open.spotify.com/embed${url.pathname}`}
      width={width}
      height={height}
      frameBorder={frameBorder}
      allow={allow}
      style={{
        borderRadius: 8,
        ...style
      }}
      {...props}
    />
  );
};

export default Spotify;
