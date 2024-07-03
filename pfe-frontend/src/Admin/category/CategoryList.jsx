// CategoryList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, deleteCategory } from './sliceCategories';
import './category.css'; // 
import { Link, Navigate, useNavigate } from 'react-router-dom';

function CategoryList() {
    const category = useSelector(state => state.category);
    const dispatch = useDispatch();
    const nav = useNavigate();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleDelete = (categoryId) => {
        dispatch(deleteCategory(categoryId))
    };

    return (
        <div className="category-list-container">
            <h2 className="category-list-title">List of Categories</h2>
            {category.loading && <div>Loading...</div>}
            {category.loading && category.error ? (
                <div className="category-error">Error: {category.error}</div>
            ) : null}
            {!category.loading && category.categories.length ? (
                <ul className="category-list">
                    {category.categories.map((catg) => (
                        <div key={catg.id}>
                            <li className="category-name">Name: {catg.nom}</li>
                            <li className="category-description">Description: {catg.description}</li>
                            <Link to={`/admin/edit_categorie/${catg.id}`}>
                            <button>Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(catg.id)}>Delete</button>
                        </div>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}

export default CategoryList;
