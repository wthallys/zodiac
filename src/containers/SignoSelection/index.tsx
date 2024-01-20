import stars from '../../assets/stars.png'
import './style.css'
import Button from '../../components/button'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

function SignoSelectionPage() {
  const navigate = useNavigate()
  const { firstSigno } = useParams<{ firstSigno: string }>()
  const [secondSigno, setSecondSigno] = useState<string | null>(null)

  const signos = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes']

  const handleButtonClick = (signo: string) => {
    setSecondSigno(signo)
    navigate(`/result/${firstSigno}/${signo}`)
  }

  return (
    <>
      <div>
        <img src={stars} className="logo stars" alt="Stars logo" />
      </div>
      <h1>Selecione o outro signo</h1>
      <div>
        {signos.map((signo) => (
          <Button key={signo} name={signo} onClick={() => handleButtonClick(signo)} />
        ))}
      </div>
    </>
  )
}

export default SignoSelectionPage
