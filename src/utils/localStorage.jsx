export const employees = [
  {
    "id": 1,
    "first_name": "Amit",
    "last_name": "Sharma",
    "email": "employee1@example.com",
    "password": "123",
    "role": "employee",
    "gender": "Male",
    "job_title": "Sales Executive",
    "department": "Sales",
    "designation": "Executive",
    "date_of_joining": "2023-05-10",
    "employee_status": "Full-Time",
    "tasks": [
      {
        "id": 101,
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false,
        "declined":false,
        "task_title": "Prepare Report",
        "task_description": "Prepare the monthly sales report.",
        "complete_by": "2024-10-15",
        "category": "Sales"
      },
      {
        "id": 102,
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "declined":false,
        "task_title": "Team Meeting",
        "task_description": "Attend the weekly team meeting.",
        "complete_by": "2024-10-01",
        "category": "Meetings"
      }
    ],
    "task_counts": {
      "active": 1,
      "new_task": 0,
      "completed": 1,
      "failed": 0,
      "accepted_task": 2,
      "declined":0,
    }
  },
  {
    "id": 2,
    "first_name": "Priya",
    "last_name": "Rao",
    "email": "employee2@example.com",
    "password": "123",
    "role": "employee",
    "gender": "Female",
    "job_title": "Project Manager",
    "department": "Client Relations",
    "designation": "Manager",
    "date_of_joining": "2022-11-15",
    "employee_status": "Full-Time",
    "tasks": [
      {
        "id": 201,
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false,
        "declined":false,
        "task_title": "Client Presentation",
        "task_description": "Present the new project proposal to the client.",
        "complete_by": "2024-10-10",
        "category": "Client Relations"
      },
      {
        "id": 202,
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": false,
        "declined":false,
        "task_title": "Market Research",
        "task_description": "Research market trends for Q4.",
        "complete_by": "2024-10-20",
        "category": "Research"
      },
      {
        "id": 203,
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false,
        "declined":false,
        "task_title": "Product Review",
        "task_description": "Review the new product specs with the engineering team.",
        "complete_by": "2024-10-22",
        "category": "Product"
      }
    ],
    "task_counts": {
      "active": 2,
      "new_task": 1,
      "completed": 0,
      "failed": 0,
      "accepted_task": 3,
      "declined":0,
    }
  },
  {
    "id": 3,
    "first_name": "Rajesh",
    "last_name": "Singh",
    "email": "employee3@example.com",
    "password": "123",
    "role": "employee",
    "gender": "Male",
    "job_title": "Finance Analyst",
    "department": "Finance",
    "designation": "Analyst",
    "date_of_joining": "2021-07-20",
    "employee_status": "Full-Time",
    "tasks": [
      {
        "id": 301,
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "declined":false,
        "task_title": "Budget Analysis",
        "task_description": "Complete the budget analysis for the last quarter.",
        "complete_by": "2024-09-30",
        "category": "Finance"
      },
      {
        "id": 302,
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": false,
        "declined":false,
        "task_title": "Vendor Meeting",
        "task_description": "Meet with new vendors for project supplies.",
        "complete_by": "2024-10-18",
        "category": "Vendor Relations"
      }
    ],
    "task_counts": {
      "active": 0,
      "new_task": 1,
      "completed": 1,
      "failed": 0,
      "accepted_task": 2,
      "declined":0,
    }
  },
  {
    "id": 4,
    "first_name": "Meena",
    "last_name": "Kumar",
    "email": "employee4@example.com",
    "password": "123",
    "role": "employee",
    "gender": "Female",
    "job_title": "Quality Specialist",
    "department": "Quality Assurance",
    "designation": "Specialist",
    "date_of_joining": "2023-02-05",
    "employee_status": "Full-Time",
    "tasks": [
      {
        "id": 401,
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false,
        "declined":false,
        "task_title": "Quality Check",
        "task_description": "Inspect the latest batch of products for quality assurance.",
        "complete_by": "2024-10-12",
        "category": "Quality Assurance"
      },
      {
        "id": 402,
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true,
        "declined":false,
        "task_title": "Shipment Audit",
        "task_description": "Audit the last shipment records for discrepancies.",
        "complete_by": "2024-10-08",
        "category": "Audit"
      },
      {
        "id": 403,
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false,
        "declined":false,
        "task_title": "Training Session",
        "task_description": "Conduct a training session for new hires.",
        "complete_by": "2024-10-16",
        "category": "Training"
      }
    ],
    "task_counts": {
      "active": 2,
      "new_task": 0,
      "completed": 0,
      "failed": 1,
      "accepted_task": 3,
      "declined":0,
    }
  },
  {
    "id": 5,
    "first_name": "Sunil",
    "last_name": "Verma",
    "email": "employee5@example.com",
    "password": "123",
    "role": "employee",
    "gender": "Male",
    "job_title": "Marketing Specialist",
    "department": "Marketing",
    "designation": "Specialist",
    "date_of_joining": "2022-08-12",
    "employee_status": "Part-Time",
    "tasks": [
      {
        "id": 501,
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false,
        "declined":false,
        "task_title": "Inventory Update",
        "task_description": "Update inventory records for Q3.",
        "complete_by": "2024-09-25",
        "category": "Inventory"
      },
      {
        "id": 502,
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false,
        "declined":false,
        "task_title": "Social Media Strategy",
        "task_description": "Plan the social media content calendar for Q4.",
        "complete_by": "2024-10-25",
        "category": "Marketing"
      }
    ],
    "task_counts": {
      "active": 1,
      "new_task": 0,
      "completed": 1,
      "failed": 0,
      "accepted_task": 2,
      "declined":0,
    }
  }
]


  

  const admins = [
    {
    "id": 1,
    "first_name": "Admin",
    "email": "admin@example.com",
    "password": "123",
    "role": "admin",
    "tasksAssigned":[],
  }
];

  // export const setLocalStorage = () => {
  //   localStorage.setItem("employees",JSON.stringify(employees));
  //   localStorage.setItem("admins",JSON.stringify(admins));
  // }
 
  export const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("employees"));
  }

  export const setUserLocalStorage = (user) => {
    const employee = employees.find(emp => emp.email == user.email && emp.password == user.password);
    
    if(employee === undefined){
        const admin = admins.find(data => data.email == user.email && data.password == user.password);

       if(admin === undefined){
        return null;
       }else{
        localStorage.setItem("admin",JSON.stringify(admin)); 
        return admin;
    }
    }else{        
        localStorage.setItem("employee",JSON.stringify(employee)); 
        return employee;
    }
  }