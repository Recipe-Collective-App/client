const PageNotFound = ({ error }) => {
  return (
    <div className="error-page">
      <h1>Oh no!</h1>
      <p className="text-red-500">
        There seems to be a problem with the page you want to view.
      </p>
      <p className="text-red-500">
        Please contact a member of our team quoting: "{error}".
      </p>
    </div>
  );
};

export default PageNotFound;
