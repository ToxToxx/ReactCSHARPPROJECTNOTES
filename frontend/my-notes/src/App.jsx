import { Button, Input, Textarea } from '@chakra-ui/react';
import './App.css'

function App() {
  return (
  <section className='p-8 flex flex-row justify-start items-start gap-12'>
    <div className='flex flex-col w-1/3 gap-10'>
      <form className='w-full flex flex-col gap-3'>
        <h3 className='font-bold text-xl'>Создать заметку</h3>
        <Input placeholder='Название'/>
        <Textarea placeholder='Описание'/>
        <Button colorScheme='teal'>Создать</Button>
      </form>
    </div>
  </section>)
}
export default App
