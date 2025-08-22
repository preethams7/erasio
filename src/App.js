import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import StudentInfo from "./components/StudentInfo";
import AccountSettings from "./components/AccountSettings ";
import StudentWallet from "./components/StudentWallet ";
import Attendance from "./components/studentCourses";
import CourseDetails from "./components/CourseDetails";
import CourseEnrollment from "./components/CourseEnrollment";
import StationeryServices from "./components/StationeryServices";
import ShoppingCart from "./components/ShoppingCart";
import UpcomingEvents from "./components/UpcomingEvents";
import CreateEvent from "./components/CreateEvent";
import AttendedEvents from "./components/AttendedEvents";
import EventDetails from "./components/EventDetails";
import ELibrary from "./components/ELibrary";
import AdditionalServices from "./components/AdditionalServices";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/student-info" element={<StudentInfo />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/student-wallet" element={<StudentWallet />} />
        <Route path="/attendance" element={<Attendance />} />
         <Route path="/course-enrollment" element={<CourseEnrollment />} /> {/* Route for course listing */}
        <Route path="/course-details/:courseCode" element={<CourseDetails />} /> {/* Route for a specific course */}
         <Route path="/stationary-services" element={<StationeryServices />} />
         <Route path="/shopping-cart" element={<ShoppingCart />} />
         <Route path="/upcoming-events" element={<UpcomingEvents />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/attended-events" element={<AttendedEvents />} />
         <Route path="/event-details/:id" element={<EventDetails />} /> 
         <Route path="/e-library" element={<ELibrary />} /> 
         <Route path="/additional-services" element={<AdditionalServices />} /> 
         
      </Routes>
    </Router>
  );
}

export default App;
