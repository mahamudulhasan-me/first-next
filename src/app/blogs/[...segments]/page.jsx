const SingleBlog = ({ params }) => {
  const [year, id] = params.segments;
  return (
    <div>
      Single blog section
      <p>{`This blog written in ${year} and id no: ${id}`}</p>
    </div>
  );
};

export default SingleBlog;
