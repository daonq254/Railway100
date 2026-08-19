import './App.css';
import ComponentsBottom from './Component/ComponentsBottom';
import ComponentsTop from './Component/ComponentsTop';

function App() {
  let data1 = "Hello VTI";
  let data2 = "daonq vti"
  let data3 = {
    id: 1,
    name: "daonq",
    age: 20
  }
  return (
    <div className="App">
      <ComponentsTop data1={data1} data2={data2} data3={data3} heading="---- COMPONENT TOP ---" />
      <ComponentsBottom data1={data1} heading_bottom="-- COMPONENT BOTTOM---" />
    </div>
  );
}

export default App;
