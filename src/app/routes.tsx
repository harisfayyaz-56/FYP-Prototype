import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// Admin Pages
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminHostels from "./pages/admin/AdminHostels";
import AdminReports from "./pages/admin/AdminReports";

// Hostel Owner Pages
import HostelOwnerLayout from "./pages/hostel-owner/HostelOwnerLayout";
import HostelOwnerDashboard from "./pages/hostel-owner/HostelOwnerDashboard";
import HostelOwnerProfile from "./pages/hostel-owner/HostelOwnerProfile";
import HostelOwnerHostels from "./pages/hostel-owner/HostelOwnerHostels";
import AddHostel from "./pages/hostel-owner/AddHostel";

// Student Pages
import StudentLayout from "./pages/student/StudentLayout";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import StudentHostels from "./pages/student/StudentHostels";
import StudentMatches from "./pages/student/StudentMatches";
import StudentFriends from "./pages/student/StudentFriends";
import StudentChat from "./pages/student/StudentChat";

// Shared Pages
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "users", Component: AdminUsers },
      { path: "hostels", Component: AdminHostels },
      { path: "reports", Component: AdminReports },
    ],
  },
  {
    path: "/hostel-owner",
    Component: HostelOwnerLayout,
    children: [
      { index: true, Component: HostelOwnerDashboard },
      { path: "profile", Component: HostelOwnerProfile },
      { path: "hostels", Component: HostelOwnerHostels },
      { path: "add-hostel", Component: AddHostel },
    ],
  },
  {
    path: "/student",
    Component: StudentLayout,
    children: [
      { index: true, Component: StudentDashboard },
      { path: "profile", Component: StudentProfile },
      { path: "hostels", Component: StudentHostels },
      { path: "matches", Component: StudentMatches },
      { path: "friends", Component: StudentFriends },
      { path: "chat", Component: StudentChat },
      { path: "chat/:userId", Component: StudentChat },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
