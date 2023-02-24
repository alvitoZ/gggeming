import { Input } from "../atoms/Input";
import { TextArea } from "../atoms/TextArea";
import Button from "../atoms/Button";
import ImageContent from "./ImageContent";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className="w-full flex gap-14 justify-beetween pb-20">
        <div className="">
          <ImageContent />
        </div>
        <div className="w-[65%]">
          <h1 className="text-[#A03C78] h-auto font-bold font-dmsans text-[3rem] pt-14 pb-5">
            Get in touch today
          </h1>
          <p className="text-[#9795B5] font-normal text-[18px]">
            Keep in touch with us!
          </p>
          <div className="pt-12 flex flex-wrap w-3/4">
            <div>
              <Input title="Name" type="text" placeholder="John Carter" />
              <Input title="Phone" type="text" placeholder="(123) 456 - 789" />
            </div>
            <div className="pl-4">
              <Input
                title="Email"
                type="email"
                placeholder="example@email.com"
              />
              <Input title="Company" type="text" placeholder="Facebook" />
            </div>
            <div>
              <TextArea
                title="Message"
                placeholder="Please type your message here..."
              />
            </div>
            <div className="">
              <Button title="Send message" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
