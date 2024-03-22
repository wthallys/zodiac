import stars from '../../assets/stars.png'
import '../style.css'
import Button from '../../components/button'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const signs = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes']

  const handleButtonClick = (sign: string) => {
    navigate(`/sign-selection/${sign}`)
  }

  return (
    <>
      <div>
        <img src={stars} className="logo stars" alt="Stars logo" />
      </div>
      <h1>Selecione um signo</h1>
      <div>
        {signs.map((sign) => (
          <Button key={sign} name={sign} onClick={() => handleButtonClick(sign)} />
        ))}
      </div>
    </>
  )
}

export default Home
