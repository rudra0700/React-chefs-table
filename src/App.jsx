
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import OurRecipe from './components/OurRecipe'
import Recepies from './components/Recepies'
import Sidebar from './components/Sidebar'

function App() {

  const [recepiequeue, setRecepiequeue] = useState([])
  const [deletedItems , setDeletedItems] = useState([])
  const [totalTime , setTotalTime] = useState(0)
  const [totalCalories , setTotalCalories] = useState(0)
  

  const handleRecepies = (recepie) => {
    const isExist = recepiequeue.find(item => item.recipe_id === recepie.recipe_id);
    if(!isExist){
      setRecepiequeue([...recepiequeue, recepie])
    }else{
      alert("item already there")
    }
  }

  const handleRemove = (id,  time, calories) => {
    const deletedItem = recepiequeue.find(item => item.recipe_id === id)
    const removeItem = recepiequeue.filter(item => item.recipe_id !== id);
    setRecepiequeue(removeItem);
    setDeletedItems([...deletedItems, deletedItem])
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories)
 
  }

  

  return (
    <>
    <div className='container mx-auto border-2 pt-2'>
        <Header></Header>
        <Banner></Banner>
        <OurRecipe></OurRecipe>
        <section className='flex flex-col md:flex-row mt-8 gap-6'>
            <Recepies handleRecepies={handleRecepies}></Recepies>
            <Sidebar recepiequeue={recepiequeue} handleRemove={handleRemove} deletedItems={deletedItems} totalTime={totalTime} totalCalories={totalCalories}></Sidebar>
        </section>
    </div>
    </>
  )
}

export default App
