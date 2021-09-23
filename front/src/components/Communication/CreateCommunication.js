import React, {useState} from 'react';

function CreateCommunication(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');
  const [check, setCheck] = useState(0);

  const onSubmit = (e)=>{
    console.log(title);
  };
  console.log(check);

  return (
        <form>

            {/* <div className="form-group"> */}
            {/*    <label htmlFor="inputsm">제목: </label> */}
            {/*    <input className="form-control input-sm" value={title} type="title" onChange={e => { setTitle(e.target.value); }}/> */}
            {/* </div> */}
            <div className="form-group">
                <label htmlFor="comment">내용: </label>
                <textarea className="form-control" rows="5" value={content} onChange={e => { setContent(e.target.value); }}/>
            </div>
            <button type="button" className="btn btn-primary" onClick={onSubmit}>등록하기</button>

        </form>
  );
}

export default CreateCommunication;
