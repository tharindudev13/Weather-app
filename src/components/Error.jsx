import { useNavigate, useRouteError } from "react-router-dom"

function Error(){

    const error = useRouteError()
    const navigate = useNavigate()
    return(
        <div>
            <h3>An error occured</h3>
            <p>{error.message}</p>
        </div>
    )
}

export default Error