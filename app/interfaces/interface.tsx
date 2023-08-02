//componente botonera
interface BotoneraProps {
    opciones: string[];
    contenedorActivo: string;
    handleContenedorActivo: (section: string) => void;
  }