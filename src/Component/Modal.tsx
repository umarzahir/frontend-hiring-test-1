import { getTypeColor } from '@/utils';
import Modal from 'react-modal';
import API from "../config/axios.config"
import { useState } from 'react';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: "500px",
      innerWidth: "600px",
      outerWidth: "600px",
      transform: 'translate(-50%, -50%)',
    },
  };

const MyModal = ({data, isOpen,setIsOpen}) => {

    const [note, setNote] = useState("")

    const handleSave = async () => {
        try {
            const res  =  await API.post(`/calls/${data.id}/note`, {content: note})
            alert("note added")
        } catch (error) {
            console.log(error)
        }
        
    }
    
    return(
<Modal
        isOpen={isOpen}
        // onAfterOpen={afsetIsOpenterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className=' d-flex flex-column' style={{ position: "relative" }}>
            <button className='border-0 bg-white' onClick={setIsOpen} style={{ position: "absolute", right: 0, top: "10" }}>X</button>

        <div className='fw-bold"'>Add Notes</div>
        <p className='border-bottom pb-3' style={{ color: "#4F46F8" }}>{`Call ID ${data?.id}`}</p>

        <Row text="Call Type"  value={data?.call_type} />
        <Row text="Duaration" value={data?.duration} />
        <Row text="From" value={data?.from} />
        <Row text="To" value={data?.to} />
        <Row text="VIA" value={data?.via} />

        <label className='mt-3' htmlFor="">Notes</label>
        <textarea  onChange={(e) => setNote(e.target.value)} name="sfsd" id="" cols={70} rows={5}></textarea>

        <button onClick={handleSave} className='mt-3 py-2 text-white border-0' style={{ background: "#4F46F8" }}>Save</button>
        </div>
      </Modal>
    )
}

export default MyModal

const Row = ({text, value}) => {
    return(
        <div   className='d-flex align-items-center '>
            <h6 className=' w-25'>{text}</h6>
            <p  style={{ color: getTypeColor(value) }} >{value}</p>
        </div>
    )
}