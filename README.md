# Role-Based Access Control (RBAC) System

## Project Overview

This project implements a **Role-Based Access Control (RBAC)** system to manage user access permissions based on assigned roles. The system provides an interface for administrators to create, assign, and monitor user roles and permissions effectively. 

A key feature of this system is that **users can have multiple roles** simultaneously, enabling more flexible and granular access control. The permissions of a user are determined by the combined permissions of all their assigned roles.

The primary goal of this system is to ensure secure and controlled access to features and resources, based on defined roles and permissions.

## Features

### 1. Role Management
- Administrators can create, edit, and delete roles.
- Roles can have specific permissions assigned to them, such as:
  - Create
  - Read
  - Update
  - Delete

### 2. User Management
- Add, edit, and delete user profiles.
- Assign roles to users and manage their status (Active/Inactive).

### 3. Permission Enforcement
- Permissions assigned to roles dictate access to various features and actions within the application.

### 4. Unauthorized Role Tampering Detection
- The system detects unauthorized changes to roles and reverts them to their original state.
- Alerts users if unauthorized changes are attempted.

## Setup Instructions

Follow the steps below to set up and run the project locally:

1. Clone the repository:
   git clone https://github.com/your-repository/rbac-system.git
   cd rbac-system
2. Install project dependencies:
     npm install

3. Start the application:
     npm start


### Key Updates:
1. **Multiple Roles**:
   - Explained how multiple roles work.
   - Included examples to clarify the combination of permissions.

2. **Dynamic Permissions**:
   - Highlighted how permissions are calculated dynamically based on the assigned roles.

3. **Scenarios**:
   - Added example use cases to demonstrate single-role and multi-role setups.