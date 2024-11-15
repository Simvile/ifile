# I-File Manager

## About the Project

**I-File Manager** is an evolving project initially designed as a file management tool but has since expanded into a comprehensive management system for companies and their processes. The system integrates a **Progressive Web App (PWA)**, allowing users to access it as both a mobile app and a website.

### Test the project:
- <a href="https://4994-41-114-104-86.ngrok-free.app/home" target="_blank">Click on this link to test ifile using ngrok</a>

### Current Features

1. **I-File Manager**  
   - Enables uploading, downloading, deleting, and viewing files.  
   - File actions are restricted based on user permissions.  
   - Meta-information about files is stored in a **Microsoft SQL Database**, while the files themselves are securely stored in an **AWS S3 bucket**.

2. **Messenger**  
   - Facilitates real-time communication among staff members.  
   - Supports private chats, group conversations, and team interactions.  
   - Built using **SignalR** and **WebSockets** for live updates and chat notifications.  
   - Chat history and user interactions are stored in the database.

3. **Employee Services**  
   - Includes microservices like team creation and management, employee and device management, and leave application.  
   - Users can create, save, and submit forms for tasks like leave requests.  

4. **Attendance Management**  
   - Tracks staff attendance and work hours.  
   - Records tasks and breaks taken.  
   - Provides visual graphs for monitoring attendance consistency.  

5. **Additional Features**  
   - **Task Manager**: Assign and monitor tasks.  
   - **Notification Handler**: Manage and deliver system notifications.  
   - **Voice Assistance**: Voice-controlled navigation and assistance.  
   - **Database Configuration**: Tools for managing and customizing database settings.

---

## Tools and Technologies

The project uses a modern tech stack to ensure scalability, reliability, and efficient performance:

- **Backend**:  
  - **C#** and **.NET Web API** for RESTful service development.  
  - **Microsoft SQL Server** for database management.  
  - **AWS S3** for secure file storage.  

- **Frontend**:  
  - **Angular** for building a responsive and dynamic UI.  
  - **Bootstrap**, **HTML**, and **SCSS** for styling.  

- **Real-Time Communication**:  
  - **SignalR** for instant messaging and live updates.  

- **DevOps and Deployment**:  
  - **Docker** for containerization.  
  - **Git** and **Git Workflows** for version control and team collaboration.

---

## Development Practices

The project follows industry best practices to ensure high-quality software:

- **Test-Driven Development (TDD)**: Writing tests before implementing features to ensure code reliability.  
- **Event-Driven Development**: Building features that respond to specific triggers or actions.  
- **SOLID Principles**: Ensuring clean, maintainable, and scalable code.

---

## Current Status

The system is under active development, and its features are progressively being implemented and refined.

---

## Screenshots

1. Ifile Manager
   - Desktop View :
     Folders Page:
     
     ![image](https://github.com/user-attachments/assets/b9ad6051-292e-43e6-9be5-0ba4f65e96cf)
     
     Files Page :
     
     ![image](https://github.com/user-attachments/assets/3141e714-637d-496c-8659-a2270a4ddc4a)

   - Mobile View :
     Folder View:
     
     ![WhatsApp Image 2024-11-13 at 17 16 27_85f27623](https://github.com/user-attachments/assets/45b41d2e-5df8-46ab-bee4-800efcf006bd)
     
     Files View:
     
     ![WhatsApp Image 2024-11-13 at 16 36 15_48134886](https://github.com/user-attachments/assets/0f6e32f6-2ba7-4142-ada4-62b78c2b8535)

2. Messenger
   - Desktop View :
     
     ![image](https://github.com/user-attachments/assets/0474ea61-f380-44a9-af27-54c93aab1631)
     
     ![image](https://github.com/user-attachments/assets/a5e8dad8-0674-4f65-a1e0-c16288a5fe79)

   - Mobile View :
     
     ![image](https://github.com/user-attachments/assets/6ef2b6c4-c9b7-40f6-9f9e-65c1d4fa51cb)
     
     ![image](https://github.com/user-attachments/assets/5fe63bd5-de87-48cc-a52c-faedf01813e4)
     
     ![image](https://github.com/user-attachments/assets/bcc2dc49-5131-45c7-82f4-ad64c619f6d1)

3. Employee Service
   - Desktop View :
     
     ![image](https://github.com/user-attachments/assets/721de613-cf28-41f0-a4bf-188dbc0ad39a)
     
     ![image](https://github.com/user-attachments/assets/691358fe-6213-441e-a64e-8ea11296ffeb)

---

## Contribution

This project uses **Git workflows** for version control. Contributions are welcome via pull requests.  

---

## Contact

For more information or questions, please contact the project maintainer at:  
- **Email**: [zSimvile@gmail.com](mailto:zSimvile@gmail.com)
- **Call**: [+27 71 733 0979](tel:+27717330979)
