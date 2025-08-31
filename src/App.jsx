'./App.css'

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Password(){ 
  const [password, setPassord] = useState('')
  const [correctPassword, setCorrectPassword] = useState(true)

  const navigate = useNavigate()

  const handleSubmit = () => {
    if (password === '1234'){
      setCorrectPassword(true)
      console.log('passou')
      navigate('/memorygame')
    }else {
      setCorrectPassword(false)
    }
  }

  return (
   <main className="w-full h-screen relative text-white overflow-hidden">

      {/* Fundo preto como base */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Lupa sobre o fundo, atrás do conteúdo */}
      <div className="absolute bottom-0 left-0 w-full z-10 opacity-60">
        <img src="/decorations/lupa.svg" alt="" className="w-[40%] h-full  " />
      </div>

      {/* Decorações acima da lupa */}
      <div className="absolute bottom-5 left-2 w-[90%] z-20">
        <img src="/decorations/corridaAtitude.svg" className="w-[80%] 2xl:w-[70%]" />
      </div>

      <div className=" w-full z-20">
        <img src="/decorations/arrowGroup.svg" className="w-[20%] absolute top-4 right-4 2xl:w-[18%]" />
      </div>

      {/* Conteúdo principal acima de tudo */}
      <div className="flex flex-col justify-center items-center h-full z-20 relative">
        <div>
          <div className="flex flex-col text-center">
            <h1 className="text-2xl md:text-3xl 2xl:text:7xl">Insira sua senha</h1>

            <span className="text-lg md:text-xl xl:text-2xl 2xl:text-2xl text-[#737373]">
              Insira a senha corretamente para participar do <span className="text-[#7EFF5B]">Desafio</span>
            </span>
          </div>

          <div className="flex flex-col items-center justify-center my-10">

            <input type="text" value={password} onChange={(e)=>setPassord(e.target.value)}
              className="placeholder:text-[#686869] border border-[#686869] w-[80%] px-4 py-2 xl:py-3 rounded-sm focus:outline-1 text-white"
              placeholder="senha"
            />
            <button onClick={handleSubmit}
              className="hover:bg-[#6de64cf1] bg-[#7EFF5B] text-black w-[80%] py-2 xl:py-3 rounded-sm font-bold mt-4"
            >
              Enviar
            </button>
            {!correctPassword && (
              <span className="text-red-500 mt-2 md:text-lg">Senha incorreta</span>
            )}
          </div>
        </div>
      </div>
    </main>

  )
}