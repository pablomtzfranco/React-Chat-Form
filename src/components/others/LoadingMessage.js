const LoadingMessage = () => {
    return (
        <>
            <div className='position-relative'>
                <div className="px-4 my-2 animation" >
                    <div className="flex-shrink-1 rounded py-2 px-3 mr-3">
                        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoadingMessage