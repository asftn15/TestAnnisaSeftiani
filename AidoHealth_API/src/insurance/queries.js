const getInsurance = "SELECT * FROM tb_insurance ORDER BY id ASC";
const getInsuranceById = "SELECT * FROM tb_insurance WHERE id = $1";
const addInsurance = "INSERT INTO tb_insurance (name, active, created_at, updated_at) VALUES ($1, $2, $3, $4)";
const deleteInsuranceById = "DELETE FROM tb_insurance WHERE id = $1";
const updateInsurance = "UPDATE tb_insurance SET name = $1, active = $2, updated_at = $3 WHERE id = $4";
const updateStatusCode = "UPDATE tb_insurance SET active = $1 WHERE id = $2";

module.exports ={
    getInsurance,
    getInsuranceById,
    addInsurance,
    deleteInsuranceById,
    updateInsurance,
    updateStatusCode,
};