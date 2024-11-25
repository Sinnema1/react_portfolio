const API = {
    getFeaturedProjects: async () => {
      // Mocked response
      return {
        data: [
          { id: 1, title: 'Weather App', description: 'A weather forecasting app.' },
          { id: 2, title: 'Task Manager', description: 'Manage tasks efficiently.' },
          { id: 3, title: 'Budget Tracker', description: 'Track your expenses and savings.' },
        ],
      };
    },
  };
  
  export default API;