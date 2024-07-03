import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCategory } from './sliceCategories';
import './category.css';
import { useParams } from 'react-router-dom';

function EditCategory() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const category = useSelector(state => state.category.categories.find(cat => cat.id === parseInt(id)));
    const [formData, setFormData] = useState({ id: '', nom: '', description: '' });

    useEffect(() => {
        if (category) {
            setFormData({ id: category.id, nom: category.nom, description: category.description });
        }
    }, [category]);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCategory(formData));
    };

    return (
        <div className="edit-category-container">
            <h2>Edit Category</h2>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={formData.id || ''} />
                <label>
                    Nom:
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
                <button type="submit">Update Category</button>
            </form>
        </div>
    );
}

export default EditCategory;
