import  { useContext, useState } from 'react'
import Modal from 'react-modal';
import {RxCross1 } from 'react-icons/rx';
import { toast } from 'react-toastify';
// import AppContext from '../Context/AppContext';
export default function LostAndFound(props) {
  // console.log("AppContext:", AppContext);
  // const { inData,setInData } = useContext(AppContext);
  const[modalOpen,setModalOpen] = useState(false);
  const customStyles = {
    content: {
      top: '55%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      height: '80%',
      '@media (min-width: 640px)': {
        
        width: '70%',
        height: '80%', 
      },
      // background: rgb(191,180,225);
      background: 'linear-gradient(15deg, rgba(191,180,225,1) 0%, rgba(227,227,230,1) 45%, rgba(167,165,209,1) 100%)'
    },
  };
  
  const [formData,setFormData] = useState({
    title:"",
    description:"",
    question:"",
    contactInfo:"",
    location:"",
    date:"",
    type:"",
    image:null,
  })
  function changeHandler(event){
    const {name,value} = event.target;
    setFormData((prev) => (
      {
        ...prev,
        [name]:value,
      }
    ))
  }

  function submitHandler(event) {
    event.preventDefault();
    
    if (
      formData.title.trim() === '' ||
      formData.description.trim() === '' ||
      formData.question.trim() === '' ||
      formData.contactInfo.trim() === '' ||
      formData.location.trim() === '' ||
      formData.date.trim() === '' ||
      formData.type.trim() === ''
    ) {
      // If any of the required fields are empty, show an error message
      toast.error('Please fill in all required fields.');
      return;
    }
    // Create a new LostAndFound object using the formData
    const newLostFound = { ...formData };
  
    // Update the LostAndFound state with the newLostFound object
    props.setLostFound((prevLostAndFound) => [...prevLostAndFound, newLostFound]);
  
    // Clear the form data for the next entry
    setFormData({
      title: "",
      description: "",
      question: "",
      contactInfo: "",
      location: "",
      date: "",
      type: "",
      image: null,
    });
    toast.success("your item has been successfully post !!!");
    // Close the modal
    setModalOpen(false);
    
  }
  

  return (
    <div className='flex p-[20px] md:flex-row flex-col gap-4 mt-[5%] justify-evenly items-center w-[80%]'>
        <div className=' flex flex-row justify-center md:justify-evenly items-center gap-8 p-4 mt-[10%] md:mt-[5%] ml-[70px]'>
        <button onClick={()=>setModalOpen(!modalOpen)}  className='bg-button  hover:bg-blue-400 shadow-xl text-white p-3 md:w-[190px] w-[150px] text-[22px] rounded-xl font-bold  '>Post Item</button>
        <button  className='bg-button  hover:bg-blue-400 shadow-xl text-white p-3 md:w-[190px] w-[150px] text-[22px] rounded-xl font-bold  '>Found Item</button>
        </div>
        <div>
          <Modal style={customStyles} isOpen = {modalOpen}>
            <form className='md:w-[60%] w-[100%] mx-auto  overflow-x-hidden '  onSubmit={submitHandler} >
              <div className='flex flex-col gap-4 justify-center items-center font-bold '>
                <div className='flex flex-row w-full justify-between items-center'>
                  <h1 className='text-[1.5rem]'>Post Items</h1>
                  <button onClick={()=>setModalOpen(!modalOpen)} > <RxCross1  style={ {width: "30px"  }} /> </button>
                </div>
                <div className='flex gap-3 flex-col w-full justify-between items-start'>
                  <h1>Item Name <sub className='text-red-500 text-[1.2rem]' >*</sub> </h1>
                  <input  className=' w-full md:w-1/2 h-[50px] bg-white shadow-md shadow-slate-800 rounded-xl border-2 text-[20px] text-slate-500 border-blue-500 md:placeholder:text-[20px] placeholder:text-[16px]  placeholder:text-black-100 placeholder:text-center placeholder:font-[500]  font-[400] focus:outline-none focus:ring focus:border-blue-500 '
                   name='title' value={formData.title} onChange={changeHandler} type='text' placeholder='ENTER ITEM NAME' ></input>
                </div>
                <div className='flex gap-3 flex-col w-full justify-between items-start'>
                  <h1>Desciption <sub className='text-red-500 text-[1.2rem]' >*</sub> </h1>
                  <textarea   className=' w-full md:w-1/2 h-[50px] bg-white shadow-md shadow-slate-800 rounded-xl border-2 text-[20px] text-slate-500 border-blue-500 md:placeholder:text-[20px] placeholder:text-[16px] placeholder:text-black-100 placeholder:text-center placeholder:font-[500]  font-[400] focus:outline-none focus:ring focus:border-blue-500 '
                   name='description' value={formData.description} placeholder='WRITE ABOUT ITEM' onChange={changeHandler} type='text' ></textarea>
                </div>
                <div className='flex gap-3 flex-col w-full justify-between items-start'>
                  <h1>Enter your Questions <sub className='text-red-500 text-[1.2rem]' >*</sub> </h1>
                  <input  className=' w-full md:w-1/2 h-[50px] bg-white shadow-md shadow-slate-800 rounded-xl border-2 text-[20px] text-slate-500 border-blue-500 md:placeholder:text-[20px] placeholder:text-[16px] placeholder:text-black-100 placeholder:text-center placeholder:font-[500]  font-[400] focus:outline-none focus:ring focus:border-blue-500 '
                    name='question' value={formData.question} placeholder='ENTER YOUR QUESTION' onChange={changeHandler} type='text' ></input>
                </div>
                <div className='flex gap-3 flex-col w-full justify-between items-start'>
                   <h1>Enter your Email  <sub className='text-red-500 text-[1.2rem]' >*</sub></h1>
                  <input   className=' w-full md:w-1/2 h-[50px] bg-white shadow-md shadow-slate-800 rounded-xl border-2 text-[20px] text-slate-500 border-blue-500 md:placeholder:text-[20px] placeholder:text-[16px] placeholder:text-black-100 placeholder:text-center placeholder:font-[500]  font-[400] focus:outline-none focus:ring focus:border-blue-500 '
                  name='contactInfo' placeholder='ENTER YOUR EMAIL' value={formData.contactInfo} onChange={changeHandler} type='email' required />
                </div>
                <div className='flex gap-3 flex-col w-full justify-between items-start'>
                  <h1>Enter Location <sub className='text-red-500 text-[1.2rem]' >*</sub> </h1>
                  <input  className=' w-full md:w-1/2 h-[50px] bg-white shadow-md shadow-slate-800 rounded-xl border-2 text-[20px] text-slate-500 border-blue-500 md:placeholder:text-[20px] placeholder:text-[16px] placeholder:text-black-100 placeholder:text-center placeholder:font-[500]  font-[400] focus:outline-none focus:ring focus:border-blue-500 ' 
                   name='location' placeholder='ENTER LOST/FOUND LOCATION' value={formData.location} onChange={changeHandler} type='text' ></input>
                </div>
                <div className='flex gap-3 flex-col w-full justify-between items-start'>
                  <h1>Enter lost date <sub className='text-red-500 text-[1.2rem]' >*</sub> </h1>
                  <input   className=' w-full md:w-1/2 h-[50px] bg-white shadow-md shadow-slate-800 rounded-xl border-2 text-[20px] text-slate-500 border-blue-500 md:placeholder:text-[20px] placeholder:text-[16px] placeholder:text-black-100 placeholder:text-center placeholder:font-[500]  font-[400] focus:outline-none focus:ring focus:border-blue-500 '
                   name='date' placeholder='SELECT LOST/FOUND DATE' value={formData.date} onChange={changeHandler} type='date' ></input>
                </div>
                <div className='flex gap-3 flex-col w-full justify-between items-start'>
                  <h1>item type <sub className='text-red-500 text-[1.2rem]' >*</sub></h1>
                  <select placeholder='LOST/FOUND'   className=' w-full md:w-1/2 h-[50px] bg-white shadow-md shadow-slate-800 rounded-xl border-2 text-[20px] text-slate-500 border-blue-500 md:placeholder:text-[20px] placeholder:text-[16px] placeholder:text-black-100 placeholder:text-center placeholder:font-[500]  font-[400] focus:outline-none focus:ring focus:border-blue-500 '
                   name='type' value={formData.type} onChange={changeHandler}
                  
                >
                  <option value="">Select an option</option>
                  <option value="Lost">Lost</option>
                  <option value="Found">Found</option>
                  {/* Add more options as needed */}
                </select>

                </div>
                <div className='flex  gap-3 flex-col w-full justify-between items-start'>
                  <h1>Image Input</h1>
                  <input  
                  onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      const dataURL = e.target.result;
                      setFormData({
                        ...formData,
                        image: dataURL, // Store the data URL in the state
                      });
                    };
                    reader.readAsDataURL(file); // Read the file as a data URL
                  }
                  }}
                  type="file"
                  accept="image/*" 
  
                />
                </div>
                <div className='flex flex-row gap-4 w-full justify-end items-end'>
                  <button className='w-[110px] p-2 text-white text-[1.1rem] bg-red-500 '>Close</button>
                  <button className='w-[110px] p-2 text-white text-[1.1rem] bg-blue-500 ' type='submit'>Submit</button>
                </div>
              </div>
            </form>
          </Modal>
        </div>
    </div>
  )
}
