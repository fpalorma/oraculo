'use server'
import { generateText } from 'ai' // Vercel AI SDK ***
import { createGoogleGenerativeAI } from '@ai-sdk/google';

const google = createGoogleGenerativeAI({
  // custom settings
  apiKey: process.env.AI_API_KEY || "",
  baseURL: "https://generativelanguage.googleapis.com/v1beta",  
});

if (!process.env.AI_API_KEY) {
  throw new Error(
    "AI_API_KEY environment variable is required. You can get this via https://vercel.com/docs/integrations/ai"
  );
}

export async function getPrediction(userMessage: string, tarotCards: string[]) {

  try{
    const prompt = `Vas a pretender ser una tarotista. Vas a recibir el siguiente mensaje de usuario: "${userMessage}"
    
    Siempre que el mensaje de usuario sea una pregunta válida, vas a dar una respuesta de manera amistosa, retomando la pregunta completa, sin predeterminar el sexo con al menos 100 palarbas y no más de 300 palabras, en español y teniendo en cuenta que has seleccionado las cartas: ${tarotCards.join(", ")}.
    
    Si el mensaje del usuario no es una pregunta válida como por ejemplo saludos, mensajes sin sentido o en otros idiomas, deberás indicar que se vuelva a realizar la pregunta de manera amable. 
    
    Necesito que me devuelvas una respuesta en formato JSON como a continuacion:
  
    { "message": "tu respuesta", "isOk": true }
  No incluyas backticks en la respuesta. Solo el JSON crudo.
  Respondé únicamente con un JSON válido, sin formatearlo como bloque de código, sin comillas triples ni backticks. Solo el objeto JSON.

    Es muy importante que tengas en cuenta que si el mensaje del usuario no es una pregunta válida como por ejemplo saludos, consultas sobre el clima, palabras sueltas en una oracion que no están formuladas como una pregunta directa(como "perro", "casa", "trabajo", "animal" o similares) y sin sentido, mensajes que incluyan una sola letra o un número solo, o mensajes sin sentido o en otros idiomas, deberás indicar que se vuelva a realizar la pregunta de manera amable e isOk es false.
    `

  
    const { text } = await generateText({
      model: google('models/gemini-1.5-pro-latest', { safetySettings: [
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
      ],}),
      prompt,
      
    });
    return JSON.parse(text);
  }catch(error){
    console.log(error);
  }

}
