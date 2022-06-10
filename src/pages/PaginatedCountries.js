import ReactPaginate from "react-paginate"
import { useEffect, useState } from "react";
import Countries from "./Countries"

import './PaginatedCountries.css'

const PaginatedCountries = ({itemsPerPage, darkMode, data, itemOffset, setItemOffset}) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const darkLightClass1 = `bbg-white ${darkMode?'bbg-dark': ''}`

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));

    }, [itemOffset, itemsPerPage, data])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(event.selected);
        setItemOffset(newOffset);
      };

    return(
        <>
            <Countries
                data={currentItems}
                darkMode={darkMode}
            />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< prev"
                renderOnZeroPageCount={null}
                containerClassName={`pages-container ` + darkLightClass1}
                pageClassName="page-item"
                previousClassName="page-item prev-page"
                activeClassName="current-page"
                nextClassName="page-item next-page"
            />
        </ >
    )
}

export default PaginatedCountries