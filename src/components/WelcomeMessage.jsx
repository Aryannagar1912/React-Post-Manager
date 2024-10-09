const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center>
      <h1 className="welcome-message">There are no posts</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostsClick}
      >
        Get Post from server
      </button>
    </center>
  );
};

export default WelcomeMessage;
