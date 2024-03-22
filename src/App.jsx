import FormColors from './Components/FormColors'


function App() {


  return (
    <>
    <div className='p-5 min-h-[100vh] flex flex-col'>
      <header>
        <h1>Header</h1>
      </header>
      <main className=' flex-grow'>
        <FormColors/>      </main>
      <footer>
        <footer>Footer</footer>
      </footer>
    </div>
    </>
  )
}

export default App
