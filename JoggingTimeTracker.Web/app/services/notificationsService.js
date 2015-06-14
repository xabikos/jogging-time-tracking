let NotificationsService = {
  
  success: (title, message) => {
    toastr.success(message, title);
  }

};

export default NotificationsService;