
import React from 'react';
import PersonalitySlider from '../components/PersonalitySlider';
import ProgressBar from '../components/ProgressBar';
import { User, Globe, AlertCircle, Brain } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-['Inter'] text-gray-900">
      <div className="flex">
        {/* Left Column - Image (25%) */}
        <div className="w-1/4 h-screen relative">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
            alt="Professional woman in office"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-4 right-4 bg-[#003B4A] text-white p-6 rounded-lg">
            <p className="text-lg">
              "I take great pride helping others get hired, unlocking their full potential as long as providing perfect employee for my clients."
            </p>
          </div>
        </div>

        {/* Right Column - Content (75%) */}
        <div className="w-3/4 p-12 overflow-y-auto h-screen">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold mb-2">Olivia</h1>
            <p className="text-gray-600">IT Recruiter • Team Leader</p>
          </div>

          {/* About Section */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-2 text-lg font-medium">
              <User className="text-emerald-500" />
              <h2>About me</h2>
            </div>
            <p className="text-gray-600">
              Olivia has always been interested in recruiting and she has a knack for it. Starting as a freelancer, she then joined the recruitment team in one of the IT companies as she loves human contact.
            </p>
            <p className="text-gray-600">
              Olivia has the kind of friendly and energetic personality that candidates love to be around, and if you're lucky enough to be one of her candidates you'll get 120% from her.
            </p>
            <p className="text-gray-600">
              A couple of months ago she was promoted to the Team Leader position leading a team of five IT Recruiters. She is more and more into managing people and employer branding.
            </p>
          </div>

          {/* Demographics */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-2 text-lg font-medium">
              <Globe className="text-emerald-500" />
              <h2>Demographic</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Age</p>
                <p className="font-medium">33</p>
              </div>
              <div>
                <p className="text-gray-600">Location</p>
                <p className="font-medium">Berlin, Germany</p>
              </div>
              <div>
                <p className="text-gray-600">Income</p>
                <p className="font-medium">€61,000/yr</p>
              </div>
            </div>
          </div>

          {/* Pain Points */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-2 text-lg font-medium">
              <AlertCircle className="text-emerald-500" />
              <h2>Pain points</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Spending too much time on sourcing candidates and reviewing</li>
              <li>• Has problems supporting and managing her team properly with no option to assign projects.</li>
              <li>• The current ATS solution her team uses is cluttered, hard to figure out.</li>
            </ul>
          </div>

          {/* Personality */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-2 text-lg font-medium">
              <Brain className="text-emerald-500" />
              <h2>Personality</h2>
            </div>
            <div>
              <PersonalitySlider leftLabel="Introvert" rightLabel="Extrovert" value={75} />
              <PersonalitySlider leftLabel="Thinking" rightLabel="Feeling" value={60} />
              <PersonalitySlider leftLabel="Sensing" rightLabel="Intuition" value={45} />
              <PersonalitySlider leftLabel="Judging" rightLabel="Perceiving" value={70} />
              <PersonalitySlider leftLabel="Loyal" rightLabel="Fickle" value={15} />
            </div>
          </div>

          {/* Work Experience */}
          <div className="mt-8 space-y-4">
            <h2 className="text-lg font-medium">Work experience</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 mb-2">Early adopter</p>
                <ProgressBar value={90} color="blue" />
              </div>
              <div>
                <p className="text-gray-600 mb-2">Technical familiarity</p>
                <ProgressBar value={45} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
