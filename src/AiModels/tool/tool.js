const tool = [
  {
    type: "function",
    function: {
      name: "get_current_weather",
      description: "Get the current weather in a given location",
      parameters: {
        type: "object",
        properties: {
          location: {
            type: "string",
            description: "The city and state, e.g. San Francisco, CA",
          },
          unit: { type: "string", enum: ["celsius", "fahrenheit"] },
        },
        required: ["location"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "write_json",
      description: `Write Json data for user to a file in format {
        {
          "name": "John Doe",
          "email": "john@example.com",
          "technicalSkills": "Node.js, JavaScript",
          "score": "90"
        }
      }`,
      parameters: {
        type: "object",
        properties: {
          object: {
            type: "object",
            description: "The object to write to the JSON file",
          },
        },
        required: ["object"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_rank_by_email_id",
      description: "Get the rank of a user based on their email ID and score",
      parameters: {
        type: "object",
        properties: {
          email: {
            type: "string",
            description: "The email ID of the user",
          },
        },
        required: ["email"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "get_users_in_range",
      description: "Get users within a specified range of ranks based on their scores",
      parameters: {
        type: "object",
        properties: {
          startRank: {
            type: "number",
            description: "The starting rank",
          },
          endRank: {
            type: "number",
            description: "The ending rank",
          },
        },
        required: ["startRank", "endRank"],
      },
    },
  },
];

export default tool;
