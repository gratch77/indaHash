import React, { useState } from 'react';

const AddCardPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        collection: '',
        receivedDate: '',
        imageUrl: '',
        forSale: false,
        forTrade: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // try {
        //     await apiClient.post('/cards', formData);
        //     alert('Card added successfully!');
        // } catch (error) {
        //     console.error('Error adding card:', error);
        // }
    };

    return (
        <div className="add-card-page">
            <h1>Add New Card</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="collection">Collection</label>
                    <input type="text" id="collection" name="collection" value={formData.collection} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="receivedDate">Received Date</label>
                    <input type="date" id="receivedDate" name="receivedDate" value={formData.receivedDate} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="url" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="forSale" checked={formData.forSale} onChange={handleChange} />
                        For Sale
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="forTrade" checked={formData.forTrade} onChange={handleChange} />
                        For Trade
                    </label>
                </div>
                <button type="submit">Add Card</button>
            </form>
        </div>
    );
};

export default AddCardPage;
