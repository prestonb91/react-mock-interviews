
function User({name, email, phone, website}) {
    
    return(
        <>
            <div style={{margin: "20px"}}>
                <div>{name}</div>
                <div>{email}</div>
                <div>{phone}</div>
                <div>{website}</div>
            </div>
        </>
    )
}

export default User
