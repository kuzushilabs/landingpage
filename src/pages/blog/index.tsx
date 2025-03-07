import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import blogs from '@/data/blogs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Blog = () => {
  const router = useRouter();

  const handleBlogClick = (index: number) => {
    console.log('Blog clicked:', index);
    router.push(`/blog/${index}`);
  };

  return (
    <>
      <div>
        <h2 className="text-white text-2xl xs:text-4xl sm:text-6xl font-urbanist my-8 text-center">
          Latest Posts
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}>
          {blogs.map((blog, index) => (
            <Card
              key={index}
              className="max-w-md m-8 bg-[#121212] border-0 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 flex flex-col h-full"
              onClick={() => handleBlogClick(index)}
            >
              <div className="flex flex-col h-full">
                <div className="w-full h-[200px] relative">
                  <Image
                    src={blog.image_url}
                    alt={blog.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>

                <div className="p-6 flex-grow">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-[#aaaaaa] mb-4">{blog.description}</p>
                </div>

                <div className="px-6 pb-6 flex items-center gap-4 mt-auto">
                  <Avatar>
                    <AvatarImage src={blog.avatar_url} alt={blog.author} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="text-white">{blog.author}</p>
                    <p className="text-[#aaaaaa]">{blog.created_at}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
