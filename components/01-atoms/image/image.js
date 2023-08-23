"use client";

export default function Image(props) {
	const {
	  url,
	  alt,
	  styles,
	  type,
	  height,
	  width
	} = props;
  
	const srcSet = [
	  { width: 320, format: {webp: 'webp', avif: "avif"} },
	  { width: 360, format: {webp: 'webp', avif: "avif"} },
	  { width: 640, format: {webp: 'webp', avif: "avif"} },
	  { width: 720, format: {webp: 'webp', avif: "avif"} },
	  { width: 960, format: {webp: 'webp', avif: "avif"} },
	  { width: 1280, format: {webp: 'webp', avif: "avif"} },
	  { width: 1440, format: {webp: 'webp', avif: "avif"} },
	  { width: 1920, format: {webp: 'webp', avif: "avif"} }
	];

	const defaultStyle = "w-full"
  
	const srcSetString = (format) => srcSet.map((item) => {
	  return `${url}?width=${item.width}&format=${item.format[format]} ${item.width}w`;
	}).join(',');
  
	return (
	  <picture >
		<source type={type || "image/avif"} sizes="100vw" srcSet={srcSetString("avif")} />
		<source type={type || "image/webp"} sizes="100vw" srcSet={srcSetString('webp')} />
		<img width={width || "100%" } height={height || "auto"} className={styles || defaultStyle} src={`${url}?width=1080&amp;format=webp`} alt={alt} loading="lazy" lazy="true" />
	  </picture>
	);
  };
