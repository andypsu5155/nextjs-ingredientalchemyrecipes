import OpenAI from "openai";

const openai = new OpenAI();

// Logic for the ChatGPT-powered `/api/chat` endpoint
export async function POST(req: any) {
  try {
    // Processing the request body
    const { messages } = await req.json();

    const completion = await openai.chat.completions.create({
      messages: messages,
      model: "gpt-3.5-turbo-0125",
    });

    const reply = completion.choices[0].message;

    // Logging the results
    console.log(`Create chat completion request was successful. Results:
  Replied message: 
  
  ${JSON.stringify(reply)}
  `);

    // Sending a successful response for our endpoint
    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Error handling

    // Server-side error logging
    console.log(error);

    // Sending an unsuccessful response for our endpoint
    const reply = {
      role: "assistant",
      content: "An error has occurred.",
    };

    return new Response(JSON.stringify({ error: { reply } }));
  }
}
