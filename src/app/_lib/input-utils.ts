export const emailValidate = (value: string) => {
  const emailFormat = new RegExp("^[a-z0-9._%+-]+@[a-z]+\\.[a-z]{2,3}$", "i");
  return emailFormat.test(value);
};

export const stringValidate = (value: string) => value.trim() !== "";

export function findDayOfMonth(dayOfWeek: string, weekEndingDate: string) {
  try {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    if (!daysOfWeek.includes(dayOfWeek)) {
      throw new Error("Invalid day of week");
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(weekEndingDate)) {
      throw new Error("Invalid week ending date format");
    }

    const endDate = new Date(weekEndingDate + "T12:00:00");

    let month = endDate.getMonth() - 1;

    if (month < 0) {
      month = 11;
    }

    const dayIndex = daysOfWeek.indexOf(dayOfWeek);

    let dayOfMonth = endDate.getDate() - (endDate.getDay() - dayIndex);

    // if (isNaN(dayOfMonth)) {
    //   throw new Error("Invalid Week ending!");
    // }
    if (dayOfMonth > 0) return dayOfMonth;

    if (
      month === 0 ||
      month === 2 ||
      month === 4 ||
      month === 6 ||
      month === 7 ||
      month === 9 ||
      month === 11
    ) {
      console.log(dayOfMonth);
      return dayOfMonth + 31;
    } else if (month === 1) {
      return dayOfMonth + 28;
    } else {
      return dayOfMonth + 30;
    }
  } catch (error) {
    console.error(error);
  }
}

export function convertToAMPM(time24: string) {
  const [hours, minutes] = time24.split(":");
  let period = "AM";
  let hour = parseInt(hours, 10);

  if (hour >= 12) {
    period = "PM";
    if (hour > 12) {
      hour -= 12;
    }
  } else if (hour < 1) {
    hour = 12;
  }

  return `${hour}:${minutes} ${period}`;
}
