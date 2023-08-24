"use client";

import { useState } from "react";
import axios from "axios";

import FooterMenu from "../components/02-molecules/footer-menu/footer-menu"
import Subscribe from "../components/02-molecules/subscribe/subscribe";

import Footer from "../components/03-organisms/footer/footer";
import Navbar from "../components/03-organisms/navbar/navbar";
import CtaBanner from "../components/03-organisms/cta-banner/cta-banner";


export default function Home() {
	return (
		<main>
			<CtaBanner />
		</main>
	)
}
