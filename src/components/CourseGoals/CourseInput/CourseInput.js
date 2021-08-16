import { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length) setIsValid(true);
    setEnteredValue(event.target.value);
  }

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length) {
      setIsValid(true);
      props.onAddGoal(enteredValue);
    }
    else {
      setIsValid(false);
      return;
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: isValid ? 'black' : 'red' }}>Course Goal</label>
        <input type="text" style={{ borderColor: isValid ? '#ccc' : 'red', backgroundColor: isValid ? 'transparent' : 'salmon' }} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
