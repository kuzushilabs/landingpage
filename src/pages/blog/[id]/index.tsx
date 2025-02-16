import React from 'react';
import { useParams } from 'next/navigation';
import blogs from '@/data/blogs';
import ReactMarkdown from 'react-markdown';
import { Card, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import remarkGfm from 'remark-gfm';
import { remark } from 'remark';
import html from 'remark-html';
import Image from 'next/image';

const BlogDetails = () => {
  const params = useParams();
  const { id } = params || {};
  if (!id) {
    return <div>Loading...</div>; // Or any loading state component
  }
  console.log(params);
  const blog = blogs[Number(id)];
  if (!blog) {
    return <div>Blog not found</div>; // Handle invalid blog IDs
  }
  console.log(blog);
  //   const processedContent = await remark().use(html).process(blog.markdown);
  //   const contentHtml = processedContent.toString();
  //   console.log(contentHtml);

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
            className="prose lg:prose-xl dark:prose-invert prose-h3:text-white max-w-7xl mx-16  
          prose-li:marker:text-white
          prose-a:text-white
          prose-strong:text-white
          prose-p:text-white prose-bold:text-white"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {blog.markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
