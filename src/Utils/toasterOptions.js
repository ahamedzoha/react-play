const toasterOptions = {
  // Define default options
  className: "default-toast",
  duration: 5000,
  style: {
    background: "#363636",
    padding: "16px",
    // marginTop: "20px",
    // marginBottom: "20px",
    color: "#fff",
  },
  // Default options for specific types
  success: {
    duration: 3000,
    theme: {
      primary: "green",
      secondary: "black",
    },
  },
  error: {
    duration: 3000,
    theme: {
      primary: "red",
      secondary: "black",
    },
  },
  info: {
    duration: 3000,
    theme: {
      primary: "blue",
      secondary: "black",
    },
  },
  warning: {
    duration: 3000,
    theme: {
      primary: "orange",
      secondary: "black",
    },
  },
}

export default toasterOptions
