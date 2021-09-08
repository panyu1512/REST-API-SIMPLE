const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM articuloscientificos', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO articuloscientificos set ?',[req.body] ,(err, rows)=>{
            if(err) return res.send(err)

            res.send("Articulo insertado!")
        })
    })
})

routes.delete('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM  articuloscientificos where id = ?',[req.params.id] ,(err, rows)=>{
            if(err) return res.send(err)

            res.send("Articulo eliminado")
        })
    })
})

module.exports = routes