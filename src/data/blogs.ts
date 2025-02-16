const blogs = [
  {
    title: 'Building AI Voice Agents with Pipecat & SEDA',
    description:
      'Create AI Voice Agent that automates customer conversations using real-time multi-lingual speech processing and intelligent responses',
    avatar_url: 'https://github.com/shadcn.png',
    avatar_fallback: 'AG',
    image_url: '/images/ai-agents.jpg',
    // 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/967a5ec4-7e13-4244-99e3-b60a6ab0097f/original=true,quality=90/00038-20240815031805-flux1-dev-bnb-nf4-v2-Euler-50.jpeg',
    author: 'Akshat Gupta',
    created_at: '2025-02-15',
    updated_at: '2025-02-15',
    markdown: `### Introduction

At Kuzushi Labs, we specialize in developing advanced AI/LLM applications. Recently, we collaborated with a startup to create an AI Voice Agent that automates customer conversations using real-time speech processing and intelligent responses. In this article, we will break down the architecture behind this solution, highlight our use of Pipecat for orchestration, and explain how Staged Event-Driven Architecture (SEDA) powers scalability.

### Key Considerations During Development

While building the AI Voice Agent, we encountered several critical challenges and implemented solutions to ensure a seamless user experience:

1. **Minimzing Latency:** We optimized the system to detect when the customer stops speaking and ensure the bot responds immediately, minimizing response delays.

2. **Perceived Responsiveness:** To address LLM response delays, we added conversational fillers like 'Hmm' to maintain engagement and reduce perceived wait time.

3. **Human Agent Transfers:** Using Plivo's Multi-Participant Call functionality, we enabled real-time transfers to human agents when requested by the user.

4. **Handling Interruptions:** We implemented an interruption detection mechanism, ensuring the bot pauses and adapts to user interjections during conversations.

5. **Live Tool Calls for External Actions:** For clients needing live interactions, such as sending emails or WhatsApp messages during the call, we used OpenAI's tool call functionality to trigger external API actions in real time.

### How the AI Voice Agent Works
The AI Voice Agent follows this detailed pipeline:

1. **Call Initiation:** Automated initiation of the pre-scheduled call via telephony provider.

2. **Audio Streaming:** Bidrectional streaming of the call audio to our server using WebSockets.

3. **Speech-to-Text (STT):** Deepgram converts live audio into text.

4. **LLM Response Generation:** OpenAI's LLM processes the transcript and produces a response.

5. **Text-to-Speech (TTS):** ElevenLabs converts the text back to audio.

6. **Audio Transmission:** The generated audio is sent back to the caller via Plivo.

7. **Pipeline Orchestration:** Pipecat handles the real-time orchestration.

8. **Post-Call Processing:** We schedule reattempts, store call recordings, transcribe with Whisper, and summarize insights using GPT-4o.

### Understanding SEDA (Staged Event-Driven Architecture)
SEDA breaks systems into modular stages connected by queues, enabling efficient, scalable, and fault-tolerant processing. Each pipeline component (STT, LLM, TTS) acts as a stage, managed by Pipecat for seamless event-driven interactions.

Learn more: [What is Staged Event-Driven Architecture?](https://medium.com/@bhanukishore22/what-is-staged-event-driven-architecture-edd4f39a102c)

### About Pipecat
Pipecat is a powerful event-driven orchestration tool designed to handle complex, asynchronous workflows. It manages real-time operations such as audio streaming, LLM interactions, and live tool calls with minimal latency.

Learn more: [Pipecat Documentation](https://docs.pipecat.ai/getting-started/overview)

### Conclusion
Our collaboration leveraging Pipecat and SEDA, produced a scalable and efficient AI Voice Agent. The architecture ensures real-time, engaging conversations while enabling dynamic actions during calls. 

At Kuzushi Labs, we continue to innovate in AI-native applications to drive value for our clients.`,
  },
];

