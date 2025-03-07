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
  {
    title:
      'From RNNs to Self-Attention-Understanding Q, K, and V in Transformers',
    description:
      'Transformers are a powerful class of models that have revolutionized NLP. In this blog, we will explore the concepts of Q, K, V, and how they work together to enable the attention mechanism.',
    avatar_url: 'https://github.com/shadcn.png',
    avatar_fallback: 'AG',
    image_url: '/images/transformers_080325.jpg',
    // 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/967a5ec4-7e13-4244-99e3-b60a6ab0097f/original=true,quality=90/00038-20240815031805-flux1-dev-bnb-nf4-v2-Euler-50.jpeg',
    author: 'Akshat Gupta',
    created_at: '2025-03-08',
    updated_at: '2025-03-08',
    markdown: `## Introduction: Why We Needed Transformers

Traditional Recurrent Neural Networks (RNNs) process sequences one token at a time. Here's how an RNN works:

- **Sequential Processing:**  
  An RNN starts with the first token, computes a hidden state (a summary of what it has seen), and then moves on. The hidden state from the first token is combined with the second token to produce a new hidden state, and so on.

- **Impact on Speed:**  
  Because each token's processing depends on the previous token's hidden state, RNNs process data sequentially. This means you cannot process multiple tokens simultaneously, making RNNs slower compared to models that can handle tokens in parallel.

- **Challenges with Long-Range Relationships:**  
  In long sequences, early token information can be diluted or “forgotten” by the time the network reaches the end. This makes it hard for RNNs to capture relationships between distant tokens.

Transformers were developed to overcome these challenges by processing tokens in parallel and effectively modeling long-range dependencies with the self-attention mechanism.

---

## Understanding Self-Attention in Transformers

Self-attention allows a transformer to look at every token in a sequence simultaneously, deciding how much each token should contribute to the representation of every other token. This is achieved through the computation of three vectors for each token: **Query (Q)**, **Key (K)**, and **Value (V)**.

---

## Analogies to Understand Q, K, and V

### Party Analogy

Imagine you're at a lively party where every guest carries three types of cards:

- **Query Card (What I'm Looking For):**  
  Each guest writes down what kind of advice or information they need—say, “I need gardening tips.”

- **Key Card (Who I Am):**  
  Each guest also has a card that identifies their expertise. One guest might have “I have experience in gardening and landscaping.”

- **Value Card (What I Can Offer):**  
  Finally, each guest carries a card with the actual advice they can give—detailed gardening tips, for example.

**How It Works at the Party:**  

- Every guest looks at their query card (what they need).  
- They scan the room and compare their query with everyone else's key cards (what each guest is known for).  
- When a guest finds someone whose key matches their query, they pay attention to that person's value card (the advice offered).

In transformers, each token's query “asks” for relevant information, keys act as identifiers to match, and values provide the information that gets shared.

### Library Analogy

Imagine a huge library:

- **Query (Q):**  
  A reader has a research question, like “What are the causes of climate change?”

- **Key (K):**  
  Every book in the library has a title and a summary that tells you what topics it covers.

- **Value (V):**  
  The actual content inside the book is the value.

**How It Works in the Library:**  
- The reader uses their query to scan the titles and summaries (keys) of the books.
- They select books whose summaries closely match their research question.
- Then, the reader gathers the detailed content (values) from those books.

Similarly, in self-attention, tokens use their queries to find relevant keys and then aggregate the corresponding values to form a new, context-aware representation.

---

## The Mathematical Breakdown

### 1. Converting Tokens into Q, K, and V

Each token embedding \( \mathbf{x} \) is transformed into three vectors via learned linear layers:

\[
\mathbf{q} = \mathbf{x}\mathbf{W}^Q,  \mathbf{k} = \mathbf{x}\mathbf{W}^K, \mathbf{v} = \mathbf{x}\mathbf{W}^V
\]

Here, \(\mathbf{W}^Q\), \(\mathbf{W}^K\), and \(\mathbf{W}^V\) are weight matrices learned during training. They allow the model to project the same input into three distinct spaces so that each vector plays its unique role.

### 2. Computing Attention Scores

For each token \( i \), we compute how much attention it should pay to every other token \( j \):

- **Dot Product:**  
  \(\text{score}_{ij} = \mathbf{q}_i \cdot \mathbf{k}_j\)  
  This score indicates the relevance of token \( j \) to token \( i \).

- **Scaling:**  
  The score is divided by \(\sqrt{d_k}\) (where \( d_k \) is the dimension of the key vector) to keep values stable:
  
  \[
  \text{score}_{ij} = \frac{\mathbf{q}_i \cdot \mathbf{k}_j}{\sqrt{d_k}}
  \]

- **Softmax Normalization:**  
  Applying softmax converts the scores into probabilities (attention weights) that add up to 1:
  
  \[
  \alpha_{ij} = \frac{e^{\text{score}_{ij}}}{\sum_{k} e^{\text{score}_{ik}}}
  \]

### 3. Generating Weighted Representations

Each token's new representation is a weighted total of the value vectors:

\[
\text{Output}_i = \sum_{j} \alpha_{ij} \,\mathbf{v}_j
\]

#### Detailed Explanation of the Weighted Sum

- **Calculating Scores:**  
  After obtaining Q and K, the dot products \( \mathbf{q}_i \cdot \mathbf{k}_j \) produce raw scores for each pair of tokens.
  
- **Scaling and Softmax:**  
  The scores are scaled by \(\sqrt{d_k}\) and normalized with softmax to yield attention weights \(\alpha_{ij}\). Each \(\alpha_{ij}\) represents the fraction of attention token \( i \) gives to token \( j \).

- **Weighted Sum of Values:**  
  The output for token \( i \) is computed by multiplying each token \( j \)'s value \(\mathbf{v}_j\) by the corresponding attention weight \(\alpha_{ij}\) and then summing these products. This means that if token \( j \) is very relevant to token \( i \), indicated by a high \(\alpha_{ij}\), its value has a greater influence on token \( i \)'s final representation. The result is a context-aware vector that integrates information from the entire sequence based on relevance.

---

## Conclusion

Self-attention transforms how we process sequences by allowing parallel processing and dynamic weighting of token relationships. By converting token embeddings into Query, Key, and Value vectors through learned linear layers, the transformer is able to determine which tokens are most relevant to each other. Whether you think of it as a party where guests exchange advice or a library where readers select the most relevant books, the underlying process is the same. The mathematical formulation—with dot products, scaling, softmax, and weighted sums—reinforces this intuition and shows how self-attention builds rich, context-aware representations.

---`,
  },
];

export default blogs;
