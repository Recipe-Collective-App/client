const PageNotFound = ({ error }) => {
  return (
    <>
      <div className="w-full flex flex-row items-center justify-evenly mx-auto px-10 py-28">
        <p className="w-2/3 uppercase text-center text-7xl font-semibold">404!</p>
        <div className="w-4/5 flex flex-col items-center justify-center text-red-500">
          <h1 className="text-2xl">Oh no! The big 404!</h1>
          <p>
            {error}
          </p>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
