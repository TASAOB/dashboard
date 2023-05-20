/**
 * This function creates a front-end dashboard using TypeScript.
 * 
 * @param data - The data to be displayed on the dashboard
 * @returns A dashboard object with the specified data
 */
 export function createDashboard(data: any): Dashboard {
    // Define the dashboard object
    const dashboard: Dashboard = {
      title: "My Dashboard",
      widgets: []
    };
  
    // Add widgets to the dashboard based on the data
    data.forEach((item: any) => {
      const widget: Widget = {
        title: item.title,
        content: item.content
      };
      dashboard.widgets.push(widget);
    });
  
    // Return the dashboard object
    return dashboard;
  }
  
  // Define the types for the dashboard and widget objects
  export interface Dashboard {
    title: string;
    widgets: Widget[];
  }
  
  export interface Widget {
    title: string;
    content: string;
  }
