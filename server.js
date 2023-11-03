import { fastify } from 'fastify'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

const database = new DatabasePostgres()

server.post('/roupas', async (request, reply) =>{
  const {titulo, descricao, preco} = request.body

  await database.create({
    titulo,
    descricao,
    preco,
  })
  return reply.status(201).send()
})

server.get('/roupas', async(request) =>{
  const search = request.query.search

  const roupas = await database.list(search)
  
  return roupas
})

server.put('/roupas/:id', async (request, reply) =>{
  const roupaId = request.params.id
  const {titulo, descricao, preco} = request.body

  await database.update(roupaId, {
    titulo,
    descricao,
    preco
  })
  return reply.status(204).send()
})

server.delete('/roupas/:id', (request, reply) =>{
  const roupaId = request.params.id

  database.delete(roupaId)

  return reply.status(204).send()
})



server.listen({
  port: process.env.PORT ?? 3333,
})