// import data from "../data/data_anuncios.json";
import '../estilos/anuncios.css';
import data from '../../data_usuarios.json'

export default function Anuncios () {
    const prefectos = data.filter(user => user.prefecto === true);
    const jefe = data.find(user => user.jefe === true);
    const cazadores = data.filter(user => user.quidditch === "cazador");
    const bateadores= data.filter(user => user.quidditch === "bateador")
    const buscador= data.find(user => user.quidditch === "buscador");
    return (
        <div>
            <h3> Tablón de Anuncios</h3>
            <div>Bienvenidos!</div>
            <div>
                <h4>Prefectos y Jefe de Slytherin</h4>
                <p>Con orgullo anunciamos a los prefectos designados para el año escolar. Los felicitamos por el logro!!!</p>
                <ul>
                    {prefectos.map(user => (
                        <li key={user.username}>{user.nombre} {user.apellido}</li>
                    ))}
                </ul>
                <p>Por 5to año consecutivo, con la sabiduria y rigurosidad de siempre, anunciamos tambien a nuestro jefe de casa:</p>
                {jefe && <p>Prof. {jefe.nombre} {jefe.apellido}</p>}
                <p>Por inquitudes, problemas o cualquier necesidad, tratara los temas relacionados a la Casa Slytherin en su despacho en el aula de pociones, de Jueves a Sabados de 15 a 19hs.</p>
            </div>
            <h4>Equipo de Quidditch</h4>
            <p> Anunciamos las posiciones de quidditch definidas para este año:</p>
            <p> Cazadores: 
            <ul>
                    {cazadores.map(user => (
                        <li key={user.username}>{user.nombre} {user.apellido}</li>
                    ))}
                </ul>
            </p>
            <p> Bateadores: 
            <ul>
                    {bateadores.map(user => (
                        <li key={user.username}>{user.nombre} {user.apellido}</li>
                    ))}
                </ul>
            </p><p> Buscador:
                </p>
            
            {buscador && <p> {buscador.nombre} {buscador.apellido}</p> }
            <h4>Zonas Prohibidas</h4>
        </div>
    )
}