import React, {Fragment, useState} from 'react';

const UpdateInsurance = ({insuranceData}) => {

    const [name, setName] = useState(insuranceData.name);
    const [active, setActive] = useState(insuranceData.active);

    var activeVal = active === false ? 0 : 1;
    var currDate = new Date().toLocaleString();

    const onBtnUpdateClick = async () => {
        setName(insuranceData.name); 
        setActive(insuranceData.active);
    };

    const onUpdateClick = async e => {
        e.preventDefault();
        try{
            const body = {name, active: activeVal, updated_at: currDate};
            const response = await fetch('http://localhost:5000/insurance/'+insuranceData.id, {
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json",
                    "access-control-allow-origin" : "*"
                },
                body: JSON.stringify(body)
            });
            window.location = "/";
        }
        catch(err){
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-primary" 
            data-toggle="modal" data-target={'#id'+insuranceData.id}
            onClick={() => onBtnUpdateClick()}>
                Update
            </button>
            <div className="modal" id={'id'+insuranceData.id}>
                <div className="modal-dialog">
                    <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Update Insurance</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body">
                    <form>
                        Name : 
                        <input type="text" name="name" 
                            className="form-control mt-2 mb-3" value={name} 
                            onChange={e => setName(e.target.value)}/>
                        Active : <input type="checkbox" name="active" 
                                    className="ml-3 mb-3" checked={active}
                                    onChange={() => setActive(!active)} /> 
                    </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" 
                        data-dismiss="modal" onClick={e => onUpdateClick(e)}>
                            Update
                        </button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                    </div>
                </div>
                </div>

        </Fragment>
    );
};

export default UpdateInsurance;