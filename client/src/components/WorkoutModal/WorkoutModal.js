import React, {useState} from 'react';
import Modal from 'react-modal';
import FormInput from '../form-input/Form-Input';
import './WorkoutModal.scss';



const WorkoutModal = ({isOpen,onRequestClose,onSubmit,isEdit,workoutToEdit={}}) => {
    const [formValues,setFormValues] = useState({name : workoutToEdit.name, category : workoutToEdit.category, workoutWalkthrough : workoutToEdit.workoutWalkthrough, imgUrl : workoutToEdit.imgUrl});
    Modal.setAppElement(document.getElementById('root'));

    const submit = (e) => {
        e.preventDefault();
        onSubmit(formValues);
    }
    const handleChange = e => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    return(
        <Modal
        className='modal-container'
        style={{
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                
                
              },
            content: {
              position: 'absolute',
              top: '40px',
              left: '40px',
              right: '40px',
              bottom: '40px',
              border: '1px solid #ccc',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          }}
        onRequestClose={onRequestClose}
        isOpen={isOpen}
        >
            <form  onSubmit={submit}>
                <FormInput
                type='text'
                name='name'
                value={formValues.name}
                onChange={handleChange}
                label='name'
                required
                />
                <FormInput
                type='text'
                name='category'
                value={formValues.category}
                onChange={handleChange}
                label='category'
                required
                />
                <textarea
                
                name='workoutWalkthrough'
                value={formValues.workoutWalkthrough}
                onChange={handleChange}
                label='workoutWalkthrough'
                required
                />
                <FormInput
                type='text'
                name='imgUrl'
                value={formValues.imgUrl}
                onChange={handleChange}
                label='imgUrl'
                required
                />
                <button className='custom-button' type='submit'>{isEdit ? "Edit Workout" : "Add Workout"} </button>
        </form>
    </Modal>


  )
}

export default WorkoutModal;
