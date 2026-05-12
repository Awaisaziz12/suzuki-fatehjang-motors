
// "use client";
// import Image from "next/image";
// import React, { useState, useEffect, useRef, useCallback } from "react";
// import favicon from "../public/favicon.png";
// import img from "../public/168-r-br.svg";
// const MAX_MESSAGES = 1115;
// const DEFAULT_RESPONSE = "I'm sorry, I didn't understand that. How else can I assist you?";

// type Message = { text: string; sender: "user" | "bot" };

// export function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [inputValue, setInputValue] = useState("");
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
//     if (isOpen) inputRef.current?.focus();
//   }, [messages, isOpen]);

//   const addMessage = useCallback((message: Message) => {
//     setMessages(prev => [...prev, message].slice(-MAX_MESSAGES));
//   }, []);

//   const getBotResponse = useCallback((userMessage: string): Message => {
//     const lowerMsg = userMessage.toLowerCase().trim().replace(/\s+/g, "_");
//     const responses: { [key: string]: string } = {
//       // Basic interaction
//       hi: "Hello! Welcome to Suzuki Race Course Motors. How can I assist you today?",
//       hello: "Hello! Welcome to Pakistan's premier Suzuki dealership. How can I help you?",
//       how_are_you: "I'm doing great, ready to help you with all your Suzuki needs!",
    
//       // Business info
//       hours: "Our business hours are 9:00 AM to 5:45 PM, Monday to Saturday. We are closed on Sundays.",
//       timing: "Visit us between 9:00 AM to 5:45 PM weekdays and Saturdays. Closed Sundays.",
//       contact: "You can reach us via email at info@suzukifatehjang.com or by phone at +92 304 1111990.",
//       location: "Find us at 299/A Peshawar Rd, Awan Town New, Rawalpindi. Visit our website for directions.",
//       address: "Our showroom is located at 299/A Peshawar Road, Awan Town New, Rawalpindi.",
    
//       // Services
//       services: "We offer mechanical workshop services, extended warranty packages, and a premium paint & body shop.",
//       workshop: "Our Suzuki-certified workshop offers complete maintenance and repair services using genuine parts.",
//       warranty: "We provide comprehensive extended warranty packages for complete peace of mind.",
//       painting: "Our paint & body shop uses OEM-approved materials and techniques for perfect color matching.",
    
//       // Vehicles
//       cars: "Available models: Suzuki Swift, Cultus, Alto, Every, Wagon-R, and Ravi.",
//       models: "Current lineup includes Swift, Cultus, Alto, Every, Wagon-R, and Ravi for test drives.",
//       test_drive: "Schedule a test drive through our website's 'Book a Test Drive' section!",
//       prices: "For latest prices and offers, please check our website's vehicle pages or visit the showroom.",
//       booking: "Vehicle bookings can be made through our authorized dealers listed on the website.",
    
//       // Technical
//       genuine_parts: "We only use genuine Suzuki parts for optimal performance and warranty compliance.",
//       technicians: "Our ASE-certified technicians specialize in Suzuki vehicle maintenance and repairs.",
//       equipment: "Facilities feature computerized diagnostics and OEM-specific repair equipment.",
//       maintenance: "Regular maintenance packages available - check our service plans section online.",
    
//       // Digital Services
//       website: "Visit our full website at https://suzukifatehjang.com.pk/ for services, bookings, and information.",
//       appointment: "Book services online using our 'Reserve Appointment' feature on the website.",
//       track_service: "Check your vehicle's service status through the 'Service Tracking' portal on our site.",
    
//       // Policies
//       return_policy: "All sales final - see warranty terms for service-related guarantees on our website.",
//       cancellation: "Appointment changes can be made through our online portal or by calling +92 304 1111990.",
    
//       // Special Features
//       offers: "Current promotions are always updated on our website's 'Special Offers' page.",
//       financing: "We offer flexible auto financing options - visit our 'Financial Services' section to apply online.",
//       insurance: "Get insurance quotes through our partnered providers via the website's insurance calculator.",
//       accessories: "Explore genuine Suzuki accessories in our online catalog and showroom.",
    
//       // Additional Services
//       roadside: "24/7 roadside assistance available for customers with active service contracts.",
//       recall: "Check for recall notifications in the 'Vehicle Services' section of our website.",
//       membership: "Join our loyalty program for exclusive benefits - register through our website.",
    
//       // Fallback
//       default: "For more details, please visit our website: https://suzukifatehjang.com.pk/ or call +92 304 1111990."
//     };

//     const responseKey = Object.keys(responses).find(key =>
//       lowerMsg.includes(key) && key !== "default"
//     ) || 'default';

//     return { text: responses[responseKey], sender: "bot" };
//   }, []);

//   const handleSendMessage = useCallback(() => {
//     const trimmedMessage = inputValue.trim();
//     if (!trimmedMessage) return;

//     addMessage({ text: trimmedMessage, sender: "user" });
//     setInputValue("");

