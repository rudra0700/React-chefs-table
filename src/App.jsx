
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import OurRecipe from './components/OurRecipe'
import Recepies from './components/Recepies'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
    <div className='container mx-auto border-2 pt-2'>
        <Header></Header>
        <Banner></Banner>
        <OurRecipe></OurRecipe>
        <section className='flex flex-col md:flex-row mt-8 gap-6'>
            <Recepies></Recepies>
            <Sidebar></Sidebar>
        </section>
    </div>
    </>
  )
}

export default App
