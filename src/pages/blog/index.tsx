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
              className="max-w-md m-8 bg-[#121212] border-0 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => handleBlogClick(index)}
            >
              <CardHeader>
                <Image
                  src={blog.image_url}
                  alt={blog.title}
                  width={350}
                  height={200}
                />
                <CardTitle className="text-white py-4">{blog.title}</CardTitle>
                <CardDescription className="text-[#aaaaaa]">
                  {blog.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="gap-4">
                <Avatar>
                  <AvatarImage src={blog.avatar_url} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="text-white">{blog.author}</p>
                  <p className="text-[#aaaaaa]">{blog.created_at}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
