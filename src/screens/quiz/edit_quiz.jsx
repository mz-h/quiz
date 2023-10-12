import React, {useState, useEffect} from "react";

export default function EditQuizScreen({initialForm}) {
    const [questions, setQuestions] = useState(initialForm)
    const new_question = {}
    useEffect(() => {
        if(!questions)
            setQuestions({ id: null, title: "", description: "",  score: null, url: "", questions_answers: []})
      }, []); // The
    return (
        <div>&quot;description&quot;: &quot;Description&quot;,
        &quot;id&quot;: 29,
            {FormValues.questions_answers.map((formElemen))}
        </div>
    )
}