'use server'
import { OpenAIStream, StreamingTextResponse, generateText } from 'ai' // Vercel AI SDK ***
import { createGoogleGenerativeAI } from '@ai-sdk/google';

const google = createGoogleGenerativeAI({
  // custom settings
  apiKey: process.env.AI_API_KEY || "",
  baseURL: "https://generativelanguage.googleapis.com/v1",
});

if (!process.env.AI_API_KEY) {
  throw new Error(
    "AI_API_KEY environment variable is required. You can get this via https://vercel.com/docs/integrations/ai"
  );
}

export async function getPrediction(userMessage: string, tarotCards: string[]) {
  console.log(userMessage, tarotCards)

  const prompt = `Vas a pretender ser una tarotista. Vas a recibir el siguiente mensaje de usuario: "${userMessage}"
  
  Siempre que el mensaje de usuario sea una pregunta válida, vas a dar una respuesta de manera amistosa, sin predeterminar el sexo con al menos 100 palarbas y no más de 300 palabras, en español y teniendo en cuenta que has seleccionado las cartas: ${tarotCards.join(", ")}.
  
  Si el mensaje del usuario no es una pregunta válida como por ejemplo saludos, mensajes sin sentido o en otros idiomas, deberás indicar que se vuelva a realizar la pregunta de manera amable. 
  
  Necesito que me devuelvas una respuesta en formato JSON como acontinuacion:

  { "message": "tu respuesta", "isOk": true }

  Es muy importante que tengas en cuenta que si el mensaje del usuario no es una pregunta válida como por ejemplo saludos, consultas sobre el clima, palabras sueltas en una oracion que no están formuladas como una pregunta directa(como "perro", "casa", "trabajo", "animal" o similares) y sin sentido, mensajes que incluyan una sola letra o un número solo, o mensajes sin sentido o en otros idiomas, deberás indicar que se vuelva a realizar la pregunta de manera amable e isOk es false.
  `

  const { text } = await generateText({
    model: google('models/gemini-pro', {}),
    prompt,
  });

  

  return JSON.parse(text);
}
