import { Outlet } from "react-router-dom";


interface Props {
    permiso: boolean
}

const Seguridad = ({permiso}: Props) => {
    if (permiso) {
        return <Outlet/>
    }
}

export default Seguridad;