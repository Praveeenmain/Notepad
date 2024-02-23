import {useState} from 'react'
import {
  NotesContainer,
  NoteHeading,
  NoteMakingContainer,
  Input,
  AddButton,
  NoteList,
  Paragraph,
  Heading,
  EmptyCard,
  Image,
} from './styledComponents'
import NoteItem from '../NoteItem' // Assuming NoteItem is exported as default from "../NoteItem"

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])
  const [empty, setEmpty] = useState(true)
  const onchangeTitle = event => {
    setTitle(event.target.value)
  }

  const onchangeNote = event => {
    setNote(event.target.value)
  }

  const onSubmitform = event => {
    event.preventDefault()
    const newNote = {title: title, note: note}
    console.log(newNote)

    setNotesList([...notesList, newNote])
    setEmpty(false)
    setTitle('')
    setNote('')
  }

  return (
    <NotesContainer>
      <NoteHeading>Notes</NoteHeading>
      <NoteMakingContainer onSubmit={onSubmitform}>
        <Input value={title} placeholder="Title" onChange={onchangeTitle} />
        <textarea
          value={note}
          onChange={onchangeNote}
          placeholder="Take a Note..."
        />
        <AddButton type="submit"> Add</AddButton>
      </NoteMakingContainer>

      {empty ? (
        <EmptyCard>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <Heading>No Notes Yet</Heading>
          <Paragraph> Notes you add will appear here</Paragraph>
        </EmptyCard>
      ) : (
        <NoteList>
          {notesList.map((item, index) => (
            <NoteItem key={index} title={item.title} note={item.note} />
          ))}
        </NoteList>
      )}
    </NotesContainer>
  )
}

export default Notes
