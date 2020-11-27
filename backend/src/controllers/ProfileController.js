const {connection, db} = require('../database/connection')
const Contract = require('../models/contract')
const {Op} = require('sequelize')

module.exports = {
    async index (req, res) {
        Contract.findAll({
            limit: 10,
            order: [['dataPub', 'ASC']]
        }).then(contracts => res.status(200).json(
            contracts
          ))
        .catch(err => res.status(400).json(err))
    },
    async search (req,res) {
        let {obj} = req.body
        
        if(!obj){
            obj = ''
        }else{
            obj = obj
        }
        
        Contract.findAll({
            where: {
                obj: { [Op.like]: '%' + obj + '%' }
            }
        }).then(contracts => res.status(200).json(
            contracts
          ))
        .catch(err => res.status(400).json(err))
    }
}


