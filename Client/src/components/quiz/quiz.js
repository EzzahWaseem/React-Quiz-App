import React, {useState,useEffect} from 'react';
import Question from './questions/question';
import Answer from './answers/answer';
import './quiz.css';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../../actions/posts';

export default function Quiz(){
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getList());
    }, [ dispatch]);
    const questionList = useSelector((state) => state.posts);
    console.log('que',questionList);

   
   
  
   
    // the method that checks the correct answer
  const checkAnswer = answer => {
        const { correctAnswers, step, score } = data;
        console.log('answer',answer)
        if(answer === correctAnswers[step]){
            setData({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            setData({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
   const  nextStep = (step) => {
        setData({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }
    const [data, setData] = useState(
        {
            questions: 
            {
                1: 'What US city is known as the "birthplace of jazz"?',
                2: 'What is the capital of Greece?',
                3: 'What planet gave birth to Superman?'
            }
            ,
            answers: {
                1: {
                    1: 'Chicago',
                    2: 'New Orleans',
                    3: 'New York'
                },
                2: {
                    1: 'Athens',
                    2: 'Patras',
                    3: 'Kalamata'
                },
                3: {
                    1: 'Krypton',
                    2: 'Mars',
                    3: 'Saturn'
                }
            },
            correctAnswers: {
                1: '2',
                2: '1',
                3: '1'
            },
            correctAnswer: 0,
            clickedAnswer: 0,
            step: 1,
            score: 0
        }
    );
  console.log('ques Data check',data)
        let { questions, answers, correctAnswer, clickedAnswer, step, score } = data;
       
        return(
            <div className="Content">
                {step <= Object.keys(questions).length ? 
                    (<>
                        <Question
                            question={questions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(questions).length >= step
                            ? false : true
                        }
                        onClick={() => nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(questions).length}</p>
                            <p>Thank you!</p>
                        </div>
                    )
                }
            </div>
        );
   
}