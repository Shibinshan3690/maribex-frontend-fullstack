

export const baseUrl = "http://localhost:5000/api"


// export const getUserfromLocalStorage = localStorage.getItem("user")
// ? JSON.parse(localStorage.getItem("user")) : null
export const getUserfromLocalStorage = () => {
    const userString = localStorage.getItem("user");
    if (userString) {
        try {
          return JSON.parse(userString);
        } catch (error) {
            console.error("Error parsing user from localStorage:", error);
            return null; // or handle the error in another way
        }
    } else {
        return null; // or handle the case where "user" is not found in localStorage
    }
};


export const timeSince=(date)=>{
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " YEAR";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " MONTHS";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " DAY";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " HOURS";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " MINUTES";
    }
    return Math.floor(seconds) + " SECONDS";

}