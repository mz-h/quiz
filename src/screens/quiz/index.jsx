import React, {useState, useEffect} from "react";
import QuizCard from "../../components/card"
import * as utils from "../../utils"
import NoQuizAvailable from "./NoQuiz";
// add/edit exams
export default function NewEditExamScreen() {
    const [quizzes, setQuizzes] = useState([]);
    useEffect(() => {
        const resp = utils.default_post("/user/exams")
        // check if resp is not null and body is not null --> if null set empty list (avoid null value )
        setQuizzes(resp?.body || [])
      }, []); // The

    return (
       <div>
            {quizzes.length ? 
                quizzes.map((quiz, ind) => {
                    <QuizCard quiz={quiz} key={ind}  />
                }): 
                <NoQuizAvailable />}
       </div>
    )
}