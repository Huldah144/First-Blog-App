import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState('');

    const submitForm = (event) =>{
        event.preventDefault();
        
        console.log(name)

    }

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value

        // setInput(values => ({...values, [name]:value }))
    }

  return (
    <div className='contact-us'>
      <div className="container">
        <form action=""  onSubmit={submitForm}>
            <div className="form-row">
                <div className="input-group">
                    <input type="text" placeholder='Your name'  name='name' onChange={(e) => setName(e.target.value)}/>

                </div>
                {/* <div className="input-group">
                    <input type="email" placeholder='Your email' name='email' onChange={handleChange}/>
                </div> */}
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
