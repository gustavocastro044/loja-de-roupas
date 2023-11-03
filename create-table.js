import{sql} from './db.js'

sql`
CREATE TABLE roupas (
  id serial PRIMARY KEY,
  titulo varchar(255) NOT NULL,
  descricao text,
  preco numeric(10, 2) NOT NULL
  );
`.then(() =>{
  console.log('Tabela criada')
})