import React from 'react'
import { useEffect, useState } from 'react'
import LoadingMessage from '../others/LoadingMessage'

const Confirmation = ({ prevStep, nextStep, values }) => {
  const { firstName, firstLastName, secondLastName, email, tel, date, step } = values
  const Continue = e => {
    e.preventDefault();
    nextStep();
    values.step=(values.step + 1)
    sessionStorage.setItem('savedValues', JSON.stringify(values));
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
    values.step=(values.step - 1)
    sessionStorage.setItem('savedValues', JSON.stringify(values));

  }

  //Loading mock
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoad(true), 1300);
  }, []);

  return (<>
    {
      step === 4
        ? <div>
          {
            load === false
              ? <LoadingMessage />
              : <>
                <div className='position-relative'>
                  <div className="chat-message-left px-4 my-2 animation" >
                    <div className="flex-shrink-1 bg-chat rounded py-2 px-3 mr-3">
                      ¿Son tus datos correctos?
                      <div>
                        <div>
                          <div primary="Email" />Correo electrónico: {email}
                        </div>
                        <div>
                          <div primary="Username" />Teléfono: {tel}
                        </div>
                        <div>
                          <div primary="First Name" />Nombre: {firstName}
                        </div>
                        <div>
                          <div primary="Last Name" />Apellido Paterno: {firstLastName}
                        </div>
                        <div>
                          <div primary="Last Name" />Apellido Materno: {secondLastName}
                        </div>
                        <div>
                          <div primary="Level of Education" />Fecha de nacimiento: {date}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-message-right px-4 my-2 animation2" >
                    <div className="flex-shrink-1 rounded py-2 px-3 mr-3 bg-message-right">
                      <div>
                        <button
                          className='btn'
                          onClick={Previous}
                          type="submit"
                        >
                          Regresar
                        </button>
                        <button
                          className='btn'
                          onClick={Continue}
                          type="submit"
                        >
                          Iniciar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
          }
        </div>
        : <></>
    }
  </>
  )
}

export default Confirmation