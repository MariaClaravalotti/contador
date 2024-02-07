import React ,{useState} from "react";


function Contador() {
    const [numero, setNumero] = useState(0)
    function Adicionar (){ 
        setNumero(numero+1)
    }
        
    
    function Subtrair (){
        setNumero(numero-1)
       
    }
    
    function Zerar (){
        setNumero(0)
    }
    return (
        <>
           <h2>{numero}</h2>
            <button onClick={Adicionar}>+</button>
            <button onClick={Subtrair}>-</button>
            <button onClick={Zerar}>Zerar</button>
        </>
        
    )
}
export default Contador