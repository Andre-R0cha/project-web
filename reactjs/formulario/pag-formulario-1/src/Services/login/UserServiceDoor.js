import React, { useState, useEffect } from "react";
import axios from "axios";

const url = process.env.API_BANCO_PORTAS;

function PortAcesos() {

    const [portacesos, setPortAcesos] = useState([]);
    const [formValues, setFormValues] = useState({});
    const port = async () => {
        const response = await axios.get(url).catch(err => console.log(err));

        if (response) {
            const portacesos = response.data;
            console.log("Usuario: ", portacesos);
            setPortAcesos(portacesos);
        }
    };

    useEffect(() => {
        port();
    }, []);

    const handleInputChange = (e) => {
        try {


            const { name, value, type, checked } = e.target;
            const isCheckbox = type === 'checkbox';

            const data = formValues[name] || {};
            if (isCheckbox) {
                data[value] = checked;
            }
            const newValue = isCheckbox ? data : value;

            setFormValues({ ...formValues, [name]: newValue });
        } catch (error) {
            console.log(error)
        }
    };


    return <>
        {PortAcesos.map(item => {
            return (
                <div className='checks'>
                    <label className='container'> {item.local}
                        <input
                            type="checkbox"
                            name={item.local}
                            value={item.id}
                            onChange={handleInputChange}
                            checked={formValues.mestre && formValues.mestre.checked}
                        />
                        <span className="checkmark"></span>

                    </label>
                </div>
            )
        })}
    </>

}

export default PortAcesos;