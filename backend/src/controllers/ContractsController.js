const {connection, db} = require('../database/connection')
const Contract = require('../models/contract')
const {Op, or} = require('sequelize')
const Contracts = require('../models/contract')

module.exports = {
    async index (req,res){
        let valor = await db.query("SELECT SUM(`pContr`) AS `valor_gasto_hospitais` FROM `informacao` AS `informacao` WHERE `informacao`.`adjudicante` LIKE '%Hospital%'")
        
        return res.json(valor[0])
    },
    async search_max (req,res){
        let contract_max = await db.query("SELECT * FROM `informacao` AS `informacao` WHERE `informacao`.`adjudicante` LIKE '%Hospital%' ORDER BY `informacao`.`pContr`  DESC LIMIT 1")
        
        return res.json(contract_max[0])
    },
    async search_max_2008 (req,res){
        let contract_max_2008 = await db.query("SELECT * FROM `informacao` WHERE `dataPub` BETWEEN '2008-01-01' AND '2008-12-31' AND `adjudicante` LIKE '%Hospital%' ORDER BY `pContr` DESC LIMIT 1")

        return res.json(contract_max_2008[0])
    },
    async search_sum_2008 (req,res){
        let valor_2008 = await db.query("SELECT SUM(`pContr`)  FROM `informacao` WHERE `dataPub` BETWEEN '2008-01-01' AND '2008-12-31' AND `adjudicante` LIKE '%Hospital%'")
    
        return res.json(valor_2008[0])
    },
    async search_max_2009 (req,res){
        let contract_max_2009 = await db.query("SELECT * FROM `informacao` WHERE `dataPub` BETWEEN '2009-01-01' AND '2009-12-31' AND `adjudicante` LIKE '%Hospital%' ORDER BY `pContr` DESC LIMIT 1")

        return res.json(contract_max_2009[0])
    },
    async search_sum_2009 (req,res){
        let valor_2009 = await db.query("SELECT SUM(`pContr`)  FROM `informacao` WHERE `dataPub` BETWEEN '2009-01-01' AND '2009-12-31' AND `adjudicante` LIKE '%Hospital%'")
    
        return res.json(valor_2009[0])
    },
    async search_max_2010 (req,res){
        let contract_max_2010 = await db.query("SELECT * FROM `informacao` WHERE `dataPub` BETWEEN '2010-01-01' AND '2010-12-31' AND `adjudicante` LIKE '%Hospital%' ORDER BY `pContr` DESC LIMIT 1")

        return res.json(contract_max_2010[0])
    },
    async search_sum_2010 (req,res){
        let valor_2010 = await db.query("SELECT SUM(`pContr`)  FROM `informacao` WHERE `dataPub` BETWEEN '2010-01-01' AND '2010-12-31' AND `adjudicante` LIKE '%Hospital%'")
    
        return res.json(valor_2010[0])
    },
    async search_max_2011 (req,res){
        let contract_max_2011 = await db.query("SELECT * FROM `informacao` WHERE `dataPub` BETWEEN '2011-01-01' AND '2011-12-31' AND `adjudicante` LIKE '%Hospital%' ORDER BY `pContr` DESC LIMIT 1")

        return res.json(contract_max_2011[0])
    },
    async search_sum_2011 (req,res){
        let valor_2011 = await db.query("SELECT SUM(`pContr`)  FROM `informacao` WHERE `dataPub` BETWEEN '2011-01-01' AND '2011-12-31' AND `adjudicante` LIKE '%Hospital%'")
    
        return res.json(valor_2011[0])
    },
    async search_max_companies (req,res){
        let companies_max = await db.query("SELECT COUNT(`adjudicatario`) AS count, group_concat(DISTINCT `adjudicatario`) FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' GROUP BY `adjudicatario` ORDER BY count DESC LIMIT 25")
    
        return res.json(companies_max[0])
    },
    async search_max_2008_companies (req,res){
        let companies_max_2008 = await db.query("SELECT COUNT(`adjudicatario`) AS count, group_concat(DISTINCT `adjudicatario`) FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2008-01-01' AND '2008-12-31' GROUP BY `adjudicatario` ORDER BY count DESC")
    
        return res.json(companies_max_2008[0])
    },
    async search_max_2009_companies (req,res){
        let companies_max_2009 = await db.query("SELECT COUNT(`adjudicatario`) AS count, group_concat(DISTINCT `adjudicatario`) FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2009-01-01' AND '2009-12-31' GROUP BY `adjudicatario` ORDER BY count DESC")
    
        return res.json(companies_max_2009[0])
    },
    async search_max_2010_companies (req,res){
        let companies_max_2010 = await db.query("SELECT COUNT(`adjudicatario`) AS count, group_concat(DISTINCT `adjudicatario`) FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2010-01-01' AND '2010-12-31' GROUP BY `adjudicatario` ORDER BY count DESC")
    
        return res.json(companies_max_2010[0])
    },
    async search_max_2011_companies (req,res){
        let companies_max_2011 = await db.query("SELECT COUNT(`adjudicatario`) AS count, group_concat(DISTINCT `adjudicatario`) FROM `informacao` WHERE `adjudicante` LIKE '%Hospital%' AND `dataPub` BETWEEN '2011-01-01' AND '2011-12-31' GROUP BY `adjudicatario` ORDER BY count DESC")
    
        return res.json(companies_max_2011[0])
    },

}