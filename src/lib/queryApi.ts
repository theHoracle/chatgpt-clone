import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const res = openai.createCompletion({
    model,
    temperature: 0.9,
    top_p: 1,
    prompt,
    max_tokens: 2500,
    frequency_penalty: 0,
    presence_penalty: 0,
  }).then((res) => res.data.choices[0].text).catch((err) => {
    `ChatGPT was unable to find an answer (Error: ${err.message})` 
  })
  
  return res
}

export default query; 
