import React from 'react'

const Foot = () => {
    return(
        <div className="foot-section">
            <h4 className='foot-title'>Subscribe to my blog.</h4>
            <p className='foot-sub'>I post fresh content every week.</p>
            <div className='susem'>
                <form action="#"> 
                    <div className="form-group">
                    <input type="text"  name='Email address'   placeholder='Email Address' className='form-control'/>
                    <button type='submit' className='ter'>suscribe</button>
                    </div>
                    {/* <label htmlFor="" className='form-label'>SUSCRIBE</label> */}
                    {/* <span className='terr'>SUBSCRIBE</span> */}
                </form>
            </div>
        </div>
    )
}



export default Foot