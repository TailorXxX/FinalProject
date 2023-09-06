import { useState } from 'react';
import Page from '../layout/Page';

export default function GPTComponent() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const fetchGPTResponse = async () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          Authorization: `Bearer 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`, // replace YOUR_API_KEY with your OpenAI API key
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: input,
          max_tokens: 150,
        }),
      };

      const result = await fetch(
        'https://api.openai.com/v1/engines/davinci/completions',
        requestOptions
      );
      const data = await result.json();
      if (data && data.choices && data.choices[0] && data.choices[0].text) {
        setResponse(data.choices[0].text.trim());
      } else {
        console.error('Unexpected API response:', data);
        setResponse('An error occurred.');
      }
    } catch (error) {
      console.error('Error fetching data from OpenAI:', error);
    }
  };

  return (
    <Page>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Ask something..."></textarea>
      <button onClick={fetchGPTResponse}>Submit</button>
      <p>{response}</p>
    </Page>
  );
}
