// import işlemi
import React from "react";
import ReactStars from "react-rating-stars-component";
// butona tıklandığı zaman yorumu, yıldız puanını yakalayıp ekranda göstericek fonksiyon
export default function AddComment(props) {
  return (
    <div>
      <textarea className="Comment" onChange={props.textChanged}></textarea>
      <ReactStars
        count={5}
        size={30}
        classNames="Stars"
        onChange={props.ratingChanged}
      ></ReactStars>
      <button className="Button" onClick={() => props.AddComment()}>
        Yorum Yap
      </button>
    </div>
  );
}
