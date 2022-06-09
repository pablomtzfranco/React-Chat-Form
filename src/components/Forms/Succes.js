import React from 'react'
import { useEffect, useState } from 'react'
import LoadingMessage from '../others/LoadingMessage'



const Success = ({values}) => {
  //Loading mock
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoad(true), 1300);
  }, []);

  return (
    <>
      {
        load === false
          ? <LoadingMessage />
          :<div className='position-relative'>
            <div className="chat-message-left px-4 my-2 animation" >
              <div className="flex-shrink-1 bg-chat rounded py-2 px-3 mr-3">
                Listo. ¡Registro con éxito!
              </div>
            </div>
            <div className="chat-message-left px-4 my-2 animation" >
              <div className="flex-shrink-1 bg-container rounded py-2 px-3 mr-3">
              <div>
                          <div primary="Email" />Correo electrónico: {values.email}
                        </div>
                        <div>
                          <div primary="Username" />Teléfono: {values.tel}
                        </div>
                        <div>
                          <div primary="First Name" />Nombre: {values.firstName}
                        </div>
                        <div>
                          <div primary="Last Name" />Apellido Paterno: {values.firstLastName}
                        </div>
                        <div>
                          <div primary="Last Name" />Apellido Materno: {values.secondLastName}
                        </div>
                        <div>
                          <div primary="Level of Education" />Fecha de nacimiento: {values.date}
                        </div>
              </div>
            </div>
          </div>
      }
    </>

  )
}

export default Success