const pool = require('../../db');
const queries = require('./queries');

const getInsurance = (req, res) => {
    pool.query(queries.getInsurance, (error, results) =>{
        if(error){
            throw error;
        }

        res.status(200).json(results.rows);
    });
};

const getInsuranceById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getInsuranceById, [id], (error, results) => {
        if(error){
            throw error;
        }

        res.status(200).json(results.rows);
    });
};

const addInsurance = (req, res) => {
    const {name, active, created_at, updated_at} = req.body;

    pool.query(queries.addInsurance, [name, active, created_at, updated_at], (error, results) => {
        if(error){
            throw error;
        }

        res.status(201).send("Successfully created insurance data.");
    });
};

const deleteInsuranceById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getInsuranceById, [id], (error, results) => {
        const noInsuranceData = !results.rows.length;
        if(noInsuranceData){
            res.send("Insurance data doesn't exist in database.");
        }
        else{
            pool.query(queries.deleteInsuranceById, [id], (error, results) => {
                if(error){
                    throw error;
                }        
                res.status(200).send("Successfully delete insurance.");
            });
        }
    });
};

const updateInsurance = (req, res) => {
    const id = parseInt(req.params.id);
    const {name, active, updated_at} = req.body;    

    pool.query(queries.getInsuranceById, [id], (error, results) => {
        const noInsuranceData = !results.rows.length;
        if(noInsuranceData){
            res.send("Insurance data doesn't exist in database.");
        }
        else{
            pool.query(queries.updateInsurance, [name, active, updated_at, id], (error, results) => {
                if(error){
                    throw error;
                }
        
                res.status(200).send("Successfully update insurance data.");
            });
        }
    });
};

module.exports = {
    getInsurance,
    getInsuranceById,
    addInsurance,
    deleteInsuranceById,
    updateInsurance,
};