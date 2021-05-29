import React, {Fragment, useEffect ,useState} from 'react';

import CreateInsurance from './CreateInsurance';
import UpdateInsurance from './UpdateInsurance';


const ViewInsurance = () => {

    const [insuranceList, setInsurance] = useState([]);

    const onDeleteClick = async (id) => {
        try{
            const response = await fetch('http://localhost:5000/insurance/'+id,{
                method: "DELETE"
            });

            setInsurance(insuranceList.filter(insurance => insurance.id !== id));
        }
        catch(err){
            console.error(err.message);
        }
    };

    const getInsuranceList = async () => {
        try{
            const response = await fetch('http://localhost:5000/insurance');
            const jsonData = await response.json()

            setInsurance(jsonData);
        }
        catch(err){
            console.error(err.message);
        }
    }

    useEffect(() => {
        getInsuranceList();
    }, []);

    return (
        <Fragment>
            <CreateInsurance />
            <table className="table mt-3">
                <thead className="text-center">
                    <tr>
                    <th>Name</th>
                    <th>Active</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                    <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {insuranceList.map(insurance =>(
                        <tr key={insurance.id}>
                            <td>{insurance.name}</td>
                            <td>{insurance.active}</td>
                            <td>{new Date(insurance.created_at).toLocaleString()}</td>
                            <td>{new Date(insurance.updated_at).toLocaleString()}</td>
                            <td><UpdateInsurance insuranceData = {insurance} /></td>
                            <td><button className="btn btn-danger" onClick={() => onDeleteClick(insurance.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
                </table>
        </Fragment>
    );
};

export default ViewInsurance;