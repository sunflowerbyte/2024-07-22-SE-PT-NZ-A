function PropsDisplayer(props)
{
    const stringProps = JSON.stringify(props)

    return(
        <div>
            <h2>Check out my props!</h2>
            <h3>{stringProps}</h3>
        </div>
    )
}

export default PropsDisplayer