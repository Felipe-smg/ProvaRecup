import './App.css'
import Cabe from './Cabe.css'
function app(){
  return (
  <div >
 
<header>
   
  <ul>
      
    <img src='logo.svg'/>
      <a className='a'>Entregador</a>
      <a className='a'>Restaurante e Mercado</a>
      <a className='a'> Carreiras</a>
      <a className='a'> IFood Card</a>
   
      <button className='bu'>Criar conta</button>
      <button className='butt'>Entrar</button>
   
</ul>

</header> 
      <h2>Destaques</h2>
      <div className='container'>
        <div className='foto1'>
        <img className='f' src='big-king.webp'></img>
        
        <h3>Combo Big King</h3>
        <p>Um hambúrguer com duas carnes bovinas grelhadas
          de 57g. pão com gergelim, queijo...
        </p>
        
        <h4>Serve 1 pessoa</h4>
        <div className='entiqueta'>
        <label class="bt" value="">R$ 41,90 </label>
        </div>
        </div>


        <div className='foto1'>
        <img className='f' src='cheddar-duplo.webp'></img>
        <h3>Combo Cheddar Duplo</h3>
        <p>Um hmabúrguer com duas carnes bovinas grelhadas de 
          57g. pão preto com gergelim...
        </p>
        <h4>Serve 1 pessoa</h4>
        <label class="bt" value="">R$ 41,90 </label>
        </div>


        <div className='foto1'>
        <img className='f' src='cheeseburger-duplo.webp'></img>
        <h3>Combo Cheeseburguer Duplo com Bacon</h3>
        <p>Um hambúrguer com duas carnes bovinas grelhadas
          de 57g. pão com gergelim, queijo...
        </p>
        <h4>Serve 1 pessoa</h4>
        <label class="bt" value="">R$ 36,90 </label>
        </div>


        <div className='foto1'>
        <img className='f'  src='mega-stacker.webp'></img>
        <h3>Combo Mega Stacker 2.0</h3>
        <p>Um hambúrguer com duas carnes bovinas grelhadas
          de 113g. pão com gergelim, queijo...
        </p>
        <h4>Serve 1 pessoa</h4>
        <label class="bt" value="">R$ 51,90 </label>
        </div>
  
      

      </div>
      </div>
  );
}
export default app 

