import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { jobTitle, description, generateNew } = body;

    const apiKey = process.env.OPENAI_API_KEY;
    if (apiKey) {
      let content = "";

      if (generateNew) {
        content = `I am writing a resume Write the work experience for the title ${jobTitle} also make sure to mention relevant technologies and responsibilities. I need you to only provide couple of points for it. No other thing except the bullet points describing my relevant experience`;
      } else {
        content = `I am writing my resume I need you to Improve the following work experience ${description} make it according to the job title ${jobTitle}. I need you to only provide couple of points for it. Make sure to provide only points no other extras`;
      }
      const openai = new OpenAI({
        apiKey,
      });
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content }],
        model: "gpt-3.5-turbo",
      });
      return NextResponse.json(
        { response: chatCompletion.choices[0].message.content },
        { status: 201 }
      );
    } else {
      return NextResponse.json({ error: "API Key is missing or invalid" });
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate text" });
  }
}
