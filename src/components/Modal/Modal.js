import React from 'react'

const Modal = () => {

    return (
        <div>
            <div className="modal">
                <div className="modal-container card">
                    <div className="header">
                        <button className="close">X</button>
                    </div>
                    <h2>You are High</h2>
                    <p>Drop your senrenre for 10%</p>
                    <form action="#" className="form-control">
                        <label htmlFor="Enter your Brain Address"></label>
                        <input type="text" placeholder='Enter ur Brain Address' />
                    </form>
                    <button>Byeeee!!</button>
                </div>
            </div>

        </div>
    )
}

export default Modal
