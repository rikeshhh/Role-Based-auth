import React, { useState } from 'react'

export const AdminFeature = ({ role }) => {
    const [isEditing, setEditing] = useState(false);
    const [text, setText] = useState('Default Text');
    const [editedText, setEditedText] = useState('');
  
    const handleEditClick = () => {
      setEditing(true);
      setEditedText(text); // Set the editedText to the current text
    };
  
    const handleSaveClick = () => {
      setEditing(false);
      // Save the edited text or perform any necessary action
      // Here, we're updating the text state with the edited content
      setText(editedText); // Update the text state with the edited content
    };
  
    const handleChange = (e) => {
      setEditedText(e.target.value); // Update the editedText state during editing
    };
  
    return (
      <div>
        <h1>Admin Feature</h1>
        {role === 'Visitor' ? (
          <div>
            <span>{text}</span>
          </div>
        ) : (
          <div>
            {isEditing ? (
              <div>
                <input type="text" value={editedText} onChange={handleChange} />
                <button onClick={handleSaveClick}>Save</button>
              </div>
            ) : (
              <div>
                <span>{text}</span>
                <button onClick={handleEditClick}>Edit</button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };
  

