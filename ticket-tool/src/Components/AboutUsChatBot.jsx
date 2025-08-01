import React, { useState, useEffect, useRef } from 'react';
import { Container, Card, Form, Button, InputGroup } from 'react-bootstrap';
import 'animate.css';

const AboutUsChatbot = () => {
  // ===== DATA CONFIGURATION =====
  const companyInfo = {
    about: {
      description: "SmartHub is the leading platform to streamline your support with intelligent automation and modern teamwork tools. We are dedicated to providing innovative solutions that enhance customer service and operational efficiency.",
      foundingYear: "2015",
      employees: "50+",
      locations: "San Francisco, New York, and remote teams worldwide"
    },
    services: [
      "AI-powered ticketing systems",
      "Real-time analytics dashboards",
      "Customer support automation",
      "24/7 support solutions"
    ],
    team: {
      size: "50+ professionals",
      departments: "Engineering, Support, Operations, and Sales"
    },
    contact: {
      email: "info@company.com",
      phone: "+1 (555) 123-4567",
      address: "123 Tech Street, San Francisco, CA"
    },
    auth: {
      signin: "https://yourcompany.com/signin",
      signup: "https://yourcompany.com/signup",
      support: "support@company.com"
    }
  };

  // Predefined quick questions users can click
  const quickQuestions = [
    "What does your company do?",
    "Where are you located?",
    "How big is your team?",
    "What services do you offer?",
    "How can I sign in?",
    "How can I raise a ticket?",
    "Who are you?"
  ];

  // ===== CHAT LOGIC =====
  const [messages, setMessages] = useState([
    { 
      sender: 'assistant', 
      text: "Hello! I'm your virtual assistant here to help you with information about our company and services.", 
      time: formatTime(),
      animation: "animate__fadeInUp"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  function formatTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      sender: 'user',
      text: inputValue,
      time: formatTime(),
      animation: "animate__fadeInUp"
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Generate bot response
    setTimeout(() => {
      const response = generateResponse(inputValue);
      const botMessage = {
        sender: 'assistant',
        text: response,
        time: formatTime(),
        animation: "animate__fadeInUp"
      };
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    setTimeout(() => {
      const fakeEvent = { preventDefault: () => {} };
      handleSendMessage(fakeEvent);
    }, 100);
  };

  const generateResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('what') && lowerQuery.includes('do')) {
      return companyInfo.about.description;
    }
    else if (lowerQuery.includes('service') || lowerQuery.includes('offer')) {
      return `We offer:\n${companyInfo.services.map(s => `• ${s}`).join('\n')}`;
    }
    else if (lowerQuery.includes('team') || lowerQuery.includes('employee')) {
      return `Our team consists of ${companyInfo.team.size} across ${companyInfo.team.departments}.`;
    }
    else if (lowerQuery.includes('where') || lowerQuery.includes('location')) {
      return `We're located in ${companyInfo.about.locations}.`;
    }
    else if (lowerQuery.includes('contact') || lowerQuery.includes('reach')) {
      return `You can contact us at:\nEmail: ${companyInfo.contact.email}\nPhone: ${companyInfo.contact.phone}\nAddress: ${companyInfo.contact.address}`;
    }
    else if (lowerQuery.includes('history') || lowerQuery.includes('founded')) {
      return `Our company was founded in ${companyInfo.about.foundingYear}. ${companyInfo.about.description}`;
    }
    else if (lowerQuery.includes('sign in') || lowerQuery.includes('login')) {
      return `You can sign in here: ${companyInfo.auth.signin}\nDon't have an account? Sign up here: ${companyInfo.auth.signup}`;
    }
    else if (lowerQuery.includes('sign up') || lowerQuery.includes('register')) {
      return `You can create an account here: ${companyInfo.auth.signup}`;
    }
    else if (lowerQuery.includes('ticket') || lowerQuery.includes('issue')) {
      return `To raise a ticket:\n1. Sign in to your account\n2. Go to the Tickets section\n3. Click "Create New Ticket"\n\nNeed help? Contact our support team at ${companyInfo.auth.support}`;
    }
    else if (lowerQuery.includes('who are you') || lowerQuery.includes('what are you')) {
      return "I'm an AI assistant here to help you with information about our company and services. How can I assist you today?";
    }
    else if (lowerQuery.includes('how are you')) {
      return "I'm just a program, so I don't have feelings, but I'm ready to help you with any questions!";
    }
    else {
      return "I can help with information about our company, services, team, or account-related questions. Could you ask about one of those?";
    }
  };

  return (
    <Container className="my-5 animate__animated animate__fadeIn" style={{ maxWidth: '500px' }}>
      <Card className="shadow-lg border-0">
        <Card.Header className="d-flex align-items-center" style={{ 
          backgroundColor: 'rgb(31 41 55)', 
          color: 'white',
          borderBottom: '3px solid rgb(249 115 22)'
        }}>
          <div className="me-2">
            <div className="bg-success rounded-circle pulse-animation" style={{ width: '12px', height: '12px' }}></div>
          </div>
          <div>
            <h6 className="mb-0">Company Assistant</h6>
            <small>Online</small>
          </div>
        </Card.Header>
        
        <Card.Body style={{ 
          height: '400px', 
          overflowY: 'auto', 
          backgroundColor: '#f8f9fa',
          backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(248,249,250,0.9))'
        }}>
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`mb-3 d-flex animate__animated ${message.animation} ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
            >
              <div 
                className={`p-3 rounded ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-white border'}`}
                style={{ 
                  maxWidth: '80%',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <small className={`fw-bold ${message.sender === 'user' ? 'text-white' : 'text-dark'}`}>
                    {message.sender === 'user' ? 'You' : 'Assistant'}
                  </small>
                  <small className={`ms-2 ${message.sender === 'user' ? 'text-white-50' : 'text-muted'}`}>
                    {message.time}
                  </small>
                </div>
                <p className="mb-0" style={{ whiteSpace: 'pre-line' }}>
                  {message.text.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
                {message.text.includes('http') && (
                  <Button 
                    variant="link" 
                    size="sm" 
                    className="p-0 mt-2" 
                    onClick={() => window.open(message.text.match(/https?:\/\/[^\s]+/)[0], '_blank')}
                    style={{ color: 'rgb(249 115 22)' }}
                  >
                    Click to visit link
                  </Button>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </Card.Body>

        {/* Quick Questions */}
        <div className="px-3 pt-2" style={{ backgroundColor: '#f1f3f5' }}>
          <div className="d-flex flex-wrap gap-2 mb-2">
            {quickQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline-secondary"
                size="sm"
                className="rounded-pill animate__animated animate__fadeIn"
                style={{ 
                  animationDelay: `${0.2 + index * 0.1}s`,
                  backgroundColor: 'rgba(249, 115, 22, 0.1)',
                  borderColor: 'rgb(249 115 22)',
                  color: 'rgb(249 115 22)'
                }}
                onClick={() => handleQuickQuestion(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>

        <Card.Footer style={{ backgroundColor: '#f1f3f5' }}>
          <Form onSubmit={handleSendMessage}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Ask about our company or services..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{ borderColor: 'rgb(249 115 22)' }}
              />
              <Button 
                variant="primary" 
                type="submit"
                style={{ backgroundColor: 'rgb(249 115 22)', borderColor: 'rgb(249 115 22)' }}
              >
                Send
              </Button>
            </InputGroup>
          </Form>
        </Card.Footer>
      </Card>

      <style jsx>{`
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </Container>
  );
};

export default AboutUsChatbot;