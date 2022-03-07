import http from 'http'
import App from './app'

const PORT = 4000

const server = http.createServer(App)

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
