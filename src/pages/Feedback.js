import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Feedback({onSubmit}) {

    const [name, setName] =  useState("");
    const [score, setScore] =  useState("10");
    const [comment, setComment] =  useState("");
    const [touched, setTouched] = useState(false);

    const handleChange = event => {
        const result = event.target.value.replace(/[^a-z]/gi, '');
        setName(result);
      };

    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    }
    const isValidName = name !== "";

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
        window.scrollTo(0, 0);
    };

    return (
        <div className="feedback">
            <form onSubmit={handleSubmit}>
                <h2 className="title">Feedback form</h2>
                    <div className="field ic3">
                        <label htmlFor="score">Score: {score} ⭐</label>
                        <input
                            id="score"
                            name="score"
                            type="range"
                            min="0"
                            max="10"
                            className="ic3"
                            value={score}
                            onChange={e => setScore(e.target.value)}
                        />
                    </div>
                    <div className="input-container-feedback ic3">
                        <label htmlFor="comment" className="ic3">Comments:</label>
                        <textarea
                            id="comment"
                            name="comment"
                            spellcheck="true"
                            rows={6}
                            cols={30}
                            value={comment}
                            className="inputTime ic3"
                            placeholder={textAreaPlaceholder}
                            onChange={(e) => {
                                setComment(e.target.value);
                            }}
                        />
                    </div>
                    <div className="input-container ic3">
                            <input
                                id="name"
                                className="input ic3"
                                type="text"
                                name="name"
                                placeholder=" "
                                required
                                minLength={2}
                                maxLength={18}
                                value={name}
                                onChange={handleChange}
                                onBlur={() => setTouched(true)}
                            />
                            <p className="attention">{touched? (isValidName ? "" : "* Please fill in this field ") : null}</p>
                            <div className="cut ic3"></div>
                            <label htmlFor="name" className="placeholder ic3">Name</label>
                    </div>
                    <Link to="/thanks"><button className="ic4" disabled={!name} type="submit" onClick={handleScrollToTop}>Submit</button></Link>
            </form>
        </div>
    );
}

export default Feedback;