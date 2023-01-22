const Toggle = () => {
    const fincActivaToggle = () => {
        const toggle = document.querySelector('.toggle')
        const nav = document.querySelector('.navBar')

        toggle.classList.toggle('active'), nav.classList.toggle('active')
    
    }
    return (
        <>
            <div className="toggle" onClick={fincActivaToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}
export default Toggle