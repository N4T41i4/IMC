import{useState,useEffect} from "react"
import styles from './index.module.css';

const Formulario=()=>{
    const[altura,setaltura]=useState(0);
    const[peso,setpeso]=useState(0);
    useEffect(()=>{
        console.log("o componente iniciou");
    },[]);

    const imc =()=>{
        const alt =altura * altura;
        const valor =alt/peso;

        if(valor <= 18.5){
            return(<p>Abaixo do peso normal</p>)
        }else if(valor <=24.9){
            return(<p>Peso normal</p>)
        }else if( valor <=29.9){
            return(<p>Excesso de peso</p>)
        }else if( valor <=34.9){
            return(<p>Obesidade classe I</p>)
        }else if(valor <=39.9){
            return(<p>Obesidade classe II</p>)
        }else{
            return(<p>Obesidade classe III</p>)
        }
    }

    return(
        <form>
            <h1>Calcula IMC</h1>
            <input type="number" placeholder="altura" onChange={evento=>setaltura(parseFloat(evento.target.value))}/>
            <input type="number" placeholder="peso" onChange={evento=>setpeso(parseFloat(evento.target.value))}/>
            {imc()}
        </form>
    )
}
export default Formulario