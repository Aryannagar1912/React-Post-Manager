import { useContext, useRef, useState } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  //for textArea handle inputs count
  const [body, setBody] = useState("");
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  //form daata
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const viewsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const views = viewsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = " ";
    postTitleElement.current.value = " ";
    // postBodyElement.current.value = " ";
    viewsElement.current.value = " ";
    tagsElement.current.value = " ";

    addPost(userId, postTitle, postBody, views, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id:
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Who are you?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={postTitleElement}
          placeholder="Crispy Title for Your Post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body">Body of Post: </label>
        <textarea
          className="form-control"
          name="Body"
          ref={postBodyElement}
          rows={4}
          placeholder="Enter About Your Post"
          value={body}
          minLength={10}
          maxLength={200}
          onChange={handleBodyChange}
        ></textarea>
        <p>{body.trim().length}/200 characters</p>
      </div>

      <div className="mb-3">
        <label htmlFor="views" className="form-label">
          Number of views
        </label>
        <input
          type="number"
          className="form-control"
          id="views"
          ref={viewsElement}
          placeholder="How many people reacted on this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Please enter tags using space for multiple hashtag"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
