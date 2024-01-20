import { useParams } from 'react-router-dom'
import stars from '../../assets/stars.png'
import getResult from '../../api/apiRequest';

function ResultPage() {
  const { firstSigno, secondSigno } = useParams<{ firstSigno: string; secondSigno: string }>()
  // const completion = getResult(firstSigno, secondSigno)
  // console.log(completion);
  return (
    <>
      <div>
        <img src={stars} className="logo stars" alt="Stars logo" />
      </div>
      <div>
        <h1>Resultado</h1>
      </div>
    </>
  )
}

export default ResultPage
