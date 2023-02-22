import React, {useState} from "react";

function Feedback({onSubmit}) {
    const [name, setName] =  useState("");
    const [score, setScore] =  useState("10");
    const [comment, setComment] =  useState("");

    const isDisabled = Number(score) <= 5 && comment.length <= 10;

    const textAreaPlaceholder = isDisabled
        ? "Please provide a comment explaining why the experience was poor"
        : "Optional feedback";

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        setScore('10');
        setComment('');
        console.log("Form submited");
        onSubmit({score, comment});
    };

    return (
        <div className="feedback">
            <form onSubmit={handleSubmit}>
                <h2 className="title">Feedback form</h2>
                    <div className="field">
                        <label htmlFor="score">Score: {score} ⭐</label>
                        <input
                            id="score"
                            name="score"
                            type="range"
                            min="0"
                            max="10"
                            value={score}
                            onChange={e => setScore(e.target.value)}
                        />
                        <label htmlFor="comment">Comments:</label>
                        <textarea
                            id="comment"
                            name="comment"
                            rows={6}
                            cols={30}
                            value={comment}
                            placeholder={textAreaPlaceholder}
                            onChange={(e) => {
                                setComment(e.target.value);
                            }}
                        />
                        <div className="input-container ic1">
                            <input id="name" className="input" type="text" name="name"                             minLength={2}
                                maxLength={20}
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}/>
                            <div className="cut"></div>
                            <label htmlFor="name" className="placeholder">Name:</label>
                        </div>
                        <button disabled={isDisabled && !name} type="submit">Submit</button>
                    </div>
            </form>
        </div>
    );
}

export default Feedback;