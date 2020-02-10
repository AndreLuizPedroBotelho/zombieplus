import { Pool } from 'pg';

const connectionString = 'postgresql://postgres:Postgres2019!@localhost:15432/zombieplus'

const pool = new Pool({ connectionString })


export default {
  removeByTitle: (title) => {
    return new Promise((resolve, reject) => {
      pool
        .query(`DELETE FROM public.movies where title = '${title}'`)
        .then(res => resolve(res))
        .catch(e => reject(e.stack))
    })

  }
}