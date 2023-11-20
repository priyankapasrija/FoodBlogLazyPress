import Comment from './Comment';

export default function Comments ({/* comments */}) {
    return ( 
  <div>
    <h2>Comments</h2>
    <Comment/>
  {/*  {comments.map((comment) => (
      <Comment key={comment.id} name={comment.name} content={comment.content} />
    ))}  */}
  </div>
  );
 }

