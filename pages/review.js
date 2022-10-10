import Head from "next/head";

const Review = ({ reviews }) => {
  console.log(reviews);
  return (
    <>
      <Head>
        <title>Fat Burgers | Main Page</title>
        <meta name="title" content="fat burgers" />
      </Head>
      <div>
        <h1>Client Reviews 2</h1>
        <div className="reviews">
          {!!reviews &&
            reviews.map((res) => {
              return (
                <div className="review" key={res.id}>
                  {res.id}
                  {`${res.body.slice(0, 90)}...`}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  return {
    props: {
      reviews: data.slice(0, 20),
    },
  };
}
export default Review;
