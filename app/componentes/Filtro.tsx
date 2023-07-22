import './componentesCSS/filtro.css'

interface FiltroProps {
  categorias: string[];
  onFiltrar: (categoria: string) => void;
}

export default function Filtro({ categorias, onFiltrar }: FiltroProps) {
 
  const handleClick = ( event: React.MouseEvent<HTMLButtonElement>, categoria: string) => {
    event.stopPropagation();
    onFiltrar(categoria);
  };

  const handleMostrarTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onFiltrar(""); 
  };

  return (
    <div className='filtro'>
      <button onClick={handleMostrarTodo}>Ver todos</button>
      
      {categorias.map((categoria) => (
        <button key={categoria} onClick={(event) => handleClick(event, categoria)}>
            {categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase()}
        </button>
      ))}
      
    </div>
  );
}



