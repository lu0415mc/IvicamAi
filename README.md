# IvicamAi

Welcome to IvicamAi, a platform at the forefront of creativity, powered by the latest in AI technology. IvicamAi leverages OpenAI and Replicate AI APIs along with cutting-edge web technologies to enable seamless code generation, music video creation, and face swaps. Explore the intersection of AI and innovation today with IvicamAi.

## Features

- Code generation powered by OpenAI API 
- Music video creation using AI algorithms
- Face swaps for creative content production
- Seamless integration with modern web technologies

## Technologies Used

- Next.js
- Tailwind CSS
- TypeScript
- MongoDB

## Setup

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Create a `.env` file in the project's root directory.
4. Add the following environment variables to your `.env` file:

## Note

- **API Key Update:** Previously, this project used the OpenAI API key. However, as OpenAI no longer provides a free tier, we've switched to using the Gemini API key. Please replace the `OPENAI_API_KEY` environment variable in your `.env` file with the `GEMINI_API_KEY` provided by Gemini.
### Clone the repository:

```bash
git clone https://github.com/MOHITH-2002/IvicamAi.git .
```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file. Make sure to replace the placeholders with your actual API keys, MongoDB URI, Clerk API key, and webhook URL:

``` bash
OPENAI_API_KEY=your_openai_api_key (replace with GEMINI_API_KEY)
REPLICATE_API_KEY=your_replicate_api_key
MONGODB_URI=your_mongodb_uri
CLERK_API_KEY=your_clerk_api_key
WEBHOOKS=your_webhooks
```
### Install dependencies:

```bash
npm install
```
### Running the Development Server

Start the development server:

```bash
npm run dev

```
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
