import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import Logo2 from "../../Common/Logo2";
import DashPopover from "../../Common/DashPopover";
import { Button } from "../../ui/button";
import { Ellipsis } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../../ui/dialog";
import "react-quill/dist/quill.bubble.css";
import { Skeleton } from "../../ui/skeleton";
import { Link } from "react-router-dom";
import service from "../../../supabase/config";

const NewStory = () => {
  const [mainHeading, setMainHeading] = useState("");
  const [name, setName] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [charCount, setCharCount] = useState(0);
  const [Title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [previewDescription, setPreviewDescription] = useState("");
  const [publishMessage, setPublishMessage] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  // const [topics, setTopics] = useState("");

  const maxChars = 140;

  const handleMainHeadingChange = (e) => {
    setMainHeading(e.target.value);
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    const newCharCount = text.length;
    setCharCount(newCharCount > maxChars ? maxChars : newCharCount);

    if (newCharCount > maxChars) {
      e.target.value = text.slice(0, maxChars);
    }
  };

  const isContentEmpty = () => {
    return (
      mainHeading.trim() === "" ||
      description.replace(/<[^>]*>/g, "").trim() === ""
    );
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (content) => {
    setDescription(content);
  };

  const handlePreviewTitleChange = (e) => {
    setPreviewTitle(e.target.value);
  };

  const handlePublish = async (e) => {
    e.preventDefault(); // Prevent form submission if needed
    setIsPublishing(true);
    setPublishMessage("");

    try {
      if (
        mainHeading.trim() === "" ||
        description.replace(/<[^>]*>/g, "").trim() === ""
      ) {
        throw new Error("Main heading or description cannot be empty.");
      }

      const blogData = {
        heading: mainHeading,
        descriptionpreview:
          previewDescription ||
          description.replace(/<[^>]*>/g, "").slice(0, maxChars),
        maincontent: description,
        slug: mainHeading
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, ""),
        headingpreview: previewTitle,
      };

      const result = await service.insertBlog(blogData);

      // if (result.error) {
      //   throw result.error;
      // }

      setPublishMessage("Blog published successfully!");
    } catch (error) {
      console.error("Error publishing blog:", error);
      setPublishMessage("Failed to publish blog. Please try again.");
    } finally {
      setIsPublishing(false);
    }
  };

  useEffect(() => {
    const getUserName = async () => {
      try {
        const userNameData = await service.fetchUserName();
        setName(userNameData);
      } catch (error) {
        console.error("Error fetching user name:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getUserName();
  }, []);

  if (isLoading) {
    return (
      <div>
        <div className="my-container-3 pt-5 flex justify-between items-center pb-10">
          <div className="flex items-center">
            <Skeleton className="lg:w-[130px] lg:h-[35px] md:w-[130px] md:h-[35px] w-[100px] h-[35px]" />
            <Skeleton className="w-[150px] h-[20px] ml-2" />
          </div>
          <div className="flex items-center">
            <Skeleton className="w-[68px] h-[26px] rounded-full" />
            <Skeleton className="w-[24px] h-[24px] ml-6 mr-6 rounded-full" />
            <Skeleton className="w-[40px] h-[40px] rounded-full" />
          </div>
        </div>
        <div className="my-container-4">
          <Skeleton className="w-full h-[60px] mb-4" />
          <Skeleton className="w-full h-[24px] mb-2" />
          <Skeleton className="w-full h-[24px] mb-2" />
          <Skeleton className="w-full h-[24px] mb-2" />
          <Skeleton className="w-3/4 h-[24px]" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="my-container-3 pt-5 flex justify-between items-center pb-10">
        <div className="flex items-center">
          <Logo2 className="lg:block md:block hidden" />
          <h1 className="second-font text-sm tracking-wide ml-2 mt-4">
            Draft in
            {name.map((user) => (
              <span className="ml-1 font-semibold" key={user.id}>
                {user.full_name}
              </span>
            ))}
          </h1>
        </div>
        <div className="flex items-center">
          <div>
            <Dialog className="dialog-publish">
              <DialogTrigger asChild>
                <Button
                  variant="mybutton"
                  className={`text-primarywhite w-[68px] second-font h-[26px] rounded-full ${
                    isContentEmpty()
                      ? "bg-primarydisable cursor-not-allowed"
                      : "bg-primarygreen hover:bg-primarygreen"
                  }`}
                  disabled={isContentEmpty()}
                  onClick={(e) => {
                    if (isContentEmpty()) {
                      e.stopPropagation(); // Ensure proper event handling
                      e.preventDefault();
                    }
                  }}
                >
                  Publish
                </Button>
              </DialogTrigger>
              <DialogContent className="dialog-publish max-w-[100vw] xl:h-screen w-fit p-8">
                <div className="flex lg:flex-row flex-col gap-20 justify-center items-stretch">
                  <div className="flex flex-col pt-20 justfy-center max-w-[440px] w-full">
                    <h2 className="second-font text-primarydarkblack font-semibold mb-3 text-xl">
                      Story Preview
                    </h2>
                    <div className="flex justify-center items-center text-center bg-primarydarkwhite w-full h-[190px] rounded second-font text-primarylightbrown font-light text-sm mb-3">
                      <p>
                        Include a high-quality image in your story to <br />{" "}
                        make it more inviting to readers.
                      </p>
                    </div>
                    <input
                      placeholder="Write a preview title"
                      className="text-xl outline-none second-font text-primarydarkbrown font-semibold mb-1 w-full"
                      onChange={handlePreviewTitleChange}
                      value={previewTitle}
                    />
                    <div className="border-t-[1px] border-b-[1px] border-primarygreyBombay opacity-75">
                      <input
                        placeholder="Write a preview description  "
                        className="outline-none second-font text-primarydarkbrown pt-3 font-medium mb-1 w-full"
                        onChange={handleInputChange}
                        maxLength={maxChars}
                      />
                      <div className="text-[10px] second-font text-primarylightgrey text-left">
                        {charCount}/{maxChars}
                      </div>
                    </div>
                    <p className="second-font text-primarylightgrey text-sm mt-3">
                      <span className="font-semibold">Note:</span> Changes here
                      will affect how your story appears in public places like
                      Medium's homepage and in subscribers' inboxes — not the
                      contents of the story itself.
                    </p>
                  </div>
                  <div className="flex flex-col pt-20 justfy-center max-w-[440px]  w-full">
                    <h2 className="second-font text-primarydarkblack font-semibold mb-3 text-[19px]">
                      <span className="font-normal text-[19px]">
                        {" "}
                        Publishing to:{" "}
                      </span>
                      {name.map((user) => (
                        <span key={user.id}>{user.full_name}</span>
                      ))}
                    </h2>
                    <p className="text-sm mb-2 second-font">
                      Add or change topics (up to 5) so readers know what your
                      story is about
                    </p>
                    <input
                      placeholder="Add a topic..."
                      className="outline-none border second-font text-sm text-primarylightbrown bg-primarydarkwhite border-primarygreyBombay rounded-sm p-2 w-full mb-3 pt-4 pb-4"
                    />
                    <span className=" text-primarydustygrey text-sm">
                      <Link
                        to="https://help.medium.com/hc/en-us/articles/360018677974-What-happens-to-your-post-when-you-publish-on-Medium"
                        target="_blank"
                        className="underline text-primarydustygrey text-sm"
                      >
                        Learn more
                      </Link>{" "}
                      about what happens to your post when you publish.
                    </span>
                    <div className="mt-4">
                      <Button
                        className="text-primarywhite bg-primarydarkgreen hover:bg-primarydarkergreen rounded-full second-font transition-all duration-900 ease-in-sout"
                        variant="mybutton"
                        onClick={handlePublish}
                        disabled={isPublishing}
                      >
                        {isPublishing ? "Publishing..." : "Publish now"}
                      </Button>
                    </div>
                    {publishMessage && (
                      <p className="mt-2 text-sm font-semibold text-center">
                        {publishMessage}
                      </p>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <button className="ml-6 mr-6 text-primarylink hover:text-primaryblack mt-[6px]">
            <Ellipsis strokeWidth={1.1} />
          </button>
          <DashPopover />
        </div>
      </div>
      <div className="my-container-4">
        <input
          type="text"
          placeholder="Title"
          className="text-5xl outline-none w-full opacity-75 tracking-wide"
          onChange={handleMainHeadingChange}
          value={mainHeading}
        />
        <ReactQuill
          theme="bubble"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Tell Your Story..."
          className="text-4xl outline-none w-full write mt-3"
        />
      </div>
    </div>
  );
};

export default NewStory;
