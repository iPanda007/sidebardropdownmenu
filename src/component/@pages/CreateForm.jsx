import React,{useState} from 'react'
const CreateForm = () => {
  const titleRef = React.createRef()
  const defRef = React.createRef()
  const priceRef = React.createRef()

  const [file, setFile] = useState({});

  return (
<div className='p-10'>
   <form >
      <input type="text" ref={titleRef}   placeholder='title' />
      <input type="text" ref={defRef} placeholder='description'/>
      <input type="text" ref={priceRef} placeholder="price" />
      <input type="file" 
        onChange={(e)=>{
           setFile({file:e.target.files[0]})
        }}
      />
      <button type='submit' 
       onClick={(e)=>{
          handleSubmit(e,file)
       }}
      > submit</button>
  </form>
    </div>
  )
function handleSubmit(e,file){
   e.preventDefault()
    console.log(file)
   let dataValue ={
    title:titleRef.current.value,
    des:defRef.current.value,
    price:priceRef.current.value,
   }
}
}

export default CreateForm
