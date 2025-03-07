import React from 'react';
import { useParams } from 'next/navigation';
import blogs from '@/data/blogs';
import ReactMarkdown from 'react-markdown';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import Image from 'next/image';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import styles from '@/styles/katex-overrides.module.css';

const BlogDetails = () => {
  const params = useParams();
  const { id } = params || {};
  if (!id) {
    return <div>Loading...</div>;
  }

  const blog = blogs[Number(id)];
  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Process the markdown to fix LaTeX commands
  function processMarkdown(text: string) {
    if (!text) return '';

    // Step 1: Fix the tab character + "ext" pattern (from \text)
    // ASCII 9 is the tab character
    let result = '';
    for (let i = 0; i < text.length; i++) {
      // Check for tab character followed by "ext{"
      if (
        text.charCodeAt(i) === 9 &&
        i + 3 < text.length &&
        text.substring(i + 1, i + 4) === 'ext' &&
        text[i + 4] === '{'
      ) {
        result += '\\text{'; // Replace with proper LaTeX command
        i += 4; // Skip past "ext{"
      }
      // Check for form feed character followed by "rac{"
      else if (
        text.charCodeAt(i) === 12 &&
        i + 3 < text.length &&
        text.substring(i + 1, i + 4) === 'rac' &&
        text[i + 4] === '{'
      ) {
        result += '\\frac{'; // Replace with proper LaTeX command
        i += 4; // Skip past "rac{"
      }
      // For normal "text{" without backslash
      else if (
        i + 4 < text.length &&
        text.substring(i, i + 5) === 'text{' &&
        (i === 0 || text[i - 1] !== '\\')
      ) {
        result += '\\text{';
        i += 4; // Skip past "text{"
      }
      // For normal "frac{" without backslash
      else if (
        i + 4 < text.length &&
        text.substring(i, i + 5) === 'frac{' &&
        (i === 0 || text[i - 1] !== '\\')
      ) {
        result += '\\frac{';
        i += 4; // Skip past "frac{"
      }
      // For "sum" without backslash (not preceded by '\')
      else if (
        i + 3 <= text.length &&
        text.substring(i, i + 3) === 'sum' &&
        (i === 0 || text[i - 1] !== '\\') &&
        (i + 3 === text.length || !/[a-zA-Z0-9]/.test(text[i + 3]))
      ) {
        result += '\\sum';
        i += 2; // Skip past "sum"
      }
      // For "alpha" without backslash
      else if (
        i + 5 <= text.length &&
        text.substring(i, i + 5) === 'alpha' &&
        (i === 0 || text[i - 1] !== '\\') &&
        (i + 5 === text.length || !/[a-zA-Z0-9]/.test(text[i + 5]))
      ) {
        result += '\\alpha';
        i += 4; // Skip past "alpha"
      }
      // For "mathbf" without backslash
      else if (
        i + 6 <= text.length &&
        text.substring(i, i + 6) === 'mathbf' &&
        (i === 0 || text[i - 1] !== '\\') &&
        (i + 6 === text.length || !/[a-zA-Z0-9]/.test(text[i + 6]))
      ) {
        result += '\\mathbf';
        i += 5; // Skip past "mathbf"
      }
      // For "cdot" without backslash
      else if (
        i + 4 <= text.length &&
        text.substring(i, i + 4) === 'cdot' &&
        (i === 0 || text[i - 1] !== '\\') &&
        (i + 4 === text.length || !/[a-zA-Z0-9]/.test(text[i + 4]))
      ) {
        result += '\\cdot';
        i += 3; // Skip past "cdot"
      }
      // For "sqrt" without backslash
      else if (
        i + 4 <= text.length &&
        text.substring(i, i + 4) === 'sqrt' &&
        (i === 0 || text[i - 1] !== '\\') &&
        (i + 4 === text.length || !/[a-zA-Z0-9]/.test(text[i + 4]))
      ) {
        result += '\\sqrt';
        i += 3; // Skip past "sqrt"
      } else {
        result += text[i]; // Keep character as is
      }
    }

    // Step 2: Fix display math [...] with $$...$$
    result = result.replace(/\[([\s\S]*?)\]/g, (match, p1) => {
      return '$$' + p1 + '$$';
    });

    // Step 3: Fix inline math (...) with $...$
    // Only target parentheses that contain mathematical notation
    result = result.replace(/\(([^)]*?[_\\{}^].*?)\)/g, (match, p1) => {
      return '$' + p1 + '$';
    });

    // Handle token (i) and token (j) patterns - convert to italicized version
    result = result.replace(/token\s*\(\s*([ij])\s*\)/g, 'token *$1*');

    // Fix for possessive case: token (j)'s -> token *j*'s
    result = result.replace(/token\s*\*([ij])\*('s)/g, 'token *$1$2*');

    // Fix for "ahigh" function - ensure it's rendered as proper LaTeX
    // Fix for "ahigh" function with an exact pattern match
    // Looking for: *ahigh*(*αij*) pattern
    result = result.replace(
      /\*ahigh\*\(\*([^*]*)\*\)/g,
      '$a\\operatorname{high}(\\alpha_{ij})$'
    );

    console.log('Processed markdown:', result);

    return result;
  }

  // Process the markdown content
  const processedMarkdown = processMarkdown(blog.markdown);

  return (
    <div className="text-white flex flex-col items-center justify-start">
      <div className="max-w-7xl">
        <div className="mx-16 mt-6 flex justify-center">
          <Image
            src={blog.image_url}
            alt={blog.title}
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col items-start justify-between mx-16">
          <h2 className="text-white text-2xl xs:text-4xl sm:text-6xl font-urbanist my-8">
            {blog.title}
          </h2>

          <div className="w-full flex flex-row items-center gap-4">
            <Avatar>
              <AvatarImage
                className="w-10 h-10 rounded-full"
                src={blog.avatar_url}
                alt="@shadcn"
              />
              <AvatarFallback>{blog.avatar_fallback}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-white">{blog.author}</p>
              <p className="text-[#aaaaaa]">{blog.created_at}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between my-12">
          <div
            className={`prose lg:prose-xl dark:prose-invert prose-h3:text-white max-w-7xl mx-16 
            prose-a:text-white
            prose-strong:text-white
            prose-p:text-white prose-bold:text-white prose-li:marker:text-white
            prose-li:text-white ${styles.katexWrapper}`}
          >
            <ReactMarkdown
              remarkPlugins={[
                remarkGfm,
                [remarkMath, { singleDollarTextMath: true }],
              ]}
              rehypePlugins={[
                [
                  rehypeKatex,
                  {
                    throwOnError: false,
                    strict: false,
                    output: 'html',
                    trust: true,
                    errorColor: '#FF0000',
                  },
                ],
              ]}
            >
              {processedMarkdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
