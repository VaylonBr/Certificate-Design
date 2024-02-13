import Logo from "./assets/Logo.svg"

export function App() {

  return (
    <div className="h-screen p-5 grid items-center">
      <div className="bg-MainBackgroundColor h-96 ring-2 ring-BorderColor rounded-lg text-center md:space-y-3 grid">

      <header className="space-y-3">
        <img src={Logo} className="mx-auto h-10 md:h-20"/>
        <h1 className="text-TextColor text-lg font-semibold md:text-xl">Certificado de conclusão</h1>

        <div className="text-xs md:text-base">
          <span className="text-CustomBlueColor">Organização </span>
          <span className="text-CustomGreenColor">Certifica que</span>
        </div>
        
        <h1 className="text-TextColor text-xl font-semibold border-b-2 border-BorderBottomColor inline-block md:text-2xl">Nome completo</h1>
      </header>

      <div className="text-xs md:text-base">
        <p className="text-CommentaryColor inline">// Concluiu com êxito o curso de: </p>
        <span className="text-LinkColor">Nome do curso</span>
        <p className="text-CommentaryColor">// Conteúdos: Conteúdo 1, Conteúdo 2, Conteúdo 3.</p>
      </div>

      <footer className="text-xs md:text-base flex justify-center space-x-12">
        <div>
          <p className="text-TextColor">Data de Emissão</p>
          <span className="text-CustomGreenColor">12/02/2024</span>
        </div>

        <div>
          <p className="text-TextColor font-serif">LR</p>
          <span className="text-CustomBlueColor">Professor</span>
        </div>

      </footer>
      </div>
    </div>
  )
}