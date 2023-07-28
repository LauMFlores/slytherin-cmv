import '../estilos/puntos.css';

export default function Puntos () {

    const puntos = {
        hufflepuff: "0",
        gryffindor: "0",
        slytherin: "0",
        ravenclaw: "0"
    }

    return (
        <div>
            <h3>COPA DE LAS CASAS</h3> 
            <h4>Puntuación</h4>
            <div className="">
                <h4>Hufflepuff</h4>
                <p>{puntos.hufflepuff}</p>
            </div>
            <div className="">
                <h4>Gryffindor</h4>
                <p>{puntos.gryffindor}</p>
            </div>
            <div className="">
                <h4>Slytherin</h4>
                <p>{puntos.slytherin}</p>
            </div>
            <div className="">
                <h4>Ravenclaw</h4>
                <p>{puntos.ravenclaw}</p>
            </div>
        </div>
    )
}