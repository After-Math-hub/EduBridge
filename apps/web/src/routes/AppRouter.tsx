import { Routes, Route, Navigate } from "react-router-dom";
import { WelcomePage } from "../features/welcome/WelcomePage";
import { DashboardPage } from "../features/dashboard/DashboardPage";
import { ComingSoonPage } from "../components/common/ComingSoonPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/my-learning" element={<ComingSoonPage title="My Learning" description="Explore your personalized learning path with courses, lessons, and resources tailored to your needs." />} />
      <Route path="/assessments" element={<ComingSoonPage title="Assessments" description="Take tests, quizzes, and assignments to evaluate your understanding and track progress." />} />
      <Route path="/reports" element={<ComingSoonPage title="Reports" description="View detailed analytics on your learning progress, strengths, and areas for improvement." />} />
      <Route path="/calendar" element={<ComingSoonPage title="Calendar" description="Stay organized with your class schedule, deadlines, and important events." />} />
      <Route path="/messages" element={<ComingSoonPage title="Messages" description="Communicate with teachers and classmates to get help and collaborate on projects." />} />
      <Route path="/community" element={<ComingSoonPage title="Community" description="Connect with other learners, share experiences, and build meaningful relationships." />} />
      <Route path="/resources" element={<ComingSoonPage title="Resources" description="Access study materials, learning guides, and additional resources to enhance your education." />} />
      <Route path="/settings" element={<ComingSoonPage title="Settings" description="Manage your account preferences, privacy settings, and learning options." />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
