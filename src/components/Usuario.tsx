import { useState } from "react";


interface user {
    uid: string;
    name: string;
}



export const Usuario = ()=>{

    const [user, setUser] = useState<user>();

    const login = ()=>{
        setUser({
            uid:'232434vf',
            name:'moises',
        })
    }
    return (
        <div>
            <h3>Usuario : useState</h3>
            <button
                onClick= {login}
                className="btn btn-outline-primary">   
                login         
            </button>
            <pre>{JSON.stringify(user)}</pre>
        </div>

    )
}