
interface FiltroProps {
  categorias: string[];
  onFiltrar: (categoria: string) => void;
}

export default function Filtro({ categorias, onFiltrar }: FiltroProps) {
 
  const handleClick = (categoria: string) => {

    onFiltrar(categoria);
  };

  const handleMostrarTodo = () => {
    onFiltrar(""); 
  };

  return (
    <div>

      <button onClick={handleMostrarTodo}>Ver todos</button>
      {categorias.map((categoria) => (
        <button key={categoria} onClick={() => handleClick(categoria)}>
            {categoria}
        </button>
      ))}
      
    </div>
  );
}



