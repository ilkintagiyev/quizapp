import React, { useCallback, useState } from 'react'
import { questions } from '../../utils/data';
import style from './Quiz.module.css';

const Quiz = () => {

    const [index, setIndex] = useState(Math.floor(Math.random() * questions?.length))
    const [quizes, setQuizes] = useState(questions);
    const [answer, setAnswer] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [wrong, setWrong] = useState(false);

    const showAnswer = useCallback(() => {
        setAnswer(quizes[index].answer)
        setWrong(false)
        setTimeout(() => {
            setIndex(Math.floor(Math.random() * questions?.length))
        }, 2000);
    }, [index, quizes])

    const submitAnswer = useCallback(() => {
        if (inputValue === quizes[index].answer) {
            setWrong(false)
            setIndex(Math.floor(Math.random() * questions?.length))
        }
        else {
            setWrong(true)
        }
        setAnswer('')
        setInputValue('')
    }, [index, inputValue, quizes])

    const changeQuestion = useCallback(() => {
        setAnswer('')
        setWrong(false)
        setIndex(Math.floor(Math.random() * questions?.length))
    }, [])

    return (
        <div className={style.container}>
            <h2 className={style.question}>{quizes[index].question}</h2>
            <label className={style.label}>
                <input onChange={e => setInputValue(e.target.value)} placeholder='Cavabı yaz' />
                <button onClick={submitAnswer}>Təsdiqlə</button>
                <button onClick={showAnswer}>Cavabı göstər</button>
                <button onClick={changeQuestion}>Suali dəyiş</button>
            </label>
            <h3>{answer}</h3>
            <h3>{wrong && 'Səhv yazdınız zəhmət olmasa yenidən yoxlayın'}</h3>
        </div>
    )
}

export default Quiz