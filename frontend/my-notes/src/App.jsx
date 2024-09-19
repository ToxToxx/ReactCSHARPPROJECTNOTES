

import './App.css'
import CreateNoteForm from './components/CreateNoteForm';
import Filters from './components/Filters';
import Note from './components/Note';

function App() {
  return (
  <section className='p-8 flex flex-row justify-start items-start gap-12'>
    <div className='flex flex-col w-1/3 gap-10'>
      <CreateNoteForm />
      <Filters/>
      </div>

      <ul className='flex flex-col gap-5 w-1/2'>
        <li>
          <Note/>
        </li>
        <li>
          <Note/>
        </li>
        <li>
          <Note/>
        </li>
        <li>
          <Note/>
        </li>
      </ul>

  </section>)
}


export default App
