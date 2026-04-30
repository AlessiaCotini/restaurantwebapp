import { Component } from "react";

const link = "https://striveschool-api.herokuapp.com/api/comments/";

class AddComment extends Component {
  state = {
    adding: {
      comment: "",
      rate: "1",
    },
  };

  getNewComment = (e) => {
    e.preventDefault();

    const payload = {
      comment: this.state.adding.comment,
      rate: this.state.adding.rate,
      elementId: this.props.asin,
    };

    fetch(link, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzM2UzYWYwNDIwZDAwMTUxNTVhNjciLCJpYXQiOjE3Nzc1NDg4NTgsImV4cCI6MTc3ODc1ODQ1OH0.62LnJWSbfVbpl0zzC3UgMPybFX4Rxqxkv4X8DdQI9II",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          alert("Recensione inviata!");
          this.setState({
            adding: { comment: "", rate: "1" },
          });
        } else {
          throw new Error("Dati non validi");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.getNewComment} className="mt-3">
        <input
          type="text"
          placeholder="Scrivi una recensione..."
          required
          className="form-control mb-2"
          value={this.state.adding.comment}
          onChange={(e) =>
            this.setState({
              adding: { ...this.state.adding, comment: e.target.value },
            })
          }
        />
        <select
          className="form-select mb-2"
          value={this.state.adding.rate}
          onChange={(e) =>
            this.setState({
              adding: { ...this.state.adding, rate: e.target.value },
            })
          }
        >
          <option value="1">1 - Gradimento nullo</option>
          <option value="2">2 - Gradimento basso</option>
          <option value="3">3 - Gradimento medio</option>
          <option value="4">4 - Gradimento alto</option>
          <option value="5">5 - Eccellente</option>
        </select>
        <button type="submit" className="btn btn-warning mb-2">
          Invia
        </button>
      </form>
    );
  }
}

export default AddComment;
