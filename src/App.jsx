import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './component/Cards'
import Ice_cream from './component/Ice_cream'
import Settings from './component/Settings'

function App() {

  return (
    <>
      {/* <div className='bg-[#F1F1F1] py-[72px]'><Cards /></div> */}

      {/* <div className='bg-neutral-200 p-4'><Settings /></div> */}

      <div>
        <Ice_cream />
      </div>
    </>
  )
}

export default App
