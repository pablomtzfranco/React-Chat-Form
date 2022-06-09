import { ReactComponent as FormIcon } from '../../utilities/icons/form.svg';


const Header = () => {
    return (
        <header className="py-1 gradient-bg">
            <div className='glass'>
                <nav className="navbar py-5 px-3 justify-content-center" >
                    <h1 className="mx-4">Formulario</h1>
                    <FormIcon height="5rem" width="5rem" fill="white" />
                </nav>
                <p className='text-center'>
                    En menos de 5 minutos
                </p>
            </div>

        </header>
    )
}

export default Header