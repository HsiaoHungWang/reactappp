import React, { useState, useEffect } from 'react'

function Customer() {
    const [customers, setCustomers] = useState([])
    const getCustomers = async () => {
        //const response = await fetch('http://localhost:3001/customers');      
        const response = await fetch(`${process.env.REACT_APP_DEV_URL}/customers`);
        const datas = await response.json();
        setCustomers(datas);
    }
    useEffect(() => {
        getCustomers();
    }, [])

    return (
        <>
            <h2>Customer Page</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>CustomerID</th>
                        <th>CompanyName</th>
                        <th>ContactName</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map((customer, idx) => {
                            const { CustomerID, CompanyName, ContactName, Phone } = customer;
                            return (<tr key={idx}>
                                <td>{CustomerID}</td>
                                <td>{CompanyName}</td>
                                <td>{ContactName}</td>
                                <td>{Phone}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Customer