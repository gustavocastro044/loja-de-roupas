import { sql } from "./db.js";



export class DatabasePostgres{
  async list(search){
    let roupas 
    if(search){
      roupas = await sql`select * from roupas where titulo ilike ${'%' +search + '%'}`
    }else{
      roupas = await sql`select * from roupas`
    }
    return roupas
  }

  async create(roupa){
    const{titulo, descricao, preco} = roupa
    await sql`insert into roupas (titulo,descricao,preco) VALUES (${titulo}, ${descricao}, ${preco})`
  }

  async update(id, roupa){
    const {titulo, descricao, preco} = roupa

    await sql`update roupas set titulo = ${titulo}, descricao = ${descricao}, preco = ${preco} where id = ${id}`
  }

  async delete(id){
    await sql`delete from roupas where id = ${id}`
  }
}