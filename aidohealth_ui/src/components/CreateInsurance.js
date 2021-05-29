import React, {Fragment, useState} from 'react';

const CreateInsurance = () => {
    const [name, setName] = useState("");
    const [active, setActive] = useState(false);

    var activeVal = active == true ? 1 : 0;
    var currDate = new Date().toLocaleString();

    const onBtnAddClick = async => {
        setName("");
        setActive(false);
    }

    const onSubmitClick = async e => {
        e.preventDefault();
        try{
            const body = {name, active: activeVal, created_at: currDate, updated_at: null};
            const response = await fetch("http://localhost:5000/insurance", {
                method: "POST",
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
    };

    return (
        <Fragment>
            <button type="button" className="btn btn-primary mt-5"
            data-toggle="modal" data-target="#createInsurance"
            onClick={() => onBtnAddClick()}>
                Create Insurance
            </button>
            <div className="modal" id="createInsurance">
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
                                    className="ml-3 mb-3" defaultChecked={active} 
                                    onChange={() => setActive(!active)}/>
                    </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" 
                        data-dismiss="modal" onClick={e => onSubmitClick(e)}>
                            Submit
                        </button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                    </div>
                </div>
                </div>

        </Fragment>
    );
};

export default CreateInsurance;