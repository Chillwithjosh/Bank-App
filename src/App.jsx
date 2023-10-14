import Nav from "./components/Nav";
import './App.css'
import { Hero, About, Footer, LatestArticles} from "./sections";
// 6 8 9

function App() {
  return (
    <main>
      <Nav/>
    <section className=" bg-VeryLightGray pb-1">
      <Hero/>
    </section>
    <section className="padding bg-LightGrayishBlue">
      <About/>
    </section>
    <section className="padding  bg-VeryLightGray">
      <LatestArticles/>
    </section>
    <section className="padding bg-DarkBlue">
      <Footer/>
    </section>
    </main>
  )
}

export default App
