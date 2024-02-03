import OpenAI from 'openai';

interface Options {
  prompt: string;
}

export const orthographyCheckUseCase = async (
  openAi: OpenAI,
  options: Options,
) => {
  const { prompt } = options;

  const completion = await openAi.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `
        Te serán proveídos textos con errores ortográficos y gramaticales,
        Debes de responder en formato JSON, 
        tu tarea es corregirlos y retornar información de las soluciones que has aplicado.
        tambien debes de dar un porcentaje de acierto por el usuario, 

        Si no hay errores, debes retornar un mensaje cordial de felicitaciones.

        Ejemplo de salida:
        {
          userScore: number,
          errors: string[], // ['La palabra #error# en realidad es #correction#']
          message: string, // usa emojis y emoticonos para darle un toque de personalidad

        }
          `,
      },

      {
        role: 'user',
        content: prompt,
      },
    ],
    model: 'gpt-3.5-turbo',
    max_tokens: 150,
    temperature: 0.3,
    // response_format: {
    //   type: 'json_object',
    // },
  });

  const data = JSON.parse(completion.choices[0].message.content);

  return data;
};
