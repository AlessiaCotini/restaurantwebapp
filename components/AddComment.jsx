import { useState } from "react";

const link = "https://striveschool-api.herokuapp.com/api/comments/";

const AddComment = () => {
  const [adding, setAdding] = useState({ comment: "", rate: "" });

  const getNewComment = (e) => {
    e.preventDefault();

    const payload = {
      comment: adding.comment,
      rate: adding.rate,
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
          setAdding({ comment: "", rate: "1" });
        } else {
          throw new Error("Dati non validi");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <form onSubmit={getNewComment} className="mt-3">
      <input
        type="text"
        placeholder="Scrivi una recensione..."
        required
        className="form-control mb-2"
        value={adding.comment}
        onChange={(e) =>
          setAdding({
            ...adding,
            comment: e.target.value,
          })
        }
      />
      <select
        className="form-select mb-2"
        value={adding.rate}
        onChange={(e) => setAdding({ ...adding, rate: e.target.value })}
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
};

export default AddComment;
