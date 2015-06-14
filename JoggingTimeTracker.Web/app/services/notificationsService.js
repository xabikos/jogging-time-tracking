let NotificationsService = {
  
  success: (title, message) => {
    toastr.success(message, title);
  },

  error: (message) => {
    toastr.error(message);
  }

};

export default NotificationsService;