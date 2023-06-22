import axios from 'axios';

export const callRewriteAPI = async (inputText) => {
  const options = {
    method: 'POST',
    url: 'https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '0c47c63b06msh4ea59790f3e4acdp1b8a09jsn7252d22e5fa5',
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
