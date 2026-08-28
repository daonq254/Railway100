import './App.css';
import ComponentsBottom from './Component/ComponentsBottom';
import ComponentsTop from './Component/ComponentsTop';
import DemoLifeCycle from './Component/DemoLifeCycle';
import DemoHook from './Hook/DemoHook';

function App() {
  let data1 = "Hello VTI";
  let data2 = "daonq vti"
  let data3 = {
    id: 1,
    name: "daonq",
    age: 20
  }

  // 
  let dataToTopChild = "APP TO TOP CHILD"
  // Hàm callback nhận dữ liệu từ Top
  let getDataFromTop = (data_param) => {
    // 
    console.log("APP: getDataFromTop");
    console.log(`data_param: ${data_param}`);

  }

  return (
    <div className="App">
      {/* <ComponentsTop dataToTopChild={dataToTopChild} data1={data1} data2={data2} data3={data3} heading="---- COMPONENT TOP ---" getDataFromTop={getDataFromTop} />
      <ComponentsBottom data1={data1} heading_bottom="-- COMPONENT BOTTOM---" /> */}
      {/* <DemoLifeCycle /> */}
      <DemoHook />
    </div>
  );
}

export default App;
