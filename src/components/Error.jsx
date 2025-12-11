import { useNavigate, useRouteError } from "react-router-dom"

function Error(){

    const error = useRouteError()
    return(
        <div>
            <h3>An error occured</h3>
            <p>-Check your Internet connection <br />
               -Call your Internet service Provider <br />
               -Try again.....
            </p>
            {error.messege}
        </div>
    )
}

export default Error