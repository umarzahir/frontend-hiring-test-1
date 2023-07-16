import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import API from "../../../config/axios.config"

const Details = () => {
    const router  = useRouter()
    const {id} = router.query

    const [details, setDetails] = useState([])

    const getDetails = async (id: any) => {

        const res = await API.get(`/calls/${id}`)
        setDetails(res.data)
        console.log(res.data)
       }

    useEffect(() => {
        getDetails(id)
    },[])

    return(
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="bg-white  d-flex flex-column p-5" style={{ width: "600px" }}>
                <div className="border-bottom">
                   <Cell text="CALL TYPE" value={details?.call_type} />
                   <Cell text="DIRECTION" value={details?.direction} />
                   <Cell text="DURATION" value={details?.duration} />
                   <Cell text="FROM" value={details?.from} />
                   <Cell text="TO" value={details?.to} />
                   <Cell text="VIA" value={details?.via} />
                   <Cell text="CREATED AT" value={details?.created_at} />
                   <Cell text="STATUS" value={details?.is_archived ? "Acrchived" : 'UnArcheive'}/>
                </div>
                <div>
            <h3>Notes</h3>
            {details.notes?.map(item => (
                <p>{item.content}</p>
            ))}
            </div>
            </div>
           
        </div>
    )
}

export default Details


const Cell = ({text, value}) => {
    return(
        <div className="d-flex justify-content-between">
            <h6>{text}</h6>
            <p>{value}</p>
        </div>
    )
}