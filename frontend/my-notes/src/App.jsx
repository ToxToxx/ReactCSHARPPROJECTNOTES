import { Button, Input, Textarea } from '@chakra-ui/react';
import './App.css'

function App() {
  return (<section>
    <div>
      <form>
        <h3>Создать заметку</h3>
        <Input placeholder='Название'/>
        <Textarea placeholder='Описание'/>
        <Button>Создать</Button>
      </form>
    </div>
     </section>)
}
export default App
