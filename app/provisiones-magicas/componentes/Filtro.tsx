import '../../interfaces/interface';
import '../estilos/filtro.css';

export default function Filtro({ categorias, onFiltrar }: FiltroProps) {
  
  const categoriasOrdenadas = categorias.slice().sort();

  const handleClick = ( event: React.MouseEvent<HTMLButtonElement>, categoria: string) => {
    event.stopPropagation();
    onFiltrar(categoria);
  };

  const handleMostrarTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onFiltrar(""); 
  };

  return (
    <div className='filtro' onClick={(event) => event.stopPropagation()} >
      <button onClick={handleMostrarTodo}>Ver todos</button>
      
      {categoriasOrdenadas.map((categoria) => (
        <button key={categoria} onClick={(event) => handleClick(event, categoria)}>
            {categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase()}
        </button>
      ))}
      
    </div>
  );
}



