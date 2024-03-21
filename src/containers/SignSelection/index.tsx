import stars from '../../assets/stars.png'
import './style.css'
import Button from '../../components/button'
import { useNavigate, useParams } from 'react-router-dom'

function SignSelectionPage() {
  const navigate = useNavigate()
  const { firstSign } = useParams<{ firstSign: string }>()

  const signs = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes']

  const handleButtonClick = (sign: string) => {
    navigate(`/result/${firstSign}/${sign}`)
  }

  return (
    <>
      <div>
        <img src={stars} className="logo stars" alt="Stars logo" />
      </div>
      <h1>Selecione o outro signo</h1>
      <div>
        {signs.map((sign) => (
          <Button key={sign} name={sign} onClick={() => handleButtonClick(sign)} />
        ))}
      </div>
    </>
  )
}

export default SignSelectionPage
