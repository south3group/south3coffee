import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import axios from 'axios';

import MemberSidebar from '../../components/MemberSidebar/MemberSidebar';
import Footer from '../../components/Footer/Footer';

import 'react-datepicker/dist/react-datepicker.css';

function EditProfile() {
    const [userData, setUserData] = useState({
        userName: "",
        userGender: "",
        userBirth: null,
        userPhone: "",
        userAddress: "",
      });
    
      const [formValidated, setFormValidated] = useState(false);
      const [fieldErr, setFieldErr] = useState({});
    
      const [isOpen, setIsOpen] = useState(false);
      const [modalTitle, setModalTitle] = useState("");
      const [modalMsg, setModalMsg] = useState("");
      const [modalType, setModalType] = useState("");
    
      const datepickerRef = useRef(null);
      const navigate = useNavigate();
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setFieldErr((prevErr) => ({
          ...prevErr,
          [name]: "",
        }));
      };
    
      const handleCloseModal = () => {
        setIsOpen(false);
        if (modalType === "toLogin") {
          navigate("/login");
        }
      };
    
      const apiUrl = import.meta.env.VITE_API_URL;
      const route = `${apiUrl}/api/v1/users/membership/profile`;

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <MemberSidebar>

        </MemberSidebar>
      </div>
      <Footer />
    </div>
  );
}

export default EditProfile;
