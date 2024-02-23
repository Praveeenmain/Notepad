import styled from 'styled-components'

export const NotesContainer = styled.div`
  height: 100vh;
  background-size: cover;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NoteHeading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 25px;
`

export const Heading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 15px;
`

export const EmptyCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
`

export const Paragraph = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
`

export const Image = styled.img`
  height: 80px;
  width: 75px;
`

export const NoteMakingContainer = styled.form`
  height: 200px;
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0px 4px 6px #334155;

  @media (max-width: 768px) {
    height: 200px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0px 4px 6px #334155;
  }

  @media (max-width: 480px) {
    height: 200px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0px 4px 6px #334155;
  }
`

export const Input = styled.input`
  color: #1e293b;
  border: none;
  outline: none;
  margin-bottom: 30px;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 30px;
    width: 100%;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
    width: 100%;
  }
`

export const AddButton = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  height: 40px;
  width: 90px;
  border-radius: 8px;
`

export const NoteList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`
