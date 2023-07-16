import { getTypeColor } from "@/utils";
import { type } from "os";



const Table = ({data,onRowClick,onClickAddNote, handleAcrhive}) => {

    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return  minutes + " minutes " + (seconds < 10 ? '0' : '') +  seconds + " Seconds";
      }

    return(
        <>
        <table className="table dd">
  <thead style={{ background: "red" }}>
    <tr >
      <th scope="col">CALL TYPE</th>
      <th scope="col">DIRECTION</th>
      <th scope="col">DURATION</th>
      <th scope="col">FROM</th>
      <th scope="col">TO</th>
      <th scope="col">VIA</th>
      <th scope="col">CREATED AT</th>
      <th scope="col">STATUS</th>
      <th scope="col">ACTION</th>
    </tr>
  </thead>
  <tbody>
    {data.map(item => {
        return(
    <tr style={{ fontSize: "14px" }} key={item.id} onClick={() => onRowClick(item.id)}>
      <td  scope="row" style={{ color: getTypeColor(item.call_type) }}>{item.call_type.charAt(0).toUpperCase() + item.call_type.slice(1)}</td>
      <td style={{ color:"#B1BFF5"}}>{item.direction}</td>
      <td > 
        <span className="duaraion">
        <span> { millisToMinutesAndSeconds( item.duration)}</span>
       <span style={{ color: "#B1BFF5" }}> {"( " + item.duration + " Seconds )"}  </span>
        </span>
       </td>
      <td>{item.from}</td>
      <td>{item.to}</td>
      <td>{item.via}</td>
      <td>{item.created_at.toString().slice(0,10)}</td>
      <td onClick={(e) => handleAcrhive(e, item.id)}>{item.is_archived  ? <span className="arc">Archived</span>  : <span className="unarc">UnArchive</span> }</td>
      <td>{<button className="add-btn" onClick={(e) => onClickAddNote(e,item)}>Add Note</button>}</td>
    </tr>
        )
    })}
  
  </tbody>
</table>

</>
    )
}

export default Table