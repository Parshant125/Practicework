'use client';

import { useState } from 'react';

interface Question {
  id: number;
  question: string;
  type: string;
}

interface FormData {
  title: string;
  description: string;
  questions: Question[];
  image: {
    alt_text: string;
    description: string;
  };
}

interface FooterData {
  title: string;
  description: string;
  navigation: string[];
  language: string;
}

interface JointContentData {
  Form: FormData;
  Footer: FooterData;
}

interface JointContentPageProps {
  data: JointContentData;
}

export default function JointContentPage({ data }: JointContentPageProps) {
  const [formAnswers, setFormAnswers] = useState<Record<number, string>>({});

  const handleAnswerChange = (questionId: number, answer: string) => {
    setFormAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formAnswers);
  };

  return (
    <div className="space-y-8">
      {/* Form Section */}
      <div className="bg-[#2A2A2A] rounded-lg p-6">
        <h1 className="text-2xl font-bold text-yellow-400 mb-4">
          {data.Form.title}
        </h1>
        
        <div className="mb-6">
          {data.Form.description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-300 mb-3">
              {paragraph}
            </p>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {data.Form.questions.map((question) => (
            <div key={question.id} className="space-y-2">
              <label 
                htmlFor={`question-${question.id}`}
                className="block text-white font-medium"
              >
                {question.question}
              </label>
              <textarea
                id={`question-${question.id}`}
                value={formAnswers[question.id] || ''}
                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                className="w-full p-3 bg-[#1E1E1E] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 resize-none"
                rows={4}
                placeholder="Tell us your story..."
              />
            </div>
          ))}
          
          <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-300 transition-colors"
          >
            Submit Application
          </button>
        </form>

        {/* Image section for inspiration */}
        <div className="mt-8 p-4 bg-[#1E1E1E] rounded-md">
          <div className="flex items-center justify-center h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-md">
            <span className="text-white text-sm text-center px-4">
              {data.Form.image.description}
              <br />
              <span className="text-xs opacity-75">{data.Form.image.alt_text}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#2A2A2A] rounded-lg p-6">
        <h2 className="text-xl font-bold text-yellow-400 mb-3">
          {data.Footer.title}
        </h2>
        
        <p className="text-gray-300 mb-4">
          {data.Footer.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          {data.Footer.navigation.map((item, index) => (
            <button
              key={index}
              className="text-left text-gray-300 hover:text-yellow-400 transition-colors p-2 rounded hover:bg-[#1E1E1E]"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="text-sm text-gray-500">
          Language: {data.Footer.language}
        </div>
      </div>
    </div>
  );
}