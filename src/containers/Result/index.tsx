import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import stars from '../../assets/stars.png';
import getResult from '../../api/apiRequest';
import Button from '../../components/button';

function ResultPage() {
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { firstSign, secondSign } = useParams<{ firstSign: string; secondSign: string }>();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getResult(firstSign, secondSign);
        setResult(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [firstSign, secondSign]);

  return (
    <>
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div>
            <img src={stars} className="logo stars" alt="Stars logo" />
          </div>
          <div>
            <h1>Resultado</h1>
            <p>{result}</p>
            <Button name='Voltar' onClick={() => navigate('/')}/>
          </div>
        </>
      )}
    </>
  );
}

export default ResultPage;
