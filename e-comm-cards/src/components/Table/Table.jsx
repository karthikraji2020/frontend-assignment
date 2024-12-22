import Pagination from '../Pagination/Pagination';
import styles from './Table.module.css';

export const Table = ({ data, currentPage, totalPages, onPageChange }) => {
  return (
    <div className={styles.container}>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />

      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>S.No.</th>
            <th>Percentage funded</th>
            <th>Amount pledged</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {
         data.length ? (data.map((item, index) => (
            <tr key={index} tabIndex={0}>
              <td>{item["s.no"]}</td>
              <td>{item["percentage.funded"]}</td>
              <td>{item["amt.pledged"]}</td>
            </tr>
          ))):( <tr>
            <td></td>
            <td>{<p>Loading...</p>}</td>
            <td>{}</td>
          </tr>)
          
          
          }
        </tbody>
      </table>
    </div>
  );
};
