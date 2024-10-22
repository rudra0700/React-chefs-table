
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import OurRecipe from './components/OurRecipe'

function App() {
  return (
    <>
    <div className='container mx-auto border-2 pt-2'>
        <Header></Header>
        <Banner></Banner>
        <OurRecipe></OurRecipe>
    </div>
    </>
  )
}

export default App
