"use client"
import { useState, useEffect } from "react";

const IsMobile = () => {

	const [width, setWidth] = useState();

	 useEffect(() => {

		const handleResize = () => {
		  setWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
		  window.removeEventListener("resize", handleResize);
		}

	  }, []);

	  return width < 1024;

}

export default IsMobile;