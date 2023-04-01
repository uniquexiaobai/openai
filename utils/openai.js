import { Configuration, OpenAIApi } from "openai";

const get_client = (apiKey) => {
  const configuration = new Configuration({
    apiKey,
  });
  return new OpenAIApi(configuration);
};

export default get_client;
