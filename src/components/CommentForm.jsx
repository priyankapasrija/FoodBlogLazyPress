import { useState } from 'react';
import {Button} from "@nextui-org/react";

const CommentForm = ({ onCommentSubmit }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit({ name, content });
    setName('');
    setContent('');
  };

  return (
    <div>
      <h2>Post a Comment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Comment:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default CommentForm;
