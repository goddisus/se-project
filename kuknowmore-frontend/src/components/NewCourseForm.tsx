import React, {useState} from 'react';

type NewCourseFromProps = {
};

const NewCourseFrom = (props: NewCourseFromProps) => {
    const [newCourseNumber, setNewCourseNumber] = useState<string>('');
    const [newCourseTitle, setNewCourseTitle] = useState<string>('');
    
    const handleNewCourseNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCourseNumber(e.target.value);
    };
      
    const handleSave = () => {
        alert(`${newCourseNumber} - ${newCourseTitle}`)
    };
    
    return (
        <div>
            Number: <input value={newCourseNumber} onChange={handleNewCourseNumberChange}/><br />
            Title: <input value={newCourseTitle} onChange={(e) => {setNewCourseTitle(e.target.value);}}/> <br />
            <button onClick={handleSave}>Save</button>
        </div>
    )
};

export default NewCourseFrom;