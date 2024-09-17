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
                { text: "Explain the concept in Detail on Topic:Mastering Tailwind CSS: A Beginner's Guide, Chapter:Customizing Tailwind CSS, in JSON Format with field as title, description detail give step by step guidance, Code Example (HTML code in format) if applicable" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"title\": \"Customizing Tailwind CSS\",\n  \"description\": \"Tailwind CSS is incredibly flexible and allows for extensive customization to suit your specific design needs. This chapter will guide you through the process of tailoring Tailwind CSS to create a unique and consistent visual identity for your projects.\",\n  \"details\": [\n    {\n      \"title\": \"Tailwind Configuration File (tailwind.config.js)\",\n      \"description\": \"The heart of Tailwind customization lies in the `tailwind.config.js` file. This file allows you to control various aspects of Tailwind's behavior, including:\",\n      \"codeExample\": \"```javascript\\n/** @type {import('tailwindcss').Config} */\\nmodule.exports = {\\n  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],\\n  theme: {\\n    extend: {\\n      colors: {\\n        'primary': '#007bff', // Define a custom primary color\\n        'secondary': '#6c757d', // Define a custom secondary color\\n      },\\n      fontFamily: {\\n        'sans': ['Roboto', 'sans-serif'], // Define a custom font family\\n      },\\n    },\\n  },\\n  plugins: [],\\n}\\n```\",\n      \"subDetails\": [\n        {\n          \"title\": \"Content\",\n          \"description\": \"Specifies the files that Tailwind should scan for class names. This ensures that your custom classes are properly recognized and applied.\"\n        },\n        {\n          \"title\": \"Theme\",\n          \"description\": \"Defines the visual style of your project. This includes things like colors, spacing, fonts, and more. The `extend` property is crucial for adding your own custom values to the default Tailwind theme.\"\n        },\n        {\n          \"title\": \"Plugins\",\n          \"description\": \"Allows you to extend Tailwind's functionality with third-party plugins. This can enable additional features or modify existing ones.\"\n        }\n      ]\n    },\n    {\n      \"title\": \"Custom Colors\",\n      \"description\": \"Tailwind offers a wide range of built-in colors, but you might need specific shades or entirely new colors. The `colors` property within the `theme.extend` section lets you define your own custom colors.\",\n      \"codeExample\": \"```javascript\\nmodule.exports = {\\n  // ...\\n  theme: {\\n    extend: {\\n      colors: {\\n        'brand-blue': '#007bff', // Define a custom blue color\\n        'brand-green': '#28a745', // Define a custom green color\\n      },\\n    },\\n  },\\n  // ...\\n}\\n```\",\n      \"codeExampleUsage\": \"```html\\n<div class=\\\"bg-brand-blue p-4\\\">Brand Blue Background</div>\\n<div class=\\\"text-brand-green font-bold\\\">Brand Green Text</div>\\n```\"\n    },\n    {\n      \"title\": \"Custom Fonts\",\n      \"description\": \"Beyond the default font families, you can easily incorporate your preferred fonts. The `fontFamily` property lets you specify new font families and assign them unique names for easy reference.\",\n      \"codeExample\": \"```javascript\\nmodule.exports = {\\n  // ...\\n  theme: {\\n    extend: {\\n      fontFamily: {\\n        'roboto': ['Roboto', 'sans-serif'],\\n        'open-sans': ['Open Sans', 'sans-serif'],\\n      },\\n    },\\n  },\\n  // ...\\n}\\n```\",\n      \"codeExampleUsage\": \"```html\\n<h1 class=\\\"font-roboto text-3xl\\\">Roboto Font</h1>\\n<p class=\\\"font-open-sans\\\">Open Sans Font</p>\\n```\"\n    },\n    {\n      \"title\": \"Custom Breakpoints\",\n      \"description\": \"Tailwind's responsive design system works with predefined breakpoints. You can customize these breakpoints to align with your project's specific requirements.\",\n      \"codeExample\": \"```javascript\\nmodule.exports = {\\n  // ...\\n  theme: {\\n    extend: {\\n      screens: {\\n        'xs': '480px', // Define a custom breakpoint for extra small screens\\n        'sm': '640px', // Overwrite the default small breakpoint\\n      },\\n    },\\n  },\\n  // ...\\n}\\n```\",\n      \"codeExampleUsage\": \"```html\\n<div class=\\\"md:hidden\\\">This content is hidden on medium screens and larger.</div>\\n<div class=\\\"xs:block\\\">This content is visible on extra small screens and larger.</div>\\n```\"\n    },\n    {\n      \"title\": \"Customizing Spacing and Sizing\",\n      \"description\": \"Tailwind's `spacing` and `fontSize` properties allow for precise control over spacing and text sizes. You can create custom values to fit your design preferences.\",\n      \"codeExample\": \"```javascript\\nmodule.exports = {\\n  // ...\\n  theme: {\\n    extend: {\\n      spacing: {\\n        'extra-large': '10rem', // Define a custom extra large spacing\\n      },\\n      fontSize: {\\n        'xxs': '0.625rem', // Define a custom extra extra small font size\\n      },\\n    },\\n  },\\n  // ...\\n}\\n```\",\n      \"codeExampleUsage\": \"```html\\n<div class=\\\"p-extra-large\\\">Extra Large Padding</div>\\n<h1 class=\\\"text-xxs\\\">Extra Extra Small Font Size</h1>\\n```\"\n    },\n    {\n      \"title\": \"Creating Custom Utilities\",\n      \"description\": \"Sometimes you need specific styles that don't fit neatly into Tailwind's default utility classes. You can create your own custom utility classes using the `extend` property of the `theme` object.\",\n      \"codeExample\": \"```javascript\\nmodule.exports = {\\n  // ...\\n  theme: {\\n    extend: {\\n      utilities: {\\n        '.custom-shadow': { // Define a custom shadow utility class\\n          boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',\\n        },\\n      },\\n    },\\n  },\\n  // ...\\n}\\n```\",\n      \"codeExampleUsage\": \"```html\\n<div class=\\\"custom-shadow\\\">Custom Shadow</div>\\n```\"\n    }\n  ]\n}\n```" },
            ],
        },
    ],
});

// Modify the generateCourseContent function to use the updated AI models
export async function generateCourseContent() {
    try {
        const result = await GenerateCourseLayout_AI.sendMessage("Generate a course layout");
        const courseLayout = JSON.parse(result.response.text());
        
        // Generate content for each chapter
        const chaptersWithContent = await Promise.all(courseLayout.Chapters.map(async (chapter) => {
            const chapterResult = await GenerateChapterContent_AI.sendMessage(`Generate content for chapter: ${chapter.ChapterName}`);
            const chapterContent = JSON.parse(chapterResult.response.text());
            return { ...chapter, ...chapterContent };
        }));

        return { ...courseLayout, Chapters: chaptersWithContent };
    } catch (error) {
        console.error("Error generating course content:", error);
        throw error;
    }
}

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());