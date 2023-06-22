import axios from 'axios';

const RapidAPIKey = import.meta.env.VITE_RAPID_API_KEY;

export const callRewriteAPI = async (inputText) => {
  const options = {
    method: 'POST',
    url: 'https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': RapidAPIKey,
      'X-RapidAPI-Host': 'rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com'
    },
    data: {
      language: 'en',
      strength: 3,
      text: inputText
    }
  };

  try {
    const response = await axios.request(options);
    return response.data.rewrite;
  } catch (error) {
    console.error(error);
    return '';
  }
};
