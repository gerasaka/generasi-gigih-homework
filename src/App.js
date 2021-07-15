import './App.css';
import Content from "./component/content"
import data from "./data/apiData.js"
// import detail from "./data/apiCall.js"

function App() {
  return (
    <div className="App">
      <h1>Create Playlist</h1>
      <Content data={data}/>
      <content />
    </div>
  );
}

export default App;
