import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
// import ChatBot from '../../lib/index';
import React from "react";
const theme = {
  background: "#D6FAE6",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#F97316",
  headerFontColor: "#000",
  headerFontSize: "30px",
  botBubbleColor: "cyan",
  botFontColor: "#000",
  userBubbleColor: "#DCFCE7",
  userFontColor: "#4a4a4a",
};
const steps = [
  {
    id: "1",
    message: `Hello I'm jobby, how may I help you`,
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: `okay what's your name`,
    trigger: "4",
  },
  {
    id: "4",
    user: true,
    trigger: "5",
  },
  {
    id: "5",
    message: `ok {previousValue}, please mention your experience`,
    trigger: "6",
  },
  {
    id: "6",
    user: true,
    trigger: "7",
  },
  {
    id: "7",
    message: `please select your profession`,
    trigger: "8",
  },
  {
    id: "8",
    options: [
      { value: 1, label: "Engeniring", trigger: "9" },
      { value: 2, label: "Medical", trigger: "9" },
      // { value: 3, label: 'Number 3', trigger: '8' },
    ],
  },
  {
    id: "9",
    message: `ok can you please upload your resume`,
    trigger: "10",
  },
  {
    id: "10",
    component: <div> Resume Upload</div>,
    end: true,
  },
];

function Chatbot() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center my-16">
      <div>
        <p className="text-4xl text-cyan-500 font-poppins text-center font-bold">
          Welcome to Job Buddy!
        </p>
        <p className="text-lg text-black font-poppins mt-2 text-center">
          Our bot Jobby is at your service.
        </p>
      </div>

      <div>
        <ThemeProvider theme={theme}>
          <ChatBot steps={steps} />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Chatbot;
