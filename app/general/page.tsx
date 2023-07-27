import Layout from "../layout2"

export default function General() {

    const pageTitle = 'Campus Mágico de Slytherin';

    return (
        <Layout pageTitle={pageTitle}>
            <main className="campus"> 
            <h3> BIENVENIDO! </h3>
            <div >
                <button>Anuncios</button>
                <button>Calendario</button>
                <button>Puntos</button>
                <button>Trivia</button>
            </div>
            </main>
        </Layout>
    )
  }
  