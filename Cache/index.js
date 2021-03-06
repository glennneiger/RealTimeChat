import express from 'express'
import dotenv from 'dotenv'
import http from 'http';
import SocketIO from 'socket.io';
// import request from 'request'
import cors from 'cors'
import { getAsync, setAsync, fetchAll, delAsync } from './redis-client'
import { createWriteStream } from 'fs';
import { log } from './libs'

dotenv.config();
export const app = express();

app.use(cors())
app.use(express.static('public'))

export const server = http.Server(app);
let io = new SocketIO(server);

app.get('/', (req, res) => {
    res.render(__dirname + '/public/index.html')
})

app.get('/store/:ex/:key', async (req, res) => {
    const { key, ex } = req.params;
    const { value } = req.query;
    res
        .status(200)
        .contentType('application/json')
        .send(await setAsync(`concurrent:${key}`, value, 'EX', ex))
})

app.get('/name/:id', async (req, res) => {
    res
        .status(200)
        .contentType('application/json')
        .send(await getAsync(`concurrent:${req.params.id}`))
})

app.get('/delete/:id', async (req, res) => {
    try {
        await delAsync(`concurrent:${req.params.id}`)
        res.status(200) .contentType('application/json').send({ data: "successful" })   
    }
    catch (err) {
        res.send(err.message)
    }
})

app.get('/all', async (req, res) => {
    res
        .status(200)
        .send(await fetchAll())
})

// app.post('/img/:id', async (req, res) => {
//     const outfile = createWriteStream(`./public/${req.params.id}.png`)
//     let download = await new Promise(function (resolve, reject) {
//         request('http://localhost:3000/img/logo512.png')
//             .pipe(outfile)
//             .on('finish', () => resolve(res))
//             .on('error', () => reject(res))

//         res.send({ data: "success" })
//     })
// })

app.get('/health', async(req,res)=>{
    res.send("UP")
})

let UserStore = {}
export var UserReducer = (state = { ...UserStore }, action) => {
    switch (action.type) {
        case "SET_USER":
            const {id, username} = action.payload;
           return { ...state, [id]:username }
        case "DEL_USER":
            let tempStore = { ...state };
            Object.entries(state).map((key, index, acc) => {
                if (key[0] === action.payload.id) {
                    delete tempStore[key[0]]
                }
            })
            return tempStore;
        case "ALL_USERS":
            return { ...state }
        default:
            return state
    }
}

const getUser = (id, UserStore) => {
    for (let user of Object.entries(UserStore)) {
        if (user[0] == id) {
            console.log(user[1])
            return user[1]
        }
    }
}

io.on('connection', async (socket) => {
    log("Connection ", socket.id)
    socket.broadcast.emit('SET_USER', { id: socket.id });

    log("Connection ", socket.id)
    io.emit("ASSOCIATE_USER", { id: socket.id })


    socket.on("addUser", ({ to, from, payload }) => {
        log('addUser\n\n' + '\n\n' + to + " " + from + " " + payload)

        let email = from;
        if (email !== "" && email !== undefined) {
            console.log(socket.id + "Set user " + email)
            UserReducer(UserStore, { type: "SET_USER", payload: { id: socket.id, email: from } })
            io.emit("PRIVATE_MESSAGE", { to: to, from: email, payload: payload })

        }
    })

    socket.on('privateMessage', (message) => {
        console.log('socket ' + socket.id + "private msg " + JSON.stringify(message))
        io.to(socket.id).emit("PRIVATE_MESSAGE", { to: socket.id, from: message.from, payload: message.payload })
    })

    socket.on('disconnect', () => {
        // socket.emit("DEL_USER",{id:socket.id})
        console.log(socket.id + "delete user " + getUser(socket.id, UserStore))
        socket.emit("DEL_USER", { id: socket.id })

    })


})


if (process.env.NODE_ENV !== 'test') {
    server.listen(process.env.PORT, () => {
        log(`We are up listening on ${process.env.PORT}`)
    })
}


