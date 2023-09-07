"use client"

/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

const isMobile = () => {

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

	  return width < 1280;

}

export default isMobile;