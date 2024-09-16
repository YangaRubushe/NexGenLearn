/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


export const GenerateCourseLayout_AI = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
        {
            role: "user",
            parts: [
                { text: "Create a comprehensive course tutorial in JSON format, detailing the following fields: 'CourseName', 'Description', 'ChapterName', 'About', and 'Duration'. The course should focus on the 'coding' category, specifically the 'Python' topic, designed for beginners ('Basic' level). The total course duration should be 1 hour and consist of 5 chapters. Include clear, concise chapter descriptions, and ensure each chapter builds progressively on the previous one." },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"CourseName\": \"Python for Beginners\",\n  \"Description\": \"This course is a beginner-friendly introduction to Python programming. It covers the fundamentals of Python syntax, data types, variables, operators, and control flow statements. By the end of this course, you will be able to write simple Python programs and have a solid foundation for further exploration.\",\n  \"Chapters\": [\n    {\n      \"ChapterName\": \"Introduction to Python\",\n      \"About\": \"This chapter will introduce you to the Python programming language, its history, and its applications. We will also set up your Python development environment and write your first Python program.\",\n      \"Duration\": \"12 minutes\"\n    },\n    {\n      \"ChapterName\": \"Variables and Data Types\",\n      \"About\": \"In this chapter, you will learn about variables, data types, and how to store and manipulate data in Python. We will cover integers, floats, strings, and booleans.\",\n      \"Duration\": \"15 minutes\"\n    },\n    {\n      \"ChapterName\": \"Operators and Expressions\",\n      \"About\": \"This chapter delves into the various operators available in Python, including arithmetic, comparison, logical, and assignment operators. You will learn how to construct expressions and evaluate them.\",\n      \"Duration\": \"18 minutes\"\n    },\n    {\n      \"ChapterName\": \"Control Flow Statements\",\n      \"About\": \"This chapter introduces you to conditional statements (if, else, elif) and loops (for, while) that allow you to control the flow of execution in your programs. You will learn how to make decisions and repeat actions.\",\n      \"Duration\": \"15 minutes\"\n    },\n    {\n      \"ChapterName\": \"Functions and Modules\",\n      \"About\": \"In this final chapter, you will learn about functions, which are reusable blocks of code that perform specific tasks. You will also explore modules, which provide additional functionalities and libraries for your Python programs.\",\n      \"Duration\": \"10 minutes\"\n    }\n  ]\n}\n```" },
            ],
        },
    ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());