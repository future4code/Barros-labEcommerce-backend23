import app from './app'
import createCharacter from './endPoints/createCharacter'
import deleteCharacter from './endPoints/deleteCharacter'
import getAllCharacters from './endPoints/getAllCharacters'

app.get('/character', getAllCharacters)
app.put('/character', createCharacter)
app.delete('/character/:id', deleteCharacter )