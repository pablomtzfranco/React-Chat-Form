import React from 'react'
import { useEffect, useState } from 'react'
import LoadingMessage from '../others/LoadingMessage'

const BirthdateDetails = ({ prevStep, nextStep, handleChange, values }) => {

    const { step } = values

    const Continue = e => {
        e.preventDefault();
        nextStep();
        values.step = (values.step + 1)
        sessionStorage.setItem('savedValues', JSON.stringify(values));

    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
        values.step = (values.step - 1)
        sessionStorage.setItem('savedValues', JSON.stringify(values));
    }

    //Loading mock
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoad(true), 1300);
    }, []);

    return (
        <div>
            {
                load === false
                    ? <LoadingMessage />
                    : <>
                        <div className='position-relative'>
                            <div className="chat-message-left px-4 my-2 animation" >
                                <div className="flex-shrink-1 bg-chat rounded py-2 px-3 mr-3">
                                    Por favor, ingresa tu fecha de nacimiento
                                </div>
                            </div>
                            <div className="chat-message-right px-4 my-2 animation2" >
                                <div className="flex-shrink-1 rounded py-2 px-3 mr-3 bg-message-right">
                                    <h3>
                                        Fecha de nacimiento
                                    </h3>
                                    {
                                        step < 4
                                            ? <form>
                                                <div>

                                                    {/* Date */}
                                                    <div>
                                                        <input
                                                            className='form-control'
                                                            placeholder="Fecha de nacimiento"
                                                            type="date"
                                                            onChange={handleChange('date')}
                                                            defaultValue={values.date}
                                                        />
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                        <>
                                                            <button
                                                                className='btn'
                                                                onClick={Previous}
                                                                type="submit">
                                                                Regresar
                                                            </button>
                                                            <button
                                                                className='btn'
                                                                onClick={Continue}
                                                                type="submit">
                                                                Siguiente
                                                            </button>
                                                        </>

                                                    </div>
                                                </div>
                                            </form>
                                            : <>
                                                <div>
                                                    <div primary="Level of Education" />Fecha de nacimiento: {values.date}
                                                </div>
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default BirthdateDetails