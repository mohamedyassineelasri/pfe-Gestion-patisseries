// AddCategory.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from './sliceCategories';
import './category.css'; // Import your CSS file

function AddCategory() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ nom: '', description: '' });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCategory(formData));
        setFormData({ nom: '', description: '' });
    };

    return (
        <div className="add-category-container">
            <h2>Add Category</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <button type="submit">Add Category</button>
            </form>
        </div>
    );
}

export default AddCategory;
