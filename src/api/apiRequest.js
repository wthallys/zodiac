import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

async function getResult(
  firstSigno: string | undefined,
  secondSigno: string | undefined
) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Em um texto bem curto aponte apenas os motivos positivos do porque os signos ${firstSigno} e ${secondSigno} se dão bem no amor.`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  // console.log(completion.choices[0]);
  return completion;
}

export default getResult;
