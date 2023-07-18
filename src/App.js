import Header from './component/header';
import Left from './component/left'
import Middle from './component/middle'
import './App.css';

function App() {
  // 自适应屏幕
  window.onresize = function(){
    App()
  }
  return (
    <div className="App">
      <section class="layout">
        <Header/>
        <Left/>
        <Middle/>
      </section>
    </div>
  );
}

export default App;
