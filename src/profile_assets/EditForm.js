import React, { useState, useEffect } from 'react';
import { useForm } from './useForm';
import './profile.css';

const EditForm = (props) => {
    const [save, setSave] = useState(false)
    const handleSave = () => setSave(!save)

  const [formValues, handleInputChange] = useForm({
    name: props.name,
    phone: props.phone,
    pfp: props.profilePicture,
    description: props.description,
  });

  const { name, phone, description, pfp  } = formValues;

  useEffect(() => {

  }, [save]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formValues);
    console.log(save)
  };

  return (
    <div className='edit-container'>
      <form className='edit-form' onSubmit={handleSubmit}>
        <h2>Edit Profile</h2>
        <hr />

        <div className='form-group'>
          <input
            type='text'
            name='name'
            className='form-control'
            placeholder='Tu nombre'
            autoComplete='off'
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            name='phone'
            className='form-control'
            placeholder='0-800-123456'
            autoComplete='off'
            value={phone}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='pfp'
            className='form-control'
            placeholder='link/image.png'
            autoComplete='off'
            value={pfp}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <textarea
            type='text'
            name='description'
            className='form-control'
            placeholder='About me'
            value={description}
            onChange={handleInputChange}
          />
        </div>
        
        <button type='submit' className='btn btn-primary ' onClick= {handleSave}>
          Save
        </button>
      </form>
    </div>
    
  );
};
export default EditForm