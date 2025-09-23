'./App.css'

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Password(){ 
  const [password, setPassword] = useState('')
  const [correctPassword, setCorrectPassword] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = () => {
    console.log(password, 'senha sem lower case')
    console.log('executou a funcao')
    console.log(password.toLocaleLowerCase(), 'senha')
    if (password.toLocaleLowerCase() == 'corrida atitude'){
      setCorrectPassword(false)
      console.log('passou')
      navigate('/memorygame')
    }else {
      console.log('passou por aqui')
      setCorrectPassword(true)
    }
  }

  console.log(correctPassword, 'correctPassoword')

  return (
    <main className="w-full h-screen bg-black text-white ">
      <div className="absolute bottom-0 left-0 w-full ">
        <img src="/decorations/lupa.svg" alt="" className="w-[40%] h-full -z-0 relative" />
      </div>

      <div className="absolute bottom-5  left-2 w-[90%]">
        <img src="/decorations/corridaAtitude.svg" className="w-[80%]"/>
      </div>

      <div className=" w-full">
        <img src="/decorations/arrowGroup.svg" className="w-[20%] absolute right-4 top-4"/>
      </div>

      <div className="flex flex-col justify-center items-center h-full z-50 relative">
        <div>
            <div className="flex flex-col text-center">
              <h1 className="text-4xl">Insira sua senha</h1>
              <span className="text-2xl text-[#737373] mt-1">Insira a senha corretamente para participar do <span className="text-[#7EFF5B]">Desafio</span></span>
            </div>
            <div className="flex flex-col items-center justify-center my-10">
                <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="placeholder:text-[#686869] border-1 border-[#686869] w-[80%] px-4 py-3 rounded-sm focus:outline-1 text-lg" placeholder="senha"/>
                <button onClick={()=>handleSubmit()} onKeyDown={(e)=>{
                  if (e.key == 'Enter'){
                    handleSubmit()
                  }
                }} className="bg-[#7EFF5B] hover:bg-[#7fff5be0] text-black w-[80%] py-3 rounded-sm font-semibold mt-4 text-lg">enviar</button>
                {correctPassword && (
                  <span className="text-red-500">Senha incorreta</span>
                )}
            </div>
        </div>
      </div>



    
    </main>
  )
}