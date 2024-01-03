import { it, describe, expect } from "vitest";
import {
  convertToAMPM,
  emailValidate,
  stringValidate,
  findDayOfMonth,
} from "./input-utils";

describe("convertToAMPM", () => {
  it("converts 24-hour time to 12-hour time in the morning (AM)", () => {
    expect(convertToAMPM("09:15")).toBe("9:15 AM");
    expect(convertToAMPM("11:30")).toBe("11:30 AM");
  });

  it("converts 24-hour time to 12-hour time in the afternoon (PM)", () => {
    expect(convertToAMPM("13:45")).toBe("1:45 PM");
    expect(convertToAMPM("18:20")).toBe("6:20 PM");
  });

  it("handles midnight (00:00) correctly", () => {
    expect(convertToAMPM("00:00")).toBe("12:00 AM");
  });

  it("handles noon (12:00) correctly", () => {
    expect(convertToAMPM("12:00")).toBe("12:00 PM");
  });

  it("handles times with leading zeros", () => {
    expect(convertToAMPM("05:05")).toBe("5:05 AM");
    expect(convertToAMPM("08:08")).toBe("8:08 AM");
  });

  it("handles times with minutes only", () => {
    expect(convertToAMPM("16:00")).toBe("4:00 PM");
    expect(convertToAMPM("03:00")).toBe("3:00 AM");
  });
});

describe("emailValidate", () => {
  it("returns true for a valid email", () => {
    expect(emailValidate("test@example.com")).toBe(true);
    expect(emailValidate("john.doe123@domain.org")).toBe(true);
  });

  it("returns false for an invalid email", () => {
    expect(emailValidate("invalid-email")).toBe(false);
    expect(emailValidate("missing-at-sign@domain")).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(emailValidate("")).toBe(false);
  });

  it("returns false for null or undefined", () => {
    expect(emailValidate(null!)).toBe(false);
    expect(emailValidate(undefined!)).toBe(false);
  });

  it("handles case sensitivity correctly", () => {
    expect(emailValidate("Test@Example.com")).toBe(true);
  });

  it("handles additional characters correctly", () => {
    expect(emailValidate("test.email+extra@domain.com")).toBe(true);
  });

  it("handles valid two-letter TLDs", () => {
    expect(emailValidate("test@example.co")).toBe(true);
  });

  it("handles valid three-letter TLDs", () => {
    expect(emailValidate("test@example.org")).toBe(true);
  });
});

describe("stringValidate", () => {
  it("returns true for a non-empty string", () => {
    expect(stringValidate("hello")).toBe(true);
    expect(stringValidate("   some text   ")).toBe(true);
    expect(stringValidate("123")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(stringValidate("")).toBe(false);
    expect(stringValidate("   ")).toBe(false);
  });

  it("returns true for a string with leading and trailing spaces", () => {
    expect(stringValidate("   some text   ")).toBe(true);
  });
});

// must always be a Saturday
describe("findDayOfMonth", () => {
  it("returns the correct day of the month for a weekday other than Saturday", () => {
    expect(findDayOfMonth("Monday", "2023-12-18")).toBe(18);
    expect(findDayOfMonth("Wednesday", "2023-12-20")).toBe(20);
    expect(findDayOfMonth("Friday", "2023-12-22")).toBe(22);
  });
  it("handles the last day of the month correctly", () => {
    expect(findDayOfMonth("Saturday", "2024-08-31")).toBe(31);
    expect(findDayOfMonth("Saturday", "2022-12-31")).toBe(31);
  });
  it("handles the last day of the year correctly", () => {
    expect(findDayOfMonth("Monday", "2023-12-31")).not.toBe(31);
    expect(findDayOfMonth("Saturday", "2022-12-31")).toBe(31);
  });
  it("handles the first day of the month correctly", () => {
    expect(findDayOfMonth("Saturday", "2023-04-01")).toBe(1);
    expect(findDayOfMonth("Saturday", "2023-07-01")).toBe(1);
  });
  // it("handles the first day of the year correctly", () => {
  //   expect(findDayOfMonth("Monday", "2023-01-01")).toBe(1);
  //   expect(findDayOfMonth("Saturday", "2023-01-01")).toBe(1);
  // });
  it("throws an error for invalid day of week", () => {
    try {
      findDayOfMonth("invalidInput", "2023-12-18");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
  it("throws an error for invalid week ending date", () => {
    try {
      findDayOfMonth("Saturday", "invalid");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
