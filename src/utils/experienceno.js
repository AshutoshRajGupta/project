// utils/calculateExperience.js
export const calculateTotalExperience = (experiences) => {
  let totalDays = 0;

  experiences.forEach((exp) => {
    // Parse the start and end dates
    const startDate = new Date(exp.startDate + " 01"); // Adding day to avoid ambiguity
    const endDate =
      exp.endDate.toUpperCase() === "PRESENT"
        ? new Date() // Use current date if the end date is "PRESENT"
        : new Date(exp.endDate + " 01");

    // Calculate the difference in milliseconds and convert to days
    const diffInTime = endDate.getTime() - startDate.getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24)); // Convert milliseconds to days

    totalDays += diffInDays;
  });

  // Convert total days to months and days
  const totalMonths = Math.floor(totalDays / 30); // Approximate 1 month as 30 days
  const remainingDays = totalDays % 30;

  return { totalMonths, remainingDays };
};
