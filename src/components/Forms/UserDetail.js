import React from 'react'
import { useEffect, useState } from 'react'
import LoadingMessage from '../others/LoadingMessage'
import ProgressBar from './../Header/ProgressBar'


const UserDetails = ({ nextStep, handleChange, values }) => {

  const { step } = values

  const Continue = e => {
    e.preventDefault();
    nextStep();
    values.step=(values.step + 1)
    sessionStorage.setItem('savedValues', JSON.stringify(values));
  }

  //Loading mock
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoad(true), 1300);
  }, []);

  return (
    <div>
      <ProgressBar val={step} />
      {
        load === false
          ? <LoadingMessage />
          : <>
            <div className='position-relative'>
              <div className="chat-message-left px-4 my-2 animation" >
                <div className="flex-shrink-1 bg-chat rounded py-2 px-3 mr-3">
                  ¡Hola! Por favor, ingresa tus datos de contacto
                </div>
              </div>
              <div className="chat-message-right px-4 my-2 animation2" >
                <div className="flex-shrink-1 rounded py-2 px-3 mr-3 bg-message-right">
                  <h3>
                    Datos de contacto
                  </h3>
                  {
                    step < 2
                      ? <form>
                        <div>
                          {/* email address */}
                          <div>
                            <input
                              className="form-control"
                              type="email"
                              placeholder="Correo electrónico"
                              onChange={handleChange('email')}
                              defaultValue={values.email}
                            />
                          </div>
                          <br />
                          {/* telephone */}
                          <div>
                            <input
                              className="form-control"
                              placeholder="Teléfono celular"
                              type="tel"
                              onChange={handleChange('tel')}
                              defaultValue={values.tel}
                            />
                          </div>
                        </div>
                        <br />
                        <button
                          className='btn'
                          onClick={Continue}
                          type="submit">
                          Continuar
                        </button>
                      </form>
                      : <>
                        <div>
                          <div primary="Email" />Correo electrónico: {values.email}
                        </div>
                        <div>
                          <div primary="Telephone" />Teléfono: {values.tel}
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

export default UserDetails