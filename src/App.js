import "./App.css";
import React, { Component } from "react";
import AddComment from "./components/AddComment";
import Comment from "./components/Comment";

class App extends Component {
  state = {
    comments: [],
    commentValue: "",
    vote: 0,
  };
  // input içinde değişikliği yakalayan fonksiyon
  textChanged = (e) => {
    this.setState({ commentValue: e.target.value });
  };
// validation kontrolü yapan ve  validation'lar sağlanıyorsa state içerisinde commetns array'inde olan veriyi yeni bir array'e pushlayan fonksiyon
  AddComment = () => {
    if (this.state.commentValue.length === 0) {
      alert("Yorum boş olamaz !");
    } else if (this.state.commentValue.length < 3) {
      alert("Yorumunuz çok kısa !");
    } else if (this.state.vote === 0) {
      alert("Yorum yapmak için yıldız puanı vermeniz gerekmektedir !");
    } else {
      const newState = this.state;
      newState.comments.push({
        text: this.state.commentValue,
        vote: this.state.vote,
      });
      this.setState({
        ...newState,
      });
    }
  };
// yıldız oyunu yakalayan fonksiyon
  ratingChanged = (newRating) => {
    const newState = this.state;
    newState.vote = newRating;
    this.setState({
      ...newState,
    });
    console.log(this.state);
  };

  render() {
    return (
      // componentler çağrılıyor
      <div className="App">
        <h2>Yorumlar</h2>
        <Comment comments={this.state.comments} vote={this.state.vote} />
        <h2>Yorum Ekle</h2>
        <AddComment
          AddComment={this.AddComment}
          ratingChanged={this.ratingChanged}
          textChanged={this.textChanged}
        />
      </div>
    );
  }
}
// export işlemi
export default App;
