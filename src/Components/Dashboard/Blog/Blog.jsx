import React, { useState, useEffect } from "react";
import {
  CircleMinus,
  BookmarkPlus,
  Ellipsis,
  MessageCircle,
} from "lucide-react";
import Icons from "../../Common/Icons";
import { Skeleton } from "../../ui/skeleton";
import service from "../../../supabase/config";

const BlogSkeleton = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <article className="border-b border-gray-200 py-6">
        <div className="flex items-center space-x-2 mb-4">
          <Skeleton className="w-10 h-10 rounded-full" />
          <div>
            <Skeleton className="h-4 w-20" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-grow">
            <Skeleton className="h-8 w-full mb-2" />
            <Skeleton className="h-8 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-4" />
          </div>
          <div className="md:w-1/3 mb-4 md:mb-0">
            <Skeleton className="w-full h-[150px] mb-4 rounded" />
          </div>
        </div>

        <div className="flex items-center justify-between text-primarywhite second-font">
          <div className="flex items-center gap-5">
            <Skeleton className="h-4 w-10" />
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-4 w-10" />
          </div>
          <div className="flex items-end justify-end">
            <Skeleton className="h-6 w-6 mr-4" />
            <Skeleton className="h-6 w-6 mr-4" />
            <Skeleton className="h-6 w-6" />
          </div>
        </div>
      </article>
    </div>
  );
};

const Blog = () => {
  const [description, setDescription] = useState("");
  const [mainHeading, setMainHeading] = useState("");
  const [name, setName] = useState([]);
  const [charCount, setCharCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserName = async () => {
      try {
        const userNameData = await service.fetchUserName();
        setName(userNameData);
      } catch (error) {
        console.error("Error fetching user name:", error);
      }
    };

    getUserName();
  }, []);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <BlogSkeleton />;
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <article className="border-b border-gray-200 py-6">
        <div className="flex items-center space-x-2 mb-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="second-font text-xs text-primaryblack font-medium">
              {name.map((user) => (
                <span className="ml-1" key={user.id}>
                  {user.full_name}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-grow">
            <h1 className="text-[22px] font-extrabold mb-2 second-font tracking-tight w-[95%]">
              5 ways to write "natural" code everybody will love to read
            </h1>
            <p className="second-font text-primarylink mb-4 text-base">
              Write code like you tell a story.
            </p>
          </div>
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Blog post illustration"
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-primarywhite second-font">
          <div className="flex items-center gap-5">
            <span className="text-sm text-primarylink">Jun 4</span>
            <span className="flex items-center justify-center gap-1 text-sm text-primarylink">
              <Icons.Claps className="mr-1"></Icons.Claps> 2.1K
            </span>
            <span className="flex items-center justify-center text-sm text-primarylink">
              <MessageCircle className="w-5 h-5 fill-primarylink pr-1" />
              38
            </span>
          </div>
          <div className="flex items-end justify-end">
            <div>
              <button className="mr-4 text-primarylink hover:text-primaryblack">
                <CircleMinus strokeWidth={1.1} />
              </button>
            </div>
            <div>
              <button className="mr-4 text-primarylink hover:text-primaryblack">
                <BookmarkPlus strokeWidth={1.1} />
              </button>
            </div>
            <div>
              <button className="text-primarylink mb-2 hover:text-primaryblack">
                <Ellipsis />
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blog;
