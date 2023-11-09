const initialState = {
  notifications: [
    {
      id: 1,
      type: "info",
      title: "Important Note",
      message: "We suggest to update your account information",
    },
    {
      id: 2,
      type: "success",
      title: "Success",
      message: "Successfully completed",
    },
    {
      id: 3,
      type: "warning",
      title: "Warning",
      message: "Your password will be expired soon",
    },
    {
      id: 4,
      type: "danger",
      title: "Error",
      message: "Error from the server",
    },
  ],
};

export default initialState;
