import { createStore } from "redux"

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Javier Burrai",
            foto: "https://imagenes.expreso.ec/files/image_700_402/files/fp/uploads/2020/10/20/5f8f0ab33ceb2.r_d.433-223-8000.jpeg"
        },
        {
            id: 2,
            nombre: "Victor Mendoza",
            foto: "https://img.a.transfermarkt.technology/portrait/small/354624-1589960622.jpg?lm=1"
        },
        {
            id: 3,
            nombre: "Álvaro Preciado",
            foto: "https://tipsscore.com/storage/player-photo/al/va/alvaro-preciado-1.png"
        },
        {
            id: 4,
            nombre: "Fernando Leon",
            foto: "https://img.a.transfermarkt.technology/portrait/small/242992-1463051707.jpg?lm=1"
        },
        {
            id: 5,
            nombre: "Wiliams Riveros",
            foto: "https://img.a.transfermarkt.technology/portrait/small/457058-1589960710.jpg?lm=1"
        },
        {
            id: 6,
            nombre: "Dario Aimar",
            foto: "https://ecuador.goltv.tv/images/AIMAR.jpg"
        },
        {
            id: 7,
            nombre: "Mario Pineida",
            foto: "https://ecuador.goltv.tv/images/pineida.jpg"
        },
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    switch(action.type){
        case "AGREGAR_TITULAR":
            return {
                ...state,
                titulares: state.titulares.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
            }
        case "AGREGAR_SUPLENTE":
            return {
                ...state,
                suplentes: state.suplentes.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
            }
        case "QUITAR_TITULAR":
            return {
                ...state,
                titulares: state.titulares.filter(j => j.id !== action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador)
            }
        case "QUITAR_SUPLENTE":
            return {
                ...state,
                suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador)
            }
        default:
            return state
    }
}

export default createStore(reducerEntrenador)