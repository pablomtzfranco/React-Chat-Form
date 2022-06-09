import React from 'react'
import { useEffect, useState } from 'react'
import LoadingMessage from '../others/LoadingMessage'

const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {

  const { step } = values

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
  const [load, setLoad] = useState(false)

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
                  Por favor, ingresa tus datos de personales
                </div>
              </div>
              <div className="chat-message-right px-4 my-2 animation2">
                <div className="flex-shrink-1 rounded py-2 px-3 mr-3 bg-message-right">
                  <h3>
                    Datos personales
                  </h3>
                  {
                    step < 3
                      ? <form>
                        <div>
                          {/* first & second name */}
                          <div>
                            <input
                              className="form-control"
                              placeholder="Nombre(s)"
                              onChange={handleChange('firstName')}
                              defaultValue={values.firstName}
                            />
                          </div>
                          <br />
                          {/* first last name */}
                          <div>
                            <input
                              className="form-control"
                              placeholder="Apellido Paterno"
                              onChange={handleChange('firstLastName')}
                              defaultValue={values.firstLastName}
                            />
                          </div>
                          <br />
                          {/* second last name */}
                          <div>
                            <input
                              className="form-control"
                              placeholder="Apellido Materno"
                              onChange={handleChange('secondLastName')}
                              defaultValue={values.secondLastName}
                            />
                          </div>
                          <br />
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
                          <div>
                          </div>
                        </div>
                      </form>
                      : <>
                        <div>
                          <div primary="First Name" />Nombre: {values.firstName}
                        </div>
                        <div>
                          <div primary="Last Name" />Apellido Paterno: {values.firstLastName}
                        </div>
                        <div>
                          <div primary="Last Name" />Apellido Materno: {values.secondLastName}
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

export default PersonalDetails