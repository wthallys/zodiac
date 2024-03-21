import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

async function getResult(
  firstSign: string | undefined,
  secondSign: string | undefined
) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Em um texto bem curto aponte apenas os motivos positivos do porque os signos ${firstSign} e ${secondSign} se dão bem no amor.`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}

export default getResult;
