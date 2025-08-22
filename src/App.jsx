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
    <main className="w-full h-screen bg-black text-white ">
      <div className="flex flex-col justify-center items-center h-full">
        <div>
            <div className="flex flex-col text-center">
              <h1 className="text-3xl">Insira sua senha</h1>
              <span className="text-lg text-[#737373]">Insira a senha corretamente para participar do <span className="text-[#7EFF5B]">Desafio</span></span>
            </div>
            <div className="flex flex-col items-center justify-center my-10">
                <input type="text" value={password} onChange={(e)=>setPassord(e.target.value)} className="placeholder:text-[#686869] border-1 border-[#686869] w-[80%] px-4 py-2 rounded-sm focus:outline-1" placeholder="senha"/>
                <button onClick={()=>handleSubmit()} className="bg-[#7EFF5B] text-black w-[80%] py-2 rounded-sm font-semibold mt-4">enviar</button>
                {!correctPassword && (
                  <span className="text-red-500">Senha incorreta</span>
                )}
            </div>
        </div>
      </div>



    
    </main>
  )
}