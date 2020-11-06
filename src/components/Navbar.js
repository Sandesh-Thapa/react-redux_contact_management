import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="bg-dark text-white p-2">
            <div className="container d-flex justify-content-between align-items-center">
                <h2 className="text-center">Contact Management System</h2>
                <Link to="/contact/add">
                    <i className="fas fa-plus" /> Add Contact
                </Link>
            </div>
        </div>
    )
}
