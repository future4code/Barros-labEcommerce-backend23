import express, {Express} from "express"
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const PORT = 3003
const app: Express = express()

app.use(express.json())

app.use(cors())

app.listen(process.env.PORT || PORT, () => {
    console.log(`SERVER IS RUNNING IN PORT ${PORT}`);
});

export default app 