// import işlemi
import React from "react";
import ReactStars from "react-rating-stars-component";
// addComment'ten gelen bilgileri html sayfasında belirtilen özelliklerle gösteren fonksiyon
export default function Comment({ comments, vote }) {
  console.log("vote", vote);
  return (
    <div>
      {comments.length >= 1 ? (
        comments.map((data) => (
          <div key={data.text}>
            <p>{data.text}</p>
            <ReactStars
              value={vote}
              edit={false}
              count={5}
              size={30}
              classNames="Stars"
            ></ReactStars>
          </div>
        ))
      ) : (
        <h4>Henüz yorum yok.</h4>
      )}
    </div>
  );
}
