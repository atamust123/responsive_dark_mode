import { WhatsappIcon } from "react-share";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/+905495051990"
      target="_blank"
      className="absolute z-10 opacity-80 hover:opacity-100"
    >
      <WhatsappIcon
        round={true}
        size={48}
        className="fixed bottom-10 m-2 cursor-pointer"
      />
    </a>
  );
}
