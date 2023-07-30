import '../estilos/puntos.css';

export default function Puntos () {

    const puntos = {
        hufflepuff: "0",
        gryffindor: "0",
        slytherin: "0",
        ravenclaw: "0"
    }

    return (
        <div className='puntos-contenedor'>
            <div className="puntos-casa-contenedor gryffindor">
                <div className="puntos-imagen">
                <img src='./puntos-gryffindor.png'></img></div>
                <h4 className='puntos-titulo'>Gryffindor</h4>
                <p className='puntos-puntuacion'>{puntos.gryffindor}</p>
            </div>
            <div className="puntos-casa-contenedor hufflepuff">
            <div className="puntos-imagen">
                <img src='./puntos-hufflepuff.webp'></img></div>
                <h4 className='puntos-titulo'>Hufflepuff</h4>
                <p className='puntos-puntuacion'>{puntos.hufflepuff}</p>
            </div>
            <div className="puntos-casa-contenedor slytherin">
            <div className="puntos-imagen">
                <img src='./puntos-slytherin.png'></img></div>
                <h4 className='puntos-titulo'>Slytherin</h4>
                <p className='puntos-puntuacion'>{puntos.slytherin}</p>
            </div>
            <div className="puntos-casa-contenedor ravenclaw">
            <div className="puntos-imagen">
                <img src='./puntos-ravenclaw.webp'></img></div>
                <h4 className='puntos-titulo'>Ravenclaw</h4>
                <p className='puntos-puntuacion'>{puntos.ravenclaw}</p>
            </div>
        </div>
    )
}