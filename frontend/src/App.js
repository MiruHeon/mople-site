import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className='box1'>
        <h1 style={{color: '#3de9cf',fontSize:'100px',marginTop:'20px',marginLeft:'20px'}}>MOP&lt;E</h1>
        <h1 style={{color: '#ffffffff',fontSize:'30px',marginTop:'-90px',marginLeft:'25px'}}>모플</h1>

        <div style={{display: 'flex', justifyContent: 'right', marginRight:'20px', marginTop: '-160px'}}>
          <button style={{background: 'none',border: '1px solid #3de9cf',color: '#3de9cf',fontSize: '18px',padding: '8px 20px',borderRadius: '8px',cursor: 'pointer'}}>모플 소개</button>
          <button style={{background: 'none',border: '1px solid #3de9cf',color: '#3de9cf',fontSize: '18px',padding: '8px 20px',borderRadius: '8px',cursor: 'pointer'}}>사업 문의</button>
          <button style={{background: 'none',border: '1px solid #3de9cf',color: '#3de9cf',fontSize: '18px',padding: '8px 20px',borderRadius: '8px',cursor: 'pointer'}}>회사 소개</button>
        </div>

        <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}>
          <h1 style={{color: '#3de9cf',fontSize:'70px'}}>ACHIEVE</h1>
          <h1 style={{color: '#ffffffff',fontSize:'70px',marginLeft:'10px'}}>INNOVATION</h1>
        </div>

        <div style={{display:'flex',justifyContent:'center',marginTop:'-80px'}}>
          <h1 style={{color: '#ffffffff',fontSize:'40px'}}>혁신을</h1>
          <h1 style={{color: '#3de9cf',fontSize:'40px',marginLeft:'10px'}}>이루다</h1>
        </div>
        <br></br>
        <br></br>
      </div>

      <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
          <img src='https://github.com/MiruHeon/Normal-Project/blob/main/Frame%201.png?raw=true' alt='모플로고' style={{height:'500px'}}></img>
          <div>
            <h1 style={{color: '#ffffffff',fontSize:'40px', marginLeft:'100px',fontWeight:'normal'}}>A CREDITABLE COMPANY</h1>
            <h1 style={{color: '#3de9cf',fontSize:'40px', marginLeft:'100px',marginTop:'-30px',fontWeight:'bolder'}}>신용이 가는 회사</h1>
          </div>
      </div>
    </div>
  );
}

export default App;