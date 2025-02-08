import React from "react";

interface AboutTextProps {
  title: string;
  content?: string;
}

const AboutText: React.FC<AboutTextProps> = ({ title, content = "" }) => {
  return (
    <div>
      <div className="flex text-gray-700 px-[100px] py-[80px]">
        <span className="uppercase mr-[200px] text-[24px] w-[308px]">
          {title}
        </span>
        {content && (
          <p
            className="text-[18px]"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </div>
  );
};

export default AboutText;