//     setTimeout(() => {
//       addMessage(getBotResponse(trimmedMessage));
//     }, 800);
//   }, [inputValue, addMessage, getBotResponse]);

//   return (
//     <div className="fixed bottom-4 right-4 z-50 ">
//       <div onClick={() => setIsOpen(!isOpen)} style={{ height: "80px", width: "80px", cursor: "pointer" }}>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552">
//           <defs>
//             <linearGradient
//               id="b"
//               x1="85.915"
//               x2="86.535"
//               y1="32.567"
//               y2="137.092"
//               gradientUnits="userSpaceOnUse"
//             >
//               <stop offset="0" stopColor="#57d163" />
//               <stop offset="1" stopColor="#23b33a" />
//             </linearGradient>
//             <filter
//               id="a"
//               width="1.115"
//               height="1.114"
//               x="-.057"
//               y="-.057"
//               colorInterpolationFilters="sRGB"
//             >
//               <feGaussianBlur stdDeviation="3.531" />
//             </filter>
//           </defs>
//           <path
//             fill="#b3b3b3"
//             d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
//             filter="url(#a)"
//           />
//           <path
//             fill="#fff"
//             d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
//           />
//           <path
//             fill="url(#linearGradient1780)"
//             d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
//           />
//           <path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z" />
//           <text
//             x="50%"
//             y="50%"
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fill="#FF000"
//             fontSize="25"
//             fontFamily="Arial,bold"
//             fontWeight="bold"

//           >
//           Chat Us 
//           </text>
//         </svg>
//       </div>
//       {isOpen && (
//         <ChatWindow
//           messages={messages}
//           inputValue={inputValue}
//           onInputChange={setInputValue}
//           onSend={handleSendMessage}
//           onClose={() => setIsOpen(false)}
//           inputRef={inputRef}
//           messagesEndRef={messagesEndRef}
//         />
//       )}
//     </div>
//   );
// }


// const ChatWindow: React.FC<{
//   messages: Message[];
//   inputValue: string;
//   onInputChange: (value: string) => void;
//   onSend: () => void;
//   onClose: () => void;
//   inputRef: React.RefObject<HTMLInputElement>;
//   messagesEndRef: React.RefObject<HTMLDivElement>;
// }> = ({ messages, inputValue, onInputChange, onSend, onClose, inputRef, messagesEndRef }) => (
//   <div className="bg-white containerss  containerssmobile" style={{ height: "450px" }}>
//     {/* Header */}
//     <div className="bg-blue text-white flex dflex p-1">
//       <Image src={favicon} alt="" width={60} height={60} className="p-1" />
//       <h6 className="p-1 d-flex text-Black">
//         Welcome To Suzuki Fatehjang Motors
//       </h6>
//       <div
//         onClick={onClose} className="p-2 cursor text-bold "
//       >
//         ❌
//       </div>
//     </div>

//     <div className="flex-1  bg-white p-4 h-96 overflow-y-auto" style={{ maxHeight: "400px" }}>
//       {messages.length === 0 ? (
//         <WelcomeMessage />
//       ) : (
//         messages.map((msg, i) => (
//           <ChatBubble key={i} message={msg} />
//         ))
//       )}
//       <div ref={messagesEndRef} />
//     </div>

//     <ChatInput
//       value={inputValue}
//       onChange={onInputChange}
//       onSend={onSend}
//       inputRef={inputRef}
//     />
//   </div>
// );



// const ChatBubble: React.FC<{ message: Message }> = ({ message }) => (
//   <div className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-1`}>
//     <div
//       className={`max-w-[75%] p-1 rounded-lg ${message.sender === "user"
//         ? "bg-blue-500 text-black "
//         : "bg-gray-100  text-gray-800 border"
//         }`}
//     >
//       {message.text}
//     </div>
//   </div>
// );

// const ChatInput: React.FC<{
//   value: string;
//   onChange: (value: string) => void;
//   onSend: () => void;
//   inputRef: React.RefObject<HTMLInputElement>;
// }> = ({ value, onChange, onSend, inputRef }) => (
//   <div className=" p-1 bg-white border-gray-200 dflex ">
//     <input
//       ref={inputRef}
//       type="text"
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       onKeyPress={(e) => e.key === "Enter" && onSend()}
//       placeholder="Type your message..."
//       className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//     <div
//       onClick={onSend}
//       aria-label="Send message"
//       className="bg-white text-black p-2 rounded-lg hover:bg-blue-600 cursor transition-colors"
//       style={{ width: "70px", height: "70px" }}
//     >
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-1 h-1">
//         <path d="M2 21l21-9L2 3v7l15 2-15 2z" />         </svg>    </div>
//   </div>
// );

// const WelcomeMessage = () => (
//   <div className="text-center text-gray-600 p-4">
//     <h6 className="font-medium mb-2">👋 Live Chat 24/7</h6>
//     <p className="text-sm">Welcome to Suzuki Fatehjang Motors! How can I assist you today?</p>
//   </div>
// );


