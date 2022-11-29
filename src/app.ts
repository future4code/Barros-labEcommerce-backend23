import express, {Express} from "express"
import cors from 'cors'

const PORT = 3003
const app: Express = express()

app.use(express.json())

app.use(cors())

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING IN PORT ${PORT}`);
});

export default app