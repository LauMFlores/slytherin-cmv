import data from "../data/data_puntos.json";
import '../estilos/puntos.css';

export default function Puntos () {

    return (
        <div className="puntos-contenedor">
          {data.map((puntos) => (
            <div key={puntos.casa} className={`puntos-casa-contenedor ${puntos.casa}`}>
              <div className="puntos-imagen">
                <img src={puntos.logo} alt= {`logo de ${puntos.casa}`} />
              </div>
              <h4 className="puntos-titulo">{puntos.casa.charAt(0).toUpperCase() + puntos.casa.slice(1)}</h4>
              <p className="puntos-puntuacion">{puntos.puntuacion}</p>
            </div>
          ))}
        </div>
      );

}