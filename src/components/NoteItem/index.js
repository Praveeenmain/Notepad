import React from 'react'
import {NoteItemContainer} from './styledComponents'
const NoteItem = ({title, note}) => {
  return (
    <NoteItemContainer>
      <h3>{title}</h3>
      <p>{note}</p>
    </NoteItemContainer>
  )
}

export default NoteItem
