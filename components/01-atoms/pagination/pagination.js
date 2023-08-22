"use client";
import React, { useState } from "react";
import { Pagination as PaginationComponent } from "flowbite-react";

const Pagination = (props) => {

	const [currentPage, setCurrentPage] = useState(1);

	return (

		<PaginationComponent
			currentPage={currentPage}
			layout="navigation"
			onPageChange={page => setCurrentPage(page)}
			showIcons
			totalPages={100}
	  />

	)

}

export default Pagination;