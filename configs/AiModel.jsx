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

export const GenerateChapterContent_AI = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "Explain the concept in Detail on Topic:Mastering Tailwind CSS: A Beginner's Guide, Chapter:Introduction to Tailwind CSS, in JSON Format with list of array with field as title, description detail, Code Example (Code field in <precode> format) if applicable'"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n[\n  {\n    \"title\": \"What is Tailwind CSS?\",\n    \"description\": \"Tailwind CSS is a utility-first CSS framework that provides a wide range of pre-defined utility classes that you can use to quickly style your web pages. Instead of writing custom CSS rules, you simply add these classes to your HTML elements to control their appearance. This allows you to create custom designs without having to write a lot of CSS code.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Key Features of Tailwind CSS\",\n    \"description\": \"Here are some key features of Tailwind CSS that make it a popular choice for web developers:\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Utility-First Approach\",\n    \"description\": \"Tailwind CSS's utility-first approach provides a set of pre-defined utility classes that you can use to style your elements directly in your HTML. This eliminates the need for custom CSS classes and promotes consistent styling throughout your project.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Customization and Theming\",\n    \"description\": \"Tailwind CSS allows you to customize the framework's default colors, fonts, spacing, and other design elements to fit your brand and project requirements. This allows you to create unique and consistent designs without having to start from scratch.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Responsiveness and Breakpoints\",\n    \"description\": \"Tailwind CSS makes it easy to create responsive designs by providing utility classes that apply different styles based on screen size. You can define breakpoints to target different devices and ensure your website looks great on all screens.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Component-Based Design\",\n    \"description\": \"Tailwind CSS encourages a component-based approach to web development. You can create reusable components with their own styles and easily integrate them into your project. This promotes code reusability and makes it easier to maintain your website.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Tailwind CSS Installation and Configuration\",\n    \"description\": \"To use Tailwind CSS, you need to install it in your project and configure it with your desired settings. This involves using a package manager like npm or yarn to install the necessary dependencies and create a configuration file.\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Example: Styling a Button with Tailwind CSS\",\n    \"description\": \"Here's a simple example of how to style a button using Tailwind CSS:\",\n    \"code\": \"<precode>\\n<button class=\\\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\\\">Click Me</button>\\n</precode>\"\n  },\n  {\n    \"title\": \"Getting Started with Tailwind CSS\",\n    \"description\": \"To get started with Tailwind CSS, visit the official website and follow the instructions to install and configure it. There are also plenty of resources and tutorials available online to help you learn more about the framework.\",\n    \"code\": \"\"\n  }\n]\n```"},
        ],
      },
    ],
  });

// Modify the generateCourseContent function to use the updated AI models
export async function generateCourseContent(courseName, chapterName) {
  try {
    const prompt = `Explain the concept in Detail on Topic:${courseName}, Chapter:${chapterName}, in JSON Format with field as title, description detail, Code Example (HTML code in format with comments on the code) if applicable`;
    const result = await GenerateChapterContent_AI.sendMessage(prompt);
    const chapterContent = JSON.parse(result.response.text());
    return chapterContent;
  } catch (error) {
    console.error("Error generating course content:", error);
    throw error;
  }
}

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());