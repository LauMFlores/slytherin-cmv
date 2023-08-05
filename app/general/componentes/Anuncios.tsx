import data from '../../data_usuarios.json'
import '../estilos/anuncios.css';

export default function Anuncios () {
    const prefectos = data.filter(user => user.prefecto === true);
    const jefe = data.find(user => user.jefe === true);
    const cazadores = data.filter(user => user.quidditch === "cazador");
    const bateadores= data.filter(user => user.quidditch === "bateador")
    const buscador= data.find(user => user.quidditch === "buscador");

    return (
        <div className='anuncios-contenedor'>
            {/* anuncio 1 */}
            <div className='anuncios'>
                <h4 className='anuncios-titulo'>Prefectos y Jefe de Slytherin</h4>
                <p>Con orgullo anunciamos a los prefectos designados para el año escolar. ¡Los felicitamos por el logro!</p>
                    <ul>
                        {prefectos.map(user => (
                            <li className='nombramiento' key={user.username}>{user.nombre} {user.apellido}</li>
                        ))}
                    </ul>
                <p >Por 5to año consecutivo, con la sabiduría y rigurosidad de siempre, anunciamos también a nuestro jefe de casa:</p>
                {jefe && 
                <p className='nombramiento'>Prof. {jefe.nombre} {jefe.apellido}</p>}
                <p>Por inquitudes, problemas o cualquier necesidad, tratará los temas relacionados a la Casa Slytherin en su despacho en el aula de pociones, de Jueves a Sábados de 15 a 19hs.</p>
            </div>
            {/* anuncio 2 */}
            <div className='anuncios'>
                <h4 className='anuncios-titulo'>Equipo de Quidditch</h4>
                <p> De esta manera quedan definidas las posiciones de quidditch para este año:</p>
                    <ul> <span className='subrayado'>Cazadores</span> 
                        {cazadores.map(user => (
                            <li className='nombramiento' key={user.username}>{user.nombre} {user.apellido}</li>
                        ))}
                    </ul>
                    <ul> <span className='subrayado'>Bateadores</span> 
                        {bateadores.map(user => (
                            <li className='nombramiento' key={user.username}>{user.nombre} {user.apellido}</li>
                        ))}
                    </ul>
                {buscador && 
                    <ul> <span className='subrayado'>Buscador</span> 
                         <li className='nombramiento'> {buscador.nombre} {buscador.apellido}</li> 
                    </ul>}
                <p> La temporada inicia el 23 de octubre, con un evento de apertura organizado por la Prof. Hooch. Los esperamos a todos a las 17:00 hs en el estadio de Quidditch.</p> 
                <p className='verde'> ¡ Vamos Serpientes ! 🏆🐍</p>
                <p></p>
            </div>
            {/* anuncio 3 */}
            <div className='anuncios'>
            {/* ❌❕✖❗ */}
                <h4 className='anuncios-titulo'> IMPORTANTE: <br/>🚫 Toque de Queda y Restricciones </h4>
                <p> Se recuerda a los alumnos que no se permite circular por ningún área del castillo entre las 22:00 pm y 6:00 am.  </p>
                <p>Asimismo, se mencionan a continuación las zonas con acceso prohibido durante el año escolar vigente: </p>
                  <p>❌<span className='subrayado'>Sección Restringida de la Biblioteca</span></p>
                <p> Sólo se permitirá el acceso a aquel estudiante que posea un permiso firmado por algún profesor o miembre del personal de la escuela.</p>
                <p>❌<span className='subrayado'>Torre de Astronomía</span></p>
                <p> Se permite circular por la torre únicamente en el horario asignado para cursar la materia, con tolerancia máxima de 15 minutos previos y 15 minutos al finalizar la clase.</p>
                <p>❌<span className='subrayado'>Terrenos del Bosque Prohibido</span></p>
                <p> Queda terminantemente prohibido el ingreso en cualquier horario para todos los estudiantes. </p>
                <p className='rojo'>Infringir tanto el toque de queda como acceder a dichas áreas restringidas del castillo conlleva en una severa sanción disciplinaria, pudiendo derivar incluso en la expulsión de Hogwarts. </p>
            </div>

        </div>
    )
}