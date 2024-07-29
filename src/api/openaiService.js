import OpenAI from 'openai';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
//console.log('apiKey is : ', apiKey);

if (!apiKey) {
  throw new Error('The OPENAI_API_KEY environment variable is missing or empty.');
}

const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true  });

export const getOpenAIResponse = async (message) => {
  //console.log('Message is : ', message);
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo',
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error fetching response from OpenAI:', error);
    return 'Sorry, I am having trouble understanding you right now.';
  }
};
