import Head from "next/head";
import React, { useEffect, useState } from "react";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      setReviews(data);
    };
    getData();
  }, []);

  console.log(reviews);

  return (
    <>
      <Head>
        <title>Fat Burgers | Main Page</title>
        <meta name="title" content="fat burgers" />
      </Head>
      <div>
        <h1>Client Reviews</h1>
        <div className="reviews">
          {!!reviews.length &&
            reviews.slice(0, 20).map((res) => {
              return (
                <div key={res.id} className="review">
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

export default ReviewsPage;
