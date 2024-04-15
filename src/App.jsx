import Header from "./components/Header"
import WayToTeach from "./components/WayToTeach"
import { ways, differences } from './data'
import Button from "./components/Button/Button"
import { useState } from "react"

export default function App() {
  const [contentType, setContentType] = useState(null)

  function handleClick( type ) {
    setContentType(type)
  }
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Metod lerning</h3>
          <ul>
          <WayToTeach 
            title={ways[0].title}
            description={ways[0].description}/>

          <WayToTeach {...ways[1]}/>
          <WayToTeach {...ways[2]}/>
          <WayToTeach {...ways[3]}/>

          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>

          <Button onClick={() => handleClick('way')}>Подход</Button>
          <Button onClick={() => handleClick('easy')}>Доступность</Button>
          <Button onClick={() => handleClick('program')}>Концентрация</Button>
          
          { contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Нажми на кнопку</p>
            )}          
        </section>
      </main>
      
    </div>
  )
}
