
import Search from './components/Search.jsx'
import Weather from './components/Weather.jsx'

function App() {
  
  const onSearchChange = (searchData) => {
    console.log(searchData);
  }


  return (
    <>
      <Search onSearchChange={onSearchChange}></Search>
      <Weather></Weather>
    </>
  )
  
}

export default App
