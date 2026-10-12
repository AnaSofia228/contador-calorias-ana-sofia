import Logo from '../public/logo.png'
import Form from './components/Form'

function App() {

  return (
    <>
      <header className="bg-[#F2E8CF] py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <img src={Logo} alt="Logo" className="h-35" />
        </div>
      </header>

      <section className="bg-[#A7C957] py-10">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>
    </>
  )
}

export default App
