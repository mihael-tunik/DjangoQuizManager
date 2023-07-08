import { v4 as uuidV4 } from 'uuid'
import sample from './Utils'

export default function ProcessQuizData (result) {
  const questions = []

  const alphabet = []
  const transcript = []
  const questionNumber = 15

  for (const key in result) {
    console.log('Read: ' + key + ':' + result[key])

    alphabet.push(key)
    transcript.push(result[key])
  }

  const length = alphabet.length
  const variants = 4

  for (let question_idx = 0; question_idx < questionNumber; ++question_idx) {
    /* pick n = variants of indices in vocabulary (alphabet, transcript) */
    const random_idx = sample(length, variants)
    
    /* one of them will be question index */
    const pick_idx = random_idx[0]
    
    /* generate answers */
    const answers = [{ answerText: transcript[pick_idx], isCorrect: true, key: uuidV4() }]
            
    for (let j = 1; j < variants; ++j) {
        answers.push({ answerText: transcript[random_idx[j]], isCorrect: false, key: uuidV4() })
    }
    
    /* shuffle them */ 
    const shuffle = sample(variants, variants)
    const answers_shuffled = []
    
    for (let j = 0; j < shuffle.length; ++j) {
      answers_shuffled.push(answers[shuffle[j]])
    }

    /* remember pick_idx and use it to build quiz question */
    const quiz_item = {
      questionText: alphabet[pick_idx],
      answerOptions: answers_shuffled
    }

    questions.push(quiz_item)
  }

  return questions
}
