import { useState, useEffect } from "react";
import { Table } from "./components/Table/Table";
import styles from './App.module.css';

const URL= "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"

function App() {
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = products.slice(startIndex, endIndex);
  const totalPages=Math.ceil(products.length / ITEMS_PER_PAGE)


  const handlePageChange = (newPage) => {
    if (
      newPage > 0 &&
      newPage <= totalPages &&
      newPage !== currentPage
    )
    setCurrentPage(newPage);
  };

  const fetchProducts = async () => {
    const res = await fetch(URL);
    const data = await res.json();

    // testing the loader
    setTimeout(() => {
      if (data && data.length) setProducts(data);
    }, 600);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    <div className={styles.container}>
    <h1> Table with pagination</h1>
      <Table
        data={paginatedData}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
    </>
  );
}

export default App;
