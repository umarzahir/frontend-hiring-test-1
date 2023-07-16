import { useEffect, useState } from "react"

const Pagination  = ({totalCount, offset, onPageChange}) => {
    const [pages, setPages] = useState(1)
   
    useEffect(() => {
        console.log(totalCount,offset)
        console.log(totalCount/offset)
            setPages(totalCount/offset)
    },[totalCount, offset])
    return(
        
<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>

 {   Array.from(Array(Math.ceil(pages)).keys()).map((item, index) => {
        return(
            <li onClick={() => onPageChange(index + 1)} key={index} className="page-item"><a className="page-link" href="#">{index + 1}</a></li>
        )
    })}
   
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    )
}

export default Pagination