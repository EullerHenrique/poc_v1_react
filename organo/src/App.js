import Banner from './component/Banner/Banner';
import Form from './component/Form/Form';
import { useState } from 'react';

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  
  const aoSalvar = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div>
      <Banner/>
      <Form
        aoSalvar={valor => aoSalvar(valor)}
      />
    </div>
  );
}

export default App;
