const ProgressBar = (step) => {
    let progress = (((step.val)-1)*25)

    return(
        <div className="progress" style={{borderRadius:"0"}}>
                <div className="progress-bar" role="progressbar"  aria-valuenow="1" aria-valuemin="0" aria-valuemax="4" style={{width: `${progress}%`}}></div>
        </div>
    )
}

export default ProgressBar