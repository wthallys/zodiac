import stars from '../../assets/stars.png'
import './style.css'
import Button from '../../components/button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Home() {
  const navigate = useNavigate()
  const [firstSigno, setFirstSigno] = useState<string | null>(null)

  const signos = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes']

  const handleButtonClick = (signo: string) => {
    setFirstSigno(signo)
    navigate(`/signo-selection/${signo}`)
  }

  return (
    <>
      <div>
        <img src={stars} className="logo stars" alt="Stars logo" />
      </div>
      <h1>Selecione um signo</h1>
      <div>
        {signos.map((signo) => (
          <Button key={signo} name={signo} onClick={() => handleButtonClick(signo)} />
        ))}
      </div>
    </>
  )
}

export default Home
