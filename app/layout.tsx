"use client";
import Header from "@/components/03-organisms/header/header";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/03-organisms/footer/footer";

const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
// 	title: "Create Next App",
// 	description: "Generated by create next app",
// }

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