const blogs_test = [
  {
    title: 'Building AI Voice Agents with Pipecat & SEDA',
    description:
      'Create AI Voice Agent that automates customer conversations using real-time multi-lingual speech processing and intelligent responses',
    avatar_url: 'https://github.com/shadcn.png',
    avatar_fallback: 'AG',
    image_url: '/images/ai-agents.jpg',
    // 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/967a5ec4-7e13-4244-99e3-b60a6ab0097f/original=true,quality=90/00038-20240815031805-flux1-dev-bnb-nf4-v2-Euler-50.jpeg',
    author: 'Akshat Gupta',
    created_at: '2025-02-15',
    updated_at: '2025-02-15',
    markdown: `### Introduction

At Kuzushi Labs, we specialize in developing advanced AI/LLM applications. Recently, we collaborated with a startup to create an AI Voice Agent that automates customer conversations using real-time speech processing and intelligent responses. In this article, we will break down the architecture behind this solution, highlight our use of Pipecat for orchestration, and explain how Staged Event-Driven Architecture (SEDA) powers scalability.

### Key Considerations During Development

While building the AI Voice Agent, we encountered several critical challenges and implemented solutions to ensure a seamless user experience:

1. **Minimzing Latency:** We optimized the system to detect when the customer stops speaking and ensure the bot responds immediately, minimizing response delays.

2. **Perceived Responsiveness:** To address LLM response delays, we added conversational fillers like 'Hmm' to maintain engagement and reduce perceived wait time.

3. **Human Agent Transfers:** Using Plivo's Multi-Participant Call functionality, we enabled real-time transfers to human agents when requested by the user.

4. **Handling Interruptions:** We implemented an interruption detection mechanism, ensuring the bot pauses and adapts to user interjections during conversations.

5. **Live Tool Calls for External Actions:** For clients needing live interactions, such as sending emails or WhatsApp messages during the call, we used OpenAI's tool call functionality to trigger external API actions in real time.

### How the AI Voice Agent Works
The AI Voice Agent follows this detailed pipeline:

1. **Call Initiation:** Automated initiation of the pre-scheduled call via telephony provider.

2. **Audio Streaming:** Bidrectional streaming of the call audio to our server using WebSockets.

3. **Speech-to-Text (STT):** Deepgram converts live audio into text.

4. **LLM Response Generation:** OpenAI's LLM processes the transcript and produces a response.

5. **Text-to-Speech (TTS):** ElevenLabs converts the text back to audio.

6. **Audio Transmission:** The generated audio is sent back to the caller via Plivo.

7. **Pipeline Orchestration:** Pipecat handles the real-time orchestration.

8. **Post-Call Processing:** We schedule reattempts, store call recordings, transcribe with Whisper, and summarize insights using GPT-4o.

### Understanding SEDA (Staged Event-Driven Architecture)
SEDA breaks systems into modular stages connected by queues, enabling efficient, scalable, and fault-tolerant processing. Each pipeline component (STT, LLM, TTS) acts as a stage, managed by Pipecat for seamless event-driven interactions.

Learn more: [What is Staged Event-Driven Architecture?](https://medium.com/@bhanukishore22/what-is-staged-event-driven-architecture-edd4f39a102c)

### About Pipecat
Pipecat is a powerful event-driven orchestration tool designed to handle complex, asynchronous workflows. It manages real-time operations such as audio streaming, LLM interactions, and live tool calls with minimal latency.

Learn more: [Pipecat Documentation](https://docs.pipecat.ai/getting-started/overview)

### Conclusion
Our collaboration leveraging Pipecat and SEDA, produced a scalable and efficient AI Voice Agent. The architecture ensures real-time, engaging conversations while enabling dynamic actions during calls. 

At Kuzushi Labs, we continue to innovate in AI-native applications to drive value for our clients.`,
  },
  {
    title: 'Building an AI Voice Agent with Pipecat and SEDA',
    description:
      'Create AI Voice Agent that automates customer conversations using real-time multi-lingual speech processing and intelligent responses',
    avatar_url: 'https://github.com/shadcn.png',
    avatar_fallback: 'AG',
    image_url:
      'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/967a5ec4-7e13-4244-99e3-b60a6ab0097f/original=true,quality=90/00038-20240815031805-flux1-dev-bnb-nf4-v2-Euler-50.jpeg',
    author: 'Akshat Gupta',
    created_at: '2025-02-15',
    updated_at: '2025-02-15',
    markdown: `### Introduction
At Kuzushi Labs, we specialize in developing advanced AI/LLM applications. Recently, we collaborated with a startup to create an AI Voice Agent that automates customer conversations using real-time speech processing and intelligent responses. In this article, we will break down the architecture behind this solution, highlight our use of Pipecat for orchestration, and explain how Staged Event-Driven Architecture (SEDA) powers scalability.

### Key Considerations During Development
While building the AI Voice Agent, we encountered several critical challenges and implemented solutions to ensure a seamless user experience:
1. **Minimizing Latency:** We optimized the system to detect when the customer stops speaking and ensure the bot responds immediately, minimizing response delays.
2. **Perceived Responsiveness:** To address LLM response delays, we added conversational fillers like 'Hmm' to maintain engagement and reduce perceived wait time.
3. **Human Agent Transfers:** Using Plivo's Multi-Participant Call functionality, we enabled real-time transfers to human agents when requested by the user.
4. **Handling Interruptions:** We implemented an interruption detection mechanism, ensuring the bot pauses and adapts to user interjections during conversations.
5. **Live Tool Calls for External Actions:** For clients needing live interactions, such as sending emails or WhatsApp messages during the call, we used OpenAI's tool call functionality to trigger external API actions in real time.

### How the AI Voice Agent Works
The AI Voice Agent follows this detailed pipeline:
1. **Call Initiation:** Automated initiation of the pre-scheduled call via telephony provider.
2. **Audio Streaming:** Bidrectional streaming of the call audio to our server using WebSockets.
3. **Speech-to-Text (STT):** Deepgram converts live audio into text.
4. **LLM Response Generation:** OpenAI's LLM processes the transcript and produces a response.
5. **Text-to-Speech (TTS):** ElevenLabs converts the text back to audio.
6. **Audio Transmission:** The generated audio is sent back to the caller via Plivo.
7. **Pipeline Orchestration:** Pipecat handles the real-time orchestration.
8. **Post-Call Processing:** We schedule reattempts, store call recordings, transcribe with Whisper, and summarize insights using GPT-4o.

### Understanding SEDA (Staged Event-Driven Architecture)
SEDA breaks systems into modular stages connected by queues, enabling efficient, scalable, and fault-tolerant processing. Each pipeline component (STT, LLM, TTS) acts as a stage, managed by Pipecat for seamless event-driven interactions.

Learn more: [What is Staged Event-Driven Architecture?](https://medium.com/@bhanukishore22/what-is-staged-event-driven-architecture-edd4f39a102c)

### About Pipecat
Pipecat is a powerful event-driven orchestration tool designed to handle complex, asynchronous workflows. It manages real-time operations such as audio streaming, LLM interactions, and live tool calls with minimal latency.

Learn more: [Pipecat Documentation](https://docs.pipecat.ai/getting-started/overview)

### Conclusion
Our collaboration leveraging Pipecat and SEDA, produced a scalable and efficient AI Voice Agent. The architecture ensures real-time, engaging conversations while enabling dynamic actions during calls. 

At Kuzushi Labs, we continue to innovate in AI-native applications to drive value for our clients.`,
  },
  {
    title: 'Building an AI Voice Agent with Pipecat and SEDA',
    description:
      'Create AI Voice Agent that automates customer conversations using real-time multi-lingual speech processing and intelligent responses',
    avatar_url: 'https://github.com/shadcn.png',
    avatar_fallback: 'AG',
    image_url:
      'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/967a5ec4-7e13-4244-99e3-b60a6ab0097f/original=true,quality=90/00038-20240815031805-flux1-dev-bnb-nf4-v2-Euler-50.jpeg',
    author: 'Akshat Gupta',
    created_at: '2025-02-15',
    updated_at: '2025-02-15',
    markdown: `### Introduction
At Kuzushi Labs, we specialize in developing advanced AI/LLM applications. Recently, we collaborated with a startup to create an AI Voice Agent that automates customer conversations using real-time speech processing and intelligent responses. In this article, we will break down the architecture behind this solution, highlight our use of Pipecat for orchestration, and explain how Staged Event-Driven Architecture (SEDA) powers scalability.

### Key Considerations During Development
While building the AI Voice Agent, we encountered several critical challenges and implemented solutions to ensure a seamless user experience:
1. **Minimizing Latency:** We optimized the system to detect when the customer stops speaking and ensure the bot responds immediately, minimizing response delays.
2. **Perceived Responsiveness:** To address LLM response delays, we added conversational fillers like 'Hmm' to maintain engagement and reduce perceived wait time.
3. **Human Agent Transfers:** Using Plivo's Multi-Participant Call functionality, we enabled real-time transfers to human agents when requested by the user.
4. **Handling Interruptions:** We implemented an interruption detection mechanism, ensuring the bot pauses and adapts to user interjections during conversations.
5. **Live Tool Calls for External Actions:** For clients needing live interactions, such as sending emails or WhatsApp messages during the call, we used OpenAI's tool call functionality to trigger external API actions in real time.

### How the AI Voice Agent Works
The AI Voice Agent follows this detailed pipeline:
1. **Call Initiation:** Automated initiation of the pre-scheduled call via telephony provider.
2. **Audio Streaming:** Bidrectional streaming of the call audio to our server using WebSockets.
3. **Speech-to-Text (STT):** Deepgram converts live audio into text.
4. **LLM Response Generation:** OpenAI's LLM processes the transcript and produces a response.
5. **Text-to-Speech (TTS):** ElevenLabs converts the text back to audio.
6. **Audio Transmission:** The generated audio is sent back to the caller via Plivo.
7. **Pipeline Orchestration:** Pipecat handles the real-time orchestration.
8. **Post-Call Processing:** We schedule reattempts, store call recordings, transcribe with Whisper, and summarize insights using GPT-4o.

### Understanding SEDA (Staged Event-Driven Architecture)
SEDA breaks systems into modular stages connected by queues, enabling efficient, scalable, and fault-tolerant processing. Each pipeline component (STT, LLM, TTS) acts as a stage, managed by Pipecat for seamless event-driven interactions.

Learn more: [What is Staged Event-Driven Architecture?](https://medium.com/@bhanukishore22/what-is-staged-event-driven-architecture-edd4f39a102c)

### About Pipecat
Pipecat is a powerful event-driven orchestration tool designed to handle complex, asynchronous workflows. It manages real-time operations such as audio streaming, LLM interactions, and live tool calls with minimal latency.

Learn more: [Pipecat Documentation](https://docs.pipecat.ai/getting-started/overview)

### Conclusion
Our collaboration leveraging Pipecat and SEDA, produced a scalable and efficient AI Voice Agent. The architecture ensures real-time, engaging conversations while enabling dynamic actions during calls. 

At Kuzushi Labs, we continue to innovate in AI-native applications to drive value for our clients.`,
  },
  {
    title: 'Building an AI Voice Agent with Pipecat and SEDA',
    description:
      'Create AI Voice Agent that automates customer conversations using real-time multi-lingual speech processing and intelligent responses',
    avatar_url: 'https://github.com/shadcn.png',
    avatar_fallback: 'AG',
    image_url:
      'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/967a5ec4-7e13-4244-99e3-b60a6ab0097f/original=true,quality=90/00038-20240815031805-flux1-dev-bnb-nf4-v2-Euler-50.jpeg',
    author: 'Akshat Gupta',
    created_at: '2025-02-15',
    updated_at: '2025-02-15',
    markdown: `### Introduction
At Kuzushi Labs, we specialize in developing advanced AI/LLM applications. Recently, we collaborated with a startup to create an AI Voice Agent that automates customer conversations using real-time speech processing and intelligent responses. In this article, we will break down the architecture behind this solution, highlight our use of Pipecat for orchestration, and explain how Staged Event-Driven Architecture (SEDA) powers scalability.

### Key Considerations During Development
While building the AI Voice Agent, we encountered several critical challenges and implemented solutions to ensure a seamless user experience:
1. **Minimizing Latency:** We optimized the system to detect when the customer stops speaking and ensure the bot responds immediately, minimizing response delays.
2. **Perceived Responsiveness:** To address LLM response delays, we added conversational fillers like 'Hmm' to maintain engagement and reduce perceived wait time.
3. **Human Agent Transfers:** Using Plivo's Multi-Participant Call functionality, we enabled real-time transfers to human agents when requested by the user.
4. **Handling Interruptions:** We implemented an interruption detection mechanism, ensuring the bot pauses and adapts to user interjections during conversations.
5. **Live Tool Calls for External Actions:** For clients needing live interactions, such as sending emails or WhatsApp messages during the call, we used OpenAI's tool call functionality to trigger external API actions in real time.

### How the AI Voice Agent Works
The AI Voice Agent follows this detailed pipeline:
1. **Call Initiation:** Automated initiation of the pre-scheduled call via telephony provider.
2. **Audio Streaming:** Bidrectional streaming of the call audio to our server using WebSockets.
3. **Speech-to-Text (STT):** Deepgram converts live audio into text.
4. **LLM Response Generation:** OpenAI's LLM processes the transcript and produces a response.
5. **Text-to-Speech (TTS):** ElevenLabs converts the text back to audio.
6. **Audio Transmission:** The generated audio is sent back to the caller via Plivo.
7. **Pipeline Orchestration:** Pipecat handles the real-time orchestration.
8. **Post-Call Processing:** We schedule reattempts, store call recordings, transcribe with Whisper, and summarize insights using GPT-4o.

### Understanding SEDA (Staged Event-Driven Architecture)
SEDA breaks systems into modular stages connected by queues, enabling efficient, scalable, and fault-tolerant processing. Each pipeline component (STT, LLM, TTS) acts as a stage, managed by Pipecat for seamless event-driven interactions.

Learn more: [What is Staged Event-Driven Architecture?](https://medium.com/@bhanukishore22/what-is-staged-event-driven-architecture-edd4f39a102c)

### About Pipecat
Pipecat is a powerful event-driven orchestration tool designed to handle complex, asynchronous workflows. It manages real-time operations such as audio streaming, LLM interactions, and live tool calls with minimal latency.

Learn more: [Pipecat Documentation](https://docs.pipecat.ai/getting-started/overview)

### Conclusion
Our collaboration leveraging Pipecat and SEDA, produced a scalable and efficient AI Voice Agent. The architecture ensures real-time, engaging conversations while enabling dynamic actions during calls. 

At Kuzushi Labs, we continue to innovate in AI-native applications to drive value for our clients.`,
  },
];

export default blogs;
