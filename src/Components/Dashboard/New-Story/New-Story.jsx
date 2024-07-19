import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import Logo2 from "../../Common/Logo2";
import DashPopover from "../../Common/DashPopover";
import { Button } from "../../ui/button";
import { Ellipsis } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../../ui/dialog";
import { Skeleton } from "../../ui/skeleton";
import { Link, useNavigate } from "react-router-dom";
import service from "../../../supabase/config";
import { toast, Toaster } from "react-hot-toast";
import authService from "../../../supabase/auth";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ color: [] }, { background: [] }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "list",
  "bullet",
  "script",
  "indent",
  "direction",
  "color",
  "background",
  "link",
  "image",
];

const NewStory = () => {
  const navigate = useNavigate();
  const [mainHeading, setMainHeading] = useState("");
  const [name, setName] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [charCount, setCharCount] = useState(0);
  const [description, setDescription] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [previewDescription, setPreviewDescription] = useState("");
  const [publishMessage, setPublishMessage] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [id, setId] = useState("");

  const maxChars = 140;

  const handleMainHeadingChange = (e) => {
    setMainHeading(e.target.value);
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    const newCharCount = text.length;
    setCharCount(newCharCount > maxChars ? maxChars : newCharCount);
    setPreviewDescription(text.slice(0, maxChars));
  };

  const isContentEmpty = () => {
    return (
      mainHeading.trim() === "" ||
      description.replace(/<[^>]*>/g, "").trim() === ""
    );
  };

  const isPreviewEmpty = () => {
    return previewTitle.trim() === "" || previewDescription.trim() === "";
  };

  const handleDescriptionChange = (content) => {
    setDescription(content);
  };

  const handlePreviewTitleChange = (e) => {
    setPreviewTitle(e.target.value);
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    setIsPublishing(true);
    setPublishMessage("");

    try {
      if (isContentEmpty() || isPreviewEmpty()) {
        throw new Error("All fields must be filled out before publishing.");
      }

      const blogData = {
        heading: mainHeading,
        descriptionpreview: previewDescription.trim(),
        maincontent: description,
        slug: mainHeading
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, ""),
        headingpreview: previewTitle.trim(),
        author_id: id,
        author_name: name
          .filter((user) => user.full_name)
          .map((user) => user.full_name)
          .join(", "), // Convert to string
      };

      const result = await service.insertBlog(blogData);
      console.log(result);

      setPublishMessage("Blog published successfully!");
      toast.success("Blog published successfully!");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error publishing blog:", error);
      setPublishMessage("Failed to publish blog. Please try again.");
      toast.error("Failed to publish blog. Please try again.");
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
        toast.error("Failed to fetch user name. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    getUserName();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await authService.getUser();
        if (user) {
          setId(user.id);
        } else {
          console.error("No user found");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
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
      <Toaster position="top-right" />
      <div className="my-container-3 pt-5 flex justify-between items-center pb-10">
        <div className="flex items-center">
          <Logo2 className="lg:block md:block hidden" />
          <h1 className="second-font text-sm tracking-wide ml-2 mt-4">
            Draft in
            {name
              .filter((user) => user.full_name)
              .map((user) => (
                <span className="ml-1 font-semibold" key={user.id}>
                  {user.full_name}
                </span>
              ))}
          </h1>
        </div>
        <div className="flex items-center">
          <div>
            <Dialog
              className="dialog-publish overflow-scroll"
              open={isDialogOpen}
              onOpenChange={setIsDialogOpen}
            >
              <DialogTrigger asChild>
                <Button
                  variant="mybutton"
                  className={`text-primarywhite w-[68px] second-font h-[26px] rounded-full ${
                    isContentEmpty()
                      ? "bg-primarydisable cursor-not-allowed"
                      : "bg-primarygreen hover:bg-primarygreen"
                  }`}
                  disabled={isContentEmpty()}
                  onClick={() => {
                    if (!isContentEmpty()) {
                      setIsDialogOpen(true);
                    }
                  }}
                >
                  Publish
                </Button>
              </DialogTrigger>
              <DialogContent className="dialog-publish max-w-[100vw] xl:h-screen w-fit p-8">
                <div className="flex lg:flex-row flex-col lg:gap-20 md:gap-0 gap-0 justify-center items-center">
                  <div className="flex flex-col lg:pt-20 md:pt-1 pt-1 justfy-center max-w-[440px] w-full">
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
                        placeholder="Write a preview description"
                        className="outline-none second-font text-primarydarkbrown pt-3 font-medium mb-1 w-full"
                        onChange={handleInputChange}
                        value={previewDescription}
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
                      {name
                        .filter((user) => user.full_name)
                        .map((user) => (
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
                        rel="noopener noreferrer"
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
                        disabled={isPublishing || isPreviewEmpty()}
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
          modules={modules}
          formats={formats}
        />
      </div>
    </div>
  );
};

export default NewStory;
